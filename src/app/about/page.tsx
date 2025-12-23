import { Briefcase, GraduationCap, Code2, Database, Server, Cloud } from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    icon: Code2,
    items: ['Java', 'Node.js', 'Python', 'Haskell', 'C++'],
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'ClickHouse', 'BigQuery', 'Redis'],
  },
  {
    category: 'Frameworks & Tools',
    icon: Server,
    items: ['Spring Boot', 'Express.js', 'Kafka', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: Cloud,
    items: ['AWS (S3, EKS, EC2)', 'GCP', 'CI/CD', 'Observability'],
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About</h1>

        {/* Intro */}
        <div className="prose mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m a Software Development Engineer with a strong foundation in 
            computer science and hands-on experience building scalable, reliable 
            backend services. I specialize in high-performance APIs, distributed 
            systems, and data infrastructure that handles millions of transactions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently working at <strong className="text-foreground">Juspay Technologies</strong>, 
            where I&apos;ve been engineering payment systems, building real-time analytics 
            platforms, and optimizing data pipelines since 2020.
          </p>
        </div>

        {/* Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>

          <div className="border-l-2 border-border pl-6 ml-5">
            <div className="relative">
              <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-accent" />
              <h3 className="text-xl font-semibold">Software Engineer II</h3>
              <p className="text-muted-foreground font-medium">
                Juspay Technologies Pvt. Ltd.
              </p>
              <p className="text-sm text-muted-foreground font-mono mb-4">
                May 2020 – Present
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 text-xs">▸</span>
                  <span>Engineered high-performance APIs processing millions of transactions daily with sub-100ms response times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 text-xs">▸</span>
                  <span>Reduced data latency by 35% through Kafka integration for real-time streaming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 text-xs">▸</span>
                  <span>Architected ETL pipelines processing 10,000+ logs/second using MySQL and BigQuery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 text-xs">▸</span>
                  <span>Led backend design of merchant dashboard serving 100+ clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 text-xs">▸</span>
                  <span>Delivered mandate transaction systems supporting 10M+ users</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="border-l-2 border-border pl-6 ml-5">
            <div className="relative">
              <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-border" />
              <h3 className="text-xl font-semibold">B.Tech. Computer Science</h3>
              <p className="text-muted-foreground font-medium">
                Data Analytics Specialization
              </p>
              <p className="text-sm text-muted-foreground font-mono mb-2">
                GLA University, Mathura • Graduated 2020
              </p>
              <p className="text-muted-foreground">CGPA: 8.0 / 10</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="p-5 rounded-xl border border-border bg-muted/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <skill.icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-sm rounded-md bg-background border border-border text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
