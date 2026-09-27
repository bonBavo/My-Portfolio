import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/ThemeProvider';
import { siteContent } from '@/lib/content';

export const metadata: Metadata = {
  title: {
    default: 'Andrew Braven — Software Engineer & Mechatronics Engineer',
    template: '%s | Andrew Braven',
  },
  description: 'Andrew Braven is a software developer and mechatronics engineering student building backend systems, full-stack applications, connected vehicles, IoT systems and engineering products.',
  keywords: [
    'Andrew Braven',
    'Software Engineer',
    'Mechatronics Engineer',
    'Java',
    'Spring Boot',
    'IoT',
    'Connected Vehicles',
    'MUT 002',
    'Ma3sim',
    'Fleet Management',
    'WebSockets',
    'MQTT',
    'Kenya',
  ],
  authors: [{ name: 'Andrew Braven' }],
  creator: 'Andrew Braven',
  openGraph: {
    title: 'Andrew Braven — Software Engineer & Mechatronics Engineer',
    description: 'Andrew Braven is a software developer and mechatronics engineering student building backend systems, full-stack applications, connected vehicles, IoT systems and engineering products.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Andrew Braven Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew Braven — Software Engineer & Mechatronics Engineer',
    description: 'Andrew Braven is a software developer and mechatronics engineering student building backend systems, full-stack applications, connected vehicles, IoT systems and engineering products.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f97316' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/%3e%3c/svg%3e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=Orbitron:wght@500;700;900&family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-[#060913] text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
