import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Asterisk } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./StudioPages.module.css";

export function StudioShell({ children }: { children: ReactNode }) {
  return <main className={styles.page}><Navbar />{children}<Footer /></main>;
}

export function StudioLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`${styles.label} ${light ? styles.lightLabel : ""}`}><span />{children}</p>;
}

export function StudioHero({ label, title, accent, description }: { label: string; title: string; accent: string; description: string }) {
  return <header className={`${styles.wrap} ${styles.hero}`}><StudioLabel>{label}</StudioLabel><div className={styles.heroGrid}><h1>{title}<br /><em>{accent}</em></h1><p>{description}</p></div><div className={styles.heroRule}><span>MONK STUDIO / {label.toUpperCase()}</span><Asterisk size={22} strokeWidth={1} /></div></header>;
}

export function StudioCTA({ title = "Good ideas deserve", accent = "a great beginning." }: { title?: string; accent?: string }) {
  return <section className={styles.cta}><div className={styles.wrap}><StudioLabel light>Your next chapter</StudioLabel><div className={styles.ctaGrid}><h2>{title}<br /><em>{accent}</em></h2><Link href="/contact">Start a conversation <ArrowUpRight size={24} /></Link></div><p>Strategy, design, and engineering. Connected from the start.</p></div></section>;
}
