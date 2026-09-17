import Link from 'next/link';
import { socialLinks } from '@/lib/socials';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <div>
          <p className="font-headline text-lg font-semibold text-foreground">Andrew Braven</p>
          <p className="text-sm text-muted-foreground">Software Developer | Mechatronics Engineering Student</p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border/60 bg-white/5 p-2 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary hover:bg-primary/10"
              aria-label={link.name}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
          <Link
            href="/projects"
            className="rounded-full border border-border/60 bg-white/5 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Projects
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">&copy; {year} Andrew Braven</p>
      </div>
    </footer>
  );
}
