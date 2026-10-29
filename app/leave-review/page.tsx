"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { submitReviewAction } from "./actions";
import { StudioShell, StudioHero } from "@/components/StudioPages";
import s from "@/components/StudioPages.module.css";

export default function LeaveReviewPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  async function handleSubmit(formData: FormData) {
    setStatus("submitting");
    try {
      const result = await submitReviewAction(formData);
      setStatus(result.success ? "success" : "error");
    } catch { setStatus("error"); }
  }
  return <StudioShell><StudioHero label="Your experience" title="Good work grows" accent="through honest feedback." description="Tell us what it was like to work with Monk Studio. What worked, what made a difference, and what we could do better next time." />
    <section className={s.wrap}><div className={s.reviewLayout}><aside><h2>A few words.<br />A valuable perspective.</h2><p>Your experience helps us understand the parts of our collaboration that matter most. A useful review can describe the project, the way we worked together, and the details that stood out.</p><p>Need help with an ongoing project? <Link href="/contact" style={{color:"#0b57d0"}}>Contact the studio directly.</Link></p></aside><div className={s.formCard}>
    {status === "success" ? <div className={s.notice} role="status"><CheckCircle2 size={32} style={{marginBottom:15}}/><strong>Thank you for sharing your experience.</strong>Your review has been submitted successfully.<Link href="/" className={s.emailLink}>Back to the studio <ArrowUpRight size={18}/></Link></div> : <form action={handleSubmit} className={s.form}>
      <div className={s.field}><label htmlFor="review-name">Your name *</label><input id="review-name" name="name" required autoComplete="name" maxLength={120} placeholder="Your full name" /></div>
      <div className={s.formGrid}><div className={s.field}><label htmlFor="review-company">Company *</label><input id="review-company" name="company" required autoComplete="organization" maxLength={160} placeholder="Company or project" /></div><div className={s.field}><label htmlFor="review-role">Your role *</label><input id="review-role" name="role" required autoComplete="organization-title" maxLength={120} placeholder="Your role or title" /></div></div>
      <div className={s.field}><label htmlFor="review-message">Your experience *</label><textarea id="review-message" name="review" required rows={7} maxLength={5000} placeholder="Tell us about the project and your experience working together..." /></div>
      <div className={s.field}><label htmlFor="review-image">Profile photo (optional)</label><input id="review-image" name="image" type="file" accept="image/*" /></div>
      <p className={s.formNote}>Please share only information and images you are comfortable submitting to the studio. Read our <Link href="/privacy">Privacy Policy</Link>.</p>
      {status === "error" && <p role="alert" className={`${s.notice} ${s.error}`}>We could not save your review. Your details are still here. Please try again or <Link href="/contact">contact the studio</Link>.</p>}
      <button className={s.submit} type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Submitting your feedback..." : "Share your experience"}<ArrowUpRight size={20}/></button>
    </form>}</div></div></section>
  </StudioShell>;
}
