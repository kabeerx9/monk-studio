import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StudioShell, StudioHero } from "@/components/StudioPages";
import s from "@/components/StudioPages.module.css";

export default function NotFound() {
  return <StudioShell><StudioHero label="404 / A different direction" title="A little off course." accent="Let's find your next step." description="This page is no longer here, or the address does not quite match. The studio, our work, and a good conversation are still close by." /><section className={`${s.wrap} ${s.section}`}><Link href="/" className={s.linkRow}><h3>Back to the homepage</h3><ArrowUpRight size={24}/></Link><Link href="/contact" className={s.linkRow}><h3>Talk to the studio</h3><ArrowUpRight size={24}/></Link></section></StudioShell>;
}
