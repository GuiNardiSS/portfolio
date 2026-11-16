import { Compass, Layers, FlaskConical, Workflow, Github, MapPin } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext'
import { site } from '../site'
import { Reveal } from './Reveal'

const values = [
  { icon: Compass, title: 'values.product', desc: 'values.product.desc' },
  { icon: Layers, title: 'values.architecture', desc: 'values.architecture.desc' },
  { icon: FlaskConical, title: 'values.quality', desc: 'values.quality.desc' },
  { icon: Workflow, title: 'values.automation', desc: 'values.automation.desc' },
] as const

export function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="section">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow">{t('about.eyebrow')}</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="section-title mt-5">{t('about.title')}</h2>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="card mt-9 flex items-center gap-4 p-4">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-400/60 to-cyan-300/50 blur-[6px]" />
                  <img
                    src={site.avatar}
                    alt="Foto de perfil de Guilherme Nardi"
                    className="relative size-16 rounded-full border border-white/20 object-cover"
                    loading="lazy"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border-2 border-[#0b0b12] bg-emerald-400" />
                </div>
                <div>
                  <p className="font-display text-[0.98rem] font-semibold text-white">{site.name}</p>
                  <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">
                    Software Engineer
                  </p>
                  <p className="mt-1.5 flex items-center gap-1 text-[0.72rem] text-muted">
                    <MapPin size={11} /> {site.location}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="link-arrow mt-6 inline-flex pl-1"
              >
                <Github size={14} />
                {t('about.github')}
              </a>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-[1.05rem] leading-[1.8] text-soft">{t('about.p1')}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-5 text-[0.98rem] leading-[1.8] text-muted">{t('about.p2')}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-[0.98rem] leading-[1.8] text-muted">{t('about.p3')}</p>
            </Reveal>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={0.08 + index * 0.05}>
                  <div className="card card-hover h-full p-4">
                    <value.icon size={17} className="text-cyan-300" />
                    <p className="mt-3 font-display text-[0.88rem] font-medium text-white">{t(value.title)}</p>
                    <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted">{t(value.desc)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
