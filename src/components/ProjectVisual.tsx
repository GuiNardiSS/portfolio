import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Database, FileText, Mail, Radio, Server } from 'lucide-react'
import type { Project } from '../data/projects'
import { useI18n } from '../i18n/LanguageContext'

function PhoneMock({
  src,
  alt,
  width,
  className = '',
}: {
  src: string
  alt: string
  width: number
  className?: string
}) {
  return (
    <div
      className={`relative shrink-0 rounded-[1.9rem] border border-white/15 bg-[#16161f] p-[5px] shadow-[0_30px_70px_-20px_rgba(0,0,0,.9)] ${className}`}
      style={{ width, aspectRatio: '9 / 19' }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.55rem] bg-[#08080d]">
        <div className="absolute left-1/2 top-1.5 z-10 h-1 w-[28%] -translate-x-1/2 rounded-full bg-black/70" />
        <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" />
      </div>
    </div>
  )
}

function BrowserMock({
  src,
  alt,
  url,
  className = '',
}: {
  src: string
  alt: string
  url: string
  className?: string
}) {
  return (
    <div className={`browser ${className}`}>
      <div className="browser-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-url">{url}</span>
      </div>
      <img src={src} alt={alt} className="block w-full" loading="lazy" />
    </div>
  )
}

function AutomationFlow({ large }: { large: boolean }) {
  const { lang } = useI18n()
  const nodes = [
    { icon: Radio, label: 'PNCP', sub: lang === 'pt' ? 'fonte' : 'source' },
    { icon: Server, label: lang === 'pt' ? 'Filtro' : 'Filter', sub: 'UF + keywords' },
    { icon: Database, label: 'Redis', sub: 'dedup' },
    { icon: Mail, label: lang === 'pt' ? 'E-mail' : 'Email', sub: lang === 'pt' ? 'alertas' : 'alerts' },
  ]

  const logs = [
    { time: '08:17', text: 'dispatch → 204', tone: 'text-white/40' },
    { time: '08:18', text: 'pncp · SC · 12 pages', tone: 'text-cyan-200/70' },
    { time: '08:21', text: 'filter · 3 matches', tone: 'text-violet-200/70' },
    { time: '08:23', text: 'email · 3 alerts', tone: 'text-emerald-300/80' },
    { time: '16:17', text: 'summary · sent', tone: 'text-white/45' },
  ]

  return (
    <div className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#08080e] p-5 md:p-7">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
      <div className="relative mb-5 flex items-center justify-between">
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white/35">pipeline.ts</span>
        <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-2 py-0.5 font-mono text-[0.55rem] text-emerald-300">
          <span className="size-1 rounded-full bg-emerald-400" /> healthy
        </span>
      </div>

      <div className={large ? 'relative grid flex-1 items-center gap-6 md:grid-cols-[1.1fr_.9fr]' : 'relative'}>
        <div>
          <div className={`relative grid gap-2 ${large ? 'sm:grid-cols-2' : 'grid-cols-2'}`}>
            {nodes.map((node, index) => (
              <div key={node.label} className="arch-node flex flex-col gap-1.5 !p-3">
                <node.icon size={large ? 16 : 14} className="text-cyan-300" />
                <span className="font-mono text-[0.68rem] text-white">{node.label}</span>
                <span className="font-mono text-[0.52rem] text-white/35">{node.sub}</span>
                {index < nodes.length - 1 && !large && (
                  <ArrowRight
                    size={11}
                    className="absolute -right-[7px] top-1/2 hidden -translate-y-1/2 text-white/20 sm:block"
                  />
                )}
              </div>
            ))}
          </div>

          {!large && (
            <div className="mt-2 flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
              <span className="font-mono text-[0.52rem] text-white/35">cron-job.org → Actions</span>
              <span className="font-mono text-[0.52rem] text-cyan-300/80">{lang === 'pt' ? '5×/dia' : '5×/day'}</span>
            </div>
          )}
        </div>

        {large ? (
          <div className="flex h-full flex-col justify-center gap-3">
            <div className="rounded-lg border border-white/[0.07] bg-black/40 p-3">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[#ff5f57]" />
                <span className="size-1.5 rounded-full bg-[#febc2e]" />
                <span className="size-1.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[0.5rem] text-white/25">run.log</span>
              </div>
              <div className="space-y-1.5">
                {logs.map((log) => (
                  <div key={log.time} className="flex gap-3 font-mono text-[0.56rem]">
                    <span className="text-white/25">{log.time}</span>
                    <span className={log.tone}>{log.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: '5×', label: lang === 'pt' ? 'runs/dia' : 'runs/day' },
                { value: '~8m', label: lang === 'pt' ? 'por run' : 'per run' },
                { value: '3', label: lang === 'pt' ? 'estados' : 'states' },
              ].map((metric) => (
                <div key={metric.label} className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-2">
                  <p className="font-display text-[0.9rem] font-semibold text-white">{metric.value}</p>
                  <p className="font-mono text-[0.48rem] text-white/35">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative mt-5 overflow-hidden rounded-lg border border-white/[0.06] bg-black/40 p-3">
            <div className="flex items-center gap-2 font-mono text-[0.55rem] text-white/35">
              <span className="text-violet-300">POST</span> /dispatches
              <span className="ml-auto text-emerald-300">204</span>
            </div>
            <motion.div
              className="mt-2 h-0.5 rounded-full bg-gradient-to-r from-violet-400/70 via-cyan-300/70 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{ originX: 0 }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export function ProjectVisual({
  project,
  large = false,
  className = '',
}: {
  project: Project
  large?: boolean
  className?: string
}) {
  const { t, lang } = useI18n()
  const height = large ? 'min-h-[420px] md:min-h-[560px]' : 'min-h-[330px] md:min-h-[400px]'

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/[0.09] bg-[#09090f] ${height} ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,.13),transparent_60%)]" />

      {project.visual === 'maisvida' && (
        <div className="relative flex items-center justify-center py-8">
          <div className="absolute size-[260px] rounded-full bg-amber-200/10 blur-3xl md:size-[340px]" />
          <PhoneMock
            src="/projects/maisvida/cards.webp"
            alt="Tela de cartas do app Mais Vida"
            width={large ? 190 : 150}
            className="translate-x-8 rotate-6 opacity-70 sm:translate-x-12"
          />
          <PhoneMock
            src="/projects/maisvida/home.webp"
            alt="Tela inicial do app Mais Vida em Nossas Vidas"
            width={large ? 210 : 164}
            className="z-10 -translate-x-6 -rotate-3"
          />
          <div className="absolute bottom-5 right-5 z-20 rounded-full border border-amber-200/25 bg-[#0b0b12]/90 px-3 py-1.5 font-mono text-[0.58rem] text-amber-100/80 backdrop-blur">
            Flutter · offline
          </div>
        </div>
      )}

      {project.visual === 'automation' && (
        <div className="absolute inset-0 p-3 md:p-5">
          <AutomationFlow large={large} />
        </div>
      )}

      {project.visual === 'prefeitura' && (
        <div className="relative w-[92%] py-6">
          <div className="absolute -inset-6 rounded-3xl bg-sky-400/10 blur-3xl" />
          <BrowserMock
            src="/projects/prefeitura-home.webp"
            alt="Página inicial do portal da Prefeitura de São José"
            url="saojose.sc.gov.br/servicos"
            className="relative"
          />
          <div className="absolute -bottom-3 left-4 z-20 flex items-center gap-2 rounded-full border border-white/12 bg-[#0b0b12]/95 px-3 py-1.5 backdrop-blur">
            <span className="size-1.5 rounded-full bg-sky-300" />
            <span className="font-mono text-[0.56rem] text-soft">React · Vite</span>
          </div>
        </div>
      )}

      {project.visual === 'mei' && (
        <div className="relative w-[90%] py-7">
          <div className="absolute -inset-6 rounded-3xl bg-emerald-400/[0.07] blur-3xl" />
          <BrowserMock
            src="/projects/mei-home.webp"
            alt="Tela de serviços do Espaço do Empreendedor"
            url="espaco-do-empreendedor/servicos"
            className="relative"
          />
          <div className="absolute -bottom-5 right-2 z-20 w-[46%] overflow-hidden rounded-lg border border-white/15 shadow-2xl">
            <div className="flex items-center gap-1 border-b border-white/10 bg-[#12121b] px-2 py-1">
              <FileText size={9} className="text-emerald-300" />
              <span className="font-mono text-[0.48rem] text-white/45">
                {lang === 'en' ? 'request.pdf' : 'requerimento.pdf'}
              </span>
            </div>
            <img src="/projects/mei-form.webp" alt="Formulário de abertura de MEI" className="block w-full" loading="lazy" />
          </div>
        </div>
      )}

      {project.visual !== 'automation' && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#09090f] to-transparent" />
      )}

      <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 backdrop-blur">
        <CheckCircle2 size={10} className="text-emerald-300/80" />
        <span className="font-mono text-[0.52rem] uppercase tracking-[0.12em] text-white/45">{t('work.caseStudy')}</span>
      </div>
    </div>
  )
}
