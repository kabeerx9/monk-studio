"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Plus, Minus, Check, Asterisk } from "lucide-react";
import { MotionConfig, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, testimonials } from "@/data";
import styles from "./StudioHomepage.module.css";

const services = [
  { title: "Strategy & discovery", text: "The right questions make all the difference. We connect your business goals with user needs to define a focused, practical product roadmap.", tags: ["Product discovery", "MVP planning", "Technical direction"] },
  { title: "Brand & digital experience", text: "Distinctive websites and intuitive interfaces that make your business feel as good as the work behind it. Every interaction has a purpose.", tags: ["UI/UX design", "Web experiences", "Design systems"] },
  { title: "Product engineering", text: "Thoughtfully built software, from customer-facing platforms to the tools that run your business. Clean architecture with room to grow.", tags: ["Web applications", "SaaS platforms", "Mobile apps"] },
  { title: "Launch & evolution", text: "A launch is a beginning. We help you ship confidently, respond to user feedback, and keep improving the parts of your product that matter.", tags: ["Quality assurance", "Deployment", "Ongoing development"] },
];

const featured = [
  { title: "Akima Films", category: "Creative portfolio", image: "/images/Akima.png", href: "http://akimafilms.com", color: "#dce4da", description: "A cinematic home for a creative vision.", className: "film" },
  { title: "Real Estate Platform", category: "Web application", image: "/images/Real-estate.png", href: "https://media-monks-real-state.vercel.app/", color: "#e3e8ee", description: "Making the search for a home feel effortless.", className: "property" },
];

const questions = [
  { question: "What kind of projects do you take on?", answer: "We work on websites, SaaS platforms, mobile applications, e-commerce experiences, and internal business tools. We can help shape a new idea or improve an existing product." },
  { question: "How does a project get started?", answer: "We start with a conversation about your business, users, goals, and constraints. From there, we define the scope, approach, and delivery plan together before development begins." },
  { question: "How long does a typical project take?", answer: "Timelines depend on the scope and complexity. After discovery, we share a realistic roadmap with milestones and regular opportunities to review progress." },
  { question: "Will we own the finished product?", answer: "Ownership, source code handover, and infrastructure access are defined in your project agreement. Our approach is to give you a product you can confidently run and continue developing." },
  { question: "Can you support us after launch?", answer: "Yes. We can continue with maintenance, product improvements, and additional features. We agree on a support arrangement that fits your product and priorities." },
];

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`${styles.label} ${light ? styles.labelLight : ""}`}><span />{children}</p>;
}

export default function StudioHomepage() {
  const [service, setService] = useState(0);
  const [review, setReview] = useState(0);
  const [showProjects, setShowProjects] = useState(false);
  const [filter, setFilter] = useState("web");
  const activeReview = testimonials[review];

  return (
    <MotionConfig reducedMotion="user">
      <main className={styles.home}>
        <Navbar />
        <section id="home" className={`${styles.wrap} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <SectionLabel>Independent thinking. Exceptional execution.</SectionLabel>
            <h1>Built with intent.<br />Made to <span>matter.</span></h1>
            <p className={styles.heroIntro}>We bring strategy, design, and engineering together to build digital experiences that move businesses forward.</p>
            <div className={styles.actions}>
              <Link href="/contact" className={styles.primary}>Let&apos;s build something <ArrowUpRight size={19} /></Link>
              <a href="#portfolio" className={styles.textLink}>Explore our work <ArrowDown size={17} /></a>
            </div>
            <div className={styles.heroFoot}><span>Thoughtfully designed.<br /><strong>Precisely engineered.</strong></span><span className={styles.heroFootMark}><Asterisk size={28} strokeWidth={1.4} /> A different perspective.<br />A better digital experience.</span></div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className={styles.heroArt}>
            <Image src="/images/glass_cube.png" alt="An iridescent glass sculpture on a stone plinth, reflecting the studio's considered approach to craft" fill priority sizes="(max-width: 800px) 100vw, 48vw" className={styles.sculpture} />
            <div className={styles.artTop}><span>MONK STUDIO — DIGITAL CRAFT</span><Asterisk size={22} /></div>
            <div className={styles.artCaption}><span>Ideas, brought into focus.</span><span>STRATEGY / DESIGN / TECHNOLOGY</span></div>
          </motion.div>
        </section>

        <section className={`${styles.wrap} ${styles.clients}`} aria-label="Selected client and project names">
          <p>Good company.<br /><strong>Great collaborations.</strong></p>
          <div className={styles.clientNames}><span>CodeAudit<span className={styles.logoDot}>.</span></span><span className={styles.goreeva}>goreeva</span><span className={styles.akima}>AKIMA FILMS</span><span className={styles.plateio}>Plateio</span><span className={styles.bookasia}>BOOK ASIA</span></div>
        </section>

        <section id="about" className={`${styles.wrap} ${styles.intro}`}>
          <SectionLabel>The studio</SectionLabel>
          <div><h2>Ambition deserves<br />a <span className={styles.muted}>thoughtful partner.</span></h2><div className={styles.introBottom}><p>We are Monk Studio. A digital product partner for businesses with somewhere to go. We connect the big picture with the smallest details—turning complex challenges into clear, considered experiences.</p><Link href="/about" className={styles.roundLink} aria-label="Get to know Monk Studio"><ArrowUpRight size={27} /></Link></div></div>
        </section>

        <section id="portfolio" className={styles.work}>
          <div className={styles.wrap}>
            <div className={styles.sectionHeading}><div><SectionLabel>Selected work</SectionLabel><h2>Good thinking.<br /><span className={styles.muted}>Out in the world.</span></h2></div><p>A closer look at the brands,<br />platforms, and experiences we build.</p></div>
            <div className={styles.projectGrid}>{featured.map((project, i) => <article key={project.title} className={styles.project}>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className={`${styles.projectVisual} ${styles[project.className]}`} style={{ backgroundColor: project.color }} aria-label={`Visit ${project.title}`}>
                <div className={styles.projectNumber}>0{i + 1} / SELECTED WORK</div><div className={styles.browserFrame}><div className={styles.browserBar}><span /><span /><span /><i>{project.title}</i></div><div className={styles.projectScreenshot}><Image src={project.image} alt={`${project.title} website preview`} fill sizes="(max-width: 800px) 90vw, 44vw" className={styles.projectImage} /></div></div><span className={styles.projectArrow}><ArrowUpRight size={23} /></span>
              </a><div className={styles.projectMeta}><div><h3>{project.title}</h3><p>{project.description}</p></div><span>{project.category}</span></div>
            </article>)}</div>
            <div className={styles.workMore}><p>From early-stage products to everyday business tools.</p><button type="button" className={styles.textLink} onClick={() => setShowProjects(!showProjects)} aria-expanded={showProjects} aria-controls="project-library">{showProjects ? "Close project library" : "Explore the project library"}{showProjects ? <Minus size={18} /> : <Plus size={18} />}</button></div>
            {showProjects && <div id="project-library" className={styles.library}><div className={styles.filters} aria-label="Filter projects">{["web", "mobile"].map(item => <button type="button" key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={filter === item ? styles.filterActive : ""}>{item === "web" ? "Web experiences" : "Mobile applications"}</button>)}</div><div className={styles.libraryGrid}>{projects.filter(p => p.type === filter).map(p => <a key={p.id} href={p.link} target="_blank" rel="noopener noreferrer"><div><h3>{p.title}</h3><p>{p.des}</p></div><ArrowUpRight size={22} /></a>)}</div></div>}
          </div>
        </section>

        <section id="services" className={`${styles.wrap} ${styles.services}`}>
          <div className={styles.servicesIntro}><SectionLabel>Our expertise</SectionLabel><h2>Every discipline.<br /><span className={styles.muted}>One clear vision.</span></h2><p>From the first conversation to the next big release. The right expertise, connected from start to finish.</p><Link href="/contact" className={styles.textLink}>Find your next step <ArrowUpRight size={18} /></Link><div className={styles.expertiseMark} aria-hidden="true"><Asterisk strokeWidth={0.7} /></div></div>
          <div className={styles.serviceList}>{services.map((item, i) => <div key={item.title} className={`${styles.serviceItem} ${service === i ? styles.serviceOpen : ""}`}><h3><button type="button" onClick={() => setService(service === i ? -1 : i)} aria-expanded={service === i} aria-controls={`service-${i}`}><span className={styles.serviceNumber}>0{i + 1}</span>{item.title}<span className={styles.serviceToggle}>{service === i ? <Minus size={19} /> : <Plus size={19} />}</span></button></h3>{service === i && <div id={`service-${i}`} className={styles.serviceContent}><p>{item.text}</p><div>{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>}</div>)}</div>
        </section>

        <section className={styles.approach}>
          <div className={styles.wrap}><div className={styles.sectionHeading}><div><SectionLabel light>The way forward</SectionLabel><h2>Big-picture thinking.<br /><span>Detail-level care.</span></h2></div><Link href="/process" className={styles.lightLink}>Inside our process <ArrowUpRight size={20} /></Link></div><div className={styles.processGrid}>{[
            ["01", "Discover the right problem.", "We get close to your goals and your users. Clear priorities become the foundation for everything that follows."],
            ["02", "Make every detail count.", "Design and engineering work as one. You see the product take shape through regular reviews and real progress."],
            ["03", "Build for what comes next.", "We launch with care, hand over with clarity, and help you evolve as your business and users grow."],
          ].map(([number, title, text]) => <article key={number}><div className={styles.processNumber}>{number}<ArrowUpRight size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className={styles.approachFoot}><span><Check size={16} /> Clear communication</span><span><Check size={16} /> Shared decisions</span><span><Check size={16} /> Considered delivery</span><span><Check size={16} /> Long-term thinking</span></div></div>
        </section>

        <section id="testimonials" className={`${styles.wrap} ${styles.reviews}`}>
          <div className={styles.reviewSide}><SectionLabel>In their words</SectionLabel><h2>Good work.<br /><span className={styles.muted}>Better relationships.</span></h2><div className={styles.reviewControls}><button type="button" onClick={() => setReview((review + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial"><ArrowLeft size={20} /></button><span>0{review + 1} / 0{testimonials.length}</span><button type="button" onClick={() => setReview((review + 1) % testimonials.length)} aria-label="Next testimonial"><ArrowRight size={20} /></button></div></div>
          <div className={styles.reviewQuote} aria-live="polite"><span className={styles.quoteMark} aria-hidden="true">“</span><blockquote key={review}>{activeReview.quote}</blockquote><div className={styles.reviewAuthor}>{activeReview.img ? <Image src={activeReview.img} alt={activeReview.name} width={52} height={52} /> : <span className={styles.avatar}>{activeReview.name.charAt(0)}</span>}<div><strong>{activeReview.name}</strong><span>{activeReview.title}</span></div></div></div>
        </section>

        <section className={`${styles.wrap} ${styles.faq}`}><div><SectionLabel>A little clarity</SectionLabel><h2>Before we<br /><span className={styles.muted}>get started.</span></h2><p>Have something else in mind?<br /><Link href="/contact">Let&apos;s talk it through <ArrowUpRight size={16} /></Link></p></div><div className={styles.faqList}>{questions.map(item => <details key={item.question}><summary>{item.question}<Plus size={18} className={styles.faqPlus} /></summary><p>{item.answer}</p></details>)}</div></section>

        <section className={styles.contactBanner}><div className={styles.wrap}><div><SectionLabel light>Your next chapter</SectionLabel><h2>Let&apos;s make<br />something <em>matter.</em></h2><Link href="/contact" className={styles.contactButton}>Tell us what you&apos;re thinking <ArrowUpRight size={24} /></Link></div><div className={styles.contactSymbol} aria-hidden="true"><Asterisk strokeWidth={0.55} /></div><div className={styles.contactBottom}><span>Good ideas start with a conversation.</span><span>STRATEGY. DESIGN. ENGINEERING.</span></div></div></section>
        <Footer />
      </main>
    </MotionConfig>
  );
}
