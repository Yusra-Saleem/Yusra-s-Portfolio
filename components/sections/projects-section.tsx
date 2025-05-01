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
        <DialogContent className="sm:max-w-4xl max-w-full p-4 border-primary">
          {currentProject && (
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
                data-aos="fade"
              >
                <X className="h-6 w-6" />
              </button>

              <div 
                className="aspect-video overflow-hidden rounded-lg mb-4"
                data-aos="zoom-in"
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="object-cover w-full h-full"
                  data-aos="fade-in"
                />
              </div>

              <div className="space-y-4">
                <h2 
                  className="text-xl sm:text-2xl font-bold"
                  data-aos="fade-up"
                >
                  {currentProject.title}
                </h2>
                <p 
                  className="text-muted-foreground text-sm sm:text-base"
                  data-aos="fade-up"
                >
                  {currentProject.description}
                </p>

                <div data-aos="fade-up">
                  <h3 className="font-semibold mb-2" data-aos="fade-up">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-secondary/50 text-sm rounded-full"
                        data-aos="fade-up"
                        data-aos-delay={index * 50}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div 
                  className="flex flex-col sm:flex-row gap-4 mt-6"
                  data-aos="fade-up"
                >
                  <Button asChild className="flex-1" data-aos="fade-up">
                    <a 
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Site
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex-1" data-aos="fade-up">
                    <a 
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source Code
                      <Github className="ml-2 h-4 w-4" />
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