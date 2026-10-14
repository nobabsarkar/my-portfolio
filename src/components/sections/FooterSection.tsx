"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  MoveUpRight,
  Heart,
} from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const FooterSection = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand & Introduction */}
          <div className="space-y-5">
            <Link href="#home" className="inline-flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Code2 className="size-5" />
              </span>

              <span className="text-xl font-bold tracking-tight">
                NS<span className="text-primary">.dev</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              PERN Stack Developer building modern, responsive, and scalable web
              applications with React, Next.js, TypeScript, and Node.js.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-primary" />
              Rajshahi, Bangladesh · Open to remote opportunities
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em]">
              Explore
              <span className="ml-2 text-primary">Portfolio</span>
            </h3>

            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-x-6 gap-y-2"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between gap-2 rounded-md py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  <span>{link.label}</span>

                  <ArrowUpRight className="size-3.5 shrink-0 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Hiring */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest">
              Let&apos;s Connect
            </h3>

            <p className="mb-5 text-sm leading-6 text-muted-foreground">
              I’m open to full-time opportunities where I can contribute my
              skills, build impactful web applications, and grow as a software
              developer.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href="https://github.com/nobabsarkar"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <FaGithub className="size-4" />
              </Link>

              <Link
                href="https://linkedin.com/in/nobab-sarkar-96b81b350/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <FaLinkedin className="size-4" />
              </Link>

              <Link
                href="https://www.facebook.com/md.nobabsirkar"
                aria-label="View projects"
                className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <FaFacebook className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Nobab Sarkar. All rights reserved.</p>

          <Link
            href="#home"
            className="group inline-flex w-fit items-center gap-2 transition-colors hover:text-primary"
          >
            Back to top
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          <p className="inline-flex items-center gap-1.5">
            Built with <Heart className="size-3.5 fill-primary text-primary" />{" "}
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
