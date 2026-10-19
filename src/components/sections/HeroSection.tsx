"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Sparkles,
  Code2,
  Database,
  Server,
  Layers3,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

import { Button } from "@/components/ui/button";
import img1 from "../../../public/images/img1.png";

const technologies = [
  {
    name: "React",
    icon: SiReact,
    color: "text-cyan-500",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-foreground",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-600",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-sky-600",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "text-teal-600 dark:text-teal-400",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-64px)] scroll-mt-20 items-center overflow-hidden bg-background px-5 py-16 text-foreground transition-colors duration-300 sm:px-8 lg:px-12 lg:py-20"
    >
      {/* Animation styles */}
      <style jsx global>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFadeRight {
          from {
            opacity: 0;
            transform: translateX(35px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes heroGlow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.08);
          }
        }

        @keyframes heroBadge {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-fade-up {
          opacity: 0;
          animation: heroFadeUp 0.8s ease-out forwards;
        }

        .hero-fade-right {
          opacity: 0;
          animation: heroFadeRight 1s ease-out 0.2s forwards;
        }

        .hero-float {
          animation: heroFloat 5s ease-in-out infinite;
        }

        .hero-glow {
          animation: heroGlow 6s ease-in-out infinite;
        }

        .hero-tech-badge {
          opacity: 0;
          animation: heroBadge 0.5s ease-out forwards;
        }

        .hero-delay-1 {
          animation-delay: 0.15s;
        }

        .hero-delay-2 {
          animation-delay: 0.3s;
        }

        .hero-delay-3 {
          animation-delay: 0.45s;
        }

        .hero-delay-4 {
          animation-delay: 0.6s;
        }

        .hero-delay-5 {
          animation-delay: 0.75s;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-fade-up,
          .hero-fade-right,
          .hero-float,
          .hero-glow,
          .hero-tech-badge {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute -right-32 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/[0.06] blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_80%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">
        {/* LEFT SIDE: INTRODUCTION */}
        <div className="relative z-10 min-w-0">
          {/* Availability */}
          <div className="hero-fade-up mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-600/25 bg-emerald-600/[0.07] px-4 py-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400">
              Available for Opportunities
            </span>
          </div>

          {/* Introduction */}
          <p className="hero-fade-up hero-delay-1 mb-4 flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-muted-foreground">
            <Sparkles className="size-4 text-primary" />
            HELLO, I&apos;M
          </p>

          {/* Name */}
          <h1 className="hero-fade-up hero-delay-2 whitespace-nowrap text-[clamp(2.35rem,6vw,5rem)] font-extrabold leading-[1.1] tracking-tight">
            Nobab{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-primary/60 bg-clip-text text-transparent">
              Sarkar.
            </span>
          </h1>

          {/* Professional role */}
          <div className="hero-fade-up hero-delay-3 mt-6 flex items-start gap-3">
            <div className="mt-1 h-12 w-1.5 shrink-0 rounded-full bg-primary" />

            <div>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Full-Stack Web Developer
              </h2>

              <p className="mt-1.5 text-sm font-medium text-muted-foreground sm:text-base">
                Building modern digital experiences
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="hero-fade-up hero-delay-4 mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-[17px]">
            I build modern, responsive, and scalable web applications using
            React, Next.js, Node.js, and TypeScript. I enjoy transforming ideas
            into practical products with clean code, intuitive interfaces, and
            reliable backend architecture.
          </p>

          {/* Technology icons */}
          <div className="hero-fade-up hero-delay-5 mt-7">
            <div className="mb-4 flex items-center gap-2">
              <Code2 className="size-4 text-primary" />

              <p className="text-xs font-bold uppercase tracking-[0.16em]">
                Technologies I Work With
              </p>
            </div>

            <div className="flex max-w-xl flex-wrap gap-2.5">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    style={{
                      animationDelay: `${0.8 + index * 0.12}s`,
                    }}
                    className="hero-tech-badge group inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-3 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.05]"
                  >
                    <Icon
                      className={`size-4 transition-transform duration-300 group-hover:scale-110 ${tech.color}`}
                    />

                    <span className="text-xs font-semibold sm:text-sm">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action buttons */}
          <div className="hero-fade-up mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#projects">
              <Button
                size="lg"
                className="group h-12 cursor-pointer rounded-xl px-6 font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Explore My Projects
                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link
              href="/images/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Nobab-Sarkar-Resume.pdf"
            >
              <Button
                size="lg"
                variant="outline"
                className="group h-12 cursor-pointer rounded-xl border-border bg-background/70 px-6 font-bold transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/[0.05]"
              >
                <Download className="mr-2 size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download Resume
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE: PORTRAIT */}
        <div className="hero-fade-right relative mx-auto w-full max-w-[510px] lg:ml-auto">
          {/* Portrait background glow */}
          <div className="hero-glow absolute inset-x-8 bottom-8 top-12 rounded-full bg-primary/15 blur-[90px]" />

          {/* Decorative circles */}
          <div className="absolute left-1/2 top-[12%] aspect-square w-[85%] -translate-x-1/2 rounded-full border border-primary/15 bg-gradient-to-br from-primary/10 via-blue-500/[0.06] to-transparent" />

          <div className="absolute left-1/2 top-[17%] aspect-square w-[72%] -translate-x-1/2 rounded-full border border-primary/10" />

          {/* Background-removed image */}
          <div className="relative z-10 mx-auto w-full max-w-[460px]">
            <Image
              src={img1}
              alt="Nobab Sarkar, Full-Stack Web Developer"
              width={600}
              height={600}
              priority
              className="relative z-10 h-auto w-full object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.15)]"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 460px"
            />

            {/* Bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>

          {/* Floating clean code card */}
          <div className="hero-float absolute -left-1 top-[18%] z-30 hidden items-center gap-3 rounded-2xl border border-primary/20 bg-card/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex lg:-left-5">
            <div className="rounded-xl bg-primary p-2 text-primary-foreground">
              <Code2 className="size-5" />
            </div>

            <div>
              <p className="text-xs font-bold">Clean Code</p>
              <p className="mt-1 text-[10px] text-muted-foreground">
                Built with purpose
              </p>
            </div>
          </div>

          {/* Floating scalable apps card */}
          <div
            style={{ animationDelay: "1s" }}
            className="hero-float absolute -right-1 top-[42%] z-30 hidden items-center gap-3 rounded-2xl border border-primary/20 bg-card/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex lg:-right-4"
          >
            <div className="rounded-xl bg-primary p-2 text-primary-foreground">
              <Database className="size-5" />
            </div>

            <div>
              <p className="text-xs font-bold">Scalable Apps</p>
              <p className="mt-1 text-[10px] text-muted-foreground">
                Built for growth
              </p>
            </div>
          </div>

          {/* Technology summary */}
          <div
            style={{ animationDelay: "0.5s" }}
            className="hero-float absolute bottom-[7%] right-0 z-30 hidden w-[205px] space-y-4 rounded-2xl border border-primary/20 bg-card/90 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-right-2"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                <Code2 className="size-5" />
              </div>

              <div>
                <p className="text-xs font-bold">Frontend</p>
                <p className="mt-1 text-[10px] text-muted-foreground">
                  React · Next.js
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                <Server className="size-5" />
              </div>

              <div>
                <p className="text-xs font-bold">Backend</p>
                <p className="mt-1 text-[10px] text-muted-foreground">
                  Node.js · Express
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                <Layers3 className="size-5" />
              </div>

              <div>
                <p className="text-xs font-bold">Database</p>
                <p className="mt-1 text-[10px] text-muted-foreground">
                  PostgreSQL · Prisma
                </p>
              </div>
            </div>
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

        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
