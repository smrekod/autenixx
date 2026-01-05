import type { Metadata } from "next";
import CookiePolicyPageContent from "./CookiePolicyPageContent";

export const metadata: Metadata = {
  title: "Cookie Policy - Website Cookies & Privacy",
  description:
    "Autenix Cookie Policy: We keep it simple - learn about our minimal cookie usage and privacy-focused approach on our compliance automation platform website.",
  openGraph: {
    title: "Cookie Policy - Autenix",
    description:
      "Learn about Autenix's minimal cookie usage and privacy-focused approach.",
    url: "https://autenix.co/cookies",
  },
  alternates: {
    canonical: "https://autenix.co/cookies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return <CookiePolicyPageContent />;
}
