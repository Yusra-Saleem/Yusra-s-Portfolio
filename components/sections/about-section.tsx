"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Briefcase, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useInView, AnimatePresence } from "framer-motion";

// First, let's define interfaces for our data types
interface Education {
  id: number;
  degree: string;
  school: string;
  year: string;
  description: string;
  achievements: string[];
}

interface Experience {
  id: number;
  role: string;
  company: string;
  year: string;
  description: string;
  achievements: string[];
}

// Update the data arrays with their types
const education: Education[] = [
  {
    id: 1,
    degree: "Intermediate in Commerce (I.Com)",
    school: "Board of Intermediate Education, Karachi",
    year: "2022 - 24",
    description: "Commerce with focus on business and IT",
    achievements: ["Excelled in business subjects", "Top score in Accounts"]
  },
  {
    id: 2,
    degree: "Matriculation (Science)",
    school: "Board of Secondary Education, Karachi",
    year: "2018 - 2020",
    description: "Science stream with strong academic record",
    achievements: ["Good grades in science", "Strong in Physics and Chemistry"]
  }
];

const experience: Experience[] = [
  {
    id: 1,
    role: "Next.js Developer & Student",
    company: "GIAIC (Governor Sindh Initiative)",
    year: "2023 - Present",
    description: "Training Agentic Ai Developement",
    achievements: ["Built full-stack projects", "Senior student leading Next.js projects"]
  },
  {
    id: 2,
    role: "Teaching Assistant (HTML & CSS)",
    company: "Techverse51",
    year: "2024 - Present",
    description: "Helping students learn web development",
    achievements: ["Taught HTML/CSS basics", "Guided real-world mini-projects"]
  }
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden bg-subtle-radial">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full filter blur-[100px] transform rotate-12" data-aos="fade"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-primary/10 rounded-full filter blur-[120px] transform -rotate-12" data-aos="fade"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* About Me Content */}
            <div className="stagger-animate-in" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h2>
          
              <div className="prose prose-lg dark:prose-invert mb-8">
                <p className="text-muted-foreground leading-relaxed">
                I'm a web developer with a strong focus on creating user-friendly websites. I started my journey with an interest in technology, and now I specialize in building responsive, full-stack websites using modern tools.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                I work with HTML, CSS, JavaScript, TypeScript, Python and Next.js to build scalable solutions. My current interest is in Agentic AI, where I explore how AI can be integrated into web development to improve user experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8" data-aos="fade-up">
                <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-primary" />
                  <span>1+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span>35+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>4+ Certifications in IT</span>
                </div>
              </div>

              <Button className="rounded-full group" data-aos="fade-up">
                Download Resume
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Timeline Section */}
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50" data-aos="fade-up">
              <div className="flex gap-4 mb-8">
                <Button
                  variant={activeTab === "education" ? "default" : "outline"}
                  onClick={() => setActiveTab("education")}
                  className="flex-1 rounded-full"
                  
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Education
                </Button>
                <Button
                  variant={activeTab === "experience" ? "default" : "outline"}
                  onClick={() => setActiveTab("experience")}
                  className="flex-1 rounded-full"
                
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Experience
                </Button>
              </div>

              <div className="space-y-8">
                {(activeTab === "education" ? education : experience).map((item, index) => (
                  <div
                    key={item.id}
                    className={cn(
                      "relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border",
                      "animate-in",
                      isVisible && "opacity-100 translate-y-0 delay-[" + (index * 200) + "ms]"
                    )}
                    data-aos="fade-up"
                  >
                    <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                    <div className="bg-card/50 rounded-xl p-6 hover:bg-card/80 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                        <h3 className="text-xl font-bold">
                          {activeTab === "education" 
                            ? (item as Education).degree 
                            : (item as Experience).role}
                        </h3>
                        <span className="text-sm text-muted-foreground">{item.year}</span>
                      </div>
                      <p className="text-primary font-medium mb-2">
                        {activeTab === "education" 
                          ? (item as Education).school 
                          : (item as Experience).company}
                      </p>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;