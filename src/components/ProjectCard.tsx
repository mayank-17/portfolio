import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  highlights?: string[];
  github?: string;
  demo?: string;
  period?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  highlights,
  github,
  demo,
  period,
}: ProjectCardProps) {
  return (
    <article className="group relative p-6 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 hover:border-accent/30 transition-all duration-300">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 shrink-0">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-border transition-all"
                aria-label={`${title} GitHub repository`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-border transition-all"
                aria-label={`${title} live demo`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {period && (
          <p className="text-xs text-muted-foreground mb-3 font-mono">
            {period}
          </p>
        )}

        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="text-sm text-muted-foreground mb-4 space-y-1.5">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-accent mt-1.5 text-xs">▸</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-background border border-border text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
