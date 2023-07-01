import { Check, X, Rocket } from 'lucide-react'

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
          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <Rocket className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-zinc-600 dark:text-zinc-100 text-sm leading-relaxed">
                Você recebeu um convite para fazer parte da empresa Rocketseat.
              </p>
              <div className="text-xxs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Há 3 minutos</span>
              </div>
            </div>
          </div>
          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <Rocket className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-zinc-600 dark:text-zinc-100 text-sm leading-relaxed">
                Você recebeu um convite para fazer parte da empresa Rocketseat.
              </p>
              <div className="text-xxs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Há 3 minutos</span>
              </div>
            </div>
            <div className="flex gap-2 self-center">
              <button className="w-8 h-8 grid place-items-center rounded bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800  dark:hover:bg-zinc-700">
                <X className="w-3 h-3 text-zinc-50" />
              </button>
              <button className="w-8 h-8 grid place-items-center rounded bg-violet-500 hover:bg-violet-700">
                <Check className="w-3 h-3 text-zinc-50" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-zinc-400 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-700 dark:text-zinc-400 font-medium">
          Antigas
        </div>
        <div className="divide-y-2 divide-zinc-400 dark:divide-zinc-950">
          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <Rocket className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-zinc-600 dark:text-zinc-100 text-sm leading-relaxed">
                Você recebeu um convite para fazer parte da empresa Rocketseat.
              </p>
              <div className="text-xxs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Há 3 minutos</span>
              </div>
            </div>
          </div>
          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <Rocket className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-zinc-600 dark:text-zinc-100 text-sm leading-relaxed">
                Você recebeu um convite para fazer parte da empresa Rocketseat.
              </p>
              <div className="text-xxs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Há 3 minutos</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
