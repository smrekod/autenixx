import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Autenix - Enterprise Compliance Automation Company",
  description:
    "Learn about Autenix's mission to simplify enterprise compliance. We automate SOC 2, ISO 27001, HIPAA, and other GRC frameworks for modern organizations.",
  keywords: [
    "about autenix",
    "compliance automation company",
    "GRC software company",
    "compliance mission",
    "autenix team",
  ],
  openGraph: {
    title: "About Autenix - Enterprise Compliance Automation",
    description:
      "Learn about Autenix's mission to simplify enterprise compliance. We automate SOC 2, ISO 27001, HIPAA, and other GRC frameworks.",
    url: "https://autenix.co/about",
  },
  alternates: {
    canonical: "https://autenix.co/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
