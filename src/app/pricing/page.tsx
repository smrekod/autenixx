import type { Metadata } from "next";
import PricingPageContent from "./PricingPageContent";

export const metadata: Metadata = {
  title:
    "Pricing - Compliance Automation Platform for SOC 2, ISO 27001 & HIPAA",
  description:
    "Get custom pricing for Autenix compliance automation. Flexible plans for SOC 2, ISO 27001, HIPAA, GDPR, and multi-framework compliance. Request a demo for personalized pricing.",
  keywords: [
    "compliance software pricing",
    "SOC 2 compliance cost",
    "ISO 27001 software pricing",
    "HIPAA compliance platform pricing",
    "GRC platform pricing",
    "compliance automation cost",
  ],
  openGraph: {
    title: "Autenix Pricing - Compliance Automation Platform",
    description:
      "Flexible pricing for SOC 2, ISO 27001, HIPAA compliance automation. Get a personalized demo and custom quote.",
    url: "https://autenix.co/pricing",
  },
  alternates: {
    canonical: "https://autenix.co/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageContent />;
}
