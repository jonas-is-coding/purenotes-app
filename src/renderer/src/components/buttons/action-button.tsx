import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export type ActionButtonProps = ComponentProps<"button">

export const ActionButton = ({ className, children, ...props }: ActionButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100',
        className
      )}
    >
      {children}
    </button>
  )
}
