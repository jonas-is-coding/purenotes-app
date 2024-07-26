import { appDirectoryName, fileEncoding } from "@shared/constants"
import { NoteInfo } from "@shared/models"
import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from "@shared/types"
import { dialog } from "electron"
import { ensureDir, readFile, readdir, remove, stat, writeFile } from "fs-extra"
import { homedir } from "os"
import path from "path"
import {isEmpty} from "lodash"
import welcomeNoteFile from "../../../resources/welcomeNote.md?asset"

export const getRootDir = () => {
    return `${homedir()}/${appDirectoryName}`
}

export const getNotes: GetNotes = async () => {
    const rootDir = getRootDir()

    await ensureDir(rootDir)
  
    const notesFileNames = await readdir(rootDir, {
      encoding: fileEncoding,
      withFileTypes: false
    })

    const notes = notesFileNames.filter((fileName) => fileName.endsWith(".md"))

    if (isEmpty(notes)) {
        const content = await readFile(welcomeNoteFile, { encoding: fileEncoding})

        await writeFile(`${rootDir}/Willkommen.md`, content, { encoding: fileEncoding})

        notes.push("Willkommen.md")
    }

    return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const getNoteInfoFromFilename = async (filename): Promise<NoteInfo> => {
    const fileStats = await stat(`${getRootDir()}/${filename}`)

    return {
        title: filename.replace(/\.md$/, ""),
        lastEditTime: fileStats.mtimeMs
    }
}

export const readNote: ReadNote = async (filename) => {
    const rootDir = getRootDir()

    return readFile(`${rootDir}/${filename}.md`, { encoding: fileEncoding })
}

export const writeNote: WriteNote = async (filename, content) => {
    const rootDir = getRootDir()

    console.info(`Writing note ${filename}`)
    return writeFile(`${rootDir}/${filename}.md`, content, { encoding: fileEncoding })
}

export const createNote: CreateNote = async () => {
    const rootDir = getRootDir()

    await ensureDir(rootDir)

    const { filePath, canceled } = await dialog.showSaveDialog({
        title: "Neue Notiz",
        defaultPath: `${rootDir}/Neue Notiz.md`,
        buttonLabel: "Erstellen",
        properties: ["showOverwriteConfirmation"],
        showsTagField: false,
        filters: [{name: "Markdown", extensions: ["md"]}] 
    })

    if (canceled || !filePath) return false;

    const {name: filename, dir: parentDir} = path.parse(filePath)

    if (parentDir !== rootDir) {
        await dialog.showMessageBox({
            type: "error",
            title: "Fehler beim Erstellen der Notiz",
            message: `Alle Notizen müssen unter ${rootDir} gespeichert werden.`
        })

        return false;
    }

    await writeFile(filePath, "")

    return filename;
}

export const deleteNote: DeleteNote = async (filename) => {
    const rootDir = getRootDir()

    const { response } = await dialog.showMessageBox({
        type: "warning",
        title: "Notiz löschen",
        message: `Möchtest du ${filename} wirklich löschen?`,
        buttons: ["Löschen", "Abbrechen"],
        defaultId: 1,
        cancelId: 1
    })

    if (response === 1) {
        return false;
    }

    await remove(`${rootDir}/${filename}.md`)
    return true;
}