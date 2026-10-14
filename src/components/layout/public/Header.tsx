"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Code2, Menu, Moon, Sun, X, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    setMounted(true);

    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMobileMenuOpen(false);
  };

  const navClass = (href: string) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
      activeLink === href
        ? "bg-muted text-foreground"
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}

        <Link href="#home" className="inline-flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Code2 className="size-5" />
          </span>

          <span className="text-xl font-bold tracking-tight">
            NS<span className="text-primary">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              aria-current={activeLink === item.href ? "location" : undefined}
              className={navClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            aria-label="Toggle theme"
            className="size-9 cursor-pointer border-border bg-background text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
            disabled={!mounted}
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {!mounted ? (
              <span className="size-[18px]" />
            ) : theme === "dark" ? (
              <Sun className="size-[18px]" />
            ) : (
              <Moon className="size-[18px]" />
            )}
          </Button>

          {/* Resume Button */}
          <Button className="group hidden h-9 cursor-pointer rounded-lg bg-foreground px-4 text-background transition-all duration-200 hover:bg-foreground/85 hover:shadow-md sm:inline-flex">
            <Link
              className="flex items-center"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              Resume
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="size-9 cursor-pointer text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/70 bg-background px-4 py-4 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                aria-current={activeLink === item.href ? "location" : undefined}
                className={navClass(item.href)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Resume Button */}
            <Button className="mt-3 w-full cursor-pointer bg-foreground text-background transition-colors duration-200 hover:bg-foreground/85 sm:hidden">
              <Link
                className="flex items-center"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 size-4" />
                Download Resume
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
