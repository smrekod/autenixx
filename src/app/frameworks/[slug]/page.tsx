import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FRAMEWORKS } from "../../../lib/constants";
import FrameworkPageContent from "./FrameworkPageContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for each framework page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const framework = FRAMEWORKS.find((f) => f.slug === slug);

  if (!framework) {
    return {
      title: "Framework Not Found",
    };
  }

  const metaDescriptions: Record<string, string> = {
    "soc-2": `SOC 2 compliance automation software. Autenix helps you achieve SOC 2 Type I and Type II certification faster with automated evidence collection, continuous monitoring, and audit-ready documentation.`,
    "iso-27001": `ISO 27001 compliance automation platform. Achieve ISO 27001 certification with Autenix's automated ISMS controls, continuous monitoring, and evidence collection for information security management.`,
    "hipaa": `HIPAA compliance software for healthcare. Automate HIPAA compliance with Autenix - protect PHI, meet security requirements, and prepare for HIPAA audits with continuous monitoring.`,
    "pci-dss": `PCI DSS compliance automation. Achieve PCI DSS certification with Autenix's automated payment security controls, evidence collection, and continuous monitoring for cardholder data protection.`,
    "gdpr": `GDPR compliance automation software. Meet GDPR requirements with Autenix - automate data protection controls, privacy compliance monitoring, and documentation for EU regulations.`,
    "nist": `NIST compliance automation platform. Achieve NIST 800-53 compliance with Autenix's automated security controls, continuous monitoring, and federal security standards support.`,
    "cis": `CIS Controls compliance software. Implement CIS Benchmarks with Autenix - automate critical security controls, continuous monitoring, and security posture management.`,
    "fedramp": `FedRAMP compliance automation. Achieve FedRAMP authorization with Autenix - automate federal cloud security controls, continuous monitoring, and government compliance requirements.`,
  };

  return {
    title: `${framework.shortName} Compliance Automation Software - ${framework.name}`,
    description: metaDescriptions[slug] || `${framework.name} compliance automation. ${framework.description}. Automate ${framework.shortName} compliance with Autenix.`,
    keywords: [
      `${framework.shortName} compliance`,
      `${framework.shortName} compliance software`,
      `${framework.shortName} automation`,
      `${framework.shortName} certification`,
      `${framework.name} compliance`,
      "compliance automation",
    ],
    openGraph: {
      title: `${framework.shortName} Compliance Automation - Autenix`,
      description: `Automate ${framework.shortName} compliance with Autenix. ${framework.description}`,
      url: `https://autenix.co/frameworks/${slug}`,
    },
    alternates: {
      canonical: `https://autenix.co/frameworks/${slug}`,
    },
  };
}

// Generate static params for all frameworks
export function generateStaticParams() {
  return FRAMEWORKS.map((framework) => ({
    slug: framework.slug,
  }));
}

export default async function FrameworkPage({ params }: PageProps) {
  const { slug } = await params;
  const framework = FRAMEWORKS.find((f) => f.slug === slug);

  if (!framework) {
    notFound();
  }

  return <FrameworkPageContent slug={slug} />;
}
