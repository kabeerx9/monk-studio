import type { Metadata } from "next";
import StudioHomepage from "@/components/StudioHomepage";

export const metadata: Metadata = {
  title: "Monk Studio | Strategy, Design & Digital Engineering",
  description: "An independent digital product studio bringing strategy, design, and engineering together. Explore our websites, SaaS platforms, and mobile applications.",
  openGraph: {
    title: "Monk Studio | Built with intent. Made to matter.",
    description: "Strategy, design, and engineering for ambitious digital experiences.",
    images: ["/monk-logo.svg"],
  },
};

export default function HomePage() {
  return <StudioHomepage />;
}
