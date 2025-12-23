import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowRight, Database, Server, Cpu } from 'lucide-react';

const techStack = [
  { category: 'Languages', items: ['Java', 'Node.js', 'Python', 'Haskell', 'C++'] },
  { category: 'Databases', items: ['PostgreSQL', 'ClickHouse', 'MySQL', 'Redis', 'BigQuery'] },
  { category: 'Infrastructure', items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Kafka'] },
];

const highlights = [
  {
    icon: Server,
    title: 'High-Performance APIs',
    description: 'Processing millions of transactions daily with sub-100ms response times',
  },
  {
    icon: Database,
    title: 'Data Infrastructure',
    description: 'ETL pipelines processing 10,000+ logs/second using distributed systems',
  },
  {
    icon: Cpu,
    title: 'Real-Time Analytics',
    description: 'Building platforms handling 50K+ events/minute with sub-second latency',
  },
];

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="space-y-6 animate-fade-in">
          {/* Avatar placeholder */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-border flex items-center justify-center">
            <span className="text-2xl font-bold text-accent">MS</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Mayank Sharma
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Software Development Engineer
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Building scalable backend services and high-performance data infrastructure. 
            Passionate about distributed systems, database optimization, and crafting 
            reliable solutions that handle millions of transactions.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/mayank-17"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-border transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mayank17"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-border transition-colors text-sm font-medium"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="mailto:mayank.sharma.codes@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-border transition-colors text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 border-t border-border">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-border bg-muted/30 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 border-t border-border">
        <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((category) => (
            <div key={category.category}>
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg bg-muted border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/projects"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
          >
            Read Blog
          </Link>
        </div>
      </section>
    </div>
  );
}
