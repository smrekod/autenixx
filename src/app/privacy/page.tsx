import type { Metadata } from "next";
import PrivacyPolicyPageContent from "./PrivacyPolicyPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Security",
  description:
    "Autenix Privacy Policy: Learn how we collect, use, and protect your data. We are committed to transparency and GDPR-compliant data handling for our compliance automation platform.",
  openGraph: {
    title: "Privacy Policy - Autenix",
    description:
      "How Autenix collects, uses, and protects your data with enterprise-grade security.",
    url: "https://autenix.co/privacy",
  },
  alternates: {
    canonical: "https://autenix.co/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageContent />;
}
