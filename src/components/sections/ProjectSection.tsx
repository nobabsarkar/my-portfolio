"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import citycareImage from "../../../public/images/project1.png";
import rentnestImage from "../../../public/images/project2.png";
import CityCare from "../dialog/citycare";
import RentNest from "../dialog/rentnest";

export default function ProjectSection() {
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
            Explore my full-stack projects built with modern technologies,
            practical features, and responsive user interfaces.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group overflow-hidden rounded-2xl border bg-card transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="relative aspect-video overflow-hidden bg-muted">
              <Image
                src={citycareImage}
                alt="CityCare project preview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4">
                <Badge className="border border-border/50 bg-background/90 text-foreground backdrop-blur">
                  Full Stack
                </Badge>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">CityCare</h3>

                <p className="mt-1 text-sm font-medium text-primary">
                  Smart City Complain & Service Management Platform
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  A full-stack platform that helps citizens submit complaints,
                  track progress, and pay for approved city services.
                </p>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 border-t pt-5">
                <Button>
                  <Link
                    className="flex items-center gap-1"
                    href="https://level2-assignment-7.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="ml-2 size-4" />
                    Live Demo
                  </Link>
                </Button>

                <CityCare />
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group overflow-hidden rounded-2xl border bg-card transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="relative aspect-video overflow-hidden bg-muted">
              <Image
                src={rentnestImage}
                alt="RentNest project preview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4">
                <Badge className="border border-border/50 bg-background/90 text-foreground backdrop-blur">
                  Full Stack
                </Badge>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">RentNest</h3>

                <p className="mt-1 text-sm font-medium text-primary">
                  Property Rental Management Platform
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  A property rental platform connecting tenants and landlords
                  through property listings, rental requests, payments, and
                  reviews.
                </p>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 border-t pt-5">
                <Button>
                  <Link
                    className="flex items-center gap-1"
                    href="https://level2-assignment-5-cyan.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="ml-2 size-4" />
                    Live Demo
                  </Link>
                </Button>

                <RentNest />
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
