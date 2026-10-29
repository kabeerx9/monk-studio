"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StudioShell, StudioHero } from "@/components/StudioPages";
import s from "@/components/StudioPages.module.css";

export default function ContactPage() {
  const [prepared, setPrepared] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Project enquiry: ${data.get("company") || data.get("name")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany / project: ${data.get("company") || "Not specified"}\nService: ${data.get("service")}\nTimeline: ${data.get("timeline")}\n\nProject details:\n${data.get("details")}`;
    window.location.href = `mailto:hello@mediamonkstudio.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return <StudioShell>
    <StudioHero label="Start a conversation" title="Your next chapter." accent="Let's shape it together." description="A new idea, a product ready to evolve, or a challenge worth exploring. Tell us where you want to go, and we will help you find a practical way forward." />
    <section className={s.wrap}><div className={s.contactGrid}>
      <aside className={s.contactAside}><h2>Good projects begin<br />with a little context.</h2><p>Use the brief to organise your thoughts, then send it through your email app. Prefer to write directly? We would love to hear from you.</p><a href="mailto:hello@mediamonkstudio.in" className={s.emailLink}>hello@mediamonkstudio.in <ArrowUpRight size={19}/></a><ol className={s.nextSteps}><li><div><strong>Share the opportunity</strong><p>Tell us about your goals, your users, and what is prompting the project.</p></div></li><li><div><strong>Explore the fit</strong><p>We discuss the context, ask useful questions, and consider how we can help.</p></div></li><li><div><strong>Agree on a direction</strong><p>A suitable next step might be discovery, a focused project, or ongoing product support.</p></div></li></ol></aside>
      <div className={s.formCard}><form onSubmit={handleSubmit} className={s.form}>
        <div className={s.formGrid}><div className={s.field}><label htmlFor="contact-name">Your name *</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120} placeholder="How should we address you?" /></div><div className={s.field}><label htmlFor="contact-email">Email address *</label><input id="contact-email" type="email" name="email" autoComplete="email" required maxLength={200} placeholder="you@company.com" /></div></div>
        <div className={s.field}><label htmlFor="contact-company">Company / project</label><input id="contact-company" name="company" autoComplete="organization" maxLength={160} placeholder="The name behind the idea" /></div>
        <div className={s.formGrid}><div className={s.field}><label htmlFor="contact-service">What can we help with? *</label><select id="contact-service" name="service" required defaultValue=""><option value="" disabled>Select an area</option><option>Website / e-commerce</option><option>Web / SaaS platform</option><option>Mobile application</option><option>Product strategy / design</option><option>Existing product improvements</option><option>Something else</option></select></div><div className={s.field}><label htmlFor="contact-timeline">Your ideal timing</label><select id="contact-timeline" name="timeline" defaultValue="Let's discuss"><option>Let&apos;s discuss</option><option>Ready to start</option><option>Within the next few months</option><option>Exploring for later</option></select></div></div>
        <div className={s.field}><label htmlFor="contact-details">A little about the project *</label><textarea id="contact-details" name="details" rows={6} required maxLength={3000} placeholder="What are you building or improving? Who is it for? Share your goals, constraints, or any useful links." /></div>
        <p className={s.formNote}>This brief opens in your email app. Review the email and press send there to contact us. Your details are handled as described in our <Link href="/privacy">Privacy Policy</Link>.</p>
        <button type="submit" className={s.submit}>Prepare project email <ArrowUpRight size={20}/></button>
        {prepared && <div className={s.notice} role="status"><strong>Your email draft is ready to open.</strong>Your enquiry has not been sent by this website. Complete the send in your email app. If it did not open, email <a href="mailto:hello@mediamonkstudio.in">hello@mediamonkstudio.in</a> directly. Your brief is still here.</div>}
      </form></div>
    </div></section>
  </StudioShell>;
}
