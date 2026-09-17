'use client';

import Link from 'next/link';
import { Github, Menu, X } from 'lucide-react';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/routes';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../ThemeToggle';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3.5">
        <Link href="/" className="flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
            <span className="text-sm font-bold">AB</span>
          </div>
          <div>
            <div className="font-headline text-lg font-bold tracking-tight text-foreground">Andrew Braven</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-primary">Engineer</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isExternal = link.path.startsWith('http');
            const isActive = isExternal
              ? false
              : link.path.startsWith('/#')
                ? pathname === '/'
                : link.path === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.path);

            const navLink = isExternal ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  'flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-white/5 hover:text-primary',
                  isActive && 'bg-primary/10 text-primary ring-1 ring-primary/20'
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </a>
            ) : (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  'flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-white/5 hover:text-primary',
                  isActive && 'bg-primary/10 text-primary ring-1 ring-primary/20'
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </Link>
            );

            return navLink;
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" className="hidden md:inline-flex border-primary/20 bg-primary/5 text-primary hover:bg-primary/10" asChild>
            <a href="https://github.com/bonBavo" target="_blank" rel="noreferrer noopener">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <ThemeToggle />

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Menu className={cn('h-5 w-5 transition-all', isMobileMenuOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100')} />
                  <X className={cn('absolute h-5 w-5 transition-all', isMobileMenuOpen ? 'rotate-0 scale-100' : 'rotate-90 scale-0')} />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="py-6">
                  <SheetClose asChild>
                    <Link href="/" className="mb-8 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <span className="text-sm font-bold">AB</span>
                      </div>
                      <div>
                        <div className="font-headline text-lg font-bold tracking-tight text-foreground">Andrew Braven</div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Engineer</div>
                      </div>
                    </Link>
                  </SheetClose>

                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => {
                      const isExternal = link.path.startsWith('http');
                      const isActive = isExternal
                        ? false
                        : link.path.startsWith('/#')
                          ? pathname === '/'
                          : link.path === '/'
                            ? pathname === '/'
                            : pathname.startsWith(link.path);

                      const content = isExternal ? (
                        <a
                          key={link.path}
                          href={link.path}
                          target="_blank"
                          rel="noreferrer noopener"
                          className={cn(
                            'flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary',
                            isActive && 'bg-muted text-primary'
                          )}
                        >
                          <link.icon className="h-5 w-5" />
                          {link.name}
                        </a>
                      ) : (
                        <SheetClose asChild key={link.path}>
                          <Link
                            href={link.path}
                            className={cn(
                              'flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary',
                              isActive && 'bg-muted text-primary'
                            )}
                          >
                            <link.icon className="h-5 w-5" />
                            {link.name}
                          </Link>
                        </SheetClose>
                      );

                      return content;
                    })}
                  </nav>

                  <div className="mt-8 border-t border-border/60 pt-6">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://github.com/bonBavo" target="_blank" rel="noreferrer noopener">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
