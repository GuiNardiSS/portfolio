import { stackGroups } from '../data/projects'
import { useI18n } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function StackSection() {
  const { t } = useI18n()

  return (
    <section id="stack" className="section">
      <div className="shell">
        <SectionHeading eyebrow={t('stack.eyebrow')} title={t('stack.title')} subtitle={t('stack.subtitle')} />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, index) => (
            <Reveal key={group.key} delay={index * 0.05}>
              <div className="card card-hover h-full p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[0.92rem] font-medium text-white">{t(`stack.${group.key}`)}</h3>
                  <span className="font-mono text-[0.6rem] text-white/20">0{index + 1}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
