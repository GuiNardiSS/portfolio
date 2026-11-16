import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import type { GalleryImage, Project } from '../data/projects'
import { useI18n } from '../i18n/LanguageContext'

function BrowserBar({ url }: { url?: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2">
      <span className="size-1.5 rounded-full bg-[#ff5f57]/70" />
      <span className="size-1.5 rounded-full bg-[#febc2e]/70" />
      <span className="size-1.5 rounded-full bg-[#28c840]/70" />
      <span className="ml-2 min-w-0 flex-1 truncate font-mono text-[0.5rem] text-white/30">{url}</span>
    </div>
  )
}

function GalleryCard({
  image,
  index,
  onOpen,
}: {
  image: GalleryImage
  index: number
  onOpen: () => void
}) {
  const { t, pick } = useI18n()
  const width = image.frame === 'phone'
    ? 'clamp(190px, 58vw, 232px)'
    : image.wide
      ? 'clamp(320px, 92vw, 760px)'
      : 'clamp(282px, 82vw, 590px)'

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${t('gallery.zoom')}: ${pick(image.caption)}`}
      className="group w-full shrink-0 snap-start text-left"
      style={{ width }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0b0b12] shadow-[0_24px_60px_-30px_rgba(0,0,0,.9)] transition-colors group-hover:border-violet-400/30">
        {image.frame === 'browser' && <BrowserBar url={image.url} />}
        <div className={`${image.wide ? 'aspect-[2.2] bg-[#0d1117]' : image.frame === 'phone' ? 'aspect-[9/19]' : 'aspect-[16/10]'}`}>
          <img
            src={image.src}
            alt={pick(image.alt)}
            loading="lazy"
            className={`h-full w-full object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] ${
              image.fit === 'contain' ? 'object-contain' : 'object-cover'
            }`}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute right-3 top-3 grid size-7 place-items-center rounded-full border border-white/15 bg-black/50 text-white/70 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <Expand size={12} />
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="tag !text-[0.6rem]">{image.tag}</span>
        <span className="font-mono text-[0.56rem] text-white/20">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{pick(image.caption)}</p>
    </button>
  )
}

export function ProjectGallery({ project }: { project: Project }) {
  const { t, pick } = useI18n()
  const images = project.gallery
  const scroller = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const updateArrows = useCallback(() => {
    const element = scroller.current
    if (!element) return
    setCanPrev(element.scrollLeft > 8)
    setCanNext(element.scrollLeft + element.clientWidth < element.scrollWidth - 8)
  }, [])

  useEffect(() => {
    updateArrows()
    window.addEventListener('resize', updateArrows)
    return () => window.removeEventListener('resize', updateArrows)
  }, [updateArrows])

  useEffect(() => {
    if (active === null) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowLeft') {
        setActive((current) => (current === null ? null : (current - 1 + images.length) % images.length))
      }
      if (event.key === 'ArrowRight') {
        setActive((current) => (current === null ? null : (current + 1) % images.length))
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, images.length])

  if (!images.length) return null

  const scroll = (direction: number) => {
    const element = scroller.current
    if (!element) return
    element.scrollBy({ left: direction * Math.min(640, element.clientWidth * 0.78), behavior: 'smooth' })
  }

  const current = active === null ? null : images[active]

  return (
    <section className="mb-16">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="max-w-xl">
          <span className="eyebrow">{t('gallery.eyebrow')}</span>
          <h2 className="mt-4 font-display text-[1.6rem] font-semibold text-white md:text-[2rem]">
            {t('gallery.title')}
          </h2>
          <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">{t('gallery.subtitle')}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="tag">
            {images.length} {images.length === 1 ? t('gallery.countOne') : t('gallery.count')}
          </span>
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            aria-label={t('gallery.prev')}
            className="grid size-9 place-items-center rounded-full border border-white/10 text-soft transition-colors hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={!canNext}
            aria-label={t('gallery.next')}
            className="grid size-9 place-items-center rounded-full border border-white/10 text-soft transition-colors hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        onScroll={updateArrows}
        className="mt-8 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image, index) => (
          <GalleryCard key={image.src} image={image} index={index} onOpen={() => setActive(index)} />
        ))}
      </div>

      <AnimatePresence>
        {current && active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-xl md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={t('gallery.title')}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-full w-full max-w-6xl flex-col items-center"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label={t('gallery.close')}
                className="absolute -right-1 -top-2 z-10 grid size-9 place-items-center rounded-full border border-white/15 bg-black/60 text-white/80 backdrop-blur transition-colors hover:border-white/30 hover:text-white md:-right-3 md:-top-3"
              >
                <X size={17} />
              </button>

              <div className="relative flex max-h-[74vh] w-full items-center justify-center">
                <button
                  type="button"
                  onClick={() => setActive((active - 1 + images.length) % images.length)}
                  aria-label={t('gallery.prev')}
                  className="absolute left-0 z-10 grid size-10 place-items-center rounded-full border border-white/15 bg-black/55 text-white/80 backdrop-blur transition-colors hover:border-white/30 hover:text-white md:-left-4"
                >
                  <ChevronLeft size={19} />
                </button>

                <img
                  src={current.src}
                  alt={pick(current.alt)}
                  className="max-h-[74vh] w-auto max-w-[88vw] rounded-xl border border-white/10 object-contain shadow-[0_30px_100px_-20px_rgba(0,0,0,.9)] md:max-w-[80vw]"
                />

                <button
                  type="button"
                  onClick={() => setActive((active + 1) % images.length)}
                  aria-label={t('gallery.next')}
                  className="absolute right-0 z-10 grid size-10 place-items-center rounded-full border border-white/15 bg-black/55 text-white/80 backdrop-blur transition-colors hover:border-white/30 hover:text-white md:-right-4"
                >
                  <ChevronRight size={19} />
                </button>
              </div>

              <div className="mt-4 flex w-full max-w-3xl items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-cyan-200/70">
                    {current.tag}
                  </span>
                  <p className="mt-1.5 text-[0.86rem] leading-relaxed text-soft">{pick(current.caption)}</p>
                </div>
                <span className="shrink-0 font-mono text-[0.64rem] text-white/35">
                  {active + 1} {t('gallery.of')} {images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
