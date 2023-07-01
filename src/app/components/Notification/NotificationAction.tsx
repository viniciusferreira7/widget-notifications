import { ButtonHTMLAttributes, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface NotificationActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export function NotificationAction({
  icon: Icon,
  ...buttonProps
}: NotificationActionProps) {
  return (
    <button
      {...buttonProps}
      className={twMerge(
        'w-8 h-8 grid place-items-center rounded bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800  dark:hover:bg-zinc-700',
        buttonProps.className,
      )}
    >
      <Icon className="w-3 h-3 text-zinc-50" />
    </button>
  )
}
