"use client";

import { Suspense, useEffect } from 'react';
import { usePerformanceMonitoring } from '@/hooks/use-performance-monitoring';
import { useScrollOptimization } from '@/hooks/use-scroll-optimization';

import Loader from "@/components/loader";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import SkillsSection from "@/components/sections/skills-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  usePerformanceMonitoring();
  useScrollOptimization();

  useEffect(() => {
    // Optimize performance
    const optimize = () => {
      // Disable animations on mobile for better performance
      if (window.innerWidth < 768) {
        document.documentElement.style.setProperty('--animate-duration', '0s');
      }

      // Enable smooth scroll only on desktop
      document.body.style.scrollBehavior = window.innerWidth > 768 ? 'smooth' : 'auto';
      
      // Reduce motion if user prefers
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animate-duration', '0s');
      }
    };

    optimize();
    window.addEventListener('resize', optimize);
    
    return () => {
      window.removeEventListener('resize', optimize);
      document.body.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <Loader />
      </Suspense>
      <div className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </>
  );
}