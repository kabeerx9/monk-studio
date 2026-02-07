"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { 
  Menu, X, ArrowRight, ArrowUpRight, Mail, Phone, MapPin, 
  Instagram, Twitter, Linkedin, Github, ChevronRight, ExternalLink,
  Code2, Palette, Lightbulb, Layout, Zap, Sparkles, Star,
  Database, Globe, Smartphone, Cpu, Layers, GitBranch, Container,
  Server, Cloud, Shield, Rocket, Target, Users, TrendingUp,
  Award, Clock, CheckCircle2, Play, Pause
} from "lucide-react";

// Project data with real links and Unsplash images
const projects = [
  {
    id: 1,
    title: "Sumukha Sports Arena",
    category: "Sports Complex",
    description: "Modern sports facility website with booking system and event management",
    tags: ["Next.js", "Booking", "CMS"],
    link: "https://www.sumukhasportsarena.in/",
    color: "#D4AF37",
    year: "2024",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
  },
  {
    id: 2,
    title: "Voice AI Solution",
    category: "AI Technology",
    description: "Voice AI platform with natural language processing and automation",
    tags: ["React", "AI/ML", "API"],
    link: "https://solution-smoky.vercel.app/",
    color: "#1A1A1A",
    year: "2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    id: 3,
    title: "Manthan Hotel",
    category: "Hospitality",
    description: "Luxury hotel and resort website with immersive visual experience",
    tags: ["Next.js", "WebGL", "CMS"],
    link: "https://manthan-indol.vercel.app/",
    color: "#D4AF37",
    year: "2024",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
  },
  {
    id: 4,
    title: "Strutura",
    category: "Landing Page",
    description: "High-converting landing page for construction and architecture firm",
    tags: ["React", "Animations", "SEO"],
    link: "https://strutura-two.vercel.app/",
    color: "#1A1A1A",
    year: "2024",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
  },
  {
    id: 5,
    title: "Akima Films",
    category: "Video Production",
    description: "Portfolio website for video production and editing studio",
    tags: ["Next.js", "Video", "Gallery"],
    link: "https://akimafilms.com/",
    color: "#D4AF37",
    year: "2024",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
  },
  {
    id: 6,
    title: "Goreeva",
    category: "Software Platform",
    description: "Enterprise software platform with discussion and collaboration tools",
    tags: ["React", "Node.js", "Real-time"],
    link: "https://goreeva.com/",
    color: "#1A1A1A",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  }
];

const mobileApps = [
  {
    id: 1,
    title: "Goreeva Discussion",
    platform: "Android",
    description: "Collaborative discussion app for team communication",
    link: "https://play.google.com/store/apps/details?id=com.goreeva.discussion",
    color: "#D4AF37",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
  },
  {
    id: 2,
    title: "Goreeva Native",
    platform: "Android",
    description: "Native mobile experience for Goreeva platform",
    link: "https://play.google.com/store/apps/details?id=com.goreeva_native",
    color: "#1A1A1A",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
  }
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies. From landing pages to complex platforms.",
    features: ["Next.js & React", "Full-Stack Solutions", "API Integration", "Performance Optimization"]
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Strategic branding that captures your essence and resonates with your audience. Complete visual identity systems.",
    features: ["Logo Design", "Brand Guidelines", "Visual Systems", "Print & Digital"]
  },
  {
    icon: Lightbulb,
    title: "Digital Strategy",
    description: "Data-driven strategies to accelerate your digital growth and maximize ROI across all channels.",
    features: ["Market Research", "Growth Strategy", "Analytics", "Conversion Optimization"]
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "User-centered design that delights and converts. Beautiful interfaces backed by solid research.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  }
];

const techStack = [
  { name: "Next.js", icon: "⚡", category: "Framework" },
  { name: "React", icon: "⚛️", category: "Library" },
  { name: "TypeScript", icon: "📘", category: "Language" },
  { name: "Node.js", icon: "🟢", category: "Runtime" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "AWS", icon: "☁️", category: "Cloud" },
  { name: "Docker", icon: "🐳", category: "DevOps" },
  { name: "Figma", icon: "🎨", category: "Design" },
  { name: "Git", icon: "📦", category: "Version Control" }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and target audience through comprehensive research.",
    icon: Target,
    duration: "1-2 weeks"
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on insights, we develop a tailored strategy outlining the roadmap for your digital success.",
    icon: Lightbulb,
    duration: "1 week"
  },
  {
    number: "03",
    title: "Design",
    description: "Our designers create stunning visuals and intuitive user experiences that align with your brand.",
    icon: Palette,
    duration: "2-3 weeks"
  },
  {
    number: "04",
    title: "Development",
    description: "We bring designs to life with clean, scalable code using the latest technologies and best practices.",
    icon: Code2,
    duration: "3-8 weeks"
  },
  {
    number: "05",
    title: "Launch",
    description: "After rigorous testing, we launch your project and ensure everything runs smoothly.",
    icon: Rocket,
    duration: "1 week"
  }
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Sumukha Sports",
    content: "MediaMonk transformed our online presence completely. The booking system they built increased our reservations by 150%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
  },
  {
    name: "James Chen",
    role: "Founder, Akima Films",
    content: "Exceptional work on our portfolio site. The attention to detail and animation quality exceeded our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
  },
  {
    name: "Emma Watson",
    role: "Director, Goreeva",
    content: "They delivered both our web platform and mobile apps flawlessly. Professional team with excellent communication.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
  }
];

const stats = [
  { number: 10, suffix: "+", label: "Projects Delivered" },
  { number: 8, suffix: "+", label: "Happy Clients" },
  { number: 2, suffix: "", label: "Mobile Apps" },
  { number: 100, suffix: "%", label: "Success Rate" }
];

const achievements = [
  { icon: Award, label: "Best Web Design", year: "2024" },
  { icon: Star, label: "Top Rated Agency", year: "2024" },
  { icon: TrendingUp, label: "Rapid Growth", year: "2024" },
  { icon: Users, label: "Global Clients", year: "2024" }
];

const navLinks = [
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];

// Animated counter component
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function ArtDecoLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["hero", "work", "process", "services", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus("sent");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FFFEF7] text-[#1A1A1A] overflow-x-hidden">
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 40% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 40%)
          `
        }}></div>
      </motion.div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#FFFEF7]/95 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.a 
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span 
                className="text-2xl lg:text-3xl font-black tracking-wider text-[#1A1A1A]"
                style={{ fontFamily: "Playfair Display" }}
              >
                MEDIAMONK
              </span>
              <motion.div 
                className="absolute -bottom-1 left-0 h-[2px] bg-[#D4AF37]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm uppercase tracking-[0.2em] font-medium transition-colors ${
                    activeSection === item.id ? "text-[#D4AF37]" : "text-[#1A1A1A] hover:text-[#D4AF37]"
                  }`}
                  style={{ fontFamily: "Montserrat" }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D4AF37]"
                      layoutId="navUnderline"
                    />
                  )}
                </motion.button>
              ))}
              
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="bg-[#1A1A1A] text-white px-6 py-3 text-sm uppercase tracking-widest font-medium hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300"
                style={{ fontFamily: "Montserrat" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.button>
            </div>

            <motion.button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-[#FFFEF7] border-t border-[#D4AF37]/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-2xl uppercase tracking-widest font-medium ${
                      activeSection === item.id ? "text-[#D4AF37]" : "text-[#1A1A1A]"
                    }`}
                    style={{ fontFamily: "Playfair Display" }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="mt-4 bg-[#D4AF37] text-[#1A1A1A] px-8 py-4 text-lg uppercase tracking-widest font-bold"
                  style={{ fontFamily: "Montserrat" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Start Project
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section with Enhanced Animations */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-32 right-12 lg:right-24 w-40 h-40 lg:w-48 lg:h-48 border-[3px] border-[#D4AF37]/20 rotate-45"
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{ scale: 1, rotate: 45, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2, type: "spring", stiffness: 100 }}
          />
          <motion.div 
            className="absolute top-48 right-24 lg:right-40 w-16 h-16 lg:w-24 lg:h-24 bg-[#D4AF37]/10 rotate-12"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
          <motion.div 
            className="absolute bottom-40 left-8 lg:left-16 w-20 h-20 lg:w-32 lg:h-32 border-2 border-[#1A1A1A]/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
          
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#D4AF37]/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span 
                  className="inline-block text-[#D4AF37] uppercase tracking-[0.3em] text-xs lg:text-sm mb-6 border border-[#D4AF37]/30 px-4 py-2"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Digital Innovation Studio
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.9] mb-8"
                style={{ fontFamily: "Playfair Display" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Crafting
                </motion.span>
                <br />
                <motion.span
                  className="text-[#D4AF37]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Digital
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Excellence
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-base lg:text-lg text-[#555] mb-10 max-w-lg leading-relaxed"
                style={{ fontFamily: "Montserrat" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                We create stunning digital experiences that drive results. From e-commerce platforms 
                to AI solutions, we bring your vision to life with precision and artistry.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.button
                  onClick={() => scrollToSection("work")}
                  className="group inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300"
                  style={{ fontFamily: "Montserrat" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="group inline-flex items-center gap-3 border-2 border-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
                  style={{ fontFamily: "Montserrat" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </motion.div>

              {/* Animated Stats */}
              <motion.div 
                className="flex gap-8 mt-12 pt-8 border-t border-[#E5E5E5]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {stats.slice(0, 3).map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    <div className="text-2xl lg:text-3xl font-black text-[#D4AF37]" style={{ fontFamily: "Playfair Display" }}>
                      <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-[#666] mt-1" style={{ fontFamily: "Montserrat" }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1, type: "spring" }}
            >
              <motion.div 
                className="relative aspect-square max-w-lg mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 border-[3px] border-[#D4AF37]"
                  animate={{ rotate: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
                
                <div className="absolute inset-4 overflow-hidden">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80" 
                    alt="Creative workspace"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                  />
                  <div className="absolute inset-0 bg-[#F5F3EE]/85" />
                  
                  <div className="relative h-full flex flex-col items-center justify-center p-8">
                    <motion.div 
                      className="relative w-32 h-32 mb-8"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      whileHover={{ rotate: 45, scale: 1.1 }}
                    >
                      <div className="absolute inset-0 border-4 border-[#D4AF37] rotate-45" />
                      <div className="absolute inset-4 bg-[#D4AF37]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-black text-white" style={{ fontFamily: "Playfair Display" }}>
                          M
                        </span>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="text-6xl font-black text-[#1A1A1A]/10 mb-4"
                      style={{ fontFamily: "Playfair Display" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      MM
                    </motion.div>
                    
                    <motion.div 
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-2" style={{ fontFamily: "Montserrat" }}>
                        Est.
                      </p>
                      <p className="text-3xl font-black" style={{ fontFamily: "Playfair Display" }}>
                        2024
                      </p>
                    </motion.div>

                    <div className="absolute bottom-8 left-8 right-8 h-[2px] bg-[#D4AF37]/30" />
                  </div>
                </div>

                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-[#1A1A1A] text-white px-6 py-3"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Montserrat" }}>
                    Production Ready
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          onClick={() => scrollToSection("work")}
        >
          <motion.span 
            className="text-xs uppercase tracking-widest text-[#999]"
            style={{ fontFamily: "Montserrat" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Scroll
          </motion.span>
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-[#D4AF37] flex items-start justify-center p-1"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.div 
              className="w-1.5 h-3 rounded-full bg-[#D4AF37]"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Work Section with Staggered Grid */}
      <section id="work" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-4"
              style={{ fontFamily: "Montserrat" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              Portfolio
            </motion.span>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6"
              style={{ fontFamily: "Playfair Display" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Featured Work
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-[#D4AF37] mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
            <motion.p 
              className="mt-6 text-[#666] max-w-2xl mx-auto"
              style={{ fontFamily: "Montserrat" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Real projects we've delivered for clients across industries. Click any project to visit the live site.
            </motion.p>

            {/* Animated Tab Switcher */}
            <motion.div 
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {["web", "mobile"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab as "web" | "mobile")}
                  className={`relative px-8 py-4 uppercase text-sm tracking-wider font-bold overflow-hidden ${
                    activeTab === tab 
                      ? "text-[#1A1A1A]" 
                      : "text-[#1A1A1A] border-2 border-[#1A1A1A]"
                  }`}
                  style={{ fontFamily: "Montserrat" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeTab === tab && (
                    <motion.div
                      className="absolute inset-0 bg-[#D4AF37]"
                      layoutId="tabBackground"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab === "web" ? `Web Projects (${projects.length})` : `Mobile Apps (${mobileApps.length})`}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === "web" ? (
              <motion.div
                key="web"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                {projects.map((project, i) => (
                  <motion.a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-[#F9F7F0] overflow-hidden cursor-pointer block"
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
                    whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent"
                        initial={{ opacity: 0.3 }}
                        whileHover={{ opacity: 0.8 }}
                      />

                      <motion.div 
                        className="absolute inset-0 bg-[#D4AF37]/90 flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.span 
                          className="text-white uppercase tracking-widest text-sm font-medium mb-4"
                          style={{ fontFamily: "Montserrat" }}
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          Visit Live Site
                        </motion.span>
                        <motion.div
                          className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                        >
                          <ExternalLink className="text-white" size={28} />
                        </motion.div>
                      </motion.div>

                      <div className="absolute top-4 left-4">
                        <motion.span 
                          className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider font-medium"
                          style={{ fontFamily: "Montserrat" }}
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.3 }}
                        >
                          {project.category}
                        </motion.span>
                      </div>

                      <div className="absolute top-4 right-4">
                        <motion.span 
                          className="bg-[#D4AF37] text-white px-3 py-1 text-xs uppercase tracking-wider font-medium"
                          style={{ fontFamily: "Montserrat" }}
                          initial={{ x: 20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.4 }}
                        >
                          {project.year}
                        </motion.span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.5 }}
                        >
                          <h3 
                            className="text-xl font-bold text-white mb-1"
                            style={{ fontFamily: "Playfair Display" }}
                          >
                            {project.title}
                          </h3>
                        </motion.div>
                      </div>
                    </div>

                    <motion.div 
                      className="p-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.6 }}
                    >
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span 
                            key={tag}
                            className="text-[10px] uppercase tracking-wider text-[#999] border border-[#E5E5E5] px-2 py-1"
                            style={{ fontFamily: "Montserrat" }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.7 + tagIndex * 0.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      <p className="text-[#666] text-sm leading-relaxed" style={{ fontFamily: "Montserrat" }}>
                        {project.description}
                      </p>
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="mobile"
                className="grid md:grid-cols-2 gap-6 lg:gap-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                {mobileApps.map((app, i) => (
                  <motion.a
                    key={app.id}
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-[#F9F7F0] overflow-hidden cursor-pointer block"
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
                    whileHover={{ y: -12 }}
                  >
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <motion.img 
                        src={app.image} 
                        alt={app.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent"
                        initial={{ opacity: 0.5 }}
                        whileHover={{ opacity: 0.9 }}
                      />
                      
                      <div className="absolute bottom-6 left-6 right-6">
                        <motion.div 
                          className="w-16 h-16 bg-[#D4AF37] rounded-2xl flex items-center justify-center mb-3 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring" }}
                        >
                          <span className="text-white text-2xl font-black" style={{ fontFamily: "Playfair Display" }}>
                            {app.title.charAt(0)}
                          </span>
                        </motion.div>
                        <motion.h3 
                          className="text-xl font-bold text-white"
                          style={{ fontFamily: "Playfair Display" }}
                        >
                          {app.title}
                        </motion.h3>
                      </div>

                      <motion.div 
                        className="absolute inset-0 bg-[#D4AF37]/90 flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.span 
                          className="text-white uppercase tracking-widest text-sm font-medium mb-4"
                          style={{ fontFamily: "Montserrat" }}
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          View on Play Store
                        </motion.span>
                        <motion.div
                          className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                        >
                          <ExternalLink className="text-white" size={28} />
                        </motion.div>
                      </motion.div>

                      <motion.div 
                        className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="text-xs uppercase tracking-wider font-medium" style={{ fontFamily: "Montserrat" }}>
                          {app.platform}
                        </span>
                      </motion.div>
                    </div>

                    <motion.div 
                      className="p-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-[#666] text-sm leading-relaxed" style={{ fontFamily: "Montserrat" }}>
                        {app.description}
                      </p>
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Tech Stack Marquee Section */}
      <section className="py-16 bg-[#1A1A1A] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs" style={{ fontFamily: "Montserrat" }}>
            Technologies We Use
          </span>
        </motion.div>
        
        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 flex items-center gap-3 bg-[#FFFEF7]/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-[#D4AF37]/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.2)" }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <div>
                  <p className="text-white font-medium" style={{ fontFamily: "Montserrat" }}>
                    {tech.name}
                  </p>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-wider" style={{ fontFamily: "Montserrat" }}>
                    {tech.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 lg:py-32 bg-[#F9F7F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)
            `
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-4"
              style={{ fontFamily: "Montserrat" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              How We Work
            </motion.span>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6"
              style={{ fontFamily: "Playfair Display" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Our Process
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-[#D4AF37] mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <motion.div 
              className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-[#D4AF37]/30 hidden lg:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              style={{ originY: 0 }}
            />

            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 0 ? "" : "lg:text-right"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <div className={`${i % 2 === 0 ? "lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}>
                    <motion.div 
                      className="bg-[#FFFEF7] p-8 lg:p-10 border border-[#E5E5E5] hover:border-[#D4AF37] transition-all duration-500 relative group"
                      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    >
                      <div className={`flex items-start gap-6 ${i % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                        <motion.div 
                          className="relative"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          <div className="w-20 h-20 border-4 border-[#D4AF37] rotate-45 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-300">
                            <step.icon 
                              size={28} 
                              className="text-[#D4AF37] group-hover:text-white transition-colors -rotate-45" 
                            />
                          </div>
                          <motion.div 
                            className="absolute -top-2 -right-2 w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center text-sm font-bold"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                          >
                            {step.number}
                          </motion.div>
                        </motion.div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 
                              className="text-2xl font-bold"
                              style={{ fontFamily: "Playfair Display" }}
                            >
                              {step.title}
                            </h3>
                            <motion.span 
                              className="text-xs text-[#D4AF37] uppercase tracking-wider"
                              style={{ fontFamily: "Montserrat" }}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.2 + 0.4 }}
                            >
                              {step.duration}
                            </motion.span>
                          </div>
                          <p className="text-[#666] leading-relaxed mb-4" style={{ fontFamily: "Montserrat" }}>
                            {step.description}
                          </p>
                          
                          <motion.div 
                            className="h-1 bg-[#D4AF37]/20 rounded-full overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
                          >
                            <motion.div 
                              className="h-full bg-[#D4AF37]"
                              initial={{ width: "0%" }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.2 + 0.7, duration: 1 }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <motion.div 
                    className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                  >
                    <div className="w-6 h-6 bg-[#D4AF37] rounded-full border-4 border-[#FFFEF7] shadow-lg" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-4"
              style={{ fontFamily: "Montserrat" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              What We Do
            </motion.span>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6"
              style={{ fontFamily: "Playfair Display" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Our Services
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-[#D4AF37] mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="group bg-[#FFFEF7] p-8 lg:p-10 border border-[#E5E5E5] hover:border-[#D4AF37] transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}
              >
                <motion.div 
                  className="w-16 h-16 border-2 border-[#D4AF37] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <service.icon 
                    size={28} 
                    className="text-[#D4AF37] group-hover:text-white transition-colors duration-300" 
                  />
                </motion.div>

                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {service.title}
                </h3>
                
                <p className="text-[#666] mb-6 leading-relaxed" style={{ fontFamily: "Montserrat" }}>
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-center gap-3 text-sm text-[#555]"
                      style={{ fontFamily: "Montserrat" }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + idx * 0.05 }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-[#D4AF37]"
                        whileHover={{ scale: 2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#D4AF37]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 40%)
          `
        }}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-4" style={{ fontFamily: "Montserrat" }}>
              Testimonials
            </span>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-6"
              style={{ fontFamily: "Playfair Display" }}
            >
              Client Stories
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -15 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-[#FFFEF7]/5 backdrop-blur-sm border border-[#D4AF37]/20 p-8 lg:p-12"
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <motion.div 
                    className="flex-shrink-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <motion.img 
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-[#D4AF37]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                  </motion.div>
                  
                  <div className="text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.p 
                      className="text-lg lg:text-xl text-gray-300 italic mb-6 leading-relaxed"
                      style={{ fontFamily: "Playfair Display" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      "{testimonials[currentTestimonial].content}"
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="font-bold text-white" style={{ fontFamily: "Montserrat" }}>
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-[#D4AF37] text-sm" style={{ fontFamily: "Montserrat" }}>
                        {testimonials[currentTestimonial].role}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentTestimonial ? "bg-[#D4AF37]" : "bg-[#D4AF37]/30"
                    }`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="ml-4 w-12 h-12 border border-[#D4AF37]/50 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 bg-[#F9F7F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.label}
                className="text-center p-6 bg-[#FFFEF7] border border-[#E5E5E5] hover:border-[#D4AF37] transition-all duration-300 group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 border-2 border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <achievement.icon className="w-8 h-8 text-[#D4AF37] group-hover:text-white transition-colors" />
                </motion.div>
                <p className="text-sm text-[#666] uppercase tracking-wider" style={{ fontFamily: "Montserrat" }}>
                  {achievement.year}
                </p>
                <p className="font-bold text-[#1A1A1A] mt-1" style={{ fontFamily: "Playfair Display" }}>
                  {achievement.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-4"
                style={{ fontFamily: "Montserrat" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                About Us
              </motion.span>
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-8"
                style={{ fontFamily: "Playfair Display" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Crafting Digital
                <br />
                <span className="text-[#D4AF37]">Masterpieces</span>
              </motion.h2>
              
              <motion.div 
                className="space-y-6 text-[#555] leading-relaxed"
                style={{ fontFamily: "Montserrat" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p>
                  At MediaMonk Studio, we specialize in creating production-ready digital solutions 
                  for businesses of all sizes. From sports arenas to AI platforms, luxury hotels to 
                  e-commerce sites—we've done it all.
                </p>
                <p>
                  Our portfolio speaks for itself. Every project you see is a live, working 
                  website or application that we've built and deployed for real clients.
                </p>
              </motion.div>
              
              {/* Animated Stats */}
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#E5E5E5]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    className="text-center group"
                  >
                    <motion.div 
                      className="text-3xl lg:text-4xl font-black text-[#D4AF37]"
                      style={{ fontFamily: "Playfair Display" }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                    </motion.div>
                    <div className="text-xs uppercase tracking-wider text-[#666] mt-1" style={{ fontFamily: "Montserrat" }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="mt-10 inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300"
                style={{ fontFamily: "Montserrat" }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Work With Us
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ChevronRight size={18} />
                </motion.div>
              </motion.button>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="relative aspect-[4/5] max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute -inset-4 border-[3px] border-[#D4AF37]"
                  animate={{ rotate: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
                
                <div className="relative h-full overflow-hidden">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
                    alt="Office workspace"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                  />
                  <div className="absolute inset-0 bg-[#F5F3EE]/85" />
                  
                  <div className="relative h-full flex items-center justify-center p-8 lg:p-12">
                    <motion.div 
                      className="absolute top-8 left-8 w-16 h-16 border-2 border-[#D4AF37] rotate-45"
                      animate={{ rotate: [45, 50, 45] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute bottom-8 right-8 w-12 h-12 bg-[#D4AF37]/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    />
                    
                    <div className="text-center relative z-10">
                      <motion.div 
                        className="w-24 h-24 border-4 border-[#D4AF37] rotate-45 mx-auto mb-8 flex items-center justify-center bg-white"
                        whileHover={{ rotate: 90, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Sparkles className="w-10 h-10 text-[#D4AF37] -rotate-45" />
                      </motion.div>
                      
                      <motion.p 
                        className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4"
                        style={{ fontFamily: "Montserrat" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        Our Philosophy
                      </motion.p>
                      
                      <motion.blockquote 
                        className="text-xl lg:text-2xl font-medium italic text-[#1A1A1A] leading-relaxed"
                        style={{ fontFamily: "Playfair Display" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        "Design is not just what it looks like. Design is how it works."
                      </motion.blockquote>
                      
                      <motion.div 
                        className="mt-6 w-16 h-[2px] bg-[#D4AF37] mx-auto"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      />
                      <motion.p 
                        className="mt-4 text-sm text-[#666] uppercase tracking-wider"
                        style={{ fontFamily: "Montserrat" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                      >
                        — Our Mantra
                      </motion.p>
                    </div>
                  </div>
                </div>

                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-white px-6 py-4 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xs uppercase tracking-widest font-medium" style={{ fontFamily: "Montserrat" }}>
                    Production Ready
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 40%)
            `
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-4"
              style={{ fontFamily: "Montserrat" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase"
              style={{ fontFamily: "Playfair Display" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Let's Create
              <br />
              Something <span className="text-[#D4AF37]">Great</span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-xs uppercase tracking-[0.2em] mb-3 text-[#888]" style={{ fontFamily: "Montserrat" }}>
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-transparent border-b-2 border-[#333] py-4 text-white focus:border-[#D4AF37] outline-none transition-colors placeholder:text-[#555]"
                      placeholder="John Doe"
                      style={{ fontFamily: "Montserrat" }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-xs uppercase tracking-[0.2em] mb-3 text-[#888]" style={{ fontFamily: "Montserrat" }}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-transparent border-b-2 border-[#333] py-4 text-white focus:border-[#D4AF37] outline-none transition-colors placeholder:text-[#555]"
                      placeholder="john@example.com"
                      style={{ fontFamily: "Montserrat" }}
                    />
                  </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-xs uppercase tracking-[0.2em] mb-3 text-[#888]" style={{ fontFamily: "Montserrat" }}>
                      Project Type
                    </label>
                    <select 
                      required
                      className="w-full bg-transparent border-b-2 border-[#333] py-4 text-white focus:border-[#D4AF37] outline-none transition-colors cursor-pointer"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      <option value="" className="bg-[#1A1A1A]">Select a service</option>
                      <option value="web" className="bg-[#1A1A1A]">Web Development</option>
                      <option value="mobile" className="bg-[#1A1A1A]">Mobile App</option>
                      <option value="brand" className="bg-[#1A1A1A]">Brand Identity</option>
                      <option value="strategy" className="bg-[#1A1A1A]">Digital Strategy</option>
                    </select>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-xs uppercase tracking-[0.2em] mb-3 text-[#888]" style={{ fontFamily: "Montserrat" }}>
                      Budget Range
                    </label>
                    <select 
                      className="w-full bg-transparent border-b-2 border-[#333] py-4 text-white focus:border-[#D4AF37] outline-none transition-colors cursor-pointer"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      <option value="" className="bg-[#1A1A1A]">Select budget</option>
                      <option value="5k" className="bg-[#1A1A1A]">$5k - $10k</option>
                      <option value="10k" className="bg-[#1A1A1A]">$10k - $25k</option>
                      <option value="25k" className="bg-[#1A1A1A]">$25k - $50k</option>
                      <option value="50k" className="bg-[#1A1A1A]">$50k+</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-xs uppercase tracking-[0.2em] mb-3 text-[#888]" style={{ fontFamily: "Montserrat" }}>
                    Tell Us About Your Project
                  </label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full bg-transparent border-b-2 border-[#333] py-4 text-white focus:border-[#D4AF37] outline-none transition-colors resize-none placeholder:text-[#555]"
                    placeholder="Describe your project, goals, and timeline..."
                    style={{ fontFamily: "Montserrat" }}
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="bg-[#D4AF37] text-[#1A1A1A] px-12 py-5 uppercase tracking-widest text-sm font-bold hover:bg-[#E5C158] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                  style={{ fontFamily: "Montserrat" }}
                  whileHover={{ scale: formStatus === "idle" ? 1.02 : 1, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)" }}
                  whileTap={{ scale: formStatus === "idle" ? 0.98 : 1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  {formStatus === "idle" && "Send Message"}
                  {formStatus === "sending" && (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-[#1A1A1A] border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      />
                      Sending...
                    </>
                  )}
                  {formStatus === "sent" && (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        <CheckCircle2 size={20} />
                      </motion.div>
                      Message Sent!
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="lg:col-span-2 space-y-10"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <motion.h3 
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "Playfair Display" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Contact Information
                </motion.h3>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: "hello@mediamonk.studio", href: "mailto:hello@mediamonk.studio" },
                    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                    { icon: MapPin, label: "Location", value: "New York, NY", href: null }
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {item.href ? (
                        <a href={item.href} className="flex items-center gap-4 group">
                          <motion.div 
                            className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <item.icon size={20} className="text-[#D4AF37] group-hover:text-[#1A1A1A] transition-colors" />
                          </motion.div>
                          <div>
                            <p className="text-xs uppercase tracking-widest text-[#666] mb-1" style={{ fontFamily: "Montserrat" }}>{item.label}</p>
                            <p className="text-white group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "Montserrat" }}>
                              {item.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center">
                            <item.icon size={20} className="text-[#D4AF37]" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-widest text-[#666] mb-1" style={{ fontFamily: "Montserrat" }}>{item.label}</p>
                            <p className="text-white" style={{ fontFamily: "Montserrat" }}>
                              {item.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "Playfair Display" }}>
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      className="w-12 h-12 border border-[#333] flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37] transition-all group"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                    >
                      <Icon size={20} className="text-white group-hover:text-[#1A1A1A] transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div 
                className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  >
                    <Zap size={20} className="text-[#D4AF37]" />
                  </motion.div>
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: "Montserrat" }}>
                    Quick Response
                  </span>
                </div>
                <p className="text-sm text-[#888]" style={{ fontFamily: "Montserrat" }}>
                  We typically respond within 24 hours during business days.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-white py-16 border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-4 gap-10 mb-12 pb-12 border-b border-[#222]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="md:col-span-2">
              <motion.h3 
                className="text-3xl font-black tracking-wider mb-4"
                style={{ fontFamily: "Playfair Display" }}
                whileHover={{ scale: 1.02 }}
              >
                MEDIAMONK
              </motion.h3>
              <p className="text-[#666] max-w-md leading-relaxed mb-6" style={{ fontFamily: "Montserrat" }}>
                Creating production-ready digital experiences that drive results. 
                Real projects, real results, real impact.
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-10 h-10 border border-[#333] flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37] transition-all group"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Icon size={18} className="text-[#666] group-hover:text-[#1A1A1A] transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest font-semibold mb-6 text-[#D4AF37]" style={{ fontFamily: "Montserrat" }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-[#888] hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest font-semibold mb-6 text-[#D4AF37]" style={{ fontFamily: "Montserrat" }}>
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <motion.li 
                    key={service.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span className="text-[#888] text-sm" style={{ fontFamily: "Montserrat" }}>
                      {service.title}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#555] text-sm" style={{ fontFamily: "Montserrat" }}>
              © 2024 MediaMonk Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((item, i) => (
                <motion.a 
                  key={item}
                  href="#" 
                  className="text-[#555] hover:text-[#D4AF37] text-sm uppercase tracking-wider transition-colors"
                  style={{ fontFamily: "Montserrat" }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
