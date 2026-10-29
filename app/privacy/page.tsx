import type { Metadata } from "next";
import StudioLegalPage from "@/components/StudioLegalPage";

export const metadata: Metadata = { title: "Privacy Policy | Monk Studio", description: "How Monk Studio handles the information you share with us." };
const sections = [
  { title: "Information We Collect", text: "We collect information that you provide directly to us when you use our website, including when you fill out our contact form to schedule a strategy call. This may include your name, email address, mobile number, and project details." },
  { title: "How We Use Your Information", text: "We use the information we collect primarily to communicate with you about your project, provide our services, and improve our website. We do not sell or share your personal information with third parties for their direct marketing purposes." },
  { title: "Data Security", text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
  { title: "Contact Us", text: "If you have any questions about this Privacy Policy, please contact us at our provided contact methods on the website." },
];
export default function PrivacyPage() { return <StudioLegalPage title="Privacy Policy." description="An overview of how we handle the information you choose to share when you use our website and contact our studio." sections={sections} />; }
