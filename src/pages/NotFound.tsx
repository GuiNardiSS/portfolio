import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext'

export function NotFound() {
  const { t } = useI18n()

  return (
    <section className="section pt-40">
      <div className="shell text-center">
        <p className="font-mono text-sm text-white/30">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-white">{t('detail.notFound')}</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">{t('detail.notFoundDesc')}</p>
        <Link to="/" className="btn btn-primary mt-8">
          {t('detail.all')}
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  )
}
