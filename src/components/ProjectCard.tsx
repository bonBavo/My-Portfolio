import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cpu, ExternalLink, Github, Radio } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: 'BUILDING' | 'EXPERIMENTAL' | 'COMPLETED' | string;
  statusType?: 'building' | 'experimental' | 'completed';
  featured?: boolean;
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
  systemFlow?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  engineeringDecisions?: string[];
  challenges?: string[];
  currentState?: string;
  whatILearned?: string;
  features?: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isMUT002 = project.slug === 'mut-002';
  const isMa3sim = project.slug === 'ma3sim';
  const isFleet = project.slug === 'fleet-management-system';

  const statusVariant =
    project.status.toUpperCase() === 'COMPLETED'
      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
      : project.status.toUpperCase() === 'EXPERIMENTAL'
        ? 'border-sky-500/40 bg-sky-500/10 text-sky-400'
        : 'border-primary/40 bg-primary/10 text-primary';

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border border-border/70 bg-[#090e1a]/90 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_60px_rgba(34,197,94,0.12)]">
      {/* Top Technical Metadata Header */}
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-4 py-2 font-code text-[10px] tracking-wider text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          <span>SYS // {project.slug.toUpperCase().slice(0, 10)}</span>
        </div>
        <span className={`inline-flex items-center rounded border px-2 py-0.5 font-code text-[9px] uppercase tracking-wider font-semibold ${statusVariant}`}>
          {project.status}
        </span>
      </div>

      {/* Visual Component */}
      <div className="relative overflow-hidden border-b border-border/60 bg-[#070b14]">
        {isMUT002 ? (
          <div className="relative flex aspect-[16/9] w-full flex-col items-center justify-center p-6 text-center blueprint-grid-blue">
            <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent opacity-80" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="rounded-xl border border-sky-500/30 bg-sky-950/40 p-3 text-sky-400 shadow-inner">
                <Cpu className="h-8 w-8" />
              </div>
              <p className="font-code text-xs uppercase tracking-[0.2em] text-sky-300">CAD & Chassis Blueprint Architecture</p>
              <p className="max-w-xs font-mono text-[11px] text-muted-foreground">
                EV Spaceframe · BMS Telemetry · High-Torque Powertrain Integration
              </p>
            </div>
            <div className="absolute bottom-2 right-3 font-code text-[9px] text-sky-400/60">
              AUTODESK INVENTOR // BMS V1.0
            </div>
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
            <Image
              src={project.image.src}
              alt={project.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              data-ai-hint={project.image.hint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent opacity-60" />
          </div>
        )}
      </div>

      {/* Card Header */}
      <CardHeader className="space-y-2 p-5 pb-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 font-code text-[10px] text-primary">
            {project.category}
          </Badge>
        </div>
        <CardTitle className="font-headline text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="flex-grow space-y-4 p-5 pt-1">
        <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>

        {/* System Pipeline Bar */}
        {project.systemFlow && (
          <div className="rounded-lg border border-border/70 bg-black/40 p-2.5 font-code text-[11px] text-sky-300">
            <p className="mb-1 text-[9px] uppercase tracking-widest text-muted-foreground">Data Pipeline</p>
            <p className="overflow-x-auto whitespace-nowrap scrollbar-none font-medium">{project.systemFlow}</p>
          </div>
        )}

        {/* Technical Specs List */}
        <div className="space-y-1.5 rounded-lg border border-border/50 bg-muted/20 p-3 font-mono text-[11px] text-muted-foreground">
          <p className="truncate">
            <span className="text-primary font-semibold">CORE:</span> {project.specs.engine}
          </p>
          <p className="truncate">
            <span className="text-sky-400 font-semibold">COMMS:</span> {project.specs.transmission}
          </p>
          <p className="truncate">
            <span className="text-foreground font-semibold">LOGIC:</span> {project.specs.ecu}
          </p>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="mt-auto flex flex-col items-start gap-4 border-t border-border/60 bg-muted/10 p-5 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/80 bg-background/60 px-2 py-0.5 font-code text-[10px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex w-full items-center justify-between gap-3 pt-1">
          <Button asChild size="sm" className="bg-primary/90 text-primary-foreground font-medium hover:bg-primary">
            <Link href={`/projects/${project.slug}`}>
              View Case Study
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>

          {project.githubUrl && (
            <Button asChild variant="outline" size="sm" className="border-border/80 font-code text-xs">
              <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                <Github className="mr-1.5 h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          )}

          {project.liveUrl && (
            <Button asChild variant="ghost" size="sm" className="font-code text-xs text-sky-400 hover:text-sky-300">
              <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
