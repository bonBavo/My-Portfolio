import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CircleDot, ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: string;
  description: string;
  image: {
    src: string;
    hint: string;
  };
  tags: string[];
  specs: {
    engine: string;
    transmission: string;
    ecu: string;
    chassis: string;
  };
  problem?: string;
  solution?: string;
  architecture?: string;
  features?: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border border-border/60 bg-[linear-gradient(180deg,rgba(15,23,42,0.78),rgba(15,23,42,0.92))] shadow-[0_24px_60px_rgba(15,23,42,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_28px_80px_rgba(249,115,22,0.12)]">
      <div className="relative overflow-hidden rounded-t-xl border-b border-border/60">
        <Image
          src={project.image.src}
          alt={project.title}
          width={1200}
          height={800}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          data-ai-hint={project.image.hint}
        />
      </div>

      <CardHeader className="space-y-4 pb-4">
        <div className="flex items-center justify-between gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="text-primary">{project.category}</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[10px] text-foreground">
            <CircleDot className="h-2.5 w-2.5 fill-primary text-primary" />
            {project.status}
          </span>
        </div>
        <CardTitle className="font-headline text-2xl leading-tight text-foreground">{project.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow space-y-4 pb-4">
        <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>

        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-start gap-2"><span className="font-semibold text-foreground">Engine:</span> {project.specs.engine}</p>
          <p className="flex items-start gap-2"><span className="font-semibold text-foreground">Transmission:</span> {project.specs.transmission}</p>
          <p className="flex items-start gap-2"><span className="font-semibold text-foreground">System:</span> {project.specs.ecu}</p>
          <p className="flex items-start gap-2"><span className="font-semibold text-foreground">Chassis:</span> {project.specs.chassis}</p>
        </div>

        {project.highlights && (
          <ul className="space-y-2 text-sm text-muted-foreground">
            {project.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="mt-auto flex flex-col items-start gap-4 border-t border-border/60 pt-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full border border-border/60 bg-muted/60 px-2.5 py-1 text-[11px] font-medium text-foreground/80">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex w-full items-center justify-between gap-3">
          <Button asChild variant="outline" size="sm">
            <Link href={`/projects/${project.slug}`}>
              View case study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {project.githubUrl && (
            <Button asChild variant="ghost" size="sm">
              <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}

          {project.liveUrl && (
            <Button asChild size="sm">
              <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
