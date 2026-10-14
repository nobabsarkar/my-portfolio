"use client";

import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  BrainCircuit,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { DiCss3 } from "react-icons/di";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  //   SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiMongoose,
  SiRedux,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Monitor,
    skills: [
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: DiCss3, color: "text-blue-500" },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing secure APIs and scalable server-side applications.",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-foreground" },
      { name: "REST APIs", icon: Code2, color: "text-primary" },
      //   { name: "Authentication", icon: CheckCircle2, color: "text-emerald-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      {
        name: "JWT Authentication",
        icon: ShieldCheck,
        color: "text-amber-500",
      },
    ],
  },
  {
    title: "Database & ORM",
    description: "Managing structured and document-based application data.",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500" },
      { name: "Prisma ORM", icon: SiPrisma, color: "text-foreground" },
      { name: "Mongoose", icon: SiMongoose, color: "text-red-500" },
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Using modern tools for development, testing, and collaboration.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-foreground" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Figma", icon: SiFigma, color: "text-purple-500" },
    ],
  },
];

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-1 w-10 rounded-full bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Skills
            </span>
            <span className="h-1 w-10 rounded-full bg-primary" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
            Technologies and tools I use to build modern, responsive, and
            scalable web applications with a focus on clean code and great user
            experiences.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-7"
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <CategoryIcon className="size-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {category.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/5"
                      >
                        <SkillIcon
                          className={`size-4 shrink-0 ${skill.color}`}
                        />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
