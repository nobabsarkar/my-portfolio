// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowUpRight,
//   CheckCircle2,
//   ShieldCheck,
//   MailCheck,
//   CreditCard,
//   MapPin,
//   Users,
//   ClipboardList,
//   Database,
//   CloudUpload,
//   Globe,
//   Code2,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";
// import { FaGithub } from "react-icons/fa";
// import projectImage1 from "../../../public/images/project1.png";

// const techStack = [
//   "Next.js",
//   "React",
//   "TypeScript",
//   "Tailwind CSS",
//   "shadcn/ui",
//   "TanStack Form",
//   "TanStack Query",
//   "Node.js",
//   "Express.js",
//   "Prisma ORM",
//   "PostgreSQL",
//   "Redis",
//   "JWT",
//   "Cloudinary",
//   "SSLCommerz",
//   "Nodemailer",
// ];

// const features = [
//   {
//     icon: MailCheck,
//     title: "Email Verification",
//     description:
//       "Email-based verification and account activation with secure authentication flows.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "JWT Authentication",
//     description:
//       "Protected routes and role-based access for citizens, service workers, admins, and super admins.",
//   },
//   {
//     icon: ClipboardList,
//     title: " Management",
//     description:
//       "Submit complains with descriptions, locations, and images, then track their status.",
//   },
//   {
//     icon: CreditCard,
//     title: "Online Payments",
//     description:
//       "SSLCommerz sandbox integration for payment processing and transaction tracking.",
//   },
//   {
//     icon: Users,
//     title: "Service Worker Assignment",
//     description:
//       "Authorized admins assign service workers to approved and paid complains.",
//   },
//   {
//     icon: CheckCircle2,
//     title: "Work Completion Proof",
//     description:
//       "Workers update job progress and submit completion descriptions and proof images.",
//   },

//   {
//     icon: Database,
//     title: "Data & Reporting",
//     description:
//       "Structured database models and reporting modules support platform administration.",
//   },
//   {
//     icon: CloudUpload,
//     title: "Image Uploads",
//     description:
//       "Cloudinary integration stores complain images and service completion evidence.",
//   },
// ];

// const workflow = [
//   "Citizen registers and verifies their email",
//   "Submits a complain with location and images",
//   "Admin reviews and approves the complain",
//   "Citizen completes payment when required",
//   "Admin assigns an available service worker",
//   "Worker completes the job and uploads proof",
//   "Citizen can review the completed service",
// ];

// const CityCare = () => {
//   return (
//     <Dialog>
//       <DialogTrigger
//         render={
//           <Button variant="outline" className="cursor-pointer gap-2">
//             <Code2 className="size-4" />
//             View Details
//           </Button>
//         }
//       />

//       <DialogContent className="!w-[90vw] !max-w-[1000px] max-h-[90vh] overflow-y-auto border-white/10 bg-zinc-950 p-0 text-zinc-100">
//         {/* Header */}
//         <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-emerald-500/15 via-zinc-900 to-zinc-950 px-5 py-7 sm:px-8 sm:py-9">
//           <div className="pointer-events-none absolute -right-12 -top-16 size-48 rounded-full bg-emerald-400/10 blur-3xl" />

//           <DialogHeader className="relative space-y-4 text-left">
//             <div className="flex flex-wrap items-center gap-2">
//               <Badge className="border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/10">
//                 Full-Stack Project
//               </Badge>
//             </div>

//             <DialogTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
//               CityCare
//               <span className="text-emerald-400">.</span>
//             </DialogTitle>

//             <DialogDescription className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
//               Smart City Complain & Service Management Platform — a full-stack
//               application designed to help citizens report local problems and
//               coordinate service delivery through a structured, role-based
//               workflow.
//             </DialogDescription>

//             <div className="flex flex-wrap gap-3 pt-1">
//               <Button
//                 nativeButton={false}
//                 render={
//                   <Link
//                     href="https://level2-assignment-7.vercel.app"
//                     target="_blank"
//                     rel="noreferrer"
//                   />
//                 }
//                 className="cursor-pointer gap-2 border   "
//               >
//                 <Globe className="size-4" />
//                 Live Demo
//                 <ArrowUpRight className="size-4" />
//               </Button>

//               <Button
//                 nativeButton={false}
//                 variant="outline"
//                 render={
//                   <Link
//                     href="https://github.com/nobabsarkar/L2-assignment-7"
//                     target="_blank"
//                     rel="noreferrer"
//                   />
//                 }
//                 className="cursor-pointer gap-2 border-zinc-300 bg-white text-zinc-800 transition-all hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
//               >
//                 <FaGithub className="size-4" />
//                 Frontend Code
//                 <ArrowUpRight className="size-4" />
//               </Button>

//               <Button
//                 nativeButton={false}
//                 variant="outline"
//                 render={
//                   <Link
//                     href="https://github.com/nobabsarkar/L2-assignment-6"
//                     target="_blank"
//                     rel="noreferrer"
//                   />
//                 }
//                 className="cursor-pointer gap-2 border-zinc-300 bg-white text-zinc-800 transition-all hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
//               >
//                 <FaGithub className="size-4" />
//                 Backend Code
//                 <ArrowUpRight className="size-4" />
//               </Button>
//             </div>
//           </DialogHeader>
//         </div>

//         <div className="space-y-9 px-5 py-7 sm:px-8 sm:py-8">
//           <section>
//             <div className="mb-4 flex items-center justify-between gap-3">
//               <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
//                 Project Preview
//               </h3>
//               <span className="text-xs text-zinc-500">
//                 Replace with your screenshot
//               </span>
//             </div>

//             <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
//               <Image
//                 src={projectImage1}
//                 alt="CityCare application dashboard preview"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 800px"
//                 className="object-cover object-top"
//               />

//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/30 to-transparent" />
//             </div>
//           </section>

//           {/* Overview */}
//           <section className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
//             <div className="space-y-3">
//               <h3 className="text-xl font-semibold">Project Overview</h3>
//               <p className="text-sm leading-7 text-zinc-400">
//                 CityCare brings citizens, service workers, and administrators
//                 together in one platform. Citizens can report civic issues and
//                 follow progress, while administrators manage approvals,
//                 payments, assignments, and service delivery.
//               </p>
//               <p className="text-sm leading-7 text-zinc-400">
//                 The application uses a modular backend architecture and a
//                 responsive frontend to organize the complete complain lifecycle,
//                 from submission to resolution.
//               </p>
//             </div>

//             <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
//               <h3 className="mb-4 text-sm font-semibold text-zinc-200">
//                 Project Highlights
//               </h3>

//               <ul className="space-y-3">
//                 {[
//                   "Role-based dashboards",
//                   "Complain lifecycle management",
//                   "Payment integration",
//                   "Image uploads and proof",
//                   "Protected API endpoints",
//                 ].map((item) => (
//                   <li
//                     key={item}
//                     className="flex items-start gap-2 text-sm text-zinc-400"
//                   >
//                     <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>

//           {/* Features */}
//           <section>
//             <div className="mb-5">
//               <h3 className="text-xl font-semibold">Key Features</h3>
//               <p className="mt-2 text-sm text-zinc-500">
//                 Core functionality and technical capabilities.
//               </p>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-2">
//               {features.map((feature) => {
//                 const Icon = feature.icon;

//                 return (
//                   <div
//                     key={feature.title}
//                     className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]"
//                   >
//                     <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-emerald-400/15 bg-emerald-400/10 text-emerald-400">
//                       <Icon className="size-5" />
//                     </div>

//                     <h4 className="mb-2 font-semibold text-zinc-100">
//                       {feature.title}
//                     </h4>
//                     <p className="text-sm leading-6 text-zinc-400">
//                       {feature.description}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </section>

//           {/* Workflow */}
//           <section>
//             <h3 className="mb-5 text-xl font-semibold">How It Works</h3>

//             <div className="space-y-0">
//               {workflow.map((step, index) => (
//                 <div key={step} className="flex gap-4">
//                   <div className="flex flex-col items-center">
//                     <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-sm font-semibold text-emerald-300">
//                       {index + 1}
//                     </div>

//                     {index !== workflow.length - 1 && (
//                       <div className="my-1 min-h-6 w-px flex-1 bg-white/10" />
//                     )}
//                   </div>

//                   <p className="pb-5 pt-1 text-sm leading-6 text-zinc-300">
//                     {step}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Tech Stack */}
//           <section>
//             <h3 className="mb-4 text-xl font-semibold">Technology Stack</h3>

//             <div className="flex flex-wrap gap-2">
//               {techStack.map((tech) => (
//                 <Badge
//                   key={tech}
//                   variant="outline"
//                   className="border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300"
//                 >
//                   {tech}
//                 </Badge>
//               ))}
//             </div>
//           </section>

//           {/* Architecture / Engineering */}
//           <section className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 sm:p-6">
//             <h3 className="mb-4 text-xl font-semibold">
//               Engineering Highlights
//             </h3>

//             <div className="grid gap-5 sm:grid-cols-2">
//               <div>
//                 <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
//                   <ShieldCheck className="size-4 text-emerald-400" />
//                   Security & Authentication
//                 </h4>
//                 <p className="text-sm leading-6 text-zinc-400">
//                   JWT-based authentication, protected endpoints, role-based
//                   authorization, and email verification workflows.
//                 </p>
//               </div>

//               <div>
//                 <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
//                   <Database className="size-4 text-emerald-400" />
//                   Backend & Data
//                 </h4>
//                 <p className="text-sm leading-6 text-zinc-400">
//                   Express.js APIs, Prisma ORM, PostgreSQL, Redis, and
//                   Cloudinary-based media storage.
//                 </p>
//               </div>

//               <div>
//                 <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
//                   <Code2 className="size-4 text-emerald-400" />
//                   Frontend Engineering
//                 </h4>
//                 <p className="text-sm leading-6 text-zinc-400">
//                   Next.js, TypeScript, reusable UI components, TanStack Form for
//                   form management, and TanStack Query for server-state
//                   management.
//                 </p>
//               </div>

//               <div>
//                 <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
//                   <MapPin className="size-4 text-emerald-400" />
//                   End-to-End Workflow
//                 </h4>
//                 <p className="text-sm leading-6 text-zinc-400">
//                   Complain review, paid-service processing, worker assignment,
//                   completion evidence, and feedback.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default CityCare;

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  Users,
  Building2,
  Database,
  ClipboardList,
  Code2,
  Globe,
  Layers3,
  Star,
  RefreshCw,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

import rentNestImage from "../../../public/images/project2.png";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Node.js",
  "Express.js",
  "Prisma ORM",
  "PostgreSQL",
  "PrismaPg",
  "JWT",
  "SSLCommerz",
];

const features = [
  {
    icon: ShieldCheck,
    title: "Authentication & Authorization",
    description:
      "JWT-based authentication with access and refresh tokens stored in cookies and protected routes.",
  },
  {
    icon: Users,
    title: "Role-Based Dashboards",
    description:
      "Dedicated dashboards and permissions for tenants, landlords, and administrators.",
  },
  {
    icon: Building2,
    title: "Property Management",
    description:
      "Manage rental properties and provide a structured property browsing experience.",
  },
  {
    icon: ClipboardList,
    title: "Rental Request Management",
    description:
      "Manage rental requests through pending, approved, rejected, active, and completed stages.",
  },
  {
    icon: CreditCard,
    title: "Online Payment Integration",
    description:
      "SSLCommerz sandbox integration for rental payment processing and transaction tracking.",
  },
  {
    icon: Star,
    title: "Reviews & Feedback",
    description:
      "Allow tenants to provide feedback and reviews as part of the rental experience.",
  },
];

const workflow = [
  "Users register and sign in securely",
  "Tenants explore available rental properties",
  "Tenants submit rental requests",
  "Landlords review and approve or reject requests",
  "Approved tenants proceed with rental payments",
  "Rental status is updated throughout the process",
  "Tenants can share feedback and reviews",
];

const highlights = [
  "Separate tenant, landlord, and admin dashboards",
  "Secure JWT authentication with refresh tokens",
  "Rental request lifecycle management",
  "SSLCommerz sandbox payment workflow",
  "PostgreSQL database with Prisma ORM",
  "Reusable and responsive UI components",
];

const RentNest = () => {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline" className="cursor-pointer gap-2">
            <Code2 className="size-4" />
            View Details
          </Button>
        }
      />

      <DialogContent className="!w-[90vw] !max-w-[1000px] max-h-[90vh] overflow-y-auto border-white/10 bg-zinc-950 p-0 text-zinc-100">
        {/* Header */}
        <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-primary/15 via-zinc-900 to-zinc-950 px-5 py-7 sm:px-8 sm:py-9">
          <div className="pointer-events-none absolute -right-12 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />

          <DialogHeader className="relative space-y-4 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border border-primary/20 bg-primary/10 text-primary hover:bg-primary/10">
                Full-Stack Project
              </Badge>
            </div>

            <DialogTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
              RentNest
              <span className="text-primary">.</span>
            </DialogTitle>

            <DialogDescription className="max-w-2xl text-justify text-sm leading-7 text-zinc-300 sm:text-base">
              A full-stack rental property management platform that connects
              tenants, landlords, and administrators through property listings,
              rental requests, secure authentication, and online payment
              workflows.
            </DialogDescription>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                nativeButton={false}
                render={
                  <Link
                    href="YOUR_RENTNEST_LIVE_DEMO_URL"
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                className="cursor-pointer gap-2"
              >
                <Globe className="size-4" />
                Live Demo
                <ArrowUpRight className="size-4" />
              </Button>

              <Button
                nativeButton={false}
                variant="outline"
                render={
                  <Link
                    href="YOUR_RENTNEST_FRONTEND_GITHUB_URL"
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                className="cursor-pointer gap-2 border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                <FaGithub className="size-4" />
                Frontend Code
                <ArrowUpRight className="size-4" />
              </Button>

              <Button
                nativeButton={false}
                variant="outline"
                render={
                  <Link
                    href="YOUR_RENTNEST_BACKEND_GITHUB_URL"
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                className="cursor-pointer gap-2 border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                <FaGithub className="size-4" />
                Backend Code
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </DialogHeader>
        </div>

        <div className="space-y-9 px-5 py-7 sm:px-8 sm:py-8">
          {/* Project Preview */}
          <section>
            <div className="mb-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
                Project Preview
              </h3>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
              <Image
                src={rentNestImage}
                alt="RentNest rental property management platform preview"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-top"
              />
            </div>
          </section>

          {/* Project Overview */}
          <section className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Project Overview</h3>

              <p className="text-sm leading-7 text-justify text-zinc-400">
                RentNest is designed to simplify rental property management by
                bringing tenants, landlords, and administrators together in a
                single platform. It organizes property management, rental
                applications, payment processing, and tenant feedback.
              </p>

              <p className="text-sm leading-7 text-justify text-zinc-400">
                The application combines a responsive Next.js frontend with an
                Express.js and TypeScript backend, using Prisma ORM and
                PostgreSQL for structured data management.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="mb-4 text-sm font-semibold text-zinc-200">
                Project Highlights
              </h3>

              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-zinc-400"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <div className="mb-5">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Core functionality and technical capabilities.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-primary/30 hover:bg-primary/[0.04]"
                  >
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>

                    <h4 className="mb-2 font-semibold text-zinc-100">
                      {feature.title}
                    </h4>

                    <p className="text-sm leading-6 text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Workflow */}
          <section>
            <h3 className="mb-5 text-xl font-semibold">How It Works</h3>

            <div className="space-y-0">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </div>

                    {index !== workflow.length - 1 && (
                      <div className="my-1 min-h-6 w-px flex-1 bg-white/10" />
                    )}
                  </div>

                  <p className="pb-5 pt-1 text-sm leading-6 text-zinc-300">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section>
            <h3 className="mb-4 text-xl font-semibold">Technology Stack</h3>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* Engineering Highlights */}
          <section className="rounded-xl border border-white/10 bg-gradient-to-br from-primary/[0.06] to-transparent p-5 sm:p-6">
            <h3 className="mb-4 text-xl font-semibold">
              Engineering Highlights
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="size-4 text-primary" />
                  Security & Authentication
                </h4>

                <p className="text-sm leading-6 text-zinc-400">
                  JWT access and refresh tokens stored in cookies, protected
                  routes, and role-based permissions for different user types.
                </p>
              </div>

              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <Database className="size-4 text-primary" />
                  Backend & Database
                </h4>

                <p className="text-sm leading-6 text-zinc-400">
                  TypeScript, Express.js, Prisma ORM, PostgreSQL, and PrismaPg
                  for API development and relational data management.
                </p>
              </div>

              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <Layers3 className="size-4 text-primary" />
                  Frontend Engineering
                </h4>

                <p className="text-sm leading-6 text-zinc-400">
                  Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui,
                  reusable components, and role-specific dashboards.
                </p>
              </div>

              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <RefreshCw className="size-4 text-primary" />
                  Rental & Payment Workflow
                </h4>

                <p className="text-sm leading-6 text-zinc-400">
                  Rental request status management, approval workflows, and
                  SSLCommerz sandbox integration for online payments.
                </p>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RentNest;
