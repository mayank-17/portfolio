import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com/mayank-17',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/mayank17',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:mayank.sharma.codes@gmail.com',
    icon: Mail,
    label: 'Email',
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mayank Sharma. Built with Next.js.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
