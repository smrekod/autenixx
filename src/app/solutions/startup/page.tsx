import type { Metadata } from "next";
import StartupSolutionPageContent from "./StartupSolutionPageContent";

export const metadata: Metadata = {
  title: "Startup Compliance - SOC 2 & ISO 27001 for Startups",
  description:
    "Get your first SOC 2 or ISO 27001 certification fast with Autenix. Startup-friendly compliance automation with guided workflows, pre-built templates, and budget-friendly pricing.",
  keywords: [
    "startup compliance",
    "SOC 2 for startups",
    "ISO 27001 startup",
    "startup security certification",
    "first SOC 2 certification",
    "startup GRC",
  ],
  openGraph: {
    title: "Startup Compliance Solution - Autenix",
    description:
      "Get SOC 2 or ISO 27001 certified fast. Startup-friendly compliance automation with guided workflows.",
    url: "https://autenix.co/solutions/startup",
  },
  alternates: {
    canonical: "https://autenix.co/solutions/startup",
  },
};

export default function StartupSolutionPage() {
  return <StartupSolutionPageContent />;
}
