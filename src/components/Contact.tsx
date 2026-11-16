import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext'
import { site } from '../site'
import { Reveal } from './Reveal'

export function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="section pb-20 md:pb-28">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.1] bg-[#0a0a11] px-6 py-14 md:px-14 md:py-20">
            <div className="pointer-events-none absolute -left-20 -top-24 size-[380px] rounded-full bg-violet-500/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-28 right-0 size-[360px] rounded-full bg-cyan-400/15 blur-[100px]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]" />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="eyebrow justify-center">{t('contact.eyebrow')}</span>
              <h2 className="section-title mt-6 !text-[clamp(2.2rem,6vw,4rem)]">{t('contact.title')}</h2>
              <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted">{t('contact.subtitle')}</p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${site.email}`} className="btn btn-primary">
                  <Mail size={16} />
                  {t('contact.email')}
                </a>
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  <Linkedin size={16} />
                  {t('contact.linkedin')}
                  <ArrowUpRight size={13} />
                </a>
                <a href={site.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  <Github size={16} />
                  {t('contact.github')}
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[0.65rem] text-white/40">
                <span className="inline-flex items-center gap-2">
                  <span className="dot-live" />
                  {t('contact.availability')}
                </span>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
