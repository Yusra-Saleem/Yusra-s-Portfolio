"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

const SkillCard = ({ skill, index, isVisible }: { 
  skill: typeof skills[0];
  index: number;
  isVisible: boolean;
}) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="800"
      data-aos-once="true"
      className={cn(
        "group relative p-6",
        "bg-gradient-to-br from-background/80 via-background/50 to-background/80",
        "backdrop-blur-xl rounded-2xl",
        "border border-primary/60",
        "hover:border-primary/50",
        "transition-all duration-500",
        "overflow-hidden"
      )}
    >
      {/* Multi-layered glowing effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 via-transparent to-primary/20 blur-xl" />
      </div>

      {/* Animated border glow */}
      <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-primary/50 via-transparent to-primary/50 opacity-0 group-hover:opacity-100 animate-border-flow" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-1 h-1 rounded-full",
              "animate-float-particle opacity-0 group-hover:opacity-100",
              skill.color
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Icon with glow effect */}
        <motion.div 
          className={cn(
            "mb-4 relative",
            "before:absolute before:inset-0 before:blur-xl before:opacity-0 before:group-hover:opacity-100",
            "before:transition-opacity before:duration-500",
            skill.color
          )}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          data-aos="zoom-in"
          data-aos-delay={index * 100 + 200}
        >
          <Icon className="w-12 h-12 relative z-10" />
        </motion.div>
        
        {/* Skill name with color transition */}
        <motion.h3 
          className={cn(
            "text-lg font-semibold mb-2",
            "transition-colors duration-300",
            "group-hover:text-primary"
          )}
          data-aos="fade-up"
          data-aos-delay={index * 100 + 300}
        >
          {skill.name}
        </motion.h3>
        
        {/* Details with stagger animation */}
        <motion.div 
          className="space-y-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: index * 0.1 + 0.3
              }
            }
          }}
          data-aos="fade-up"
          data-aos-delay={index * 100 + 400}
        >
          {skill.details.map((detail, idx) => (
            <motion.p
              key={idx}
              className="text-sm text-muted-foreground/80 group-hover:text-foreground/90 transition-colors duration-300"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
              data-aos="fade-left"
              data-aos-delay={index * 100 + 500 + (idx * 100)}
            >
              {detail}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  const filteredSkills = activeCategory
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-24 relative overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Multiple layered glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[90px] animate-pulse-slow animation-delay-1000" />
        <div className="absolute inset-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[60px] animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header with enhanced glow */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 relative"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span className="relative z-10">Technical</span>{" "}
            <span className="text-primary relative">
              Expertise
              
            </span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          />
        </motion.div>

        {/* Category filters with glow effect */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium",
              "transition-all duration-300 ease-out",
              "border border-primary/20 hover:border-primary",
              "hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]",
              "hover:scale-105 active:scale-95",
              !activeCategory && "bg-primary text-primary-foreground border-primary"
            )}
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            All Skills
          </button>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium",
                "transition-all duration-300 ease-out",
                "border border-primary/20 hover:border-primary",
                "hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]",
                "hover:scale-105 active:scale-95",
                activeCategory === category && "bg-primary text-primary-foreground border-primary"
              )}
              data-aos="zoom-in"
              data-aos-delay={600 + (index * 100)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                index={index}
                isVisible={isInView}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(10px, -20px) scale(1.5); opacity: 0.6; }
        }

        @keyframes border-flow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }

        .animate-float-particle {
          animation: float-particle 3s infinite;
        }

        .animate-border-flow {
          animation: border-flow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;