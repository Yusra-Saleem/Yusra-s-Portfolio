"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure loader shows for minimum 7 seconds after page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    // Listen for page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', () => {});
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden px-4"
    >
      {/* Animated background grid - made responsive */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] sm:bg-[size:50px_50px] animate-grid-flow" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 animate-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 1}px`,
              height: `${Math.random() * 6 + 1}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Glowing circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-20 rounded-full bg-primary/20 blur-xl"
          />
        </div>
      </div>

      {/* Profile Image with Tech Border - adjusted sizes for mobile */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-28 h-28 sm:w-40 sm:h-40 mb-6 sm:mb-8"
      >
        {/* Orbital rings - adjusted for mobile */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-3 sm:-inset-4 border-2 border-dashed border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-6 sm:-inset-8 border-2 border-dashed border-primary/10 rounded-full"
        />
        
        {/* Image container - maintained aspect ratio */}
        <div className="absolute inset-0 rounded-full animate-border bg-gradient-to-r from-primary via-primary/50 to-primary bg-[length:200%_200%]">
          <div className="absolute inset-1 rounded-full overflow-hidden bg-background/80 backdrop-blur-sm">
            <Image
              src="/loader.png"
              alt="Yusra Saleem"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Animated Text - responsive font size */}
      <div className="relative w-full max-w-[320px] sm:max-w-none text-center">
        {/* Container div for the line with fixed width */}
        <div className="relative w-[200px] sm:w-[300px] md:w-[450px] mx-auto top-9 md:top-14">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] absolute  left-0 right-0 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>
        
        {/* Rest of your text animation code */}
        <div className="flex justify-center space-x-1 sm:space-x-3 top-5">
          {["Y", "U", "S", "R", "A", " ", "S", "A", "L", "E", "E", "M"].map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateY: [0, 360],
                transition: {
                  rotateY: {
                    delay: index * 0.1,
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 5
                  }
                }
              }}
              className="text-2xl sm:text-4xl font-bold text-primary relative cursor-default perspective"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Loading Progress Bar - made responsive */}
      <div className="relative mt-8 sm:mt-12 w-[80%] max-w-[12rem]">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 7, ease: "easeInOut" }}
          className="h-0.5 bg-primary/50 rounded-full overflow-hidden"
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-16 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;