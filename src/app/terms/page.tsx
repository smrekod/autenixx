import type { Metadata } from "next";
import TermsOfServicePageContent from "./TermsOfServicePageContent";

export const metadata: Metadata = {
  title: "Terms of Service - Compliance Platform Agreement",
  description:
    "Autenix Terms of Service: Legal agreement governing use of our compliance automation platform for SOC 2, ISO 27001, HIPAA, and other framework compliance.",
  openGraph: {
    title: "Terms of Service - Autenix",
    description:
      "Terms and conditions for using the Autenix compliance automation platform.",
    url: "https://autenix.co/terms",
  },
  alternates: {
    canonical: "https://autenix.co/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return <TermsOfServicePageContent />;
}
