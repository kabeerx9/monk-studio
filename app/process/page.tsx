import type { Metadata } from "next";
import { StudioShell, StudioHero, StudioLabel, StudioCTA } from "@/components/StudioPages";
import s from "@/components/StudioPages.module.css";

export const metadata: Metadata = { title: "Our Process | Monk Studio", description: "From discovery and design through engineering, launch, and evolution. See how we turn clear priorities into considered digital products." };

const phases = [
  { number:"01", title:"Understand the opportunity.", text:"We start with your business, users, and the problem worth solving. We discuss the existing experience, constraints, and priorities so the scope supports a clear purpose.", deliverables:["Discovery brief", "User journeys", "Scope & priorities"], decision:"What we agree on", note:"The problem, the audience, what success means, and the most valuable first release. You bring the business context; we help turn it into a direction." },
  { number:"02", title:"Shape the experience.", text:"We explore how the product should work and feel. Structure, flows, and visual design come together through reviews, making the experience tangible before implementation.", deliverables:["Experience structure", "Interface direction", "Interactive prototypes"], decision:"What you review", note:"The key journeys, important screens, and design direction. We discuss tradeoffs early and refine the experience around real needs." },
  { number:"03", title:"Engineer the foundations.", text:"We translate the agreed experience into a working product. Frontend, backend, integrations, and infrastructure are planned together, with previews to make progress visible.", deliverables:["Working application", "Integrations", "Staging previews"], decision:"How we stay aligned", note:"Regular demonstrations, a shared view of priorities, and an agreed feedback process. Changes are discussed with their scope and timeline implications." },
  { number:"04", title:"Prepare for the real world.", text:"We review important flows, responsive behavior, performance, and the requirements agreed for release. Launch preparation includes deployment planning and a clear handover.", deliverables:["Release checks", "Production deployment", "Handover notes"], decision:"What launch needs", note:"A reviewed release, the right access, a clear understanding of known limitations, and agreement on who owns each part of the launch." },
  { number:"05", title:"Learn, refine, evolve.", text:"Once people use the product, new priorities become clearer. We can help maintain the experience, act on feedback, and plan the next release around what matters most.", deliverables:["Next-step roadmap", "Product improvements", "Agreed support"], decision:"What comes next", note:"The support scope, review cadence, and next priorities are agreed together. Your product can evolve without losing the clarity of its original foundations." },
];

export default function ProcessPage() {
  return <StudioShell>
    <StudioHero label="Our process" title="Clear from the start." accent="Considered at every step." description="A connected process for strategy, design, and engineering. You see the direction, understand the decisions, and stay close to the work as it takes shape." />
    <section className={s.wrap}><div className={s.timeline}>{phases.map(phase=><article key={phase.number} className={s.phase}><span className={s.phaseNumber}>{phase.number}</span><div><h2>{phase.title}</h2><p className={s.phaseIntro}>{phase.text}</p><ul>{phase.deliverables.map(t=><li key={t}>{t}</li>)}</ul></div><aside className={s.phaseAside}><strong>{phase.decision}</strong><p>{phase.note}</p></aside></article>)}</div></section>
    <section className={s.dark}><div className={s.wrap}><StudioLabel light>How we collaborate</StudioLabel><h2>Less uncertainty.<br /><span className={s.muted}>More shared understanding.</span></h2><div className={s.threeGrid} style={{marginTop:40}}>{[
      ["Your business context", "Your insights, existing materials, and access to decision-makers help us shape a product that fits the real business."],
      ["One shared direction", "We agree on priorities and feedback checkpoints, so everyone understands the next decision and the reason behind it."],
      ["Space for useful feedback", "You review work as it develops. We consolidate feedback, discuss changes, and keep the roadmap realistic."],
    ].map(([t,p])=><div className={s.body} key={t}><h3 style={{color:"#f1f4e9"}}>{t}</h3><p>{p}</p></div>)}</div></div></section>
    <section className={s.section}><div className={s.wrap}><div className={s.headingRow}><div><StudioLabel>Before the first step</StudioLabel><h2>You do not need<br /><span className={s.muted}>a perfect brief.</span></h2></div><p>A few clear starting points are enough to open a productive conversation.</p></div><div className={s.threeGrid}>{[
      ["01", "The opportunity", "What are you trying to improve, launch, or change? Tell us about the problem and the people who experience it."],
      ["02", "The starting point", "Share the product, brand materials, research, or examples you already have. An early idea is a valid starting point too."],
      ["03", "The practical details", "Let us know about your ideal timing, budget considerations, and key stakeholders so we can discuss a suitable approach."],
    ].map(([n,t,p])=><article className={s.principle} key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
    <StudioCTA title="A clear path begins" accent="with a conversation." />
  </StudioShell>;
}
