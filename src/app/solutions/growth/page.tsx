import type { Metadata } from "next";
import GrowthSolutionPageContent from "./GrowthSolutionPageContent";

export const metadata: Metadata = {
  title: "Growth Company Compliance - Multi-Framework SOC 2, ISO 27001, HIPAA",
  description:
    "Scale your compliance program with Autenix. Multi-framework support for SOC 2, ISO 27001, HIPAA, and GDPR. Team collaboration, advanced integrations, and 400+ tool connections.",
  keywords: [
    "multi-framework compliance",
    "scaling compliance program",
    "growth company compliance",
    "SOC 2 ISO 27001 HIPAA",
    "team compliance management",
    "compliance for growing companies",
  ],
  openGraph: {
    title: "Growth Company Compliance - Autenix",
    description:
      "Scale your compliance program with multi-framework support, team collaboration, and 400+ integrations.",
    url: "https://autenix.co/solutions/growth",
  },
  alternates: {
    canonical: "https://autenix.co/solutions/growth",
  },
};

export default function GrowthSolutionPage() {
  return <GrowthSolutionPageContent />;
}
