"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Blocks,
  Check,
  Code2,
  Compass,
  Lightbulb,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const values = [
  {
    icon: Compass,
    title: "Clarity before code",
    description: "We align on the problem, priorities, and success criteria before deciding what to build.",
  },
  {
    icon: Users,
    title: "Collaboration by default",
    description: "Frequent updates and shared decisions keep every project moving in the right direction.",
  },
  {
    icon: ShieldCheck,
    title: "Quality that lasts",
    description: "We design dependable foundations that are secure, maintainable, and ready to evolve.",
  },
];

const capabilities = [
  "Product strategy and MVP planning",
  "UI/UX design and prototyping",
  "Web and mobile development",
  "SaaS platforms and internal tools",
  "E-commerce experiences",
  "Ongoing optimization and support",
];

const steps = [
  { number: "01", icon: MessageSquareText, title: "Understand", description: "We learn about your goals, users, constraints, and the opportunity behind the idea." },
  { number: "02", icon: Lightbulb, title: "Shape", description: "We turn the brief into a focused roadmap, clear user experience, and practical delivery plan." },
  { number: "03", icon: Code2, title: "Build", description: "Design and engineering move together through fast, visible iterations and regular feedback." },
  { number: "04", icon: Rocket, title: "Launch & improve", description: "We help release with confidence, learn from real use, and improve what matters next." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-gray-900 selection:bg-[#0B57D0] selection:text-white">
      <Navbar />

      <section className="relative px-4 pb-24 pt-36 md:px-6 md:pb-32 md:pt-44">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/70 blur-[100px]" />

        <div className="mx-auto max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-[#0B57D0]">
            <Sparkles className="h-4 w-4" /> About Monk Studio
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="mx-auto max-w-5xl text-5xl font-black leading-[1.05] tracking-[-0.04em] text-gray-950 md:text-7xl lg:text-8xl">
            We turn ambitious ideas into{" "}
            <span className="bg-gradient-to-r from-blue-600 to-[#0B57D0] bg-clip-text text-transparent">useful digital products.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }} className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Monk Studio is a digital product studio helping businesses move from early ideas to polished, scalable experiences. We bring strategy, design, and engineering together in one focused partnership.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gray-950 px-7 text-base font-bold text-white shadow-xl shadow-gray-900/10 transition-transform hover:-translate-y-0.5">
              Start a project <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/#portfolio" className="inline-flex h-14 items-center justify-center rounded-full border border-gray-200 bg-white px-7 text-base font-bold text-gray-800 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-[#0B57D0]">
              Explore our work
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#0B57D0]">What we believe</p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-gray-950 md:text-6xl">Good products feel simple because the thinking behind them is not.</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] md:p-12">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#0B57D0]"><Blocks className="h-7 w-7" /></div>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">Our work starts with understanding the real challenge—not jumping straight to a feature list. From there, we make thoughtful choices, reduce unnecessary complexity, and build around the people who will actually use the product.</p>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">The result is a digital experience that looks considered, works reliably, and supports the next stage of your business.</p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#0B57D0]">How we work</p>
            <h2 className="text-4xl font-black tracking-[-0.03em] text-gray-950 md:text-6xl">A partner for the whole journey.</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">We keep the process transparent, practical, and centered on making meaningful progress.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.article key={value.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_12px_50px_rgba(15,23,42,0.06)] md:p-10">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#0B57D0]"><Icon className="h-7 w-7" /></div>
                  <h3 className="text-2xl font-black tracking-tight text-gray-950">{value.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-24 text-white md:px-6 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-blue-400">What we do</p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] md:text-6xl">One studio, from first sketch to final release.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">Whether you are validating a new idea or improving an established product, we bring the skills needed to make it clear, usable, and ready for real-world growth.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div key={capability} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-400"><Check className="h-4 w-4" /></span>
                <span className="font-semibold leading-relaxed text-gray-200">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl md:mb-20">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#0B57D0]">Our process</p>
            <h2 className="text-4xl font-black tracking-[-0.03em] text-gray-950 md:text-6xl">Clear steps. Shared momentum.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-200 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="bg-white p-7 md:p-9">
                  <div className="mb-12 flex items-center justify-between"><span className="text-sm font-black tracking-[0.2em] text-gray-300">{step.number}</span><Icon className="h-6 w-6 text-[#0B57D0]" /></div>
                  <h3 className="text-2xl font-black tracking-tight text-gray-950">{step.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-6 md:pb-32">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0B57D0] to-blue-700 px-6 py-16 text-center text-white shadow-2xl shadow-blue-900/20 md:px-16 md:py-24">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-blue-100">Let&apos;s build what&apos;s next</p>
            <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-[-0.03em] md:text-6xl">Have an idea worth moving forward?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">Tell us what you are working on. We will help you find the clearest path from idea to launch.</p>
            <Link href="/contact" className="group mt-9 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 font-bold text-gray-950 shadow-xl transition-transform hover:-translate-y-0.5">
              Start a conversation <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
