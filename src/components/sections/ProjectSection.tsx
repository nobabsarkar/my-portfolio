"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Info } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import ProjectDetails from "./ProjectDetails";

import citycareImage from "../../../public/images/project1.png";
import rentnestImage from "../../../public/images/project2.png";

const projects = [
  {
    id: 1,
    title: "CityCare",
    subtitle: "Smart City Complain & Service Management Platform",
    description:
      "A full-stack platform where citizens can submit complains, track progress, and pay for approved services.",
    image: citycareImage,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    features: [
      "Role-based authentication and authorization",
      "Citizen complain submission and tracking",
      "Admin complain approval and worker assignment",
      "Online service payment integration",
      "Service completion proof upload",
      "Responsive dashboard interfaces",
    ],
    liveUrl: "https://level2-assignment-7.vercel.app",
    githubUrl: "",
  },
  {
    id: 2,
    title: "RentNest",
    subtitle: "Property Rental Management Platform",
    description:
      "A rental management application that connects tenants and landlords with property, rental request, and payment workflows.",
    image: rentnestImage,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    features: [
      "Tenant, landlord, and admin roles",
      "Property management",
      "Rental request workflow",
      "Rental request status management",
      "Payment integration",
      "Review functionality",
    ],
    liveUrl: "",
    githubUrl: "",
  },
];

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <section id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-1 w-10 rounded-full bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Projects
            </span>
            <span className="h-1 w-10 rounded-full bg-primary" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Here are some projects I have built using modern web technologies,
            focusing on practical features and responsive UI.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.12,
              }}
              className="group overflow-hidden rounded-2xl border bg-card"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <p className="mt-1 text-sm font-medium text-primary">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      variant="secondary"
                      className="rounded-md"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 border-t pt-5">
                  <Button disabled={!project.liveUrl}>
                    {project.liveUrl ? (
                      <Link
                        className="flex items-center gap-1"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="ml-2 size-4" />
                        Live Demo
                      </Link>
                    ) : (
                      <span>
                        Live Demo
                        <ExternalLink className="ml-2 size-4" />
                      </span>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                    <Info className="ml-2 size-4" />
                  </Button>

                  <Button variant="outline" disabled={!project.githubUrl}>
                    {project.githubUrl ? (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="mr-2 size-4" />
                        Code
                        <ArrowUpRight className="ml-1 size-4" />
                      </Link>
                    ) : (
                      <span>
                        <FaGithub className="mr-2 size-4" />
                        Code
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )} */}
      </div>
    </section>
  );
}
