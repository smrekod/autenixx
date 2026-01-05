import type { Metadata } from "next";
import FrameworksPageContent from "./FrameworksPageContent";

export const metadata: Metadata = {
  title: "Compliance Frameworks - SOC 2, ISO 27001, HIPAA, GDPR Automation",
  description:
    "Autenix supports 35+ compliance frameworks including SOC 2, ISO 27001, HIPAA, GDPR, PCI-DSS, NIST, and FedRAMP. Automated control mapping, continuous monitoring, and audit-ready evidence.",
  keywords: [
    "compliance frameworks",
    "SOC 2 compliance",
    "ISO 27001 certification",
    "HIPAA compliance software",
    "GDPR compliance",
    "PCI DSS compliance",
    "NIST compliance",
    "security compliance frameworks",
  ],
  openGraph: {
    title: "Compliance Frameworks - Autenix Automation",
    description:
      "Automate compliance with 35+ frameworks: SOC 2, ISO 27001, HIPAA, GDPR, PCI-DSS, NIST, and more.",
    url: "https://autenix.co/frameworks",
  },
  alternates: {
    canonical: "https://autenix.co/frameworks",
  },
};

export default function FrameworksPage() {
  return <FrameworksPageContent />;
}
