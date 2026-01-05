import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "../../../lib/constants";
import ProductPageContent from "./ProductPageContent";

export const runtime = 'edge';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for each product page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const metaDescriptions: Record<string, string> = {
    "compliance-automation": `Autenix ${product.title}: ${product.description} Automate SOC 2, ISO 27001, HIPAA compliance monitoring with continuous evidence collection.`,
    "risk-management": `Autenix ${product.title}: ${product.description} Identify, assess, and mitigate compliance risks with visual dashboards and automated scoring.`,
    "trust-center": `Autenix ${product.title}: ${product.description} Build customer trust by showcasing your SOC 2, ISO 27001, and security certifications.`,
    "audit-readiness": `Autenix ${product.title}: ${product.description} Streamline SOC 2, ISO 27001, HIPAA audit preparation with automated evidence collection.`,
    "policy-generator": `Autenix ${product.title}: ${product.description} Auto-generate SOC 2, ISO 27001, HIPAA compliant policies with version control.`,
    "vendor-risk": `Autenix ${product.title}: ${product.description} Assess and monitor third-party vendor security for SOC 2, ISO 27001 compliance.`,
  };

  return {
    title: `${product.title} - Compliance Automation Software`,
    description: metaDescriptions[slug] || `${product.title}: ${product.description}`,
    keywords: [
      product.title.toLowerCase(),
      `${product.title.toLowerCase()} software`,
      "compliance automation",
      "SOC 2 compliance",
      "ISO 27001 compliance",
      "HIPAA compliance",
    ],
    openGraph: {
      title: `${product.title} - Autenix Compliance Automation`,
      description: product.tagline,
      url: `https://autenix.co/products/${slug}`,
    },
    alternates: {
      canonical: `https://autenix.co/products/${slug}`,
    },
  };
}

// Generate static params for all products
export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductPageContent slug={slug} />;
}
