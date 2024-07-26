import { MDXEditorMethods } from '@mdxeditor/editor'
import { saveNoteAtom, selectedNoteAtom } from '@renderer/data'
import { NoteContent } from '@shared/models'
import { useAtomValue, useSetAtom } from 'jotai'
import { useRef } from 'react'
import { throttle } from 'lodash'

export const useEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSave = throttle(
    async (content: NoteContent) => {
      if (!selectedNote) return
  
      await saveNote(content)
    }, 3000, {
      leading: false,
      trailing: true
    })

    const handleBlur = async () => {
      if (!selectedNote) return;

      handleAutoSave.cancel()

      const content = editorRef.current?.getMarkdown()

      if (content != null) {
        await saveNote(content)
      }
    }

  return {
    selectedNote,
    editorRef,
    handleAutoSave,
    handleBlur
  }
}
