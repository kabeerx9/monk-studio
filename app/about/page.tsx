import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { StudioShell, StudioHero, StudioLabel, StudioCTA } from "@/components/StudioPages";
import s from "@/components/StudioPages.module.css";

export const metadata: Metadata = {
  title: "About the Studio | Monk Studio",
  description: "Get to know Monk Studio: an independent digital product partner connecting strategy, design, and engineering.",
};

export default function AboutPage() {
  return <StudioShell>
    <StudioHero label="The studio" title="Different perspectives." accent="Shared ambition." description="We are an independent digital product studio. We bring thoughtful strategy, distinctive design, and dependable engineering together to help businesses take their next step." />
    <section className={s.wrap}><div className={s.split}><div><StudioLabel>Who we are</StudioLabel><h2>Good work starts<br /><span className={s.muted}>with understanding.</span></h2></div><div className={s.body}><p>Every business has its own context. The people it serves, the systems it relies on, and the ambition behind its next move. Understanding that context is where our work begins.</p><p>We help translate business challenges into digital products that are useful, clear, and considered. A website that tells the right story. A platform that makes a complex workflow manageable. An application that becomes part of someone&apos;s everyday life.</p><p>By connecting design and engineering from the start, we keep the original intent visible through every decision, iteration, and release.</p><Link href="/#portfolio">Explore what we build <ArrowUpRight size={18} /></Link></div></div></section>
    <div className={s.wrap}><div className={s.visualBand}><Image src="/images/glass_cube.png" alt="Glass and stone study in light, material, and precision" fill sizes="(max-width: 800px) 100vw, 90vw" /><span>THOUGHTFUL BY DESIGN. PRECISE BY NATURE.</span></div></div>
    <section className={s.section}><div className={s.wrap}><div className={s.headingRow}><div><StudioLabel>What guides us</StudioLabel><h2>A clear point of view.<br /><span className={s.muted}>In everything we do.</span></h2></div><p>Our principles shape the experience of working with us as much as the products we deliver.</p></div><div className={s.threeGrid}>{[
      ["01", "Clarity creates momentum.", "We make space for the right questions, define priorities together, and keep decisions understandable. Everyone should know what we are building and why."],
      ["02", "Craft is a shared effort.", "Good design needs good engineering. Good engineering needs a clear purpose. We connect disciplines and welcome feedback throughout the work."],
      ["03", "The next chapter matters.", "We think beyond the first release. Maintainable foundations, considered handovers, and a practical path forward help your product keep moving."],
    ].map(([n,t,p]) => <article className={s.principle} key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
    <section className={s.dark}><div className={s.wrap}><div className={s.split}><div><StudioLabel>One connected studio</StudioLabel><h2>Built around<br />your next move.</h2></div><div className={s.body}><p>We work across the full product journey. The right combination depends on your goals, your team, and where the product is today.</p><ul className={s.checkList}>{["Product strategy & discovery", "User experience & interface design", "Websites & e-commerce", "SaaS & business platforms", "Mobile applications", "Launch & ongoing development"].map(t=><li key={t}><Check size={17}/>{t}</li>)}</ul></div></div></div></section>
    <section className={s.wrap}><div className={s.split}><div><StudioLabel>The working relationship</StudioLabel><h2>Close collaboration.<br /><span className={s.muted}>Clear expectations.</span></h2></div><div>{[
      ["A shared starting point", "We agree on the brief, priorities, responsibilities, and what a successful outcome looks like."],
      ["Visibility as we go", "Reviews and working previews make progress tangible and give feedback a useful place in the process."],
      ["A considered handover", "Documentation, walkthroughs, and agreed support help you feel confident about what comes next."],
    ].map(([t,p])=><div key={t} className={s.linkRow}><div><h3>{t}</h3><p>{p}</p></div></div>)}<Link href="/process" className={s.linkRow}><h3>Inside our process</h3><ArrowUpRight size={23}/></Link></div></div></section>
    <StudioCTA />
  </StudioShell>;
}
