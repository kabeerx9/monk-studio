import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { socialMedia } from "@/data";
import s from "./SiteChrome.module.css";

export default function Footer() {
  return <footer className={s.footer}><div className={s.footerWrap}><div className={s.footerGrid}><div className={s.footerIntro}><Link href="/#home" aria-label="Monk Studio home" className={s.brand}><Image src="/monk-logo.svg" alt="" width={34} height={34}/><span>Monk <em>Studio</em></span></Link><p>An independent digital product studio. Strategy, design, and engineering for businesses with somewhere to go.</p><div className={s.socials}>{socialMedia.map((social,i)=><a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">{["LinkedIn","Facebook","X"][i]}<ArrowUpRight size={12}/></a>)}</div></div>
    <nav className={s.footerLinks} aria-label="Studio pages"><h2>The studio</h2><Link href="/about">About us</Link><Link href="/#portfolio">Selected work</Link><Link href="/process">Our process</Link><Link href="/#testimonials">Client perspectives</Link><Link href="/leave-review">Share your experience</Link><Link href="/contact">Contact</Link></nav>
    <nav className={s.footerLinks} aria-label="Our expertise"><h2>Expertise</h2><Link href="/#services">Strategy & discovery</Link><Link href="/#services">Brand & experience</Link><Link href="/#services">Product engineering</Link><Link href="/#engineering">Technology & quality</Link><Link href="/#engagements">Ways to work together</Link></nav></div>
    <div className={s.footerContact}><span>Your next chapter starts here.</span><a href="mailto:hello@mediamonkstudio.in">hello@mediamonkstudio.in <ArrowUpRight size={23}/></a></div><div className={s.footerBottom}><p>© {new Date().getFullYear()} Monk Studio. All rights reserved.</p><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></div></div></div></footer>;
}
