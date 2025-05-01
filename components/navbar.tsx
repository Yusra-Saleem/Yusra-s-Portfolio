"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Code, Home, LayoutGrid, Users, Mail } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Code className="h-8 w-8 text-primary" />
          <h1>
          <span className="font-bold text-xl tracking-tight  ">Yusra <span className="font-bold text-xl tracking-tight text-primary "> Saleem</span></span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="#home"
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 group relative"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 group relative"
          >
            <LayoutGrid className="h-4 w-4" />
            <span>Projects</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 group relative"
          >
            <Users className="h-4 w-4" />
            <span>Testimonials</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 group relative"
          >
            <Mail className="h-4 w-4" />
            <span>Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </nav>
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
            className="text-foreground relative"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-md transition-transform duration-300">
          {/* Close Icon */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-foreground"
          >
            <X className="h-6 w-6" />
          </button>
          {/* Navigation Links */}
          <nav className="container mx-auto px-4 py-4 flex flex-col items-center space-y-6 pt-20">
            <Link
              href="#home"
              onClick={toggleMobileMenu}
              className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2 group relative"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#projects"
              onClick={toggleMobileMenu}
              className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2 group relative"
            >
              <LayoutGrid className="h-5 w-5" />
              <span>Projects</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#testimonials"
              onClick={toggleMobileMenu}
              className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2 group relative"
            >
              <Users className="h-5 w-5" />
              <span>Testimonials</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              onClick={toggleMobileMenu}
              className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2 group relative"
            >
              <Mail className="h-5 w-5" />
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Navbar;