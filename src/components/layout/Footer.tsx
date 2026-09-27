import Link from 'next/link';
import { socialLinks } from '@/lib/socials';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-[#050811] py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
        <div>
          <p className="font-headline text-lg font-bold text-foreground">Andrew Braven</p>
          <p className="font-code text-xs text-muted-foreground mt-0.5">Software Engineer · Mechatronics Engineer</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border/70 bg-muted/20 p-2 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary hover:bg-primary/10"
              aria-label={link.name}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
          <Link
            href="/projects"
            className="rounded-lg border border-border/70 bg-muted/20 px-3 py-1.5 font-code text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            All Projects
          </Link>
        </div>

        <p className="font-code text-xs text-muted-foreground">&copy; {year} Andrew Braven. All systems operational.</p>
      </div>
    </footer>
  );
}
