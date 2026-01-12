"use client";

import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Award,
  FileCheck,
  Lock,
  Globe,
  Building,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { FRAMEWORKS } from "../../lib/constants";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../components/ui/AnimatedSection";
import { motion } from "framer-motion";

const colorMap: Record<
  string,
  { bg: string; text: string; border: string; hover: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    hover: "hover:bg-blue-100",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    border: "border-indigo-200",
    hover: "hover:bg-indigo-100",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    hover: "hover:bg-emerald-100",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
    hover: "hover:bg-orange-100",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200",
    hover: "hover:bg-purple-100",
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
    hover: "hover:bg-red-100",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    border: "border-cyan-200",
    hover: "hover:bg-cyan-100",
  },
};

const frameworkIcons: Record<string, React.ElementType> = {
  "soc-2": Shield,
  "iso-27001": Award,
  hipaa: FileCheck,
  "pci-dss": Lock,
  gdpr: Globe,
  nist: Building,
  cis: Shield,
  fedramp: Building,
  aksk: Building,
};

const categories = [
  {
    name: "Security Frameworks",
    frameworks: ["SOC 2", "ISO 27001", "CIS"],
    icon: Shield,
  },
  { name: "Healthcare Compliance", frameworks: ["HIPAA"], icon: FileCheck },
  { name: "Financial Security", frameworks: ["PCI-DSS"], icon: Lock },
  { name: "Privacy Regulations", frameworks: ["GDPR"], icon: Globe },
  {
    name: "Government Standards",
    frameworks: ["NIST", "FedRAMP", "AKSK"],
    icon: Building,
  },
];

export default function FrameworksPageContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-8 lg:py-10 hero-gradient-bg relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
              Compliance{" "}
              <span className="gradient-text-emerald">Frameworks</span> We
              Automate
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-surface-600 mb-6 leading-relaxed">
              Autenix provides comprehensive support for 35+ major compliance
              frameworks including{" "}
              <Link
                href="/frameworks/soc-2"
                className="text-emerald-600 hover:underline">
                SOC 2
              </Link>
              ,{" "}
              <Link
                href="/frameworks/iso-27001"
                className="text-emerald-600 hover:underline">
                ISO 27001
              </Link>
              ,{" "}
              <Link
                href="/frameworks/hipaa"
                className="text-emerald-600 hover:underline">
                HIPAA
              </Link>
              ,{" "}
              <Link
                href="/frameworks/gdpr"
                className="text-emerald-600 hover:underline">
                GDPR
              </Link>
              , and more. Automated control mapping, continuous monitoring, and
              audit-ready evidence collection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}>
              <Button
                size="lg"
                className="group shadow-lg shadow-emerald-600/20 bg-emerald-600 hover:bg-emerald-700"
                asChild>
                <Link href="/demo">
                  Request a Demo
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Frameworks by Category */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            const categoryFrameworks = FRAMEWORKS.filter((f) =>
              category.frameworks.includes(f.shortName)
            );

            if (categoryFrameworks.length === 0) return null;

            return (
              <div key={category.name} className="mb-6 last:mb-0">
                <AnimatedSection>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-surface-100 flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5 text-surface-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-surface-900">
                      {category.name}
                    </h2>
                  </div>
                </AnimatedSection>

                <StaggerContainer
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  staggerDelay={0.08}>
                  {categoryFrameworks.map((framework) => {
                    const colors = colorMap[framework.color] || colorMap.blue;
                    const FrameworkIcon =
                      frameworkIcons[framework.slug] || Shield;

                    return (
                      <StaggerItem key={framework.slug}>
                        <Link
                          href={`/frameworks/${framework.slug}`}
                          className="group block bg-white rounded-2xl border border-surface-200 p-6 card-hover h-full">
                          <div className="flex items-start gap-4 mb-4">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                              <FrameworkIcon
                                className={`w-6 h-6 ${colors.text}`}
                              />
                            </motion.div>
                            <div>
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border} mb-2`}>
                                {framework.shortName}
                              </span>
                              <h3 className="text-lg font-semibold text-surface-900 group-hover:text-brand-600 transition-colors">
                                {framework.name} Compliance
                              </h3>
                            </div>
                          </div>
                          <p className="text-surface-600 mb-4 text-sm leading-relaxed">
                            {framework.description}. Automate your{" "}
                            {framework.shortName} compliance with Autenix.
                          </p>
                          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 group-hover:gap-2.5 transition-all">
                            Learn about {framework.shortName} automation
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </Link>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>
            );
          })}
        </div>
      </section>

      {/* More Frameworks */}
      <section className="py-8 lg:py-10 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-surface-900 mb-3">
              Additional Compliance Frameworks We Support
            </h2>
            <p className="text-base text-surface-600 mb-6 max-w-2xl mx-auto">
              Beyond our core frameworks, Autenix also supports CMMC, CJIS,
              NIS2, DORA, CPS 234, EU AI Act, Essential Eight, Cyber Essentials,
              and custom compliance frameworks.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="group border-brand-600 text-brand-600 hover:bg-brand-50 hover:border-brand-700 hover:text-brand-700"
              asChild>
              <Link href="/contact">
                Contact us for custom frameworks
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 lg:py-12 dark-section-gradient relative overflow-hidden">
        <div className="absolute inset-0 cta-pattern opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Automate Your Compliance?
            </h2>

            <p className="text-base text-white mb-6">
              See how Autenix can help you achieve{" "}
              <Link
                href="/frameworks/soc-2"
                className="text-emerald-300 hover:underline">
                SOC 2
              </Link>
              ,{" "}
              <Link
                href="/frameworks/iso-27001"
                className="text-emerald-300 hover:underline">
                ISO 27001
              </Link>
              ,{" "}
              <Link
                href="/frameworks/hipaa"
                className="text-emerald-300 hover:underline">
                HIPAA
              </Link>
              , and other compliance requirements faster.
            </p>

            <Button
              size="lg"
              className="bg-white text-surface-900 hover:bg-surface-100 shadow-xl group"
              asChild>
              <Link href="/demo">
                Request a Demo
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
