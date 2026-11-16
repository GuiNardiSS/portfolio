import { useEffect } from 'react'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { FeaturedProjects } from '../components/FeaturedProjects'
import { Hero } from '../components/Hero'
import { OtherProjects } from '../components/OtherProjects'
import { StackSection } from '../components/StackSection'
import { TechMarquee } from '../components/TechMarquee'
import { useI18n } from '../i18n/LanguageContext'

export function Home() {
  const { lang } = useI18n()

  useEffect(() => {
    document.title =
      lang === 'pt'
        ? 'Guilherme Nardi — Engenheiro de Software'
        : 'Guilherme Nardi — Software Engineer'
  }, [lang])

  return (
    <>
      <Hero />
      <TechMarquee />
      <FeaturedProjects />
      <About />
      <OtherProjects />
      <StackSection />
      <Contact />
    </>
  )
}
