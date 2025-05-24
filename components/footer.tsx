"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-card/30 backdrop-blur-sm pt-20 pb-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background/80 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-y-6 md:gap-6 lg:gap-8 xl:gap-12 mb-12">
          {/* Brand Section */}
          <div className="max-w-md mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-2xl font-bold tracking-tight "
              >
                
          <span>Yusra <span className=" text-primary "> Saleem</span></span>
          
              </motion.div>
            </Link>
            <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
            Creating websites that work beautifully and leave a mark. Let's build something amazing together.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {[
                { icon: Github, href: "https://github.com/Yusra-Saleem", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/yusrasaleem-developer", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/Yusra96215", label: "Twitter" },
                { icon: Mail, href: "yusrasaleem679@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <Link 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:ml-auto md:mr-0 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ x: 4 }}
                  className="w-fit"
                >
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="md:ml-auto md:mr-0 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Karachi, Pakistan
              </p>
              <p>
                <a 
                  href="mailto:hello@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  yusrasaleem679@gmail.com
                </a>
              </p>
             
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="md:ml-auto md:mr-0 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">
              Subscribe to my newsletter for the latest updates and insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-2 py-1.5 md:py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <Button size="sm" className="text-sm px-2 py-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Yusra Saleem. All rights reserved.
            </p>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground"
              onClick={scrollToTop}
            >
              <ArrowUpRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;