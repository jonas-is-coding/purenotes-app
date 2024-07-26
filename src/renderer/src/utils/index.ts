import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

const dateFormatter = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Europe/Berlin"
})

export const formatDate = (ms: number) => dateFormatter.format(ms)