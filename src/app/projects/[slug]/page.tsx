import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  CircleDot,
  Cpu,
  ExternalLink,
  Github,
  Layers,
  Lightbulb,
  Radio,
  Server,
  Sparkles,
  Terminal,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';
import { projectLookup, projects } from '@/lib/data';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectLookup[slug];

  if (!project) {
    return {
      title: 'Project not found | Andrew Braven',
    };
  }

  return {
    title: `${project.title} — Technical Case Study | Andrew Braven`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectLookup[slug];

  if (!project) {
    notFound();
  }

  const isMUT002 = project.slug === 'mut-002';

  const statusVariant =
    project.status.toUpperCase() === 'COMPLETED'
      ? 'border-orange-500/40 bg-orange-500/10 text-orange-400'
      : project.status.toUpperCase() === 'EXPERIMENTAL'
        ? 'border-sky-500/40 bg-sky-500/10 text-sky-400'
        : 'border-primary/40 bg-primary/10 text-primary';

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        {/* Back navigation & Metadata banner */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Button asChild variant="outline" size="sm" className="border-border/80 font-code text-xs">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to project catalog
            </Link>
          </Button>

          <div className="flex items-center gap-2 font-code text-xs text-muted-foreground">
            <span>DOC ID: ENG-{project.slug.toUpperCase()}</span>
            <span>·</span>
            <span className="text-primary">SPECIFICATION V2.0</span>
          </div>
        </div>

        {/* Hero Case Study Header Banner */}
        <div className="overflow-hidden rounded-3xl border border-border/80 bg-[#080d1a] shadow-xl">
          <div className="border-b border-border/60 bg-muted/30 px-6 py-3 font-code text-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-semibold text-foreground">{project.category}</span>
            </div>
            <span className={`rounded border px-2.5 py-0.5 font-code text-[10px] font-bold uppercase ${statusVariant}`}>
              {project.status}
            </span>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Visual Canvas */}
            <div className="relative border-b lg:border-b-0 lg:border-r border-border/60 bg-[#060913] flex items-center justify-center overflow-hidden">
              {isMUT002 ? (
                <div className="relative flex aspect-[16/10] w-full flex-col items-center justify-center p-8 text-center blueprint-grid-blue">
                  <div className="rounded-2xl border border-sky-500/40 bg-sky-950/50 p-4 text-sky-400 shadow-inner">
                    <Cpu className="h-12 w-12" />
                  </div>
                  <h3 className="mt-4 font-headline text-xl font-bold text-foreground">
                    MUT 002 EV Platform Schematic
                  </h3>
                  <p className="mt-2 max-w-sm font-mono text-xs text-muted-foreground">
                    Autodesk Inventor CAD Chassis · Custom BMS Microcontroller · Modular 48V-72V Pack Architecture
                  </p>
                  <div className="mt-4 rounded-md border border-sky-500/30 bg-black/60 px-3 py-1 font-code text-[10px] text-sky-300">
                    CAD STATUS: VALIDATED · BMS: BENCH TESTING
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[16/10] w-full bg-black/60">
                  <Image
                    src={project.image.src}
                    alt={project.title}
                    width={1200}
                    height={750}
                    priority
                    className="h-full w-full object-cover"
                    data-ai-hint={project.image.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent opacity-60" />
                </div>
              )}
            </div>

            {/* Quick Summary & Links */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                  {project.title}
                </h1>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border/70 bg-muted/30 px-2.5 py-1 font-code text-xs text-foreground/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-border/50">
                {project.githubUrl && (
                  <Button asChild className="bg-primary text-primary-foreground font-medium hover:bg-primary/90 font-code text-xs">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                      <Github className="mr-2 h-4 w-4" />
                      Repository
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild variant="outline" className="border-border/80 font-code text-xs text-sky-400 hover:text-sky-300">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Platform
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CASE STUDY SECTIONS */}
        <div className="mt-12 space-y-10">
          {/* Section 1: Overview & Problem */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Overview & Problem */}
            <div className="rounded-2xl border border-border/70 bg-[#090e1c] p-6 md:p-8">
              <div className="mb-4 flex items-center gap-2.5 text-primary">
                <AlertTriangle className="h-5 w-5" />
                <h2 className="font-headline text-xl font-bold text-foreground">01. Problem & Context</h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                {project.problem || project.description}
              </p>
            </div>

            {/* Solution & System Flow */}
            <div className="rounded-2xl border border-border/70 bg-[#090e1c] p-6 md:p-8">
              <div className="mb-4 flex items-center gap-2.5 text-sky-400">
                <Workflow className="h-5 w-5" />
                <h2 className="font-headline text-xl font-bold text-foreground">02. System Solution</h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                {project.solution || project.description}
              </p>
              {project.systemFlow && (
                <div className="mt-5 rounded-xl border border-sky-500/30 bg-black/50 p-3 font-code text-xs text-sky-300">
                  <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Architecture Flow</span>
                  {project.systemFlow}
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Architecture & Hardware/Software Specs */}
          <div className="rounded-2xl border border-border/70 bg-[#090e1c] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-2.5 text-primary">
              <Layers className="h-5 w-5" />
              <h2 className="font-headline text-2xl font-bold text-foreground">03. System Architecture & Specs</h2>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground mb-6">
              {project.architecture}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                <span className="font-code text-[10px] uppercase tracking-widest text-primary font-semibold">Engine / Core</span>
                <p className="mt-1 font-mono text-xs text-foreground">{project.specs.engine}</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                <span className="font-code text-[10px] uppercase tracking-widest text-sky-400 font-semibold">Transmission / Comms</span>
                <p className="mt-1 font-mono text-xs text-foreground">{project.specs.transmission}</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                <span className="font-code text-[10px] uppercase tracking-widest text-amber-400 font-semibold">ECU / Logic</span>
                <p className="mt-1 font-mono text-xs text-foreground">{project.specs.ecu}</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                <span className="font-code text-[10px] uppercase tracking-widest text-indigo-400 font-semibold">Chassis / Storage</span>
                <p className="mt-1 font-mono text-xs text-foreground">{project.specs.chassis}</p>
              </div>
            </div>
          </div>

          {/* Section 3: Engineering Decisions & Challenges */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Engineering Decisions */}
            <div className="rounded-2xl border border-border/70 bg-[#090e1c] p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2.5 text-primary">
                <Wrench className="h-5 w-5" />
                <h2 className="font-headline text-xl font-bold text-foreground">04. Engineering Decisions</h2>
              </div>
              <div className="space-y-3">
                {project.engineeringDecisions?.map((decision, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl border border-border/50 bg-muted/15 p-3 text-sm text-muted-foreground">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span>{decision}</span>
                  </div>
                )) || project.highlights?.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl border border-border/50 bg-muted/15 p-3 text-sm text-muted-foreground">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Edge Cases */}
            <div className="rounded-2xl border border-border/70 bg-[#090e1c] p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2.5 text-amber-400">
                <Zap className="h-5 w-5" />
                <h2 className="font-headline text-xl font-bold text-foreground">05. Technical Challenges</h2>
              </div>
              <div className="space-y-3">
                {project.challenges?.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl border border-border/50 bg-muted/15 p-3 text-sm text-muted-foreground">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                    <span>{challenge}</span>
                  </div>
                )) || (
                  <div className="rounded-xl border border-border/50 bg-muted/15 p-3 text-sm text-muted-foreground">
                    Benchmarking performance under peak throughput and isolating physical sensor noise.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section 4: Current State & What I Learned */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Current State */}
            <div className="rounded-2xl border border-border/70 bg-[#090e1c] p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center gap-2.5 text-primary">
                  <Activity className="h-5 w-5" />
                  <h2 className="font-headline text-xl font-bold text-foreground">06. Current Project State</h2>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  {project.currentState || 'Active development. Features and telemetry pipelines verified.'}
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-4 font-code text-xs text-primary">
                STATUS: {project.status} · ACCURATELY DOCUMENTED
              </div>
            </div>

            {/* What I Learned */}
            <div className="rounded-2xl border border-border/70 bg-[#090e1c] p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center gap-2.5 text-sky-400">
                  <BookOpen className="h-5 w-5" />
                  <h2 className="font-headline text-xl font-bold text-foreground">07. What I Learned</h2>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  {project.whatILearned || 'Deepened hands-on systems thinking, engineering discipline, and practical validation across software and hardware boundaries.'}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4 font-code text-xs text-muted-foreground">
                <span>AUTHOR: ANDREW BRAVEN</span>
                <span>VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
