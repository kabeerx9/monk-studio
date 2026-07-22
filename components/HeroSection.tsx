"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

/* ── Animated counter hook ── */
function useCounter(target: number, duration = 2000, delay = 800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);
  return count;
}

/* ── Floating orb component ── */
const FloatingOrb = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay }}
    className={`absolute rounded-full pointer-events-none ${className}`}
  />
);

const HeroSection = () => {
  const [activePreview, setActivePreview] = useState<"dashboard" | "mobile">("dashboard");
  const projects = useCounter(50, 1800, 1200);
  const satisfaction = useCounter(99, 1800, 1400);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax for the product frame
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [3, -3]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-3, 3]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-28 pb-8 px-4 md:px-6 overflow-hidden bg-[#FAFBFC]"
    >
      {/* ── Ambient background orbs ── */}
      <FloatingOrb
        className="w-[600px] h-[600px] -top-48 -left-48 bg-gradient-to-br from-blue-400/20 via-indigo-400/10 to-transparent blur-[120px] animate-first"
        delay={0}
      />
      <FloatingOrb
        className="w-[500px] h-[500px] -top-20 -right-32 bg-gradient-to-bl from-violet-400/15 via-blue-300/10 to-transparent blur-[100px] animate-third"
        delay={0.3}
      />
      <FloatingOrb
        className="w-[400px] h-[400px] bottom-20 left-1/4 bg-gradient-to-tr from-cyan-400/10 via-blue-400/10 to-transparent blur-[100px] animate-second"
        delay={0.6}
      />

      {/* ── Dot grid pattern ── */}
      <div className="absolute inset-0 -z-10 opacity-[0.4] bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_20%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* ── Text block ── */}
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-16">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-200/80 shadow-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[13px] font-semibold text-gray-600">
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-[-0.04em] text-gray-950 leading-[1.06] mb-7"
          >
            We build software
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#0B57D0] to-violet-600 [-webkit-background-clip:text]">
              people actually use.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-[1.35rem] text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Web apps, SaaS, mobile apps &amp; AI systems — designed to perform,
            engineered to last.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gray-950 text-white pl-7 pr-5 py-4 rounded-full text-[15px] font-semibold hover:bg-gray-800 transition-all duration-200 shadow-xl shadow-gray-950/15 hover:shadow-2xl hover:shadow-gray-950/20 hover:-translate-y-0.5"
            >
              Start a project
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-all">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
            <Link
              href="#portfolio"
              className="flex items-center gap-2 text-[15px] font-semibold text-gray-500 hover:text-gray-900 transition-colors duration-200 px-6 py-4"
            >
              See our work
              <ArrowDown className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* ── Stats ribbon ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-8 md:gap-14 mb-14 md:mb-16"
        >
          {[
            { value: `${projects}+`, label: "Projects shipped" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: `${satisfaction}%`, label: "Satisfaction rate" },
            { value: "2–4 wk", label: "Avg delivery" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-extrabold text-gray-900 tabular-nums">
                {stat.value}
              </span>
              <span className="text-[11px] md:text-xs text-gray-400 font-medium mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Product showcase with 3D tilt ── */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
          style={{ perspective: 1200 }}
        >
          {/* Glow behind the frame */}
          <div className="absolute -inset-8 bg-gradient-to-b from-blue-500/20 via-indigo-500/10 to-transparent rounded-[3rem] blur-3xl pointer-events-none opacity-60" />

          <motion.div
            style={{ rotateX, rotateY }}
            className="relative rounded-2xl md:rounded-[1.25rem] overflow-hidden border border-gray-200/60 bg-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.02)]"
          >
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-[#F7F8FA]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>

              {/* Tab switcher */}
              <div className="flex items-center bg-gray-200/60 rounded-lg p-[3px]">
                {(["dashboard", "mobile"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActivePreview(tab)}
                    className={`relative px-5 py-1.5 rounded-md text-xs font-semibold transition-all duration-300 ${
                      activePreview === tab
                        ? "text-gray-900"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {activePreview === tab && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white rounded-md shadow-sm"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">
                      {tab === "dashboard" ? "Web Platform" : "Mobile App"}
                    </span>
                  </button>
                ))}
              </div>

              <div className="w-[68px]" />
            </div>

            {/* Screenshot area */}
            <div className="relative bg-[#F7F8FA] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePreview}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <Image
                    src={
                      activePreview === "dashboard"
                        ? "/images/dashboard_mockup.png"
                        : "/images/mobile_mockup.png"
                    }
                    alt={
                      activePreview === "dashboard"
                        ? "SaaS Dashboard built by Monk Studio"
                        : "Mobile Application built by Monk Studio"
                    }
                    width={1400}
                    height={900}
                    priority
                    className="w-full h-auto"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom gradient fade */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAFBFC] to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>

        {/* ── Client trust logos ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 md:mt-20 flex flex-col items-center"
        >
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-5">
            Trusted by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-14 gap-y-3 opacity-30 hover:opacity-50 transition-opacity duration-700">
            <span className="text-xl font-extrabold tracking-tight text-[#0B57D0]">CodeAudit</span>
            <span className="text-xl font-bold tracking-tighter text-gray-900">Goreeva</span>
            <span className="text-lg font-black italic text-gray-900">Plateio</span>
            <span className="text-lg font-semibold text-gray-900">Sumukha</span>
            <span className="text-lg font-bold tracking-widest lowercase text-gray-900">akimafilms</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
