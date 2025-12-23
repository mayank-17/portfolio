import { ProjectCard } from '@/components/ProjectCard';

const projects = [
  {
    title: 'Streamory',
    description: 'Real-time analytics platform handling 50K+ events per minute with sub-second query latency. Built for ingestion, processing, and visualization of live streaming data.',
    tags: ['Node.js', 'ClickHouse', 'Docker', 'React', 'Recharts'],
    period: 'June 2025 – Present',
    highlights: [
      'Configured scalable ClickHouse clusters using Docker Compose',
      'Built React dashboard with interactive filtering and charting',
      'Automated cluster setup and scaling through Node.js CLI',
      'Focused on observability with fault-tolerant data pipelines',
    ],
    github: 'https://github.com/mayank-17',
  },
  {
    title: 'ClickHouse Cluster Up',
    description: 'Node.js-based automation tool that reduced ClickHouse cluster setup time by 80%, enabling automated scaling and configuration for production-grade deployments.',
    tags: ['Node.js', 'Docker Compose', 'CLI', 'ClickHouse'],
    period: 'February 2025 – March 2025',
    highlights: [
      'Designed CLI for cluster configuration and node orchestration',
      'Integrated health monitoring and fault recovery mechanisms',
      'Enhanced reliability with security configurations and monitoring hooks',
    ],
    github: 'https://github.com/mayank-17',
  },
  {
    title: 'Merchant Dashboard',
    description: 'Led end-to-end backend design of a dashboard serving 100+ merchants, improving operational efficiency and team delivery velocity at Juspay.',
    tags: ['Java', 'Node.js', 'PostgreSQL', 'REST APIs'],
    period: 'Juspay Technologies',
    highlights: [
      'Collaborated with cross-functional teams for feature delivery',
      'Engineered REST APIs for real-time analytics',
      'Optimized ClickHouse-based data storage for query performance',
    ],
  },
  {
    title: 'Mandate Transaction Systems',
    description: 'Built transaction systems supporting 10M+ users across Intent, QR, and Collect payment flows, ensuring seamless and reliable payment experiences.',
    tags: ['Java', 'Haskell', 'Kafka', 'PostgreSQL'],
    period: 'Juspay Technologies',
    highlights: [
      'Processing millions of transactions daily with sub-100ms response times',
      'Reduced data latency by 35% through Kafka integration',
      'Implemented real-time data streaming for critical business data',
    ],
  },
  {
    title: 'ETL Pipeline Infrastructure',
    description: 'Architected and deployed ETL pipelines processing over 10,000 logs per second using MySQL and BigQuery, significantly improving data processing efficiency.',
    tags: ['MySQL', 'BigQuery', 'Node.js', 'Kafka'],
    period: 'Juspay Technologies',
    highlights: [
      'Designed for high-throughput log processing',
      'Integrated with existing data warehouse infrastructure',
      'Implemented monitoring and alerting for pipeline health',
    ],
  },
  {
    title: 'CI/CD Pipeline Optimization',
    description: 'Enhanced code quality and maintainability by executing CI/CD pipelines, resulting in 40% reduction in deployment time.',
    tags: ['Git', 'CI/CD', 'Docker', 'Kubernetes'],
    period: 'Juspay Technologies',
    highlights: [
      'Streamlined deployment workflows across teams',
      'Reduced system downtime by 20% through proactive monitoring',
      'Implemented automated testing and quality gates',
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of projects I&apos;ve built, from personal tools to 
          production systems handling millions of transactions.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
