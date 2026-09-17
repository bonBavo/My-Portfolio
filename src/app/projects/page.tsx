import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import { siteContent } from '@/lib/content';
import { ArrowRight, Briefcase, Sparkles, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: siteContent.projectsPage.subtitle,
};

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-primary/25 bg-primary/5 p-3 text-primary">
            <Briefcase className="h-6 w-6" />
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {siteContent.projectsPage.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{siteContent.projectsPage.subtitle}</p>
          <div className="mt-6 inline-flex rounded-full border border-border/60 bg-muted/30 px-4 py-2 text-sm text-foreground/80">
            {projects.length} featured projects
          </div>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="group relative overflow-hidden rounded-[30px] border border-primary/20 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.25),transparent_25%),linear-gradient(135deg,#0f172a_0%,#111827_45%,#0b1120_100%)] p-7 shadow-[0_35px_80px_rgba(15,23,42,0.25)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
                Studio platform
              </span>
              <Sparkles className="h-5 w-5 text-primary" />
            </div>

            <div className="mt-6 max-w-xl">
              <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">BonRaccoon Studios</p>
              <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight text-white md:text-4xl">
                Premium games, culture, and a studio experience built to scale.
              </h2>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              A Rockstar-inspired studio web platform designed to showcase games, creative work, and a strong brand presence while pairing a polished front-end with a separate Spring Boot admin and content layer.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['TanStack Start', 'Spring Boot', 'Admin Dashboard', 'Game Showcase', 'CMS', 'JWT'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Link href="/projects/bonraccoon-studios-webapp" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:translate-x-0.5">
                Open case study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-amber-300/20 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),transparent_30%),linear-gradient(180deg,#0f172a_0%,#111827_100%)] p-6 shadow-[0_30px_90px_rgba(15,23,42,0.22)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-200">
                Prototype
              </span>
              <Zap className="h-5 w-5 text-amber-200" />
            </div>

            <div className="mt-6 flex items-center justify-center rounded-[24px] border border-white/10 bg-slate-950/40 p-4">
              <Image src="/nganya-logo.png" alt="Nganya logo" width={420} height={200} className="h-auto w-full max-w-[360px]" priority />
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.26em] text-amber-200/80">Nganya</p>
              <h2 className="mt-3 font-headline text-2xl font-bold tracking-tight text-white">Kenyan transport simulator prototype</h2>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              A prototype-first concept exploring matatu and nganya culture, route systems, and urban transport energy through a more authentic Kenyan lens.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {['Prototype', 'Kenyan Culture', 'Simulation', 'Game Design', 'Systems Thinking'].map((tag) => (
                <span key={tag} className="rounded-full border border-amber-200/15 bg-amber-200/5 px-2.5 py-1 text-[10px] font-medium text-amber-100">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3">
              <Link href="/projects/ma3sim" className="inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/5 px-4 py-2 text-sm font-semibold text-amber-100 transition-colors hover:bg-amber-200/10">
                View prototype
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
