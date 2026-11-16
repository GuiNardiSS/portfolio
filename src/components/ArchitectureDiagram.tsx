import type { Project } from '../data/projects'
import { useI18n } from '../i18n/LanguageContext'

export function ArchitectureDiagram({ project }: { project: Project }) {
  const { pick } = useI18n()

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#08080e] p-5 md:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(139,92,246,.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.032)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.032)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,#000_15%,transparent_80%)]" />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/35">architecture.map</span>
          <span className="rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-2.5 py-1 font-mono text-[0.55rem] text-violet-200/80">
            {project.stack.length} technologies
          </span>
        </div>

        <ol className="space-y-0">
          {project.arch.map((part, index) => (
            <li key={index}>
              <div className="arch-node flex gap-4 !p-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-md border border-white/10 bg-black/40 font-mono text-[0.6rem] text-cyan-200/80">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-display text-[0.86rem] font-medium text-white">{pick(part.layer)}</p>
                  <p className="mt-1 text-[0.78rem] leading-relaxed text-muted">{pick(part.detail)}</p>
                </div>
              </div>
              {index < project.arch.length - 1 && (
                <div className="ml-[1.85rem] h-5 w-px bg-gradient-to-b from-violet-400/60 to-cyan-300/50" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
