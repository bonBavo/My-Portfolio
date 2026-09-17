import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, CircleDot, Github, Layers3, Sparkles } from 'lucide-react';
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
      title: 'Project not found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectLookup[slug];

  if (!project) {
    notFound();
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to projects
            </Link>
          </Button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border/70 bg-card/80 shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative">
              <Image
                src={project.image.src}
                alt={project.title}
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-8 md:p-10">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{project.category}</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-foreground/80">
                  <CircleDot className="h-2.5 w-2.5 fill-primary text-primary" />
                  {project.status}
                </span>
              </div>

              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">{project.title}</h1>
              <p className="mt-5 text-base leading-7 text-muted-foreground">{project.description}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border/60 bg-muted/30 px-2.5 py-1 text-xs font-medium text-foreground/80">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Button asChild>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild variant="outline">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                      Live demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl border border-border/60 bg-card/70 p-7">
            <div className="mb-4 flex items-center gap-3 text-primary">
              <Sparkles className="h-5 w-5" />
              <h2 className="font-headline text-2xl font-semibold text-foreground">Overview</h2>
            </div>
            <p className="text-base leading-7 text-muted-foreground">{project.problem}</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{project.solution}</p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-card/70 p-7">
            <div className="mb-4 flex items-center gap-3 text-primary">
              <Layers3 className="h-5 w-5" />
              <h2 className="font-headline text-2xl font-semibold text-foreground">Architecture</h2>
            </div>
            <p className="text-base leading-7 text-muted-foreground">{project.architecture}</p>
          </section>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-border/60 bg-card/70 p-7">
            <h2 className="font-headline text-2xl font-semibold text-foreground">Key features</h2>
            <ul className="mt-5 space-y-3 text-base text-muted-foreground">
              {project.features?.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-border/60 bg-card/70 p-7">
            <h2 className="font-headline text-2xl font-semibold text-foreground">Technical decisions</h2>
            <div className="mt-5 space-y-4 text-base text-muted-foreground">
              {project.highlights?.map((item) => (
                <div key={item} className="rounded-xl border border-border/60 bg-muted/25 p-3">
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
