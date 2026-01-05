import type { Metadata } from "next";
import ProductsPageContent from "./ProductsPageContent";

export const metadata: Metadata = {
  title: "Compliance Automation Products - SOC 2, ISO 27001, HIPAA Tools",
  description:
    "Explore Autenix compliance automation products: automated monitoring, risk management, trust center, audit readiness, policy generator, and vendor risk management for SOC 2, ISO 27001, HIPAA.",
  keywords: [
    "compliance automation products",
    "compliance software features",
    "GRC platform tools",
    "SOC 2 automation tools",
    "compliance monitoring software",
    "audit preparation software",
  ],
  openGraph: {
    title: "Autenix Products - Complete Compliance Automation Platform",
    description:
      "Discover our full suite of compliance automation products: monitoring, risk management, trust center, audit readiness, and more.",
    url: "https://autenix.co/products",
  },
  alternates: {
    canonical: "https://autenix.co/products",
  },
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
