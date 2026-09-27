import MainLayout from '@/components/layout/MainLayout';
import ProjectCard from '@/components/ProjectCard';
import HeroSystemDiagram from '@/components/HeroSystemDiagram';
import { ResumeDownloadDialog } from '@/components/ResumeDownloadDialog';
import { Button } from '@/components/ui/button';
import { projects, skillGroupsNew, SkillLevel } from '@/lib/data';
import { siteContent } from '@/lib/content';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Compass,
  Cpu,
  Download,
  FileCode2,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Radio,
  Sparkles,
  Terminal,
  Wrench,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured !== false).slice(0, 4);

  return (
    <MainLayout>
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-border/70 bg-[#060913] py-16 md:py-24">
        {/* Subtle engineering background grid */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,_rgba(34,197,94,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,_rgba(2,132,199,0.06),transparent_40%)]" />

        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              {/* Technical Tagline Bar */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-1 font-code text-[11px] font-semibold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {siteContent.home.hero.meta}
                </span>
              </div>

              {/* Title & Role */}
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {siteContent.home.hero.name}
              </h1>

              <h3 className="mt-3 font-code text-lg font-semibold tracking-wide text-primary sm:text-xl md:text-2xl">
                {siteContent.home.hero.role}
              </h3>

              {/* Main Statement */}
              <div className="mt-6 border-l-2 border-primary/60 pl-4">
                <p className="font-headline text-xl font-bold leading-snug text-foreground sm:text-2xl">
                  &ldquo;{siteContent.home.hero.statement}&rdquo;
                </p>
              </div>

              {/* Supporting Text */}
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {siteContent.home.hero.supporting}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="bg-primary font-medium text-primary-foreground hover:bg-primary/90">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button variant="outline" size="lg" asChild className="border-border/80 bg-background/50 font-code text-sm">
                  <a href="https://github.com/bonBavo" target="_blank" rel="noreferrer noopener">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>

                <ResumeDownloadDialog className="h-11 rounded-md px-6 font-code text-sm" />
              </div>

              {/* Telemetry Quick Bar */}
              <div className="mt-10 flex flex-wrap gap-2 pt-2 border-t border-border/50">
                {['Java / Spring Boot', 'MQTT & Telemetry', 'WebSockets', 'PostgreSQL & MySQL', 'TypeScript / React', 'Embedded & CAD', 'Vehicle Systems'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border/60 bg-muted/20 px-2.5 py-1 font-code text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle Interactive System Diagram Visual */}
            <div className="w-full">
              <HeroSystemDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED PROJECTS */}
      <section id="projects" className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 font-code text-xs uppercase tracking-widest text-primary">
                <Terminal className="h-3.5 w-3.5" />
                <span>Featured Systems</span>
              </div>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                {siteContent.home.projects.title}
              </h2>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">
                {siteContent.home.projects.subtitle}
              </p>
            </div>

            <Button asChild variant="outline" className="self-start md:self-auto font-code text-xs">
              <Link href="/projects">
                View All Case Studies
                <ChevronRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW I THINK */}
      <section className="border-y border-border/70 bg-[#070b16]/80 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <div className="mb-3 flex items-center gap-2 font-code text-xs uppercase tracking-widest text-primary">
              <Cpu className="h-3.5 w-3.5" />
              <span>Engineering Methodology</span>
            </div>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              {siteContent.home.howIThink.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              {siteContent.home.howIThink.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {siteContent.home.howIThink.steps.map((step) => (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-[#0a101f]/90 p-6 shadow-md transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/50 pb-4 font-code">
                    <span className="text-2xl font-black text-primary/80">{step.number}</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">STAGE</span>
                  </div>
                  <h3 className="mt-4 font-headline text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 rounded-lg border border-border/40 bg-black/40 p-3 font-mono text-xs text-muted-foreground/90">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CURRENTLY BUILDING */}
      <section className="py-20 md:py-24 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 flex items-center gap-2 font-code text-xs uppercase tracking-widest text-primary">
              <Radio className="h-3.5 w-3.5 animate-pulse text-primary" />
              <span>Live Development Track</span>
            </div>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              {siteContent.home.currentlyBuilding.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              {siteContent.home.currentlyBuilding.subtitle}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.home.currentlyBuilding.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between rounded-xl border border-border/70 bg-[#090e1a] p-5 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-code text-[10px] uppercase tracking-wider text-muted-foreground">
                      {item.category}
                    </span>
                    <span
                      className={`rounded px-1.5 py-0.5 font-code text-[9px] font-bold ${
                        item.statusType === 'completed'
                          ? 'border border-orange-500/30 bg-orange-950/40 text-orange-400'
                          : item.statusType === 'experimental'
                            ? 'border border-sky-500/30 bg-sky-950/40 text-sky-400'
                            : 'border border-primary/30 bg-primary/10 text-primary'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-foreground">{item.name}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border/60 bg-muted/20 p-4 font-code text-xs text-muted-foreground">
            <span className="font-bold text-foreground">Currently exploring: </span>
            <span className="text-primary">{siteContent.home.currentlyBuilding.exploring}</span>
          </div>
        </div>
      </section>

      {/* 5. SKILLS & TECHNICAL CAPABILITIES */}
      <section id="skills" className="py-20 md:py-28 bg-[#070b16]/60 border-b border-border/70">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <div className="mb-3 flex items-center gap-2 font-code text-xs uppercase tracking-widest text-primary">
              <FileCode2 className="h-3.5 w-3.5" />
              <span>Skill Matrix</span>
            </div>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              {siteContent.home.skills.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              {siteContent.home.skills.subtitle}
            </p>

            {/* Proficiency Legend */}
            <div className="mt-5 flex flex-wrap items-center gap-4 font-code text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                <strong className="text-foreground">Primary:</strong> Core daily toolkit
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <strong className="text-foreground">Working Knowledge:</strong> Production ready
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <strong className="text-foreground">Exploring:</strong> Active R&D / learning
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skillGroupsNew.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  className="flex flex-col rounded-2xl border border-border/70 bg-[#090e1b]/90 p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-3 border-b border-border/50 pb-4">
                    <div className="rounded-xl border border-border/60 bg-muted/40 p-2.5 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-bold text-foreground">{group.title}</h3>
                      <p className="font-code text-xs text-muted-foreground">{group.tagline}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const levelBorder =
                        skill.level === 'primary'
                          ? 'border-orange-500/40 bg-orange-950/20 text-orange-300'
                          : skill.level === 'working'
                            ? 'border-sky-500/40 bg-sky-950/20 text-sky-300'
                            : 'border-amber-500/40 bg-amber-950/20 text-amber-300';

                      const dotColor =
                        skill.level === 'primary'
                          ? 'bg-orange-400'
                          : skill.level === 'working'
                            ? 'bg-sky-400'
                            : 'bg-amber-400';

                      return (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-code text-xs font-medium ${levelBorder}`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ABOUT ME */}
      <section id="about" className="py-20 md:py-28 border-b border-border/70">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            {/* Portrait Card */}
            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-[#090e1b] p-3 shadow-xl">
                <div className="relative overflow-hidden rounded-xl border border-border/60">
                  <Image
                    src="/minepic.png"
                    alt="Andrew Braven portrait"
                    width={900}
                    height={980}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-2 font-code text-[11px] text-muted-foreground">
                  <span>ANDREW BRAVEN</span>
                  <span className="text-primary">KENYA // ENG</span>
                </div>
              </div>
            </div>

            {/* About Copy */}
            <div>
              <div className="mb-3 flex items-center gap-2 font-code text-xs uppercase tracking-widest text-primary">
                <Compass className="h-3.5 w-3.5" />
                <span>Background & Philosophy</span>
              </div>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                {siteContent.home.about.title}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg">
                {siteContent.home.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-6 rounded-xl border-l-2 border-primary bg-primary/5 p-4 font-headline text-base font-semibold text-foreground md:text-lg">
                &ldquo;{siteContent.home.about.mission}&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXPERIENCE / EDUCATION */}
      <section className="py-20 md:py-24 bg-[#070b16]/60 border-b border-border/70">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 flex items-center gap-2 font-code text-xs uppercase tracking-widest text-primary">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Academic & Training Track</span>
            </div>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              {siteContent.home.education.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              {siteContent.home.education.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {siteContent.home.education.items.map((item) => (
              <div
                key={item.institution}
                className="rounded-2xl border border-border/70 bg-[#090e1b]/90 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="font-headline font-bold text-foreground text-lg">{item.institution}</span>
                    <span className="rounded bg-muted/40 border border-border/60 px-2 py-0.5 font-code text-[10px] text-primary">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-3 font-code text-sm font-semibold text-sky-400">{item.credential}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-[#090e1c] p-8 md:p-12 shadow-2xl">
            <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 font-code text-xs uppercase tracking-widest text-primary">
                <Zap className="h-3.5 w-3.5" />
                <span>Initiate Contact</span>
              </div>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
                {siteContent.home.contact.title}
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
                {siteContent.home.contact.statement}
              </p>

              <p className="mt-3 font-mono text-sm text-sky-400">
                {siteContent.home.contact.subtext}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary font-medium text-primary-foreground hover:bg-primary/90">
                  <a href={`mailto:${siteContent.home.contact.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="border-border/80 font-code text-sm">
                  <a href={siteContent.home.contact.github} target="_blank" rel="noreferrer noopener">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>

                <Button asChild variant="secondary" size="lg" className="border border-border/80 font-code text-sm">
                  <a href={siteContent.home.contact.linkedin} target="_blank" rel="noreferrer noopener">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
