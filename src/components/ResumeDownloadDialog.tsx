'use client';

import { Download, FileText, FileType, FileUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function ResumeDownloadDialog({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg" className={className}>
          <Download className="mr-2 h-4 w-4" />
          Download CV
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg border border-border/60 bg-card/95 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-md">
        <DialogHeader className="space-y-3">
          <div className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 p-2 text-primary">
            <FileText className="h-5 w-5" />
          </div>
          <DialogTitle className="font-headline text-2xl text-foreground">Download my CV</DialogTitle>
          <DialogDescription className="text-sm leading-6 text-muted-foreground">
            Choose the format that best suits your workflow. The profile is tailored to backend engineering, embedded systems, and product-focused software work.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 grid gap-3">
          <a
            href="/andrew-braven-cv.pdf"
            download
            className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-left transition-colors hover:border-primary/40 hover:bg-primary/5"
          >
            <span className="flex items-center gap-3 text-foreground">
              <FileUp className="h-4 w-4 text-primary" />
              PDF document
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">.pdf</span>
          </a>

          <a
            href="/andrew-braven-cv.docx"
            download
            className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-left transition-colors hover:border-primary/40 hover:bg-primary/5"
          >
            <span className="flex items-center gap-3 text-foreground">
              <FileType className="h-4 w-4 text-primary" />
              Word document
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">.docx</span>
          </a>

          <a
            href="/andrew-braven-cv.txt"
            download
            className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-left transition-colors hover:border-primary/40 hover:bg-primary/5"
          >
            <span className="flex items-center gap-3 text-foreground">
              <FileText className="h-4 w-4 text-primary" />
              Plain text copy
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">.txt</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
