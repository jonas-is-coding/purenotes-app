import { FilePen } from "lucide-react"
import { ActionButton, ActionButtonProps } from "./action-button"
import { createEmptyNoteAtom } from "@renderer/data"
import { useSetAtom } from "jotai"

export const CreateNote = ({...props}: ActionButtonProps) => {
    const createEmptyNote = useSetAtom(createEmptyNoteAtom)

    const handleCreation = async () => {
        await createEmptyNote()
    }

    return (
        <ActionButton {...props} onClick={handleCreation}>
            <FilePen className="size-4 text-zinc-300" />
        </ActionButton>
    )
}