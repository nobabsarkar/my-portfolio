/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";

import Image, { type StaticImageData } from "next/image";

import {
  ArrowRight,
  BadgeCheck,
  Code2,
  GraduationCap,
  TrendingUp,
  Users,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import img2 from "../../../public/images/img2.jpg";
import Link from "next/link";
import github1 from "../../../public/images/github1.png";
import github2 from "../../../public/images/github2.png";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack",
    description: "Web Development",
  },
  {
    icon: Users,
    title: "Team",
    description: "Collaboration",
  },
  {
    icon: TrendingUp,
    title: "Continuous",
    description: "Learning",
  },
];

function ContributionGraph({
  year,
  image,
}: {
  year: string;
  image: StaticImageData;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h4 className="font-semibold">{year}</h4>

        <span className="text-xs text-muted-foreground">GitHub Activity</span>
      </div>

      <div className="relative w-full overflow-hidden rounded-lg border border-border bg-background">
        <Image
          src={image}
          alt={`My original GitHub contribution graph for ${year}`}
          width={900}
          height={180}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-background px-4 py-20 text-foreground sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-1 w-10 rounded-full bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Me
            </span>
            <span className="h-1 w-10 rounded-full bg-primary" />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A little about my journey, the technologies I work with, and my
            passion for building useful web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left column */}
          <div className="min-w-0 space-y-8">
            {/* Introduction */}
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="w-full shrink-0 sm:w-44">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted">
                  {/* Replace with your own photo */}
                  <Image src={img2} alt="Nobab Sarkar" />
                </div>

                <div className="mt-3 flex items-center justify-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium sm:text-sm">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  Open to opportunities
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  Hi, I&apos;m{" "}
                  <span className="text-primary">Nobab Sarkar</span>
                </h3>

                <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground sm:text-base">
                  PERN Stack Developer | Next.js | TypeScript | PostgreSQL
                </p>

                <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  <p className="text-justify">
                    I&apos;m a full-stack developer passionate about building
                    modern, responsive, and user-friendly web applications with
                    React, Next.js, TypeScript, and Node.js.
                  </p>

                  <p className="text-justify">
                    I build scalable, data-driven applications using PostgreSQL
                    and Prisma, with a strong focus on clean code, intuitive UI,
                    and maintainable architecture.
                  </p>

                  <p className="text-justify">
                    I&apos;m eager to collaborate with development teams, solve
                    real-world problems, and grow as a software engineer.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-sm font-semibold">{title}</h4>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    My academic background
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-semibold">
                  Bachelor of Social Science (BSS)
                </h4>
                <p className="mt-1 text-sm text-primary">
                  Political Science (Honours)
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Adarsha Degree College, Katakhali, Rajshahi
                </p>

                <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                  <BadgeCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-500"
                  />
                  <span>Honours completed.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: GitHub contribution graphs */}
          <aside className="min-w-0 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FaGithub size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">GitHub Contributions</h3>
                <p className="text-sm text-muted-foreground">
                  My coding journey, year by year
                </p>
              </div>
            </div>

            <ContributionGraph year="2025" image={github1} />
            <ContributionGraph year="2026" image={github2} />

            <Link
              href="https://github.com/nobabsarkar"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center gap-3">
                {/* <Github size={20} className="shrink-0" /> */}
                <div>
                  <p className="font-semibold">Explore my repositories</p>
                  <p className="text-sm text-muted-foreground">
                    Discover my projects and code
                  </p>
                </div>
              </div>
              <ArrowRight
                size={18}
                className="shrink-0 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
