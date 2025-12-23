import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags?: string[];
}

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  tags,
}: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${slug}`} className="block">
        <div className="p-6 -mx-6 rounded-xl hover:bg-muted/50 transition-colors duration-300">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {excerpt}
          </p>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-mono rounded bg-muted border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <span className="inline-flex items-center gap-1.5 text-sm text-accent font-medium">
            Read more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </article>
  );
}
