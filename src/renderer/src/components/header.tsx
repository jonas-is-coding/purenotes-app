import { ComponentProps } from "react"
import { CreateNote, DeleteNote } from "./buttons"

export const Header = ({...props} : ComponentProps<"header">) => {
    return (
        <header {...props}>
            <CreateNote />
            <DeleteNote />
        </header>
    )
}