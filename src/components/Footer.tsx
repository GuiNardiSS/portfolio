import { Link } from 'react-router-dom'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext'
import { site } from '../site'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.07] bg-black/20">
      <div className="shell py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg border border-white/12 bg-gradient-to-br from-violet/25 to-cyan/15 font-display text-[0.65rem] font-bold text-white">
                GN
              </span>
              <span className="font-display text-[0.85rem] font-semibold text-white">{site.name}</span>
            </Link>
            <p className="mt-3 max-w-sm text-[0.75rem] leading-relaxed text-muted">
              {t('footer.built')} · {year}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link to="/#work" className="text-[0.78rem] text-muted transition-colors hover:text-white">
              {t('nav.work')}
            </Link>
            <Link to="/#about" className="text-[0.78rem] text-muted transition-colors hover:text-white">
              {t('nav.about')}
            </Link>
            <Link to="/#contact" className="text-[0.78rem] text-muted transition-colors hover:text-white">
              {t('nav.contact')}
            </Link>
            <span className="hidden h-4 w-px bg-white/10 sm:block" />
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-white">
              <Github size={16} />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-white">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="text-muted transition-colors hover:text-white">
              <Mail size={16} />
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label={t('a11y.top')}
              className="grid size-8 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/25 hover:text-white"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <p className="mt-8 border-t border-white/[0.06] pt-6 text-[0.68rem] text-white/30">
          © {year} {site.name}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
