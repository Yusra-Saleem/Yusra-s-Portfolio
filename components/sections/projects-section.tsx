"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ProjectCard = ({ project, onClick }: { 
  project: typeof projects[0];
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "hover:shadow-primary/40 hover:shadow-xl  transition-shadow duration-500",
        "group relative overflow-hidden rounded-xl",
        "bg-card/30 backdrop-blur-sm border border-border/50",
        "hover:border-primary transition-all duration-500",
      )}
      onClick={onClick}
      data-aos="fade-up"
    >
      {/* Project Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 translate-y-[60%] group-hover:translate-y-0 transition-transform duration-500">
        <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50 shadow-xl">
          <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-secondary/50 text-xs sm:text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="default" 
              size="sm" 
              className="flex-1"
              onClick={onClick}
            >
              View Details
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              asChild
            >
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              asChild
            >
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-xs text-white font-medium py-1 px-3 rounded-full">
          Featured
        </div>
      )}
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const currentProject = projects.find(p => p.id === selectedProject);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-16 sm:py-20 bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full filter blur-[100px]"
        data-aos="fade-left"
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/10 rounded-full filter blur-[120px]"
        data-aos="fade-right"
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Featured <span className="text-primary" data-aos="fade-up">Projects</span>
            
          </h2>
           <motion.div 
                      className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: 80 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    />
          <p className="text-muted-foreground text-base sm:text-lg" data-aos="fade-up">
            Explore my latest work showcasing creative solutions and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="w-[95vw] sm:w-[90vw] md:max-w-3xl p-0 border-primary h-auto overflow-hidden">
          {currentProject && (
            <div className="relative p-2 xs:p-3 sm:p-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-1 right-1 xs:top-2 xs:right-2 sm:top-3 sm:right-3 z-20 bg-background/80 backdrop-blur-sm rounded-full p-1"
              >
                <X className="h-4 w-4 xs:h-5 xs:w-5" />
              </button>

              <div 
                className="w-full h-[28vh] xs:h-[30vh] sm:h-[35vh] md:h-[40vh] relative rounded overflow-hidden mb-2 xs:mb-3"
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1 xs:space-y-2 sm:space-y-3">
                <h2 
                  className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold"
                >
                  {currentProject.title}
                </h2>
                <p 
                  className="text-2xs xs:text-xs sm:text-sm md:text-base text-muted-foreground"
                >
                  {currentProject.description}
                </p>

                <div>
                  <h3 className="font-semibold text-xs xs:text-sm sm:text-base mb-2 xs:mb-2 sm:mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 xs:gap-2 sm:gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-1.5 xs:px-2 sm:px-3 py-0.5 bg-secondary/50 text-2xs xs:text-xs sm:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div 
                  className="flex flex-row gap-2 xs:gap-3 sm:gap-4 mt-4 xs:mt-4 sm:mt-4"
                >
                  <Button asChild size="sm" className="flex-1 h-7 xs:h-8 sm:h-9 text-2xs xs:text-xs sm:text-sm">
                    <a 
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                      <ExternalLink className="ml-1 h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1 h-7 xs:h-8 sm:h-9 text-2xs xs:text-xs sm:text-sm">
                    <a 
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                      <Github className="ml-1 h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;