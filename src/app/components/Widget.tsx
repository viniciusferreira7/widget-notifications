import { Check, Rocket, X } from 'lucide-react'
import { Notification } from './Notification'

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <header className="bg-zinc-300 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notificações</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARCAR TODAS COM LIDAS
        </button>
      </header>
      <section>
        <div className="bg-zinc-400 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-700 dark:text-zinc-400 font-medium">
          Recentes
        </div>
        <div className="divide-y-2 divide-zinc-400 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.Action icon={X} />
              <Notification.Action
                icon={Check}
                className="w-8 h-8 grid place-items-center rounded bg-violet-500 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-700"
              />
            </Notification.Actions>
          </Notification.Root>
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.Action icon={X} />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </section>
      <section>
        <div className="bg-zinc-400 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-700 dark:text-zinc-400 font-medium">
          Antigas
        </div>
        <div className="divide-y-2 divide-zinc-400 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.Action icon={X} />
              <Notification.Action
                icon={Check}
                className="w-8 h-8 grid place-items-center rounded bg-violet-500 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-700"
              />
            </Notification.Actions>
          </Notification.Root>
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.Action
                icon={Check}
                className="w-8 h-8 grid place-items-center rounded bg-violet-500 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-700"
              />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </section>
    </div>
  )
}
