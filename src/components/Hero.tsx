import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Sparkles } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext'
import { site } from '../site'

const code = [
  { n: 1, content: <><span className="text-fuchsia-300">const</span> <span className="text-cyan-200">engineer</span> <span className="text-slate-400">=</span> <span className="text-slate-300">{'{'}</span></> },
  { n: 2, content: <><span className="pl-4 text-sky-300">name</span><span className="text-slate-400">:</span> <span className="text-emerald-300">'Guilherme Nardi'</span><span className="text-slate-400">,</span></> },
  { n: 3, content: <><span className="pl-4 text-sky-300">focus</span><span className="text-slate-400">:</span> <span className="text-slate-300">[</span><span className="text-emerald-300">'AI'</span><span className="text-slate-400">,</span> <span className="text-emerald-300">'automation'</span><span className="text-slate-300">]</span><span className="text-slate-400">,</span></> },
  { n: 4, content: <><span className="pl-4 text-sky-300">stack</span><span className="text-slate-400">:</span> <span className="text-slate-300">[</span><span className="text-emerald-300">'TS'</span><span className="text-slate-400">,</span> <span className="text-emerald-300">'Node'</span><span className="text-slate-300">]</span><span className="text-slate-400">,</span></> },
  { n: 5, content: <><span className="pl-4 text-sky-300">shipping</span><span className="text-slate-400">:</span> <span className="text-orange-300">true</span><span className="text-slate-400">,</span></> },
  { n: 6, content: <span className="text-slate-300">{'}'}</span> },
]

function PhoneStack() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,.22),transparent_65%)] blur-2xl" />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-1/2 size-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.09]"
      >
        <span className="absolute left-[18%] top-[6%] size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
        <span className="absolute bottom-[12%] right-[9%] size-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_#8b5cf6]" />
      </motion.div>

      <div className="phone absolute hidden translate-x-16 rotate-[10deg] opacity-55 sm:block" aria-hidden="true">
        <div className="phone-screen">
          <img src="/projects/maisvida/cards.webp" alt="" loading="lazy" />
        </div>
      </div>

      <div className="phone phone-float relative z-10 -translate-x-8">
        <div className="phone-notch" />
        <div className="phone-screen">
          <img src="/projects/maisvida/home.webp" alt="Tela inicial do aplicativo Mais Vida em Nossas Vidas" />
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="shell relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-1.5"
            >
              <span className="dot-live" />
              <span className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-soft">{t('hero.available')}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.24em] text-muted"
            >
              {t('hero.greeting')}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-[clamp(3.4rem,9vw,6.6rem)] font-semibold leading-[0.9] tracking-[-0.045em]"
            >
              <span className="block text-white">Guilherme</span>
              <span className="text-gradient block">Nardi</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.95rem] md:text-lg"
            >
              <span className="font-medium text-soft">{t('hero.role')}</span>
              <span className="hidden text-white/25 sm:inline">·</span>
              <span className="text-gradient-accent font-medium">{t('hero.focus')}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-muted md:text-[1.02rem]"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link to="/#work" className="btn btn-primary">
                {t('hero.ctaWork')}
                <ArrowUpRight size={16} />
              </Link>
              <a href={site.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <Github size={16} />
                {t('hero.ctaGithub')}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="group ml-1 inline-flex items-center gap-1.5 text-[0.84rem] text-muted transition-colors hover:text-white"
              >
                <Sparkles size={13} className="text-cyan-300" />
                {site.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/[0.08] pt-6"
            >
              {[
                { value: '04', label: t('hero.statProjects') },
                { value: '80', label: t('hero.statTests') },
                { value: '03', label: t('hero.statLayers') },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold text-white md:text-[1.7rem]">{stat.value}</p>
                  <p className="mt-1 text-[0.68rem] leading-snug text-muted md:text-[0.72rem]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto hidden h-[540px] w-full max-w-[520px] items-center justify-center sm:flex"
          >
            <PhoneStack />

            <div className="absolute -left-2 bottom-6 z-20 w-[290px] rounded-xl border border-white/12 bg-[#0a0a12]/90 p-4 shadow-2xl backdrop-blur-md md:-left-10">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#ff5f57]" />
                <span className="size-2 rounded-full bg-[#febc2e]" />
                <span className="size-2 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[0.55rem] text-white/30">engineer.ts</span>
              </div>
              <div className="space-y-0.5">
                {code.map((line) => (
                  <div key={line.n} className="code-line text-[0.68rem]">
                    <span className="code-num">{line.n}</span>
                    <span>{line.content}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-2 top-10 z-20 flex items-center gap-2 rounded-full border border-white/12 bg-[#0b0b14]/90 px-3 py-2 shadow-xl backdrop-blur"
            >
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="font-mono text-[0.6rem] text-soft">{t('hero.ci')}</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -right-4 bottom-24 z-20 rounded-full border border-white/12 bg-[#0b0b14]/90 px-3 py-2 shadow-xl backdrop-blur"
            >
              <span className="font-mono text-[0.6rem] text-soft">{t('hero.runs')}</span>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 flex items-center gap-3 text-[0.66rem] uppercase tracking-[0.2em] text-white/30">
          <ArrowDown size={13} className="animate-bounce" />
          {t('hero.scroll')}
        </div>
      </div>
    </section>
  )
}
