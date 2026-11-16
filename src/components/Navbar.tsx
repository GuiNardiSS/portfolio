import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Github, Menu, X } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext'
import { site } from '../site'
import { LanguageToggle } from './LanguageToggle'

const links = [
  { href: '#work', key: 'nav.work' },
  { href: '#about', key: 'nav.about' },
  { href: '#stack', key: 'nav.stack' },
  { href: '#contact', key: 'nav.contact' },
] as const

export function Navbar() {
  const { t } = useI18n()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const prefix = location.pathname === '/' ? '' : '/'

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-white/[0.07] bg-void/75 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="shell flex h-[4.5rem] items-center justify-between gap-4" aria-label="Main">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="relative grid size-9 place-items-center rounded-xl border border-white/12 bg-gradient-to-br from-violet/25 to-cyan/15 font-display text-[0.72rem] font-bold tracking-tight text-white shadow-[0_0_24px_-8px_rgba(139,92,246,.8)]">
              GN
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet/20 to-cyan/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-[0.86rem] font-semibold text-white">Guilherme Nardi</span>
              <span className="block font-mono text-[0.58rem] uppercase tracking-[0.16em] text-muted">Software Engineer</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                to={`${prefix}${link.href}`}
                className="rounded-lg px-3 py-2 text-[0.82rem] text-soft transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-8 place-items-center rounded-full border border-white/10 text-soft transition-colors hover:border-white/25 hover:text-white"
            >
              <Github size={14} />
            </a>
            <Link to={`${prefix}#contact`} className="hidden lg:block">
              <span className="btn btn-primary h-9 px-4 text-[0.78rem]">
                {t('nav.cta')}
                <ArrowUpRight size={14} />
              </span>
            </Link>
            <button
              type="button"
              className="grid size-9 place-items-center rounded-lg border border-white/10 text-soft md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Close menu' : t('nav.menu')}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-void/95 pt-24 backdrop-blur-xl md:hidden"
          >
            <div className="shell flex flex-col gap-2">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.05 }}
                >
                  <Link
                    to={`${prefix}${link.href}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/[0.06] py-4 font-display text-2xl text-white"
                  >
                    {t(link.key)}
                    <ArrowUpRight size={20} className="text-muted" />
                  </Link>
                </motion.div>
              ))}
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center gap-2 text-sm text-muted"
              >
                <Github size={16} /> github.com/{site.githubHandle}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
