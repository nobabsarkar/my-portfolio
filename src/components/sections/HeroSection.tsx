"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Code2,
  Terminal,
  Database,
  Layers3,
  Server,
  Sparkles,
  Braces,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
];

const codeLines = [
  { number: "01", content: "const developer = {", type: "keyword" },
  { number: "02", content: '  name: "Nobab Sarkar",', type: "string" },
  { number: "03", content: '  role: "Full-Stack Developer",', type: "string" },
  { number: "04", content: "  stack: [", type: "keyword" },
  { number: "05", content: '    "React", "Next.js",', type: "string" },
  { number: "06", content: '    "Node.js", "TypeScript",', type: "string" },
  { number: "07", content: '    "PostgreSQL", "Prisma"', type: "string" },
  { number: "08", content: "  ],", type: "keyword" },
  {
    number: "09",
    content: '  focus: "Building great products"',
    type: "string",
  },
  { number: "10", content: "};", type: "keyword" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-64px)] scroll-mt-20 items-center overflow-hidden bg-background px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-16"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-primary/15 blur-[120px]" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] animate-[pulse_10s_ease-in-out_infinite] rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/[0.07] blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 xl:gap-14">
        <div className="relative z-10 min-w-0 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-600/25 bg-emerald-600/[0.07] px-4 py-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400">
              Available for Opportunities
            </span>
          </div>

          {/* Intro */}
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            HELLO, I&apos;M
          </p>

          {/* Name */}
          <h1 className="text-5xl flex gap-4 font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[76px]">
            Nobab
            <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              Sarkar.
            </span>
          </h1>

          {/* Role */}
          <div className="mt-6 flex items-start gap-3">
            <div className="mt-1 h-12 w-1.5 shrink-0 rounded-full bg-primary" />

            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Full-Stack Web Developer
              </h2>

              <p className="mt-1.5 text-sm font-medium text-muted-foreground sm:text-base">
                Building modern digital experiences
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-[17px]">
            I build modern, responsive, and scalable web applications using
            React, Next.js, Node.js, and TypeScript. I enjoy transforming ideas
            into practical products with clean code, intuitive interfaces, and
            reliable backend architecture.
          </p>

          {/* Technology stack */}
          <div className="mt-7">
            <div className="mb-3 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-primary" />

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-foreground">
                Technologies I Work With
              </p>
            </div>

            <div className="flex max-w-xl flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-primary/15 bg-primary/[0.04] px-3 py-2 text-xs font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group h-12 rounded-xl bg-primary px-6 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
            >
              <Link href="#projects">
                Explore My Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group h-12 rounded-xl border-border bg-background/70 px-6 font-bold transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/[0.05]"
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE: DEVELOPER CODE EDITOR */}
        <div className="relative mx-auto w-full max-w-[510px] animate-in fade-in zoom-in-95 duration-1000 lg:ml-auto">
          {/* Ambient glow */}
          <div className="absolute inset-12 animate-pulse rounded-full bg-primary/20 blur-[90px]" />

          {/* Floating clean code badge */}
          <div className="absolute -right-2 -top-5 z-20 hidden animate-[bounce_5s_ease-in-out_infinite] items-center gap-3 rounded-2xl border border-primary/20 bg-card px-4 py-3 shadow-xl sm:flex">
            <div className="rounded-xl bg-primary p-2 text-primary-foreground">
              <Code2 className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-bold">Clean Code</p>
              <p className="mt-1 text-[10px] text-muted-foreground">
                Built with purpose
              </p>
            </div>
          </div>

          {/* Main editor */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card/95 shadow-2xl shadow-primary/10 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 dark:shadow-black/30">
            {/* Editor top bar */}
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-4 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5">
                <Braces className="h-3.5 w-3.5 text-primary" />

                <span className="text-[11px] font-semibold text-muted-foreground">
                  developer.ts
                </span>
              </div>

              <Terminal className="h-4 w-4 text-muted-foreground" />
            </div>

            {/* Syntax-highlighted code */}
            <div className="overflow-x-auto px-3 py-6 sm:px-5 sm:py-7">
              <div className="min-w-[290px] space-y-1 font-mono text-[10px] leading-7 sm:min-w-0 sm:text-xs">
                {codeLines.map((line, index) => (
                  <div
                    key={line.number}
                    style={{ animationDelay: `${index * 100}ms` }}
                    className="animate-in fade-in slide-in-from-left-2 whitespace-pre duration-500"
                  >
                    <span className="mr-4 inline-block w-5 select-none text-right text-muted-foreground/50">
                      {line.number}
                    </span>

                    <span
                      className={
                        line.type === "string"
                          ? "text-primary"
                          : "text-foreground"
                      }
                    >
                      {line.content}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology summary */}
            <div className="grid grid-cols-3 gap-2 border-t border-border bg-muted/20 p-3 sm:gap-3 sm:p-5">
              <div className="rounded-xl border border-primary/15 bg-primary/[0.04] p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-3">
                <Code2 className="mb-3 h-5 w-5 text-primary" />

                <p className="text-xs font-bold">Frontend</p>

                <p className="mt-1 text-[10px] text-muted-foreground">
                  React · Next.js
                </p>
              </div>

              <div className="rounded-xl border border-primary/15 bg-primary/[0.04] p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-3">
                <Server className="mb-3 h-5 w-5 text-primary" />

                <p className="text-xs font-bold">Backend</p>

                <p className="mt-1 text-[10px] text-muted-foreground">
                  Node · Express
                </p>
              </div>

              <div className="rounded-xl border border-primary/15 bg-primary/[0.04] p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-3">
                <Database className="mb-3 h-5 w-5 text-primary" />

                <p className="text-xs font-bold">Database</p>

                <p className="mt-1 text-[10px] text-muted-foreground">
                  PostgreSQL
                </p>
              </div>
            </div>

            {/* Editor status bar */}
            <div className="flex items-center justify-between border-t border-border bg-muted/40 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2 text-[10px] font-medium text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Ready to build
              </div>

              <span className="text-[10px] font-medium text-muted-foreground">
                TypeScript · UTF-8
              </span>
            </div>
          </div>

          {/* Floating database card */}
          <div className="absolute -bottom-6 -left-2 z-20 hidden animate-[bounce_6s_ease-in-out_infinite] items-center gap-3 rounded-2xl border border-primary/20 bg-card px-4 py-3 shadow-xl sm:flex">
            <div className="rounded-xl bg-primary p-2 text-primary-foreground">
              <Database className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-bold">PostgreSQL + Prisma</p>

              <p className="mt-1 text-[10px] text-muted-foreground">
                Modern data layer
              </p>
            </div>
          </div>

          {/* Floating development badge */}
          <div className="absolute -bottom-5 right-4 z-20 hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-2 shadow-lg sm:flex">
            <Layers3 className="h-4 w-4 text-primary" />

            <span className="text-[10px] font-semibold">
              Full-Stack Development
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary md:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
          Scroll to explore
        </span>

        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
