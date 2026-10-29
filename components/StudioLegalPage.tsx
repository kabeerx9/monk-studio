import { StudioShell, StudioHero } from "./StudioPages";
import s from "./StudioPages.module.css";

type LegalSection = { title: string; text: string };

export default function StudioLegalPage({ title, description, sections }: { title: string; description: string; sections: LegalSection[] }) {
  return <StudioShell><StudioHero label="The details" title={title} accent="Clear by intention." description={description} /><div className={`${s.wrap} ${s.legalGrid}`}><nav className={s.legalNav} aria-label={`${title} contents`}><strong>On this page</strong>{sections.map((section, i) => <a key={section.title} href={`#section-${i + 1}`}>{section.title}</a>)}</nav><article className={s.legalArticle}><p>Last updated: 29 October 2026</p>{sections.map((section, i) => <section id={`section-${i + 1}`} key={section.title}><h2>{i + 1}. {section.title}</h2><p>{section.text}</p></section>)}<section><h2>Questions?</h2><p>For questions about this page, <a href="/contact">contact Monk Studio</a>.</p></section></article></div></StudioShell>;
}
