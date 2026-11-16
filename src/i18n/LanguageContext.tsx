import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'pt' | 'en'
export type Localized = { pt: string; en: string }

const dict = {
  'nav.work': { pt: 'Projetos', en: 'Work' },
  'nav.about': { pt: 'Sobre', en: 'About' },
  'nav.stack': { pt: 'Stack', en: 'Stack' },
  'nav.contact': { pt: 'Contato', en: 'Contact' },
  'nav.cta': { pt: 'Vamos conversar', en: "Let's talk" },
  'nav.menu': { pt: 'Menu', en: 'Menu' },

  'hero.available': { pt: 'Disponível para novos projetos', en: 'Available for new projects' },
  'hero.greeting': { pt: 'Olá, eu sou', en: "Hi, I'm" },
  'hero.role': { pt: 'Engenheiro de Software', en: 'Software Engineer' },
  'hero.focus': { pt: 'IA, LLMs & Automação', en: 'AI, LLMs & Automation' },
  'hero.description': {
    pt: 'Construo aplicações, automações e sistemas que precisam funcionar de verdade. Do modelo de domínio ao deploy, com decisões de arquitetura explícitas e qualidade mensurável.',
    en: 'I build applications, automations and systems that need to work for real. From domain modeling to deploy, with explicit architecture decisions and measurable quality.',
  },
  'hero.ctaWork': { pt: 'Ver projetos', en: 'View work' },
  'hero.ctaGithub': { pt: 'GitHub', en: 'GitHub' },
  'hero.scroll': { pt: 'role para explorar', en: 'scroll to explore' },
  'hero.ci': { pt: 'CI · 80 testes', en: 'CI · 80 tests' },
  'hero.runs': { pt: '5×/dia · produção', en: '5×/day · production' },
  'hero.statProjects': { pt: 'projetos em destaque', en: 'featured projects' },
  'hero.statTests': { pt: 'testes automatizados', en: 'automated tests' },
  'hero.statLayers': { pt: 'camadas: web, mobile e backend', en: 'layers: web, mobile and backend' },

  'about.eyebrow': { pt: 'Sobre', en: 'About' },
  'about.title': { pt: 'Sistemas que resolvem problemas reais.', en: 'Systems that solve real problems.' },
  'about.p1': {
    pt: 'Sou Guilherme Nardi, engenheiro de software com foco em aplicações, automações e sistemas que operam em produção. Meu trabalho atravessa a interface, a API e a infraestrutura: modelo o domínio, desenho a arquitetura, escrevo os testes e acompanho o comportamento real.',
    en: "I'm Guilherme Nardi, a software engineer focused on applications, automations and systems that run in production. My work spans the interface, the API and the infrastructure: I model the domain, design the architecture, write the tests and follow real-world behavior.",
  },
  'about.p2': {
    pt: 'Gosto de entender o problema antes de escolher a tecnologia. Por isso meus projetos combinam escolhas pragmáticas — Flutter para uma experiência mobile offline, TypeScript para automações observáveis, React para portais com muita navegação — com decisões explícitas sobre custo, manutenção e confiabilidade.',
    en: 'I like to understand the problem before choosing the technology. That is why my projects combine pragmatic choices — Flutter for an offline mobile experience, TypeScript for observable automations, React for navigation-heavy portals — with explicit decisions about cost, maintenance and reliability.',
  },
  'about.p3': {
    pt: 'Este portfólio não é uma vitrine de tutoriais. Cada estudo de caso abaixo explica o problema, o funcionamento, a arquitetura e os trade-offs por trás das escolhas.',
    en: 'This portfolio is not a showcase of tutorials. Each case study below explains the problem, how it works, the architecture and the trade-offs behind each choice.',
  },
  'about.github': { pt: 'Ver meu GitHub', en: 'See my GitHub' },

  'values.product': { pt: 'Pensamento de produto', en: 'Product thinking' },
  'values.product.desc': { pt: 'A solução começa no problema do usuário, não na tecnologia da moda.', en: 'The solution starts with the user problem, not the trending technology.' },
  'values.architecture': { pt: 'Arquitetura pragmática', en: 'Pragmatic architecture' },
  'values.architecture.desc': { pt: 'Camadas e padrões só entram quando reduzem complexidade real.', en: 'Layers and patterns only when they reduce real complexity.' },
  'values.quality': { pt: 'Qualidade mensurável', en: 'Measurable quality' },
  'values.quality.desc': { pt: 'Testes, CI e validação de borda fazem parte da entrega.', en: 'Tests, CI and edge-case validation are part of the delivery.' },
  'values.automation': { pt: 'Automação observável', en: 'Observable automation' },
  'values.automation.desc': { pt: 'Se falhou em silêncio, não está funcionando. Saúde precisa ser visível.', en: 'If it failed silently, it is not working. Health must be visible.' },

  'work.eyebrow': { pt: 'Trabalho selecionado', en: 'Selected work' },
  'work.title': { pt: 'Projetos em destaque', en: 'Featured projects' },
  'work.subtitle': {
    pt: 'Quatro sistemas, quatro problemas diferentes. Cada card abre um estudo de caso completo com arquitetura, decisões técnicas e aprendizados.',
    en: 'Four systems, four different problems. Each card opens a complete case study with architecture, technical decisions and learnings.',
  },
  'work.viewCase': { pt: 'Ver estudo de caso', en: 'View case study' },
  'work.featured': { pt: 'Destaque', en: 'Featured' },
  'work.otherEyebrow': { pt: 'Também construí', en: 'Also built' },
  'work.otherTitle': { pt: 'Outros projetos', en: 'Other projects' },
  'work.otherSubtitle': {
    pt: 'Trabalhos menores ou de escopo específico que mostram repertório em automação, APIs e mobile.',
    en: 'Smaller or focused-scope work that shows range across automation, APIs and mobile.',
  },
  'work.repo': { pt: 'Ver repositório', en: 'View repository' },
  'work.caseStudy': { pt: 'estudo de caso', en: 'case study' },

  'stack.eyebrow': { pt: 'Ferramentas', en: 'Toolbox' },
  'stack.title': { pt: 'Stack por camada', en: 'Stack by layer' },
  'stack.subtitle': {
    pt: 'Tecnologias que já usei para entregar, não apenas estudar. A escolha de cada uma aparece nos estudos de caso.',
    en: 'Technologies I have used to ship, not just study. The reasoning behind each choice appears in the case studies.',
  },
  'stack.frontend': { pt: 'Frontend', en: 'Frontend' },
  'stack.mobile': { pt: 'Mobile', en: 'Mobile' },
  'stack.backend': { pt: 'Backend & APIs', en: 'Backend & APIs' },
  'stack.data': { pt: 'Dados & Infra', en: 'Data & Infra' },
  'stack.automation': { pt: 'Automação & IA', en: 'Automation & AI' },
  'stack.quality': { pt: 'Qualidade', en: 'Quality' },

  'contact.eyebrow': { pt: 'Contato', en: 'Contact' },
  'contact.title': { pt: 'Vamos construir algo que funcione?', en: 'Shall we build something that works?' },
  'contact.subtitle': {
    pt: 'Estou aberto a oportunidades, colaborações e conversas sobre arquitetura, produto e automação. Respondo pelo e-mail ou LinkedIn.',
    en: 'I am open to opportunities, collaborations and conversations about architecture, product and automation. Reach me by email or LinkedIn.',
  },
  'contact.email': { pt: 'Enviar e-mail', en: 'Send an email' },
  'contact.linkedin': { pt: 'LinkedIn', en: 'LinkedIn' },
  'contact.github': { pt: 'GitHub', en: 'GitHub' },
  'contact.availability': { pt: 'Aberto a oportunidades remotas e presenciais', en: 'Open to remote and on-site opportunities' },

  'footer.rights': { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
  'footer.built': { pt: 'Projetado e desenvolvido por Guilherme Nardi', en: 'Designed and built by Guilherme Nardi' },

  'detail.back': { pt: 'Voltar ao portfólio', en: 'Back to portfolio' },
  'detail.problem': { pt: 'O problema', en: 'The problem' },
  'detail.solution': { pt: 'A solução', en: 'The solution' },
  'detail.how': { pt: 'Como funciona', en: 'How it works' },
  'detail.architecture': { pt: 'Arquitetura', en: 'Architecture' },
  'detail.decisions': { pt: 'Por que essas tecnologias', en: 'Why these technologies' },
  'detail.outcomes': { pt: 'Resultados', en: 'Outcomes' },
  'detail.learnings': { pt: 'Aprendizados', en: 'Learnings' },
  'detail.stack': { pt: 'Stack', en: 'Stack' },
  'detail.role': { pt: 'Papel', en: 'Role' },
  'detail.year': { pt: 'Ano', en: 'Year' },
  'detail.status': { pt: 'Status', en: 'Status' },
  'detail.context': { pt: 'Contexto', en: 'Context' },
  'detail.repo': { pt: 'Abrir repositório', en: 'Open repository' },
  'detail.next': { pt: 'Próximo projeto', en: 'Next project' },
  'detail.all': { pt: 'Ver todos os projetos', en: 'View all projects' },
  'detail.notFound': { pt: 'Projeto não encontrado', en: 'Project not found' },
  'detail.notFoundDesc': { pt: 'O estudo de caso que você procura não existe ou foi movido.', en: 'The case study you are looking for does not exist or has moved.' },

  'lang.label': { pt: 'Idioma', en: 'Language' },
  'a11y.top': { pt: 'Voltar ao topo', en: 'Back to top' },
} as const

export type UiKey = keyof typeof dict

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: (key: UiKey) => string
  pick: (value: Localized) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'pt'
  const stored = window.localStorage.getItem('gn-lang')
  if (stored === 'pt' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    window.localStorage.setItem('gn-lang', lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const t = useCallback((key: UiKey) => dict[key][lang], [lang])
  const pick = useCallback((value: Localized) => value[lang], [lang])
  const toggle = useCallback(() => setLang((current) => (current === 'pt' ? 'en' : 'pt')), [])

  const value = useMemo(() => ({ lang, setLang, toggle, t, pick }), [lang, toggle, t, pick])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useI18n must be used inside LanguageProvider')
  return context
}
