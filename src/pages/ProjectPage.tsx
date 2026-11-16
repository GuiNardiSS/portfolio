import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Github } from 'lucide-react'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram'
import { ProjectVisual } from '../components/ProjectVisual'
import { Reveal } from '../components/Reveal'
import { projects } from '../data/projects'
import { useI18n } from '../i18n/LanguageContext'

function CaseSection({
  number,
  label,
  children,
  className = '',
}: {
  number: string
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`border-t border-white/[0.07] pt-10 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[0.62rem] text-white/25">{number}</span>
        <span className="h-px w-6 bg-white/15" />
        <h2 className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-cyan-200/70">{label}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const { t, pick, lang } = useI18n()
  const index = projects.findIndex((item) => item.slug === slug)
  const project = projects[index]

  useEffect(() => {
    if (!project) return
    document.title = `${project.name} — Guilherme Nardi`
    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', pick(project.summary))
    return () => {
      document.title = 'Guilherme Nardi — Software Engineer'
      description?.setAttribute(
        'content',
        'Portfólio de Guilherme Nardi, engenheiro de software especializado em aplicações, automações, IA e sistemas escaláveis.',
      )
    }
  }, [project, lang, pick])

  if (!project) {
    return (
      <section className="section pt-40">
        <div className="shell text-center">
          <p className="font-mono text-sm text-white/30">404</p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-white">{t('detail.notFound')}</h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">{t('detail.notFoundDesc')}</p>
          <Link to="/#work" className="btn btn-primary mt-8">
            {t('detail.all')}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    )
  }

  const next = projects[(index + 1) % projects.length]

  return (
    <div>
      <section className="relative pt-28 md:pt-36">
        <div className="shell">
          <Reveal>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-white"
            >
              <ArrowLeft size={13} />
              {t('detail.back')}
            </Link>
          </Reveal>

          <div className="mt-9 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <Reveal delay={0.04}>
                <div className="flex flex-wrap items-center gap-3 font-mono text-[0.64rem] uppercase tracking-[0.14em]">
                  <span className="text-cyan-200/80">{pick(project.category)}</span>
                  <span className="text-white/20">/</span>
                  <span className="text-white/35">{project.year}</span>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-2.5 py-1 text-[0.56rem] text-emerald-300/90">
                    {pick(project.status)}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white">
                  {project.name}
                </h1>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-muted md:text-[1.05rem]">
                  {pick(project.tagline)}
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag.pt} className="tag">
                      {pick(tag)}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <Github size={16} />
                  {t('detail.repo')}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.24} className="mt-12">
            <ProjectVisual project={project} large />
          </Reveal>
        </div>
      </section>

      <section className="section pt-16 md:pt-20">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[1fr_300px] lg:gap-16">
            <div className="space-y-12">
              <CaseSection number="01" label={t('detail.problem')}>
                <p className="text-[1rem] leading-[1.85] text-soft">{pick(project.problem)}</p>
              </CaseSection>

              <CaseSection number="02" label={t('detail.solution')}>
                <p className="text-[1rem] leading-[1.85] text-soft">{pick(project.solution)}</p>
              </CaseSection>

              <CaseSection number="03" label={t('detail.how')}>
                <ol className="space-y-4">
                  {project.how.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex gap-4">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border border-violet-400/25 bg-violet-400/[0.08] font-mono text-[0.56rem] text-violet-200">
                        {String(stepIndex + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[0.92rem] leading-relaxed text-muted">{pick(step)}</p>
                    </li>
                  ))}
                </ol>
              </CaseSection>

              <CaseSection number="04" label={t('detail.architecture')}>
                <p className="mb-5 text-[0.92rem] leading-relaxed text-muted">{pick(project.summary)}</p>
                <ArchitectureDiagram project={project} />
              </CaseSection>

              <CaseSection number="05" label={t('detail.decisions')}>
                <div className="space-y-3">
                  {project.decisions.map((decision, decisionIndex) => (
                    <div key={decision.tech} className="card p-5">
                      <div className="flex items-center gap-3">
                        <span className="grid size-6 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/[0.07] font-mono text-[0.55rem] text-cyan-200">
                          {String(decisionIndex + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-mono text-[0.76rem] font-medium text-white">{decision.tech}</h3>
                      </div>
                      <p className="mt-3 text-[0.86rem] leading-relaxed text-muted">{pick(decision.reason)}</p>
                    </div>
                  ))}
                </div>
              </CaseSection>

              <CaseSection number="06" label={t('detail.outcomes')}>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {project.outcomes.map((outcome) => (
                    <div key={pick(outcome)} className="flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-300/80" />
                      <p className="text-[0.8rem] leading-relaxed text-soft">{pick(outcome)}</p>
                    </div>
                  ))}
                </div>
              </CaseSection>

              <CaseSection number="07" label={t('detail.learnings')}>
                <blockquote className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-violet-500/[0.09] to-cyan-400/[0.05] p-6 md:p-7">
                  <span className="absolute -top-3 left-4 font-display text-7xl text-white/10">“</span>
                  <p className="relative text-[1rem] leading-[1.8] text-soft">{pick(project.learnings)}</p>
                </blockquote>
              </CaseSection>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="card p-5">
                <h2 className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/35">{t('detail.stack')}</h2>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="my-5 h-px bg-white/[0.07]" />

                <dl className="space-y-3 text-[0.76rem]">
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-white/35">{t('detail.role')}</dt>
                    <dd className="text-right text-soft">{pick(project.role)}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-white/35">{t('detail.year')}</dt>
                    <dd className="text-right text-soft">{project.year}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-white/35">{t('detail.status')}</dt>
                    <dd className="text-right text-soft">{pick(project.status)}</dd>
                  </div>
                </dl>

                <div className="my-5 h-px bg-white/[0.07]" />

                <div className="grid grid-cols-3 gap-2">
                  {project.metrics.map((metric) => (
                    <div key={metric.value}>
                      <p className="font-display text-base font-semibold text-white">{metric.value}</p>
                      <p className="mt-0.5 text-[0.6rem] leading-tight text-muted">{pick(metric.label)}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost mt-5 h-10 w-full text-[0.76rem]"
                >
                  <Github size={14} />
                  {t('work.repo')}
                </a>
              </div>
            </aside>
          </div>

          <Reveal className="mt-20">
            <Link
              to={`/projeto/${next.slug}`}
              className="group flex flex-col gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-violet-400/30 hover:bg-violet-500/[0.04] md:flex-row md:items-center md:justify-between md:p-8"
            >
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/35">{t('detail.next')}</p>
                <p className="mt-2 font-display text-xl font-semibold text-white md:text-2xl">{next.name}</p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-[0.68rem] text-cyan-200/80">
                {pick(next.category)}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
