'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Menu, MessageSquare, X } from 'lucide-react';
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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-[#060913]/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3.5">
        <Link href="/" className="flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]">
          <Image 
            src="/braven-logo.png" 
            alt="Braven Inc. Logo" 
            width={40} 
            height={40}
            className="h-9 w-9 rounded-lg border border-border/60"
            priority
          />
          <div>
            <div className="font-headline text-base sm:text-lg font-extrabold tracking-tight text-foreground">
              Andrew Braven
            </div>
            <div className="font-code text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
              Software · Mechatronics
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isHash = link.path.startsWith('/#') || link.path.startsWith('#');
            const isActive = !isHash && (link.path === '/' ? pathname === '/' : pathname.startsWith(link.path));

            return (
              <Link
                key={link.name}
                href={link.path}
                className={cn(
                  'flex items-center gap-1.5 rounded-md px-3.5 py-1.5 font-code text-xs font-medium text-muted-foreground transition-all duration-200 hover:bg-muted/40 hover:text-foreground',
                  isActive && 'bg-primary/10 text-primary border border-primary/30 font-semibold'
                )}
              >
                <link.icon className="h-3.5 w-3.5" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-primary font-medium text-primary-foreground hover:bg-primary/90 font-code text-xs"
          >
            <a href="mailto:amulibraven254@gmail.com">
              <MessageSquare className="mr-1.5 h-3.5 w-3.5" />
              Let&apos;s Talk
            </a>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex border-border/80 font-code text-xs"
            asChild
          >
            <a href="https://github.com/bonBavo" target="_blank" rel="noreferrer noopener">
              <Github className="mr-1.5 h-3.5 w-3.5" />
              GitHub
            </a>
          </Button>

          <ThemeToggle />

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-9 w-9 border border-border/60">
                  <Menu className={cn('h-5 w-5 transition-all', isMobileMenuOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100')} />
                  <X className={cn('absolute h-5 w-5 transition-all', isMobileMenuOpen ? 'rotate-0 scale-100' : 'rotate-90 scale-0')} />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#070c17] border-border/80">
                <div className="py-6">
                  <SheetClose asChild>
                    <Link href="/" className="mb-8 flex items-center gap-3">
                      <Image 
                        src="/braven-logo.png" 
                        alt="Braven Logo" 
                        width={36} 
                        height={36}
                        className="h-9 w-9 rounded-lg border border-border/60"
                      />
                      <div>
                        <div className="font-headline text-base font-bold text-foreground">Andrew Braven</div>
                        <div className="font-code text-[10px] uppercase tracking-[0.2em] text-primary">Software · Mechatronics</div>
                      </div>
                    </Link>
                  </SheetClose>

                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => {
                      return (
                        <SheetClose asChild key={link.name}>
                          <Link
                            href={link.path}
                            className="flex items-center gap-3 rounded-lg px-3.5 py-3 font-code text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/40 hover:text-primary"
                          >
                            <link.icon className="h-4 w-4 text-primary" />
                            {link.name}
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>

                  <div className="mt-8 border-t border-border/60 pt-6 space-y-3">
                    <Button className="w-full bg-primary text-primary-foreground font-code text-xs" asChild>
                      <a href="mailto:amulibraven254@gmail.com">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Let&apos;s Talk
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full border-border/80 font-code text-xs" asChild>
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
