"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  LoaderCircle,
} from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    title: "Email Me",
    value: "nobabsarkar2020@gmail.com",
    description: "For job opportunities and inquiries",
    href: "mailto:nobabsarkar2020@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "Connect professionally",
    description: "Let's connect and grow together",
    href: "https://linkedin.com/in/nobab-sarkar-96b81b350/",
    icon: LiaLinkedin,
  },
  {
    title: "GitHub",
    value: "Explore my projects",
    description: "Check out my code and repositories",
    href: "https://github.com/nobabsarkar",
    icon: BsGithub,
  },
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (
      !payload.name ||
      !payload.email ||
      !payload.subject ||
      !payload.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send your message.");
      }

      toast.success(
        result.message || "Your message has been sent successfully!",
      );

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute left-0 top-20 -z-10 size-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 size-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <MessageSquare className="size-4" />
            Get In Touch
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Let&apos;s Work <span className="text-primary">Together</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
            I&apos;m open to full-time opportunities, internships, and
            collaborations. If you&apos;re looking for a dedicated PERN Stack
            Developer, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Left: Contact Information */}
          <div className="flex flex-col">
            <div className="mb-7">
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Let&apos;s start a conversation
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Have a job opportunity, project idea, or just want to connect?
                Feel free to reach out. I&apos;ll be happy to hear from you.
              </p>
            </div>

            {/* Availability */}
            <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <span className="relative flex size-3 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-40" />
                <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
              </span>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  Open to Opportunities
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Available for suitable developer roles
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("https://");

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-5"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 truncate text-sm text-muted-foreground">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                );
              })}
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-primary" />
              <span>Rajshahi, Bangladesh · Open to Remote Opportunities</span>
            </div>

            <div className="mt-8 hidden items-center gap-2 text-sm text-muted-foreground lg:flex">
              <ArrowDownRight className="size-4 text-primary" />
              <span>Have an opportunity in mind? Send me a message.</span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8 lg:p-9">
            <div className="mb-7">
              <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="size-5" />
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Send me a message
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Fill out the form below to get in touch with me.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Your Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="Name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    className="h-11 bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className="h-11 bg-background"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input
                  id="contact-subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  maxLength={150}
                  className="h-11 bg-background"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="contact-message">Your Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Description..."
                  required
                  minLength={5}
                  maxLength={5000}
                  rows={6}
                  className="resize-y bg-background"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-11 w-full cursor-pointer gap-2 font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                    <ArrowUpRight className="size-4" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs leading-5 text-muted-foreground">
                Your message will be sent directly to my email inbox.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
