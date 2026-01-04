"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";

import { NAV_ITEMS } from "../../lib/constants";

const navigation = {
  products: [
    { name: "Compliance Automation", href: "/products/compliance-automation" },
    { name: "Risk Management", href: "/products/risk-management" },
    { name: "Trust Center", href: "/products/trust-center" },
    { name: "Audit Readiness", href: "/products/audit-readiness" },
    { name: "Policy Generator", href: "/products/policy-generator" },
    { name: "Vendor Risk", href: "/products/vendor-risk" },
  ],
  frameworks: [
    { name: "SOC 2", href: "/frameworks/soc-2" },
    { name: "ISO 27001", href: "/frameworks/iso-27001" },
    { name: "HIPAA", href: "/frameworks/hipaa" },
    { name: "GDPR", href: "/frameworks/gdpr" },
  ],
  solutions: [
    { name: "For Startups", href: "/solutions/startup" },
    { name: "For Growth Companies", href: "/solutions/growth" },
    { name: "For Enterprise", href: "/solutions/enterprise" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Request Demo", href: "/demo" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/auctenix/posts",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61577944291336",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/autenix_compliance/",
  },
];

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#18181B" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logo.svg"
                alt="Autenix"
                width={223}
                height={45}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-surface-400 mb-6 leading-relaxed max-w-xs">
              The modern compliance platform that helps companies achieve and
              maintain security certifications faster.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@autenix.co"
                className="flex items-center gap-3 text-surface-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@autenix.co
              </a>
              <a
                href="tel:+38349123456"
                className="flex items-center gap-3 text-surface-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +383 49 987 005
              </a>
              <div className="flex items-start gap-3 text-surface-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  RR. Shefqet Shkupi
                  <br />
                  Prishtina, Kosovo
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-surface-800 hover:bg-surface-700 flex items-center justify-center transition-colors group"
                    aria-label={social.name}>
                    <Icon className="w-5 h-5 text-surface-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-300 mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-surface-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-300 mb-4">
              Frameworks
            </h3>
            <ul className="space-y-3">
              {navigation.frameworks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-surface-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-300 mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-surface-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-300 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-surface-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-surface-500 text-sm">
              © {new Date().getFullYear()} Autenix. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-surface-500 hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
