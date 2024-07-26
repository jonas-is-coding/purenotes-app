import { Trash2 } from "lucide-react"
import { ActionButton, ActionButtonProps } from "./action-button"
import { useSetAtom } from "jotai"
import { deleteNoteAtom } from "@renderer/data"

export const DeleteNote = ({...props}: ActionButtonProps) => {
    const deleteNote = useSetAtom(deleteNoteAtom)

    const handleDelete = async () => {
        await deleteNote()
    }

    return (
        <ActionButton onClick={handleDelete} {...props}>
            <Trash2 className="size-4 text-zinc-300" />
        </ActionButton>
    )
}