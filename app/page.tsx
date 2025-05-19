"use client";

import dynamic from 'next/dynamic';
import { Suspense, useEffect } from 'react';
import { usePerformanceMonitoring } from '@/hooks/use-performance-monitoring';

const Loader = dynamic(() => import("@/components/loader"));
const HeroSection = dynamic(() => import("@/components/sections/hero-section"));
const AboutSection = dynamic(() => import("@/components/sections/about-section"));
const ProjectsSection = dynamic(() => import("@/components/sections/projects-section"));
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section"));
const SkillsSection = dynamic(() => import("@/components/sections/skills-section"));
const ContactSection = dynamic(() => import("@/components/sections/contact-section"));

export default function Home() {
  usePerformanceMonitoring();

  useEffect(() => {
    // Preload critical assets
    const preloadLinks = [
      { rel: 'preload', href: '/yusras-profile.webp', as: 'image' },
      { rel: 'preload', href: '/loader.webp', as: 'image' },
    ];

    preloadLinks.forEach(link => {
      const linkEl = document.createElement('link');
      Object.entries(link).forEach(([key, value]) => {
        linkEl.setAttribute(key, value);
      });
      document.head.appendChild(linkEl);
    });
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <Loader />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <ContactSection />
      </Suspense>
    </>
  );
}