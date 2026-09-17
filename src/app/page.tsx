import MainLayout from '@/components/layout/MainLayout';
import ProjectCard from '@/components/ProjectCard';
import { ResumeDownloadDialog } from '@/components/ResumeDownloadDialog';
import { Button } from '@/components/ui/button';
import { projects, skillGroups } from '@/lib/data';
import { siteContent } from '@/lib/content';
import { ArrowRight, Briefcase, CircuitBoard, Code2, Cpu, Github, Layers3, Linkedin, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';

const capabilityCards = [
  {
    title: 'Full-Stack Development',
    description: 'React, Next.js, TanStack ecosystem, Spring Boot, REST APIs, and modern web architecture.',
    icon: Code2,
  },
  {
    title: 'Networking & Security',
    description: 'WebSockets, TCP/IP protocols, cybersecurity fundamentals, secure API design, and real-time communication.',
    icon: Sparkles,
  },
  {
    title: 'Systems Engineering',
    description: 'Java, Spring Boot, microservices, Kafka, Redis, databases, and scalable backend architecture.',
    icon: Layers3,
  },
  {
    title: 'Embedded & Game Dev',
    description: 'ESP32, STM32, IoT, Unity (currently learning), and connected product design.',
    icon: CircuitBoard,
  },
];

const stackPills = ['Java', 'Spring Boot', 'React', 'Next.js', 'TanStack', 'Networking', 'Cybersecurity', 'PostgreSQL', 'WebSockets', 'JWT', 'Kafka', 'Redis', 'Docker', 'Unity (Learning)'];

export default function Home() {
  return (
    <MainLayout>
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.16),transparent_34%),radial-gradient(circle_at_right,_rgba(14,165,233,0.08),transparent_30%)]" />
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
                Andrew Braven
              </p>

              <h1 className="font-headline text-4xl font-bold tracking-[-0.04em] text-foreground md:text-6xl">
                Building systems that connect <span className="text-gradient">software</span> to the physical world.
              </h1>

              <p className="mt-5 text-lg font-medium text-primary md:text-xl">{siteContent.home.hero.role}</p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{siteContent.home.hero.subtitle}</p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">{siteContent.home.hero.intro}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/bonBavo" target="_blank" rel="noreferrer noopener">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <ResumeDownloadDialog className="h-11 rounded-md px-8" />
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {stackPills.map((pill) => (
                  <span key={pill} className="rounded-full border border-border/60 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-border/70 bg-card/70 p-6 shadow-[0_35px_80px_rgba(15,23,42,0.4)] backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Focus</p>
                  <h2 className="mt-2 font-headline text-2xl font-semibold text-foreground">Software + mechatronics</h2>
                </div>
                <div className="rounded-2xl bg-primary/10 p-3 text-primary ring-1 ring-primary/20">
                  <Sparkles className="h-7 w-7" />
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-muted/30 p-3.5">
                  <span>Frontend stack</span>
                  <span className="font-semibold text-foreground">React / Next.js</span>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-muted/30 p-3.5">
                  <span>State management</span>
                  <span className="font-semibold text-foreground">TanStack Query/Table/Router</span>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-muted/30 p-3.5">
                  <span>Networking & security</span>
                  <span className="font-semibold text-foreground">WebSockets / Cybersecurity</span>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-muted/30 p-3.5">
                  <span>Backend systems</span>
                  <span className="font-semibold text-foreground">Java / Spring Boot</span>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-muted/30 p-3.5">
                  <span>Currently learning</span>
                  <span className="font-semibold text-foreground">Unity / Game Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-primary">About</p>
              <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">{siteContent.home.about.title}</h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-muted-foreground md:text-lg">
              {siteContent.home.about.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-border/60 bg-card/30 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-primary/25 bg-primary/10 p-2 text-primary">
              <Cpu className="h-5 w-5" />
            </div>
            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">{siteContent.home.skills.title}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{siteContent.home.skills.subtitle}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {capabilityCards.map((card) => {
              const Icon = card.icon;

              return (
                <div key={card.title} className="rounded-3xl border border-border/60 bg-background/70 p-6 shadow-[0_16px_48px_rgba(15,23,42,0.18)]">
                  <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary ring-1 ring-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <div key={group.title} className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-headline text-xl font-semibold text-foreground">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-primary/25 bg-primary/10 p-2 text-primary">
              <Briefcase className="h-5 w-5" />
            </div>
            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">{siteContent.home.projects.title}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{siteContent.home.projects.subtitle}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/projects">
                Explore all projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border/60 bg-card/30 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 rounded-[28px] border border-border/60 bg-background/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.24)] md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-primary">Contact</p>
              <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">{siteContent.home.contact.title}</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{siteContent.home.contact.subtitle}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/braven-andrew-775a081b4" target="_blank" rel="noreferrer noopener">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild>
                <a href="mailto:andrewbraven@proton.me">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact me
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://github.com/bonBavo" target="_blank" rel="noreferrer noopener">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
