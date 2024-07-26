import { cn } from '@renderer/utils'
import { ComponentProps, forwardRef } from 'react'

export const RootLayout = ({ className, children, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={cn('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const SideBar = ({ className, children, ...props }: ComponentProps<'aside'>) => (
    <aside className={cn('w-64 mt-10 h-[100vh + 10px] overflow-auto space-y-2' , className)} {...props}>
      {children}
    </aside>
  )

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex-1 overflow-auto', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
