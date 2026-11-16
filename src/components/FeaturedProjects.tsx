import { Link } from 'react-router-dom'
import { ArrowUpRight, Images } from 'lucide-react'
import { projects } from '../data/projects'
import { useI18n } from '../i18n/LanguageContext'
import { ProjectVisual } from './ProjectVisual'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function FeaturedProjects() {
  const { t, pick } = useI18n()

  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHeading eyebrow={t('work.eyebrow')} title={t('work.title')} subtitle={t('work.subtitle')} />

        <div className="mt-14 space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1
            return (
              <article
                key={project.slug}
                className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <Reveal className={reversed ? 'lg:order-2' : ''} y={30}>
                  <Link
                    to={`/projeto/${project.slug}`}
                    aria-label={`${t('work.viewCase')}: ${project.name}`}
                    className="block transition-transform duration-500 group-hover:-translate-y-1"
                  >
                    <ProjectVisual project={project} />
                  </Link>
                </Reveal>

                <Reveal className={reversed ? 'lg:order-1' : ''} delay={0.08}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.7rem] text-white/25">0{index + 1}</span>
                    <span className="h-px w-7 bg-white/15" />
                    <span className="font-mono text-[0.63rem] uppercase tracking-[0.14em] text-cyan-200/70">
                      {pick(project.category)}
                    </span>
                    <span className="ml-auto font-mono text-[0.63rem] text-white/30">{project.year}</span>
                  </div>

                  <h3 className="mt-4 font-display text-[1.8rem] font-semibold leading-tight text-white md:text-[2.15rem]">
                    <Link to={`/projeto/${project.slug}`} className="transition-colors hover:text-violet-100">
                      {project.name}
                    </Link>
                  </h3>

                  <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-muted">{pick(project.tagline)}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag.pt} className="tag">
                        {pick(tag)}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.07] pt-5">
                    {project.metrics.map((metric) => (
                      <div key={metric.value}>
                        <span className="font-display text-lg font-semibold text-white">{metric.value}</span>
                        <span className="ml-2 text-[0.7rem] text-muted">{pick(metric.label)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link to={`/projeto/${project.slug}`} className="link-arrow">
                      {t('work.viewCase')}
                      <ArrowUpRight size={15} />
                    </Link>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-white/30">
                      <Images size={12} />
                      {project.gallery.length}{' '}
                      {project.gallery.length === 1 ? t('gallery.countOne') : t('gallery.count')}
                    </span>
                  </div>
                </Reveal>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
