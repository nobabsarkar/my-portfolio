import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "../ui/badge";
import { useState } from "react";

const projects = [
  {
    title: "CityCare",
    subtitle: "Smart City Complaint & Service Management",
    description:
      "A full-stack platform that enables citizens to report city problems, track complaints, and pay for approved services. Administrators can assign service workers and monitor work completion.",
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
      "Complaint submission and status tracking",
      "Online payment integration",
      "Service worker assignment and work completion",
      "Image uploads and proof of completed work",
    ],
    liveUrl: "https://level2-assignment-7.vercel.app",
    githubUrl: "",
  },
  {
    title: "RentNest",
    subtitle: "Property Rental Management Platform",
    description:
      "A rental management application connecting tenants and landlords with property listings, rental requests, payment workflows, and dedicated dashboards.",
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
      "Tenant, landlord, and admin dashboards",
      "Property listing management",
      "Rental request approval workflow",
      "Payment integration",
      "Reviews and role-based access",
    ],
    liveUrl: "",
    githubUrl: "",
  },
];

const DialogComponent = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <Dialog
      open={selectedProject !== null}
      onOpenChange={(open) => {
        if (!open) setSelectedProject(null);
      }}
    >
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        {selectedProject && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedProject.title}
              </DialogTitle>

              <DialogDescription>{selectedProject.subtitle}</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-semibold">About the Project</h4>
                <p className="text-sm leading-7 text-muted-foreground">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold">Key Features</h4>
                <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-muted-foreground">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-semibold">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-border pt-4">
                {selectedProject.liveUrl && (
                  <Button>
                    <Link
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <ExternalLink size={15} />
                    </Link>
                  </Button>
                )}

                {selectedProject.githubUrl && (
                  <Button variant="outline">
                    <Link
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={16} />
                      Source Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
