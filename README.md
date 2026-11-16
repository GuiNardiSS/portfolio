# Guilherme Nardi — Portfólio

Portfólio pessoal de engenharia de software com estudos de caso detalhados dos projetos,
em português e inglês.

## Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS 4**
- **Framer Motion** para animações
- **React Router 7** para as páginas de estudo de caso
- **Lucide** para ícones

## Rodando localmente

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

O build estático é gerado em `dist/`.

## Estrutura

```
src/
├── components/          # Navbar, hero, cards, diagramas, mockups
├── data/projects.ts     # conteúdo dos estudos de caso (PT/EN)
├── i18n/                # dicionário e contexto de idioma
├── pages/               # Home, estudo de caso, 404
├── site.ts              # nome, e-mail, GitHub e LinkedIn
└── index.css            # tokens, aurora, grid, componentes visuais
public/
└── projects/            # capturas reais dos projetos (WebP)
```

## Conteúdo

Todo o conteúdo dos projetos está em `src/data/projects.ts`. Cada projeto tem textos
em português e inglês, stack, métricas, arquitetura, decisões técnicas e links.

## Galerias

Cada estudo de caso inclui uma galeria horizontal com capturas reais do sistema,
legendas em PT/EN e lightbox com navegação por teclado. As imagens ficam em
`public/projects/` e são renderizadas pelo componente `ProjectGallery`.

Os contatos ficam centralizados em `src/site.ts`.

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta Vite automaticamente:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Publique. O `vercel.json` já configura o fallback de rotas da SPA.

Para publicar pela CLI:

```bash
npx vercel
npx vercel --prod
```

> No Windows, se a CLI falhar com `EPERM` ao criar symlinks, habilite o
> **Modo de Desenvolvedor** (`start ms-settings:developers`) ou importe o
> repositório diretamente pelo painel da Vercel.

## Rotas

- `/` — home
- `/projeto/mais-vida`
- `/projeto/automation-yul`
- `/projeto/site-prefeitura`
- `/projeto/rework-mei`

## Observação

As capturas de tela da Prefeitura e do Espaço do Empreendedor foram geradas a partir
dos projetos reais. Os dados de contato vêm do perfil público do GitHub.
