import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Autenix | Compliance Automation Platform for SOC 2, ISO 27001 & HIPAA",
    template: "%s | Autenix",
  },
  description:
    "Autenix is the leading compliance automation platform. Automate SOC 2, ISO 27001, HIPAA, PCI-DSS, and GDPR compliance monitoring across AWS, Azure, GCP, Kubernetes, and M365. Get audit-ready 80% faster.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "compliance automation",
    "compliance automation platform",
    "SOC 2 compliance software",
    "ISO 27001 compliance",
    "HIPAA compliance software",
    "GRC platform",
    "cloud compliance monitoring",
    "security compliance automation",
    "automated evidence collection",
    "continuous compliance monitoring",
  ],
  authors: [{ name: "Autenix" }],
  creator: "Autenix",
  publisher: "Autenix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://autenix.co",
    siteName: "Autenix",
    title: "Autenix | Compliance Automation Platform",
    description:
      "Automate SOC 2, ISO 27001, HIPAA & GDPR compliance. Get audit-ready 80% faster with continuous monitoring across AWS, Azure, GCP & Kubernetes.",
    images: [
      {
        url: "https://autenix.co/og-image.png",
        width: 1200,
        height: 630,
        alt: "Autenix Compliance Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autenix | Compliance Automation Platform",
    description:
      "Automate SOC 2, ISO 27001, HIPAA & GDPR compliance. Get audit-ready 80% faster.",
    images: ["https://autenix.co/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://autenix.co",
  },
};

// Organization Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Autenix",
  url: "https://autenix.co",
  logo: "https://autenix.co/logo.svg",
  description: "Autenix is a compliance automation platform that helps organizations achieve and maintain SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS compliance.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "RR. Shefqet Shkupi",
    addressLocality: "Prishtina",
    addressCountry: "XK"
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@autenix.co",
    contactType: "sales"
  },
  sameAs: [
    "https://www.linkedin.com/company/auctenix/",
    "https://www.facebook.com/profile.php?id=61577944291336",
    "https://www.instagram.com/autenix_compliance/"
  ]
};

// SoftwareApplication Schema for SEO
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Autenix",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Compliance automation platform for SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS. Automate evidence collection, continuous monitoring, and audit preparation.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Contact for pricing"
  },
  featureList: [
    "Automated compliance monitoring",
    "Evidence collection automation",
    "35+ compliance frameworks",
    "400+ integrations",
    "Policy generator",
    "Risk management",
    "Trust center",
    "Audit preparation"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="font-body antialiased bg-white text-surface-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
