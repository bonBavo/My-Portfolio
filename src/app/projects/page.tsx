import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import { siteContent } from '@/lib/content';
import { ArrowRight, Briefcase, Cpu, Radio, Sparkles, Terminal, Wrench } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Engineering & Software Projects | Andrew Braven',
  description: siteContent.projectsPage.subtitle,
};

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-1 font-code text-xs font-semibold uppercase tracking-wider text-primary">
            <Terminal className="h-3.5 w-3.5" />
            <span>PROJECT CATALOG // ARCHITECTURE & IMPLEMENTATION</span>
          </div>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {siteContent.projectsPage.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            {siteContent.projectsPage.subtitle}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/20 px-4 py-1.5 font-code text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>{projects.length} documented systems & prototypes</span>
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
