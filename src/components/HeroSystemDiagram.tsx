'use client';

import React, { useState } from 'react';
import {
  Activity,
  Cpu,
  Database,
  Globe,
  Layers,
  Radio,
  Server,
  Terminal,
} from 'lucide-react';

export default function HeroSystemDiagram() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const pipelineNodes = [
    {
      id: 'vehicle',
      label: 'VEHICLE',
      sub: 'Physical Asset',
      icon: Layers,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-950/30',
      detail: 'Sensors, CAN bus & battery modules streaming telemetry at 10Hz',
    },
    {
      id: 'device',
      label: 'DEVICE / SENSOR',
      sub: 'ESP32 / Microcontroller',
      icon: Cpu,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-950/30',
      detail: 'Edge filtering, ADC sampling & local buffer queues',
    },
    {
      id: 'mqtt',
      label: 'MQTT / NETWORK',
      sub: 'Protocols & Brokers',
      icon: Radio,
      color: 'text-sky-400',
      border: 'border-sky-500/40',
      bg: 'bg-sky-950/30',
      detail: 'QoS 1 telemetry publish over lightweight TCP/TLS pipe',
    },
    {
      id: 'backend',
      label: 'BACKEND',
      sub: 'Java / Spring Boot',
      icon: Server,
      color: 'text-sky-400',
      border: 'border-sky-500/40',
      bg: 'bg-sky-950/30',
      detail: 'Rule evaluation, alert triggers, RBAC auth & stream ingestion',
    },
    {
      id: 'database',
      label: 'DATABASE',
      sub: 'MySQL + MongoDB',
      icon: Database,
      color: 'text-indigo-400',
      border: 'border-indigo-500/40',
      bg: 'bg-indigo-950/30',
      detail: 'Relational fleet metadata + time-series sensor time logs',
    },
    {
      id: 'application',
      label: 'APPLICATION',
      sub: 'Web / STOMP Dashboard',
      icon: Globe,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-950/30',
      detail: 'Real-time telemetry feeds, live alerts & interactive controls',
    },
  ];

  return (
    <div className="relative w-full rounded-2xl border border-border/80 bg-[#070c17]/90 p-5 shadow-2xl backdrop-blur-md">
      {/* Terminal Title Bar */}
      <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3 font-code text-[11px] text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-primary/20">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-primary" />
          </span>
          <span className="font-semibold text-foreground">SYSTEM ARCHITECTURE ENGINE</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-primary">
          <Activity className="h-3.5 w-3.5 animate-pulse" />
          <span>DATA FLOW: ACTIVE</span>
        </div>
      </div>

      {/* Nodes Pipeline */}
      <div className="flex flex-col gap-2.5">
        {pipelineNodes.map((node, index) => {
          const Icon = node.icon;
          const isSelected = activeStep === index;

          return (
            <React.Fragment key={node.id}>
              <div
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className={`group relative flex items-center justify-between rounded-xl border p-3 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? `${node.border} ${node.bg} ring-1 ring-primary/40`
                    : 'border-border/60 bg-muted/20 hover:border-border hover:bg-muted/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg border border-border/50 p-2 ${node.bg} ${node.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-code text-xs font-bold tracking-wider text-foreground">
                      <span>{node.label}</span>
                    </div>
                    <div className="font-mono text-[11px] text-muted-foreground">{node.sub}</div>
                  </div>
                </div>

                <div className="font-code text-[10px] text-muted-foreground/70">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Arrow Connector between nodes */}
              {index < pipelineNodes.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <div className="flex items-center gap-1 font-code text-[10px] text-muted-foreground/50">
                    <span className="h-2.5 w-[1px] bg-border/80 group-hover:bg-primary" />
                    <span>↓</span>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Telemetry Detail Window */}
      <div className="mt-4 rounded-xl border border-border/70 bg-black/60 p-3 font-code text-xs">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
          <Terminal className="h-3 w-3 text-primary" />
          <span>Pipeline Inspector</span>
        </div>
        <p className="text-muted-foreground text-[11px]">
          {activeStep !== null
            ? pipelineNodes[activeStep].detail
            : 'Hover over any system component above to inspect real-time interface telemetry and protocol contracts.'}
        </p>
      </div>
    </div>
  );
}
