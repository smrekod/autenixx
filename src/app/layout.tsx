import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Autenix | Enterprise Compliance Platform",
    template: "%s | Autenix",
  },
  description:
    "Enterprise Compliance Platform. Automate compliance monitoring and governance across AWS, Azure, GCP, Kubernetes, and M365. SOC 2, ISO 27001, HIPAA, and more.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "compliance automation",
    "SOC 2",
    "ISO 27001",
    "HIPAA",
    "GRC",
    "cloud compliance",
    "security compliance",
  ],
  authors: [{ name: "Autenix" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://autenix.co",
    siteName: "Autenix",
    title: "Autenix | Enterprise Compliance Platform",
    description:
      "Automate compliance monitoring and governance across AWS, Azure, GCP, Kubernetes, and M365.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autenix | Enterprise Compliance Platform",
    description:
      "Automate compliance monitoring and governance across AWS, Azure, GCP, Kubernetes, and M365.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased bg-white text-surface-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
