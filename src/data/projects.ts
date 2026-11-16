import type { Localized } from '../i18n/LanguageContext'

export type Decision = { tech: string; reason: Localized }
export type ArchPart = { layer: Localized; detail: Localized }
export type Metric = { value: string; label: Localized }
export type ProjectVisual = 'maisvida' | 'automation' | 'prefeitura' | 'mei'
export type GalleryImage = {
  src: string
  alt: Localized
  caption: Localized
  frame: 'phone' | 'browser'
  url?: string
  tag: string
  wide?: boolean
  fit?: 'cover' | 'contain'
}

export type Project = {
  slug: string
  name: string
  category: Localized
  year: string
  role: Localized
  status: Localized
  tagline: Localized
  summary: Localized
  problem: Localized
  solution: Localized
  how: Localized[]
  arch: ArchPart[]
  decisions: Decision[]
  outcomes: Localized[]
  learnings: Localized
  stack: string[]
  tags: Localized[]
  metrics: Metric[]
  gallery: GalleryImage[]
  repo: string
  visual: ProjectVisual
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'mais-vida',
    name: 'Mais Vida em Nossas Vidas',
    category: { pt: 'Aplicativo mobile + backend', en: 'Mobile app + backend' },
    year: '2026',
    role: { pt: 'Mobile, backend e design system', en: 'Mobile, backend and design system' },
    status: { pt: 'Projeto de portfólio · modo demonstração', en: 'Portfolio project · demo mode' },
    tagline: {
      pt: 'Espiritualidade e bem-estar em uma experiência premium, offline e verificável.',
      en: 'Spirituality and wellbeing in a premium, offline and verifiable experience.',
    },
    summary: {
      pt: 'Um app Flutter com 50 cartas ilustradas por categoria, áudio, vídeo, favoritos e assinatura — acompanhado de um backend Node.js que demonstra pagamento por PIX e cartão com ativação idempotente.',
      en: 'A Flutter app with 50 illustrated cards per category, audio, video, favorites and subscription — backed by a Node.js API that demonstrates PIX and card payments with idempotent activation.',
    },
    problem: {
      pt: 'Entregar uma experiência editorial rica — dezenas de cartas ilustradas, áudios narrados, vídeos e conteúdo exclusivo — em um aplicativo que precisa abrir rápido mesmo sem internet. O desafio não era só de telas: havia regras free/premium, um fluxo de pagamento e um backend que precisava provar que a ativação da assinatura era idempotente.',
      en: 'Deliver a rich editorial experience — dozens of illustrated cards, narrated audio, videos and exclusive content — in an app that must open fast even without internet. The challenge was not only UI: there were free/premium rules, a payment flow and a backend that had to prove subscription activation was idempotent.',
    },
    solution: {
      pt: 'App Flutter offline-first com design system próprio em petróleo e dourado (Lora + Inter), mídia embarcada e uma camada de domínio testável. O app funciona sozinho; o backend Node/Express/MongoDB é opcional e cobre entitlement, PIX e cartão. Um selo explícito de demonstração deixa claro o que é simulado.',
      en: 'An offline-first Flutter app with its own petrol-and-gold design system (Lora + Inter), bundled media and a testable domain layer. The app works on its own; the Node/Express/MongoDB backend is optional and covers entitlement, PIX and card payments. An explicit demo badge makes clear what is simulated.',
    },
    how: [
      {
        pt: 'Onboarding com vídeo, tema claro/escuro e um catálogo local que resolve cartas, áudios e conteúdos por asset — sem depender de rede.',
        en: 'Video onboarding, light/dark theme and a local catalog that resolves cards, audio and content by asset — no network dependency.',
      },
      {
        pt: 'Regra free/premium: uma carta gratuita por dia; a assinatura libera cartas ilimitadas e conteúdos exclusivos.',
        en: 'Free/premium rule: one free card per day; the subscription unlocks unlimited cards and exclusive content.',
      },
      {
        pt: 'PIX gera um BR Code estruturalmente válido com CRC16; cartão usa máscara, validação de Luhn e número de teste. Nenhuma cobrança real acontece.',
        en: 'PIX generates a structurally valid BR Code with CRC16; card uses input masks, Luhn validation and a test number. No real charge happens.',
      },
      {
        pt: 'OTP fixo (123456) demonstra a restauração de acesso em outro aparelho, com armazenamento seguro local.',
        en: 'A fixed OTP (123456) demonstrates access restoration on another device, with local secure storage.',
      },
      {
        pt: '15 testes no app (AssetResolver, BrCodeGenerator e favoritos) e 65 no backend (PIX, ativação idempotente, expiração, cancelamento, webhook e rate limit).',
        en: '15 app tests (AssetResolver, BrCodeGenerator and favorites) and 65 backend tests (PIX, idempotent activation, expiry, cancellation, webhook and rate limit).',
      },
    ],
    arch: [
      {
        layer: { pt: 'Apresentação', en: 'Presentation' },
        detail: {
          pt: 'Widgets, tema e componentes reutilizáveis; skeletons, animações e acessibilidade fazem parte do design system.',
          en: 'Widgets, theme and reusable components; skeletons, animations and accessibility are part of the design system.',
        },
      },
      {
        layer: { pt: 'Estado', en: 'State' },
        detail: {
          pt: 'Riverpod para o tema e estados compartilhados; setState local onde a tela é simples e explícita.',
          en: 'Riverpod for theme and shared state; local setState where the screen is simple and explicit.',
        },
      },
      {
        layer: { pt: 'Domínio', en: 'Domain' },
        detail: {
          pt: 'Repositórios e serviços testáveis: AssetResolver, FavoritesRepository e SubscriptionService.',
          en: 'Testable repositories and services: AssetResolver, FavoritesRepository and SubscriptionService.',
        },
      },
      {
        layer: { pt: 'Dados', en: 'Data' },
        detail: {
          pt: 'Preferências locais, armazenamento seguro e SQLite preparado para histórico e sequência (streak).',
          en: 'Local preferences, secure storage and SQLite prepared for history and streaks.',
        },
      },
      {
        layer: { pt: 'Backend', en: 'Backend' },
        detail: {
          pt: 'API versionada com validação Zod, JWT, entitlement por pagamento e testes com MongoDB em memória.',
          en: 'Versioned API with Zod validation, JWT, payment-based entitlement and tests against in-memory MongoDB.',
        },
      },
    ],
    decisions: [
      {
        tech: 'Flutter + Dart',
        reason: {
          pt: 'Um único código para Android e iOS com UI rica e mídia embarcada. O requisito era funcionar 100% offline; web e desktop não eram os alvos.',
          en: 'One codebase for Android and iOS with rich UI and bundled media. The requirement was to work 100% offline; web and desktop were not the targets.',
        },
      },
      {
        tech: 'Riverpod',
        reason: {
          pt: 'Estado previsível e testável sem espalhar um framework de estado por cada tela. Onde o estado é local, setState é mais explícito e barato.',
          en: 'Predictable, testable state without spreading a state framework across every screen. Where state is local, setState is more explicit and cheaper.',
        },
      },
      {
        tech: 'SQLite + secure storage',
        reason: {
          pt: 'Histórico e streak são dados relacionais e locais; SQLite entrega consultas e migração sem servidor. Credenciais ficam fora do armazenamento comum.',
          en: 'History and streaks are relational, local data; SQLite provides queries and migration without a server. Credentials stay out of plain storage.',
        },
      },
      {
        tech: 'Node.js + Express + MongoDB',
        reason: {
          pt: 'O backend existe para entitlement e pagamentos. Express reduz o time-to-market; documentos flexíveis de assinatura cabem bem no MongoDB; Zod e JWT protegem a borda.',
          en: 'The backend exists for entitlement and payments. Express reduces time-to-market; flexible subscription documents fit MongoDB; Zod and JWT protect the boundary.',
        },
      },
      {
        tech: 'Jest + Supertest + CI',
        reason: {
          pt: 'Fluxo de pagamento não se valida no olho. O CI roda flutter analyze, testes, build do APK e a suíte do backend a cada mudança.',
          en: 'A payment flow cannot be validated by eye. CI runs flutter analyze, tests, the APK build and the backend suite on every change.',
        },
      },
    ],
    outcomes: [
      { pt: '80 testes automatizados entre app e backend', en: '80 automated tests across app and backend' },
      { pt: 'PIX com BR Code válido (CRC16) e cartão com Luhn', en: 'PIX with valid BR Code (CRC16) and Luhn card validation' },
      { pt: 'Experiência completa sem internet, com mídia embarcada', en: 'Full experience without internet, with bundled media' },
      { pt: 'CI verde no GitHub Actions a cada commit', en: 'Green CI on GitHub Actions on every commit' },
    ],
    learnings: {
      pt: 'Design system e domínio testável pagam o investimento cedo. E o modo demonstração explícito é uma decisão de produto: permite mostrar o fluxo inteiro sem enganar quem testa.',
      en: 'A design system and a testable domain pay off early. And explicit demo mode is a product decision: it lets you show the whole flow without misleading the person testing it.',
    },
    stack: ['Flutter', 'Dart', 'Riverpod', 'SQLite', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Zod', 'Jest'],
    tags: [
      { pt: 'Flutter', en: 'Flutter' },
      { pt: 'Offline-first', en: 'Offline-first' },
      { pt: 'Design system', en: 'Design system' },
      { pt: 'Pagamentos', en: 'Payments' },
      { pt: 'Node.js', en: 'Node.js' },
    ],
    metrics: [
      { value: '50', label: { pt: 'cartas por categoria', en: 'cards per category' } },
      { value: '80', label: { pt: 'testes automatizados', en: 'automated tests' } },
      { value: '100%', label: { pt: 'offline', en: 'offline' } },
    ],
    gallery: [
      {
        src: '/projects/maisvida/onboarding.webp',
        alt: {
          pt: 'Tela de onboarding do app Mais Vida com vídeo de boas-vindas',
          en: 'Mais Vida onboarding screen with a welcome video',
        },
        caption: {
          pt: 'Onboarding editorial com vídeo, identidade em petróleo e dourado e suporte a tema claro/escuro.',
          en: 'Editorial onboarding with video, petrol-and-gold identity and light/dark theme support.',
        },
        frame: 'phone',
        tag: 'Mobile',
      },
      {
        src: '/projects/maisvida/home.webp',
        alt: {
          pt: 'Home do app Mais Vida com a carta do dia',
          en: 'Mais Vida home screen with the card of the day',
        },
        caption: {
          pt: 'Home com carta do dia, progresso do plano gratuito e atalhos para cartas e organizações.',
          en: 'Home with the card of the day, free-plan progress and shortcuts to cards and organizations.',
        },
        frame: 'phone',
        tag: 'Mobile',
      },
      {
        src: '/projects/maisvida/cards.webp',
        alt: {
          pt: 'Catálogo de cartas do app Mais Vida',
          en: 'Mais Vida card catalog',
        },
        caption: {
          pt: 'Catálogo com 50 cartas por categoria, favoritos e leitura em tela cheia com áudio.',
          en: 'Catalog with 50 cards per category, favorites and full-screen reading with audio.',
        },
        frame: 'phone',
        tag: 'Mobile',
      },
      {
        src: '/projects/maisvida/leitura.webp',
        alt: {
          pt: 'Leitura de carta em tela cheia com player de áudio',
          en: 'Full-screen card reading with audio player',
        },
        caption: {
          pt: 'Leitura em tela cheia com arte editorial, áudio narrado e progresso de reprodução.',
          en: 'Full-screen reading with editorial art, narrated audio and playback progress.',
        },
        frame: 'phone',
        tag: 'Mobile',
      },
      {
        src: '/projects/maisvida/premium.webp',
        alt: {
          pt: 'Tela de assinatura premium do app Mais Vida',
          en: 'Mais Vida premium subscription screen',
        },
        caption: {
          pt: 'Assinatura premium demonstrativa: cartas ilimitadas, áudios e conteúdos exclusivos.',
          en: 'Demo premium subscription: unlimited cards, audio and exclusive content.',
        },
        frame: 'phone',
        tag: 'Premium',
      },
      {
        src: '/projects/maisvida/pagamento.webp',
        alt: {
          pt: 'Tela de pagamento PIX com QR Code demonstrativo',
          en: 'PIX payment screen with demo QR code',
        },
        caption: {
          pt: 'PIX demonstrativo com BR Code estruturalmente válido, copia e cola e simulação de pagamento — sem cobrança real.',
          en: 'Demo PIX with a structurally valid BR Code, copy-and-paste and payment simulation — no real charge.',
        },
        frame: 'phone',
        tag: 'PIX',
      },
      {
        src: '/projects/maisvida/home-dark.webp',
        alt: {
          pt: 'Home do app Mais Vida no tema escuro',
          en: 'Mais Vida home screen in dark theme',
        },
        caption: {
          pt: 'Tema escuro aplicado ao mesmo design system, com contraste e hierarquia preservados.',
          en: 'Dark theme applied to the same design system, preserving contrast and hierarchy.',
        },
        frame: 'phone',
        tag: 'Mobile',
      },
      {
        src: '/projects/maisvida/maisvida-actions.webp',
        alt: {
          pt: 'Execuções de CI e build de APK no GitHub Actions',
          en: 'CI and APK build runs on GitHub Actions',
        },
        caption: {
          pt: 'Pipeline de CI e build do APK no GitHub Actions, com testes e análise estática a cada commit.',
          en: 'CI and APK build pipeline on GitHub Actions, running tests and static analysis on every commit.',
        },
        frame: 'browser',
        url: 'github.com/GuiNardiSS/Mais-Vida-em-Nossas-Vidas/actions',
        tag: 'CI/CD',
        wide: true,
        fit: 'contain',
      },
    ],
    repo: 'https://github.com/GuiNardiSS/Mais-Vida-em-Nossas-Vidas',
    visual: 'maisvida',
    accent: 'from-amber-200 via-violet-400 to-cyan-300',
  },
  {
    slug: 'automation-yul',
    name: 'Automation-YUL',
    category: { pt: 'Automação & dados públicos', en: 'Automation & public data' },
    year: '2026',
    role: { pt: 'Arquitetura, backend e operação', en: 'Architecture, backend and operations' },
    status: { pt: 'Em produção', en: 'In production' },
    tagline: {
      pt: 'Um monitor de licitações que lê o PNCP de hora em hora e entrega só o que importa.',
      en: 'A tender monitor that reads Brazil’s public procurement portal every two hours and delivers only what matters.',
    },
    summary: {
      pt: 'Script TypeScript single-shot que consulta o Portal Nacional de Contratações Públicas, filtra licitações audiovisuais em três estados, deduplica no Redis e envia alertas por e-mail — com um resumo diário que prova que o sistema está vivo.',
      en: 'A single-shot TypeScript script that queries Brazil’s national procurement portal, filters audiovisual tenders in three states, deduplicates in Redis and emails alerts — with a daily summary that proves the system is alive.',
    },
    problem: {
      pt: 'Acompanhar licitações audiovisuais em SC, PR e RS no PNCP é lento e repetitivo. Consultar manualmente todos os dias não escala, e um alerta perdido significa uma oportunidade perdida. Pior: uma automação que falha em silêncio parece funcionar.',
      en: 'Tracking audiovisual tenders in three Brazilian states on the PNCP is slow and repetitive. Checking manually every day does not scale, and a missed alert means a missed opportunity. Worse: an automation that fails silently looks like it works.',
    },
    solution: {
      pt: 'Um script TypeScript executado cinco vezes por dia útil via GitHub Actions. Cada run consulta o PNCP por estado × modalidade, normaliza e filtra por palavras-chave, deduplica no Redis e envia e-mail. O primeiro run após as 16h envia um resumo diário com execuções, falhas, tenders analisados e alertas — mesmo em dias sem resultado.',
      en: 'A TypeScript script run five times per business day via GitHub Actions. Each run queries the PNCP per state × modality, normalizes and filters by keywords, deduplicates in Redis and sends email. The first run after 4 pm sends a daily summary with runs, failures, tenders analyzed and alerts — even on days with no matches.',
    },
    how: [
      {
        pt: 'cron-job.org dispara o workflow nos horários 08:17, 10:17, 12:17, 14:17 e 16:17 em America/Sao_Paulo.',
        en: 'cron-job.org dispatches the workflow at 08:17, 10:17, 12:17, 14:17 and 16:17 in America/Sao_Paulo.',
      },
      {
        pt: 'Cada execução busca um dia inteiro de publicações, uma UF × modalidade por vez, com pacing de 6 segundos para respeitar o rate limit do PNCP.',
        en: 'Each run fetches a full day of publications, one state × modality at a time, paced 6 seconds apart to respect the PNCP rate limit.',
      },
      {
        pt: 'O mapper normaliza a resposta do PNCP; o filtro remove estados e descrições fora do alvo, comparando texto sem acento e em minúsculas.',
        en: 'The mapper normalizes the PNCP response; the filter removes out-of-scope states and descriptions by matching accent-stripped lowercase text.',
      },
      {
        pt: 'O Redis guarda quais tenders já geraram alerta. Só os novos entram no digest, com limite para evitar inundar a caixa de entrada.',
        en: 'Redis stores which tenders already triggered an alert. Only new ones enter the digest, with a threshold to avoid inbox flooding.',
      },
      {
        pt: 'Falhas de Redis ou PNCP derrubam o run de propósito (exit 1). O resumo diário cobre o caso oposto: um dia sem alertas que parece normal, mas não é.',
        en: 'Redis or PNCP failures intentionally fail the run (exit 1). The daily summary covers the opposite case: a quiet day that looks normal but is not.',
      },
    ],
    arch: [
      {
        layer: { pt: 'Entrada', en: 'Entrypoint' },
        detail: {
          pt: 'index.ts carrega a configuração, monta logger/Redis/SMTP, executa um ciclo e encerra o processo explicitamente.',
          en: 'index.ts loads config, wires logger/Redis/SMTP, runs one cycle and explicitly exits the process.',
        },
      },
      {
        layer: { pt: 'Pipeline', en: 'Pipeline' },
        detail: {
          pt: 'fetch → map → filter → dedup → email. Sem servidor HTTP e sem scheduler em processo.',
          en: 'fetch → map → filter → dedup → email. No HTTP server and no in-process scheduler.',
        },
      },
      {
        layer: { pt: 'Adaptadores', en: 'Adapters' },
        detail: {
          pt: 'Cliente PNCP com undici, store Redis com ioredis e transporte SMTP isolados atrás de contratos.',
          en: 'PNCP client with undici, Redis store with ioredis and SMTP transport isolated behind contracts.',
        },
      },
      {
        layer: { pt: 'Configuração', en: 'Configuration' },
        detail: {
          pt: 'loadConfig falha cedo, nomeando a variável ausente ou inválida; defaults explícitos para o restante.',
          en: 'loadConfig fails fast, naming the missing or invalid variable; explicit defaults for the rest.',
        },
      },
      {
        layer: { pt: 'Testes', en: 'Tests' },
        detail: {
          pt: 'Unitários espelham src/ e o pipeline roda de ponta a ponta com MockAgent no lugar do PNCP e ioredis-mock.',
          en: 'Unit tests mirror src/ and the pipeline runs end to end with MockAgent replacing PNCP and ioredis-mock.',
        },
      },
    ],
    decisions: [
      {
        tech: 'Single-shot + GitHub Actions',
        reason: {
          pt: 'Não existe superfície de usuário nem tarefa concorrente. Um servidor always-on adicionaria custo e operação sem benefício; o runner é descartado após cada execução.',
          en: 'There is no user-facing surface and no concurrent task. An always-on server would add cost and operations with no benefit; the runner is discarded after each run.',
        },
      },
      {
        tech: 'TypeScript',
        reason: {
          pt: 'O contrato do PNCP é irregular e cheio de campos opcionais. Tipos no mapper e no domínio tornam a integração verificável antes de rodar.',
          en: 'The PNCP contract is irregular and full of optional fields. Types in the mapper and domain make the integration verifiable before running.',
        },
      },
      {
        tech: 'Redis / Upstash',
        reason: {
          pt: 'A deduplicação precisa sobreviver a execuções efêmeras. Redis entrega estado compartilhado com TTL sem a cerimônia de um banco relacional.',
          en: 'Deduplication must survive ephemeral runs. Redis provides shared state with TTL without relational-database ceremony.',
        },
      },
      {
        tech: 'cron-job.org',
        reason: {
          pt: 'O agendador nativo do GitHub falhava silenciosamente e, em alguns dias, nenhum run acontecia. Um disparo externo tornou a cadência observável.',
          en: 'GitHub’s native scheduler failed silently and some days had no run at all. An external dispatch made the cadence observable.',
        },
      },
      {
        tech: 'undici + MockAgent',
        reason: {
          pt: 'O fetch global do Node usa uma cópia interna de undici que não pode ser interceptada por mocks. Importar undici explicitamente permite testar a integração sem rede.',
          en: 'Node’s global fetch uses an internal undici copy that mocks cannot intercept. Importing undici explicitly makes the integration testable without network.',
        },
      },
    ],
    outcomes: [
      { pt: 'Cinco execuções por dia útil, cerca de 8 minutos cada', en: 'Five runs per business day, about 8 minutes each' },
      { pt: 'Deduplicação entre runs com Redis/Upstash', en: 'Cross-run deduplication with Redis/Upstash' },
      { pt: 'Resumo diário como sinal de saúde do sistema', en: 'Daily summary as a system health signal' },
      { pt: 'Falha explícita quando PNCP ou Redis estão indisponíveis', en: 'Explicit failure when PNCP or Redis are unavailable' },
    ],
    learnings: {
      pt: 'Um run verde precisa significar que o trabalho aconteceu. Silêncio não é prova de saúde — foi por isso que o resumo diário deixou de ser um extra e virou parte da arquitetura.',
      en: 'A green run must mean the work actually happened. Silence is not proof of health — that is why the daily summary stopped being an extra and became part of the architecture.',
    },
    stack: ['TypeScript', 'Node.js', 'GitHub Actions', 'Redis', 'Upstash', 'ioredis', 'undici', 'Nodemailer', 'Docker'],
    tags: [
      { pt: 'TypeScript', en: 'TypeScript' },
      { pt: 'Automação', en: 'Automation' },
      { pt: 'GitHub Actions', en: 'GitHub Actions' },
      { pt: 'Redis', en: 'Redis' },
      { pt: 'Observabilidade', en: 'Observability' },
    ],
    metrics: [
      { value: '5×', label: { pt: 'execuções por dia útil', en: 'runs per business day' } },
      { value: '3', label: { pt: 'estados monitorados', en: 'states monitored' } },
      { value: '~8min', label: { pt: 'por execução', en: 'per run' } },
    ],
    gallery: [
      {
        src: '/projects/automation-actions.webp',
        alt: {
          pt: 'Histórico de execuções do Automation-YUL no GitHub Actions',
          en: 'Automation-YUL run history on GitHub Actions',
        },
        caption: {
          pt: '273 execuções registradas, incluindo as cinco diárias de 08:17 a 16:17 e o resumo de saúde do fim do dia.',
          en: '273 recorded runs, including the five daily executions from 08:17 to 16:17 and the end-of-day health summary.',
        },
        frame: 'browser',
        url: 'github.com/GuiNardiSS/Automation-YUL/actions',
        tag: 'CI/CD',
        wide: true,
        fit: 'contain',
      },
      {
        src: '/projects/automation-code.webp',
        alt: {
          pt: 'Código do workflow poll.yml no GitHub',
          en: 'poll.yml workflow code on GitHub',
        },
        caption: {
          pt: 'Workflow single-shot com dispatch externo, controle de concorrência e timeout calibrado para o custo do runner.',
          en: 'Single-shot workflow with external dispatch, concurrency control and a timeout sized to the runner cost.',
        },
        frame: 'browser',
        url: 'github.com/GuiNardiSS/Automation-YUL/blob/master/.github/workflows/poll.yml',
        tag: 'YAML',
      },
    ],
    repo: 'https://github.com/GuiNardiSS/Automation-YUL',
    visual: 'automation',
    accent: 'from-cyan-300 via-sky-400 to-violet-400',
  },
  {
    slug: 'site-prefeitura',
    name: 'Portal da Prefeitura',
    category: { pt: 'Frontend institucional', en: 'Institutional frontend' },
    year: '2023 — 2026',
    role: { pt: 'Frontend e arquitetura de componentes', en: 'Frontend and component architecture' },
    status: { pt: 'Projeto em produção', en: 'Project in production' },
    tagline: {
      pt: 'Um portal municipal com mais de 100 serviços, perfis e documentos.',
      en: 'A city portal with over 100 services, audiences and documents.',
    },
    summary: {
      pt: 'SPA em React e Vite que organiza serviços municipais por perfil — cidadão, servidor, empresa e empreendedor — com navegação hierárquica, PDFs no navegador e um layout reutilizável para um domínio extenso.',
      en: 'A React and Vite SPA that organizes city services by audience — citizen, public servant, company and entrepreneur — with hierarchical navigation, in-browser PDFs and a reusable layout for a large domain.',
    },
    problem: {
      pt: 'Um portal de prefeitura precisa organizar serviços para públicos diferentes sem virar um labirinto. São dezenas de páginas, documentos, notícias, tabelas e links externos — e o cidadão não deveria precisar decorar caminhos para pagar um tributo ou abrir um protocolo.',
      en: 'A city portal must organize services for different audiences without becoming a maze. There are dozens of pages, documents, news, tables and external links — and citizens should not have to memorize paths to pay a tax or open a request.',
    },
    solution: {
      pt: 'Uma SPA React + Vite com rotas por perfil, layout reutilizável (navbar, footer, carrossel, grids de serviços) e componentes de navegação que mantêm a experiência consistente. Documentos institucionais são servidos no navegador com react-pdf.',
      en: 'A React + Vite SPA with routes per audience, a reusable layout (navbar, footer, carousel, service grids) and navigation components that keep the experience consistent. Institutional documents are served in the browser with react-pdf.',
    },
    how: [
      {
        pt: 'As rotas separam os universos cidadão, servidor, empresa, empreendedor e transparência, cada um com sua própria hierarquia de serviços.',
        en: 'Routes separate citizen, public servant, company, entrepreneur and transparency areas, each with its own service hierarchy.',
      },
      {
        pt: 'A navbar e os menus expõem serviços sem exigir que o usuário decore caminhos; a busca e os atalhos reduzem a distância até a tarefa.',
        en: 'The navbar and menus expose services without requiring users to memorize paths; search and shortcuts reduce the distance to the task.',
      },
      {
        pt: 'Grids, carrossel, tabelas e frames reutilizam classes e componentes de layout para manter consistência em páginas muito diferentes.',
        en: 'Grids, carousel, tables and frames reuse layout classes and components to keep consistency across very different pages.',
      },
      {
        pt: 'PDFs, áudios e imagens institucionais vivem em public e são abertos no contexto da página, sem backend dedicado.',
        en: 'PDFs, audio and institutional images live in public and open in the page context, with no dedicated backend.',
      },
      {
        pt: 'O build Vite gera uma SPA estática, simples de hospedar em infraestrutura municipal tradicional.',
        en: 'The Vite build outputs a static SPA, easy to host on traditional municipal infrastructure.',
      },
    ],
    arch: [
      {
        layer: { pt: 'Páginas', en: 'Pages' },
        detail: {
          pt: 'Home, cidadão, empresa, empreendedor, servidor, serviços, transparência e componentes de seleção.',
          en: 'Home, citizen, company, entrepreneur, public servant, services, transparency and selection components.',
        },
      },
      {
        layer: { pt: 'Layout', en: 'Layout' },
        detail: {
          pt: 'Navbar, footer, carrossel, grids de serviços e listas sociais compartilhados entre páginas.',
          en: 'Navbar, footer, carousel, service grids and social lists shared across pages.',
        },
      },
      {
        layer: { pt: 'Roteamento', en: 'Routing' },
        detail: {
          pt: 'Ways.jsx centraliza os caminhos; cada serviço ganha uma URL própria, compartilhável e indexável.',
          en: 'Ways.jsx centralizes paths; every service gets its own shareable, indexable URL.',
        },
      },
      {
        layer: { pt: 'Estilos', en: 'Styles' },
        detail: {
          pt: 'SCSS, Bootstrap e MUI coexistindo — velocidade de entrega com um custo explícito de consistência.',
          en: 'SCSS, Bootstrap and MUI coexisting — delivery speed with an explicit consistency cost.',
        },
      },
    ],
    decisions: [
      {
        tech: 'React + Vite',
        reason: {
          pt: 'Componentização e HMR para um frontend grande, com build estático simples de hospedar. O portal não precisava de SSR para cumprir o escopo.',
          en: 'Componentization and HMR for a large frontend, with a static build that is simple to host. The portal did not need SSR to meet its scope.',
        },
      },
      {
        tech: 'React Router',
        reason: {
          pt: 'Cada serviço precisa de URL própria, compartilhável e indexável. Um portal municipal é, antes de tudo, um mapa de tarefas.',
          en: 'Every service needs its own shareable, indexable URL. A city portal is, above all, a map of tasks.',
        },
      },
      {
        tech: 'MUI + Bootstrap',
        reason: {
          pt: 'Velocidade de entrega com componentes prontos e grid responsivo. O trade-off é manter dois sistemas visuais — dívida que aparece no longo prazo.',
          en: 'Delivery speed with ready-made components and a responsive grid. The trade-off is maintaining two visual systems — debt that shows up long term.',
        },
      },
      {
        tech: 'react-pdf',
        reason: {
          pt: 'Documentos institucionais podem ser lidos sem download e sem um serviço dedicado de documentos.',
          en: 'Institutional documents can be read without downloading and without a dedicated document service.',
        },
      },
    ],
    outcomes: [
      { pt: '111 serviços mapeados e organizados por perfil', en: '111 services mapped and organized by audience' },
      { pt: 'Navegação consistente em um domínio amplo', en: 'Consistent navigation across a broad domain' },
      { pt: 'Documentos e PDFs integrados à experiência', en: 'Documents and PDFs integrated into the experience' },
      { pt: 'Build estático leve para hospedagem municipal', en: 'Lightweight static build for municipal hosting' },
    ],
    learnings: {
      pt: 'Em domínios grandes, navegação é arquitetura. Consistência de layout importa mais que variedade visual — e misturar bibliotecas de UI cobra juros na manutenção.',
      en: 'In large domains, navigation is architecture. Layout consistency matters more than visual variety — and mixing UI libraries charges interest on maintenance.',
    },
    stack: ['React', 'Vite', 'React Router', 'MUI', 'Bootstrap', 'SCSS', 'react-pdf', 'JavaScript'],
    tags: [
      { pt: 'React', en: 'React' },
      { pt: 'Vite', en: 'Vite' },
      { pt: 'React Router', en: 'React Router' },
      { pt: 'MUI', en: 'MUI' },
      { pt: 'Portal público', en: 'Public portal' },
    ],
    metrics: [
      { value: '5', label: { pt: 'perfis de navegação', en: 'audiences' } },
      { value: '111', label: { pt: 'serviços mapeados', en: 'services mapped' } },
      { value: 'SPA', label: { pt: 'build estático', en: 'static build' } },
    ],
    gallery: [
      {
        src: '/projects/prefeitura-home.webp',
        alt: {
          pt: 'Home do portal da Prefeitura de São José com serviços em destaque',
          en: 'São José city portal home with featured services',
        },
        caption: {
          pt: 'Home com serviços em destaque, carrossel institucional e atalhos para os principais canais.',
          en: 'Home with featured services, institutional carousel and shortcuts to the main channels.',
        },
        frame: 'browser',
        url: 'saojose.sc.gov.br',
        tag: 'Web',
      },
      {
        src: '/projects/prefeitura-servicos.webp',
        alt: {
          pt: 'Página com todos os serviços disponíveis no portal',
          en: 'Page listing every service available on the portal',
        },
        caption: {
          pt: 'Catálogo com 111 serviços disponíveis, busca e agrupamento por área de atendimento.',
          en: 'Catalog with 111 available services, search and grouping by service area.',
        },
        frame: 'browser',
        url: 'saojose.sc.gov.br/todos-os-servicos',
        tag: 'Web',
      },
      {
        src: '/projects/prefeitura-empresa.webp',
        alt: {
          pt: 'Área Sou Empresa do portal da Prefeitura',
          en: 'Sou Empresa area of the city portal',
        },
        caption: {
          pt: 'Área Sou Empresa com alvarás, notas fiscais, processos online e integrações externas.',
          en: 'Sou Empresa area with licenses, invoices, online processes and external integrations.',
        },
        frame: 'browser',
        url: 'saojose.sc.gov.br/sou-empresa',
        tag: 'Web',
      },
      {
        src: '/projects/prefeitura-transparencia.webp',
        alt: {
          pt: 'Portal da Transparência da Prefeitura de São José',
          en: 'São José transparency portal',
        },
        caption: {
          pt: 'Portal da Transparência com controle interno, radar público, ouvidoria e diário oficial.',
          en: 'Transparency portal with internal control, public radar, ombudsman and official gazette.',
        },
        frame: 'browser',
        url: 'saojose.sc.gov.br/portal-transparencia',
        tag: 'Web',
      },
      {
        src: '/projects/prefeitura-cidade.webp',
        alt: {
          pt: 'Página A Cidade com mapa e conteúdo institucional',
          en: 'A Cidade page with map and institutional content',
        },
        caption: {
          pt: 'Página A Cidade com conteúdo institucional e mapa de localização da sede.',
          en: 'A Cidade page with institutional content and a map of the city hall location.',
        },
        frame: 'browser',
        url: 'saojose.sc.gov.br/cidade',
        tag: 'Web',
      },
    ],
    repo: 'https://github.com/GuiNardiSS/site-prefeitura',
    visual: 'prefeitura',
    accent: 'from-sky-300 via-blue-400 to-emerald-300',
  },
  {
    slug: 'rework-mei',
    name: 'Espaço do Empreendedor',
    category: { pt: 'Frontend + geração de documentos', en: 'Frontend + document generation' },
    year: '2023',
    role: { pt: 'Frontend e fluxos de formulário', en: 'Frontend and form flows' },
    status: { pt: 'Projeto em produção', en: 'Project in production' },
    tagline: {
      pt: 'Formulários guiados que transformam a burocracia do MEI em documentos prontos.',
      en: 'Guided forms that turn MEI bureaucracy into ready-to-use documents.',
    },
    summary: {
      pt: 'SPA React com fluxos guiados para abertura de MEI, solicitações e requerimentos. Máscaras e validação guiam a entrada; o PDF é gerado no próprio navegador com @react-pdf/renderer.',
      en: 'A React SPA with guided flows for MEI registration, requests and formal filings. Masks and validation guide input; the PDF is generated in the browser with @react-pdf/renderer.',
    },
    problem: {
      pt: 'Abrir ou regularizar um MEI envolve requerimentos, termos e documentos diferentes. O empreendedor precisa saber qual formulário preencher, com quais dados, e sair com um PDF válido — sem ir ao balcão.',
      en: 'Opening or regularizing a MEI involves different forms, terms and documents. The entrepreneur needs to know which form to fill, with which data, and leave with a valid PDF — without visiting a counter.',
    },
    solution: {
      pt: 'Uma SPA React com fluxos guiados para abertura de MEI, solicitação, ressarcimento de valores, Simples Nacional, cancelamento de débito e termo de ciência. Componentes de formulário, check e label organizam as etapas; o documento final é renderizado no cliente.',
      en: 'A React SPA with guided flows for MEI registration, requests, value reimbursement, Simples Nacional, debt cancellation and a terms acknowledgment. Form, check and label components organize the steps; the final document is rendered client-side.',
    },
    how: [
      {
        pt: 'O usuário escolhe o serviço e percorre um formulário com máscaras para CPF/CNPJ, telefone e datas.',
        en: 'The user chooses a service and goes through a form with masks for CPF/CNPJ, phone and dates.',
      },
      {
        pt: 'Componentes de check e label organizam etapas, condicionais e textos de apoio específicos de cada fluxo.',
        en: 'Check and label components organize steps, conditionals and flow-specific supporting text.',
      },
      {
        pt: 'Os dados alimentam um documento React PDF renderizado no navegador, sem enviar informações a um servidor.',
        en: 'The data feeds a React PDF document rendered in the browser, without sending information to a server.',
      },
      {
        pt: 'O PDF fica disponível para download imediato; o usuário mantém o controle dos próprios dados.',
        en: 'The PDF is available for immediate download; the user keeps control of their own data.',
      },
      {
        pt: 'Rotas dedicadas mantêm cada serviço acessível, linkável e independente dos demais.',
        en: 'Dedicated routes keep each service accessible, linkable and independent from the others.',
      },
    ],
    arch: [
      {
        layer: { pt: 'Rotas', en: 'Routes' },
        detail: {
          pt: 'Uma rota por serviço: abertura, solicitação, ressarcimento, Simples Nacional, cancelamento e termo.',
          en: 'One route per service: registration, request, reimbursement, Simples Nacional, cancellation and terms.',
        },
      },
      {
        layer: { pt: 'Formulários', en: 'Forms' },
        detail: {
          pt: 'Componentes por fluxo, com check, label e máscaras reutilizáveis para dados brasileiros.',
          en: 'Per-flow components with reusable check, label and masks for Brazilian data.',
        },
      },
      {
        layer: { pt: 'Documentos', en: 'Documents' },
        detail: {
          pt: '@react-pdf/renderer monta o PDF no cliente a partir do estado do formulário.',
          en: '@react-pdf/renderer builds the PDF on the client from form state.',
        },
      },
      {
        layer: { pt: 'Estilos', en: 'Styles' },
        detail: {
          pt: 'styled-components mantém o estilo acoplado ao componente e evita colisões em fluxos grandes.',
          en: 'styled-components keeps styles attached to the component and avoids collisions in large flows.',
        },
      },
    ],
    decisions: [
      {
        tech: 'React + Vite',
        reason: {
          pt: 'Build rápido e dev server instantâneo para iterar em muitos formulários e etapas condicionais.',
          en: 'Fast build and instant dev server for iterating on many forms and conditional steps.',
        },
      },
      {
        tech: 'styled-components',
        reason: {
          pt: 'Estilo no escopo do componente, sem dependência de classes globais em um domínio com vários fluxos.',
          en: 'Component-scoped styles, without relying on global classes in a domain with multiple flows.',
        },
      },
      {
        tech: 'react-input-mask',
        reason: {
          pt: 'CPF, CNPJ, telefone e datas exigem máscara e validação de formato para reduzir erro de entrada.',
          en: 'CPF, CNPJ, phone and dates require masks and format validation to reduce input errors.',
        },
      },
      {
        tech: '@react-pdf/renderer',
        reason: {
          pt: 'Gerar o PDF no cliente elimina um backend de documentos e mantém os dados sob controle do usuário. O custo é um bundle maior.',
          en: 'Generating the PDF on the client eliminates a document backend and keeps data under user control. The cost is a larger bundle.',
        },
      },
    ],
    outcomes: [
      { pt: 'Fluxos guiados para múltiplos serviços do MEI', en: 'Guided flows for multiple MEI services' },
      { pt: 'Documentos gerados no navegador, sem backend', en: 'Documents generated in the browser, no backend' },
      { pt: 'Máscaras e validação para dados brasileiros', en: 'Masks and validation for Brazilian data' },
      { pt: 'SPA estática com rotas por serviço', en: 'Static SPA with routes per service' },
    ],
    learnings: {
      pt: 'Formulário é produto: cada etapa precisa explicar o próximo passo. Gerar o documento no cliente simplifica a infraestrutura, mas exige atenção ao tamanho do bundle e à acessibilidade.',
      en: 'A form is a product: every step must explain the next one. Generating the document on the client simplifies infrastructure, but demands attention to bundle size and accessibility.',
    },
    stack: ['React', 'Vite', 'React Router', 'styled-components', 'react-input-mask', '@react-pdf/renderer', 'JavaScript'],
    tags: [
      { pt: 'React', en: 'React' },
      { pt: 'Formulários', en: 'Forms' },
      { pt: 'PDF no browser', en: 'In-browser PDF' },
      { pt: 'MEI', en: 'MEI' },
      { pt: 'styled-components', en: 'styled-components' },
    ],
    metrics: [
      { value: '6+', label: { pt: 'fluxos de serviço', en: 'service flows' } },
      { value: 'PDF', label: { pt: 'gerado no cliente', en: 'generated client-side' } },
      { value: '100%', label: { pt: 'estático', en: 'static' } },
    ],
    gallery: [
      {
        src: '/projects/mei-home.webp',
        alt: {
          pt: 'Catálogo de serviços do Espaço do Empreendedor',
          en: 'Espaço do Empreendedor service catalog',
        },
        caption: {
          pt: 'Catálogo de serviços do Espaço do Empreendedor, com fluxos para abertura, requerimentos e termos.',
          en: 'Espaço do Empreendedor service catalog, with flows for registration, filings and terms.',
        },
        frame: 'browser',
        url: 'espaco-do-empreendedor/servicos',
        tag: 'Web',
      },
      {
        src: '/projects/mei-form.webp',
        alt: {
          pt: 'Formulário de abertura de MEI com perguntas condicionais',
          en: 'MEI registration form with conditional questions',
        },
        caption: {
          pt: 'Formulário de abertura de MEI com perguntas condicionais, textos de apoio e declaração de ciência.',
          en: 'MEI registration form with conditional questions, supporting text and an acknowledgment statement.',
        },
        frame: 'browser',
        url: 'espaco-do-empreendedor/atendimento-mei-abertura',
        tag: 'Web',
      },
      {
        src: '/projects/mei-simples.webp',
        alt: {
          pt: 'Requerimento de reconsideração do Simples Nacional',
          en: 'Simples Nacional reconsideration form',
        },
        caption: {
          pt: 'Requerimento de reconsideração do Simples Nacional com máscaras, data e texto gerado automaticamente.',
          en: 'Simples Nacional reconsideration form with masks, date and automatically generated text.',
        },
        frame: 'browser',
        url: 'espaco-do-empreendedor/requerimento-simples-nacional',
        tag: 'Web',
      },
      {
        src: '/projects/mei-ressarcimento.webp',
        alt: {
          pt: 'Requerimento de ressarcimento de valores com dados bancários',
          en: 'Value reimbursement form with bank details',
        },
        caption: {
          pt: 'Ressarcimento de valores com dados bancários, validação de campos e fundamentação legal.',
          en: 'Value reimbursement with bank details, field validation and legal basis.',
        },
        frame: 'browser',
        url: 'espaco-do-empreendedor/requerimento-ressarcimento-de-valores',
        tag: 'Web',
      },
      {
        src: '/projects/mei-criar.webp',
        alt: {
          pt: 'Formulário de criação de requerimento genérico',
          en: 'Generic request creation form',
        },
        caption: {
          pt: 'Criação de requerimento genérico com campos guiados e geração de documento no navegador.',
          en: 'Generic request creation with guided fields and in-browser document generation.',
        },
        frame: 'browser',
        url: 'espaco-do-empreendedor/criar-requerimento',
        tag: 'Web',
      },
    ],
    repo: 'https://github.com/GuiNardiSS/rework-mei',
    visual: 'mei',
    accent: 'from-emerald-300 via-teal-300 to-cyan-300',
  },
]

export type OtherProject = {
  name: string
  tagline: Localized
  description: Localized
  stack: string[]
  repo: string
  icon: 'whatsapp' | 'api' | 'flutter'
}

export const otherProjects: OtherProject[] = [
  {
    name: 'Alerta Contratos WhatsApp',
    tagline: {
      pt: 'Contratos que chegam por e-mail, avisados no WhatsApp.',
      en: 'Contracts that arrive by email, announced on WhatsApp.',
    },
    description: {
      pt: 'Automação serverless em Google Apps Script que lê e-mails marcados como contrato no Gmail e envia um template pela WhatsApp Cloud API oficial. Sem servidor, sem banco: o estado vive nos marcadores do Gmail e nas Script Properties.',
      en: 'A serverless Google Apps Script automation that reads emails labeled as contracts in Gmail and sends a template through the official WhatsApp Cloud API. No server, no database: state lives in Gmail labels and Script Properties.',
    },
    stack: ['Google Apps Script', 'Gmail API', 'WhatsApp Cloud API', 'Node.js'],
    repo: 'https://github.com/GuiNardiSS/alerta-contratos-whatsapp',
    icon: 'whatsapp',
  },
  {
    name: 'API Starter Node',
    tagline: {
      pt: 'Uma base de API pronta para produção.',
      en: 'A production-ready API baseline.',
    },
    description: {
      pt: 'Template com Fastify, TypeScript, Prisma/PostgreSQL, autenticação JWT, RBAC, validação Zod, Swagger, testes com Vitest e supertest, Docker e CI no GitHub Actions. Feito para começar projetos sem renegociar o básico.',
      en: 'A template with Fastify, TypeScript, Prisma/PostgreSQL, JWT auth, RBAC, Zod validation, Swagger, Vitest and supertest, Docker and GitHub Actions CI. Built to start projects without renegotiating the basics.',
    },
    stack: ['Fastify', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT', 'Zod'],
    repo: 'https://github.com/GuiNardiSS/api-starter-node',
    icon: 'api',
  },
  {
    name: 'App Consulta CPF',
    tagline: {
      pt: 'Consulta de CPF com fluxo direto no mobile.',
      en: 'CPF lookup with a direct mobile flow.',
    },
    description: {
      pt: 'Aplicativo Flutter/Dart que exercita entrada validada, chamada de API e feedback claro de sucesso, erro e carregamento em uma jornada curta.',
      en: 'A Flutter/Dart app that exercises validated input, API calls and clear success, error and loading feedback in a short journey.',
    },
    stack: ['Flutter', 'Dart', 'HTTP'],
    repo: 'https://github.com/GuiNardiSS/App_Consulta_CPF.',
    icon: 'flutter',
  },
]

export const stackGroups: { key: 'frontend' | 'mobile' | 'backend' | 'data' | 'automation' | 'quality'; items: string[] }[] = [
  { key: 'frontend', items: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS', 'MUI', 'styled-components', 'SCSS'] },
  { key: 'mobile', items: ['Flutter', 'Dart', 'Riverpod', 'SQLite', 'Flutter Secure Storage', 'Flutter Animate'] },
  { key: 'backend', items: ['Node.js', 'Express', 'Fastify', 'Prisma', 'REST', 'JWT', 'Zod', 'Swagger'] },
  { key: 'data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Upstash', 'Docker', 'GitHub Actions'] },
  { key: 'automation', items: ['TypeScript', 'Google Apps Script', 'WhatsApp Cloud API', 'Nodemailer', 'LLMs & IA', 'PNCP'] },
  { key: 'quality', items: ['Jest', 'Vitest', 'Supertest', 'flutter test', 'CI/CD', 'ESLint', 'Prettier'] },
]
