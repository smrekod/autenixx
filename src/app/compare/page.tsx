import type { Metadata } from "next";
import ComparePageContent from "./ComparePageContent";

export const metadata: Metadata = {
  title: "Autenix vs Other Compliance Platforms | Feature Comparison",
  description:
    "Compare Autenix to other compliance automation platforms. See why Autenix leads with 35+ frameworks, 400+ integrations, real-time monitoring, and transparent pricing for SOC 2, ISO 27001, and HIPAA compliance.",
  keywords: [
    "compliance platform comparison",
    "SOC 2 automation tools",
    "ISO 27001 compliance software",
    "HIPAA compliance platform",
    "GRC software comparison",
    "compliance automation comparison",
    "best compliance platform",
    "compliance software comparison",
    "automated compliance monitoring",
    "audit readiness platform",
  ],
  openGraph: {
    title: "Autenix vs Other Compliance Platforms | Feature Comparison",
    description:
      "Compare leading compliance automation platforms. See why Autenix leads with 35+ frameworks, 400+ integrations, and real-time compliance monitoring.",
    type: "website",
    url: "https://autenix.co/compare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autenix vs Other Platforms | Compliance Comparison",
    description:
      "Compare Autenix to other compliance platforms. See the full feature breakdown.",
  },
  alternates: {
    canonical: "https://autenix.co/compare",
  },
};

// Comparison Schema for SEO
const comparisonSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Autenix Compliance Platform Comparison",
  description:
    "Compare Autenix to other compliance platforms for SOC 2, ISO 27001, and HIPAA compliance automation.",
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Autenix",
    applicationCategory: "Compliance Automation Software",
    description:
      "Enterprise compliance automation platform with 35+ frameworks, 400+ integrations, and real-time monitoring.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
    featureList: [
      "35+ Compliance Frameworks",
      "400+ Integrations",
      "Real-time Compliance Monitoring",
      "Automated Evidence Collection",
      "Multi-Cloud Support (AWS, Azure, GCP)",
      "Audit Readiness Workflows",
      "Trust Center Portal",
      "Policy Generator",
      "Vendor Risk Management",
    ],
  },
};

export default function ComparePage() {
  return (
    <>
      {/* Comparison Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      <ComparePageContent />
    </>
  );
}
