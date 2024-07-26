import { ComponentProps } from 'react'
import { Preview } from '@/components'
import { cn } from '@renderer/utils'
import { useList } from '@renderer/hooks/use-list'
import { isEmpty } from 'lodash'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const PreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useList({ onSelect })

  if (!notes) return null

  if (isEmpty(notes)) {
    return (
      <ul className={cn('h-[80vh] flex items-center justify-center pb-2', className)} {...props}>
        <span>Keine Notizen</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {notes.map((note, index) => (
        <Preview
          key={note.title + note.lastEditTime}
          isActive={selectedNoteIndex === index}
          onClick={handleNoteSelect(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
