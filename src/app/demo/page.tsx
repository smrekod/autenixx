import type { Metadata } from "next";
import DemoPageContent from "./DemoPageContent";

export const metadata: Metadata = {
  title: "Request a Demo - SOC 2, ISO 27001 & HIPAA Compliance Automation",
  description:
    "Schedule a personalized demo of Autenix compliance automation platform. See how we help organizations achieve SOC 2, ISO 27001, HIPAA, and GDPR compliance 80% faster.",
  keywords: [
    "compliance platform demo",
    "SOC 2 automation demo",
    "ISO 27001 software demo",
    "HIPAA compliance demo",
    "GRC platform demo",
    "compliance automation demo",
  ],
  openGraph: {
    title: "Request a Demo - Autenix Compliance Automation",
    description:
      "See Autenix in action. Schedule a personalized demo for SOC 2, ISO 27001, or HIPAA compliance automation.",
    url: "https://autenix.co/demo",
  },
  alternates: {
    canonical: "https://autenix.co/demo",
  },
};

export default function DemoPage() {
  return <DemoPageContent />;
}
