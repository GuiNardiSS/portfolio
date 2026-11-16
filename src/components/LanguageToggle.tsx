import { useI18n } from '../i18n/LanguageContext'

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useI18n()

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] p-0.5 font-mono text-[0.66rem] ${className}`}
      role="group"
      aria-label={t('lang.label')}
    >
      {(['pt', 'en'] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors ${
            lang === option ? 'bg-white/[0.12] text-white' : 'text-muted hover:text-white'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
