import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Mayank Sharma | Software Development Engineer',
  description: 'Backend engineer specializing in high-performance APIs, distributed systems, and database optimization. Building scalable solutions with Java, Node.js, and modern data infrastructure.',
  keywords: ['Software Engineer', 'Backend Developer', 'Java', 'Node.js', 'PostgreSQL', 'ClickHouse', 'Distributed Systems'],
  authors: [{ name: 'Mayank Sharma' }],
  openGraph: {
    title: 'Mayank Sharma | Software Development Engineer',
    description: 'Backend engineer specializing in high-performance APIs, distributed systems, and database optimization.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
