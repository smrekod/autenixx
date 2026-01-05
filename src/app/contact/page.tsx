import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Autenix - Talk to Compliance Automation Experts",
  description:
    "Contact Autenix for questions about SOC 2, ISO 27001, HIPAA compliance automation. Talk to our experts about pricing, partnerships, or schedule a demo of our GRC platform.",
  keywords: [
    "contact autenix",
    "compliance platform support",
    "compliance automation help",
    "GRC platform contact",
    "SOC 2 compliance help",
  ],
  openGraph: {
    title: "Contact Autenix - Compliance Automation Experts",
    description:
      "Get in touch with Autenix for compliance automation questions, pricing, or to schedule a demo.",
    url: "https://autenix.co/contact",
  },
  alternates: {
    canonical: "https://autenix.co/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
