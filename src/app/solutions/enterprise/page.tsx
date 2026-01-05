import type { Metadata } from "next";
import EnterpriseSolutionPageContent from "./EnterpriseSolutionPageContent";

export const metadata: Metadata = {
  title: "Enterprise Compliance Platform - SOC 2, ISO 27001, HIPAA at Scale",
  description:
    "Enterprise-grade compliance automation for large organizations. Custom controls, SSO/SAML, SCIM provisioning, dedicated support, and on-premise deployment for SOC 2, ISO 27001, HIPAA compliance.",
  keywords: [
    "enterprise compliance",
    "enterprise GRC",
    "enterprise SOC 2",
    "enterprise ISO 27001",
    "compliance platform enterprise",
    "large organization compliance",
    "custom compliance framework",
  ],
  openGraph: {
    title: "Enterprise Compliance Solution - Autenix",
    description:
      "Enterprise-grade compliance with custom controls, SSO, dedicated support, and on-premise deployment options.",
    url: "https://autenix.co/solutions/enterprise",
  },
  alternates: {
    canonical: "https://autenix.co/solutions/enterprise",
  },
};

export default function EnterpriseSolutionPage() {
  return <EnterpriseSolutionPageContent />;
}
