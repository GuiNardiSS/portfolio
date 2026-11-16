const technologies = [
  'TypeScript',
  'Flutter',
  'React',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'GitHub Actions',
  'Google Apps Script',
  'Fastify',
  'Prisma',
  'JWT',
  'Zod',
  'Jest',
  'Vitest',
  'Tailwind CSS',
  'Riverpod',
]

function Track() {
  return (
    <div className="marquee-track" aria-hidden="true">
      {technologies.map((tech, index) => (
        <span key={`${tech}-${index}`} className="flex items-center gap-2.5 whitespace-nowrap">
          <span className="size-1 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
          <span className="font-mono text-[0.72rem] tracking-wide text-white/40 transition-colors hover:text-white/80">
            {tech}
          </span>
        </span>
      ))}
    </div>
  )
}

export function TechMarquee() {
  return (
    <div className="relative border-y border-white/[0.06] bg-white/[0.012]">
      <div className="marquee">
        <Track />
        <Track />
      </div>
    </div>
  )
}
