"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github as GitHub, Linkedin, Twitter, ChevronDown } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate particles with random positions and animations
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 20) + 5,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 20 + Math.random() * 10,
    rotate: Math.random() * 360,
  }));

  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4 pt-32 pb-16 sm:pt-20"
    >
      {/* Particle background */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle absolute"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: particle.top,
            left: particle.left,
            opacity: 0.1 + (Math.random() * 0.2),
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10"></div>
      
      {/* Main content */}
      <div className="container mx-auto relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div 
            className="w-full max-w-xl mx-auto lg:mx-0 stagger-animate-in text-center lg:text-left px-4 sm:px-6 lg:px-0"
            style={{ 
              transform: `translateY(${scrollY * 0.1}px)` 
            }}
            data-aos="fade-right"
          >
            <p className="text-primary font-medium mb-3 sm:mb-4 tracking-wide animate-slide-in-right text-sm sm:text-base" data-aos="fade-up" data-aos-delay="100">
              Full-Stack Developer
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight" data-aos="fade-up" data-aos-delay="200">
              Crafting <span className="text-primary">Digital Experiences</span> That Inspire
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="300">
              I build modern, responsive, and high-performance web applications 
              with cutting-edge technologies and a focus on user experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="400">
              <Button size="lg" className="rounded-full w-full sm:w-auto text-sm sm:text-base">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto text-sm sm:text-base" asChild>
                <Link href="#contact">
                  Let's Talk
                </Link>
              </Button>
              <div className="flex items-center gap-4 mt-4 mb-8 sm:mt-0 sm:ml-auto lg:ml-4" data-aos="fade-up" data-aos-delay="500">
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 sm:h-10 sm:w-10" asChild>
                  <Link 
                    href="https://github.com/Yusra-Saleem" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GitHub className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 sm:h-10 sm:w-10" asChild>
                  <Link 
                    href="https://www.linkedin.com/in/yusrasaleem-developer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div 
            className="relative block w-full mt-12 lg:mt-0"
            style={{ 
              transform: `translateY(${-scrollY * 0.05}px)` 
            }}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            {/* Additional decorative squares */}
            <div className="absolute -top-8 right-10 w-6 sm:w-8 h-6 sm:h-8 border-2 border-primary/30 rounded-lg rotate-45 animate-float-slow" data-aos="fade-left" data-aos-delay="200"></div>
            <div className="absolute top-1/4 -left-12 w-4 sm:w-6 h-4 sm:h-6 bg-primary/20 rounded-lg -rotate-12 animate-float-slow delay-200" data-aos="fade-right" data-aos-delay="300"></div>
            <div className="absolute top-1/3 right-0 w-8 sm:w-10 h-8 sm:h-10 border border-primary/40 rounded-lg -rotate-12 animate-pulse" data-aos="fade-left" data-aos-delay="400"></div>
            <div className="absolute bottom-1/4 -left-8 w-6 sm:w-8 h-6 sm:h-8 bg-primary/10 rounded-lg rotate-45 animate-float-slow delay-300" data-aos="fade-right" data-aos-delay="500"></div>
            <div className="absolute -bottom-4 right-1/4 w-4 sm:w-6 h-4 sm:h-6 border-2 border-primary/20 rounded-lg -rotate-12 animate-bounce delay-100" data-aos="fade-up" data-aos-delay="600"></div>
            <div className="absolute top-1/2 -right-10 w-3 sm:w-4 h-3 sm:h-4 bg-primary/30 rounded-lg rotate-45 animate-ping" data-aos="fade-left" data-aos-delay="700"></div>
            
            {/* Main image area with geometric elements */}
            <div className="relative max-w-[500px] mx-auto" data-aos="zoom-in" data-aos-delay="300">
              <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto aspect-square rounded-full bg-seondary overflow-hidden">
                {/* Overlay coding elements */}
                <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
                  <div className="glass-effect rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 w-full max-w-[400px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rotate-6 shadow-lg relative overflow-hidden">
                    <img 
                      src="/yusras-profile.png" 
                      alt="Developer at work" 
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                        <div className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full bg-green-500"></div>
                        <div className="text-[8px] sm:text-[10px] md:text-xs ml-1.5 sm:ml-2 opacity-70">portfolio.tsx</div>
                    </div>
                      <pre className="text-[8px] sm:text-[10px] md:text-xs text-left text-foreground/70 font-mono overflow-hidden">
                      <code>
                        {`const Developer = () => {
  const [skills, setSkills] = useState([
    'Next.js', 'TypeScript',
    'React.js', 'Python',
    'JavaScript',
  ]);
                        
  return (
    <div className="portfolio">
      <h1>Hello, World!</h1>
      {/* Your dream project here*/}
    </div>
  );
};`}


                      </code>
                    </pre>
                    </div>
                  </div>
                </div> 
                
                {/* Decorative elements */}
                <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 -right-2 sm:-right-3 md:-right-4 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 rounded-lg bg-primary rotate-45 opacity-80 shadow-lg"></div>
                <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 -right-2 sm:-right-3 md:-right-4 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 rounded-lg bg-primary rotate-45 opacity-80 shadow-lg"></div>
                <div className="absolute top-8 -left-3 sm:-left-4 md:-left-5 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 rounded-lg border-2 border-primary/50 -rotate-12 backdrop-blur-sm"></div>
                
                {/* Additional corner decorations */}
                <div className="absolute top-1/4 right-0 w-6 sm:w-8 h-6 sm:h-8 rounded-lg border border-primary/30 rotate-45 backdrop-blur-sm"></div>
                <div className="absolute bottom-1/3 -left-2 w-5 sm:w-6 h-5 sm:h-6 rounded-lg bg-primary/20 -rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden sm:block"
        style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className="w-5 h-8 rounded-full border-2 border-foreground flex items-start justify-center p-1">
          <div className="w-1 h-1.5 bg-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;