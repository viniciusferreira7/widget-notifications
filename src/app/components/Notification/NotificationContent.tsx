interface NotificationContentProps {
  text: string
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <p className="text-zinc-600 dark:text-zinc-100 text-sm leading-relaxed">
        {text}
      </p>
      <div className="text-xxs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
        <span>Convite</span>
        <span>Há 3 minutos</span>
      </div>
    </div>
  )
}
