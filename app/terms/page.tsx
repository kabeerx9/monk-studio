import type { Metadata } from "next";
import StudioLegalPage from "@/components/StudioLegalPage";

export const metadata: Metadata = { title: "Terms of Service | Monk Studio", description: "The terms that apply to the Monk Studio website and services." };
const sections = [
  { title: "Agreement to Terms", text: "By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service." },
  { title: "Intellectual Property", text: "The service and its original content, features, and functionality are and will remain the exclusive property of Monk Studio and its licensors. Upon full payment for our development services, intellectual property rights for the specific project codebase are transferred to the client as outlined in the individual service agreement." },
  { title: "Termination", text: "We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms." },
  { title: "Governing Law", text: "These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Monk Studio operates, without regard to its conflict of law provisions." },
];
export default function TermsPage() { return <StudioLegalPage title="Terms of Service." description="The terms that guide use of this website and our services, including ownership and the role of your individual project agreement." sections={sections} />; }
