"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import s from "./SiteChrome.module.css";

const links = [{href:"/#portfolio",name:"Work"}, {href:"/#services",name:"Expertise"}, {href:"/about",name:"The studio"}, {href:"/process",name:"Our process"}];
export default function Navbar() {
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const pathname=usePathname();
  const dialog=useRef<HTMLDivElement>(null);
  const toggle=useRef<HTMLButtonElement>(null);
  useEffect(()=>{ const update=()=>setScrolled(window.scrollY>20); update(); window.addEventListener("scroll",update,{passive:true}); return ()=>window.removeEventListener("scroll",update); },[]);
  useEffect(()=>{
    if(!open) return;
    const original=document.body.style.overflow;
    const opener=toggle.current;
    document.body.style.overflow="hidden";
    dialog.current?.querySelector<HTMLButtonElement>("button")?.focus();
    function onKey(event:KeyboardEvent) {
      if(event.key==="Escape") {setOpen(false);return;}
      if(event.key!=="Tab") return;
      const items=dialog.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if(!items?.length) return;
      const first=items[0],last=items[items.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
    document.addEventListener("keydown",onKey);
    return ()=>{document.body.style.overflow=original;document.removeEventListener("keydown",onKey);opener?.focus();};
  },[open]);
  const brand=<><Image src="/monk-logo.svg" alt="" width={35} height={35}/><span>Monk <em>Studio</em></span></>;
  return <><header className={`${s.header} ${scrolled?s.headerScrolled:""}`}><div className={s.navWrap}><Link href="/#home" aria-label="Monk Studio home" className={s.brand}>{brand}</Link><nav aria-label="Main navigation" className={s.desktopNav}>{links.map(link=><Link key={link.href} href={link.href} aria-current={pathname===link.href?"page":undefined}>{link.name}</Link>)}</nav><Link href="/contact" className={s.navCTA} aria-current={pathname==="/contact"?"page":undefined}>Start a project <ArrowUpRight size={16}/></Link><button type="button" ref={toggle} className={s.menuToggle} aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(true)}><Menu size={20}/></button></div></header>
    {open&&<div className={s.overlay}><div className={s.dialog} ref={dialog} role="dialog" aria-modal="true" aria-label="Site navigation" id="mobile-navigation"><div className={s.dialogTop}><Link href="/#home" aria-label="Monk Studio home" onClick={()=>setOpen(false)} className={s.brand}>{brand}</Link><button type="button" aria-label="Close navigation" onClick={()=>setOpen(false)}><X size={21}/></button></div><nav aria-label="Mobile navigation" className={s.mobileNav}>{[...links,{href:"/contact",name:"Start a project"}].map((link,i)=><Link key={link.href} href={link.href} aria-current={pathname===link.href?"page":undefined} onClick={()=>setOpen(false)}>{link.name}<span>0{i+1}</span></Link>)}</nav><div className={s.dialogBottom}><p>Good ideas start with a conversation.</p><a href="mailto:hello@mediamonkstudio.in">hello@mediamonkstudio.in</a></div></div></div>}
  </>;
}
