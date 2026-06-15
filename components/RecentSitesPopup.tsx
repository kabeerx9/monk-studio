"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";
import { X, ArrowRight, Sparkles } from "lucide-react";

const RecentSitesPopup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Get top 3 recent web projects
  const recentProjects = projects.filter((p) => p.type === "web").slice(0, 3);

  useEffect(() => {
    if (recentProjects.length === 0) return;

    // Show first toast after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Cycle logic
    const cycleInterval = setInterval(() => {
      setIsVisible(false); // hide current
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % recentProjects.length);
        setIsVisible(true); // show next after it has hidden
      }, 1000); // 1s gap between toasts
      
    }, 8000); // visible for 7 seconds, then swap

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleInterval);
    };
  }, [recentProjects.length]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  const project = recentProjects[currentIndex];

  return (
    <AnimatePresence mode="wait">
      {isVisible && project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
          className="fixed bottom-8 left-4 right-4 md:left-8 md:right-auto md:w-[380px] z-[100]"
        >
          <Link 
            href={project.link} 
            target="_blank"
            className="flex items-center gap-3 md:gap-4 bg-gray-950/95 backdrop-blur-xl p-2 md:p-2.5 pr-4 md:pr-6 rounded-2xl md:rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-gray-800 hover:border-gray-600 transition-all duration-300 group cursor-pointer overflow-hidden ring-1 ring-white/10 hover:ring-white/20 w-full"
          >
            {/* Pulsing indicator */}
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-[#0B57D0]"></div>

            {/* Thumbnail */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-full overflow-hidden shrink-0 ml-1 group-hover:scale-105 transition-transform duration-500 ring-2 ring-gray-800">
              <Image 
                src={project.img} 
                alt={project.title}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col flex-1 py-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                </span>
                <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">Recently Launched</span>
              </div>
              <h4 className="text-xs md:text-sm font-bold text-white truncate group-hover:text-blue-400 transition-colors">{project.title}</h4>
            </div>

            {/* Close Button */}
            <button 
              onClick={handleDismiss}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RecentSitesPopup;
