import { ArrowUpRight, MessageCircle, ServerCog, Smartphone } from 'lucide-react'
import { otherProjects } from '../data/projects'
import { useI18n } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const icons = {
  whatsapp: MessageCircle,
  api: ServerCog,
  flutter: Smartphone,
} as const

export function OtherProjects() {
  const { t, pick } = useI18n()

  return (
    <section className="section pt-0">
      <div className="shell">
        <SectionHeading
          eyebrow={t('work.otherEyebrow')}
          title={t('work.otherTitle')}
          subtitle={t('work.otherSubtitle')}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {otherProjects.map((project, index) => {
            const Icon = icons[project.icon]
            return (
              <Reveal key={project.name} delay={index * 0.07}>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="card card-hover group flex h-full flex-col p-5"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-300 transition-colors group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.07]">
                      <Icon size={17} />
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                    />
                  </div>

                  <h3 className="mt-5 font-display text-[1.02rem] font-semibold text-white">{project.name}</h3>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-violet-100/70">{pick(project.tagline)}</p>
                  <p className="mt-3 text-[0.78rem] leading-relaxed text-muted">{pick(project.description)}</p>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {project.stack.map((item) => (
                      <span key={item} className="tag !text-[0.6rem]">
                        {item}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
