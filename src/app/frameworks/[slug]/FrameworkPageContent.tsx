"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Shield,
  Award,
  FileCheck,
  Lock,
  Globe,
  Building,
} from "lucide-react";
import { Button } from "../../../components/ui/Button";
import { FRAMEWORKS } from "../../../lib/constants";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../../components/ui/AnimatedSection";
import { motion } from "framer-motion";

const colorMap: Record<
  string,
  { bg: string; text: string; light: string; border: string; gradient: string }
> = {
  blue: {
    bg: "bg-blue-600",
    text: "text-blue-600",
    light: "bg-blue-50",
    border: "border-blue-200",
    gradient: "from-blue-500 to-blue-600",
  },
  indigo: {
    bg: "bg-indigo-600",
    text: "text-indigo-600",
    light: "bg-indigo-50",
    border: "border-indigo-200",
    gradient: "from-indigo-500 to-indigo-600",
  },
  emerald: {
    bg: "bg-emerald-600",
    text: "text-emerald-600",
    light: "bg-emerald-50",
    border: "border-emerald-200",
    gradient: "from-emerald-500 to-emerald-600",
  },
  orange: {
    bg: "bg-orange-600",
    text: "text-orange-600",
    light: "bg-orange-50",
    border: "border-orange-200",
    gradient: "from-orange-500 to-orange-600",
  },
  purple: {
    bg: "bg-purple-600",
    text: "text-purple-600",
    light: "bg-purple-50",
    border: "border-purple-200",
    gradient: "from-purple-500 to-purple-600",
  },
  red: {
    bg: "bg-red-600",
    text: "text-red-600",
    light: "bg-red-50",
    border: "border-red-200",
    gradient: "from-red-500 to-red-600",
  },
  cyan: {
    bg: "bg-cyan-600",
    text: "text-cyan-600",
    light: "bg-cyan-50",
    border: "border-cyan-200",
    gradient: "from-cyan-500 to-cyan-600",
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

const frameworkDetails: Record<
  string,
  { benefits: string[]; controls: string }
> = {
  "soc-2": {
    benefits: [
      "Build trust with enterprise customers",
      "Accelerate sales cycles by proving security posture",
      "Demonstrate commitment to security controls",
      "Meet vendor security requirements",
      "Reduce security questionnaire burden",
    ],
    controls:
      "Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy)",
  },
  "iso-27001": {
    benefits: [
      "Gain international security recognition",
      "Implement systematic risk management",
      "Enable continuous improvement framework",
      "Build customer confidence globally",
      "Support regulatory compliance requirements",
    ],
    controls:
      "114 controls across 14 domains covering information security management",
  },
  hipaa: {
    benefits: [
      "Handle protected health information (PHI) legally",
      "Work with healthcare organizations",
      "Avoid significant HIPAA violation penalties",
      "Build patient and provider trust",
      "Enable healthcare industry partnerships",
    ],
    controls:
      "Administrative, Physical, and Technical Safeguards for PHI protection",
  },
  "pci-dss": {
    benefits: [
      "Process payment card data securely",
      "Reduce fraud and breach risk",
      "Avoid PCI non-compliance penalties",
      "Build merchant and customer trust",
      "Enable e-commerce capabilities",
    ],
    controls:
      "12 requirements covering network security, data protection, and access control",
  },
  gdpr: {
    benefits: [
      "Process EU personal data legally",
      "Avoid substantial GDPR fines",
      "Build customer privacy trust",
      "Enable EU market access",
      "Demonstrate privacy commitment",
    ],
    controls:
      "Data protection principles, rights of data subjects, and organizational measures",
  },
  nist: {
    benefits: [
      "Implement comprehensive security framework",
      "Enable risk-based security approach",
      "Flexible implementation options",
      "Qualify for government contracts",
      "Align with industry best practices",
    ],
    controls:
      "Security and Privacy controls organized by families (Access Control, Audit, etc.)",
  },
  cis: {
    benefits: [
      "Implement prioritized security controls",
      "Defend against common cyber attacks",
      "Follow clear implementation guidance",
      "Measure security posture improvement",
      "Leverage community-driven standards",
    ],
    controls: "Critical Security Controls prioritized by implementation groups",
  },
  fedramp: {
    benefits: [
      "Sell cloud services to federal agencies",
      "Obtain standardized authorization",
      "Meet continuous monitoring requirements",
      "Access trusted government marketplace",
      "Leverage reusable security package",
    ],
    controls: "Based on NIST 800-53 with additional federal requirements",
  },
  aksk: {
    benefits: [
      "Comply with Albanian national cybersecurity requirements",
      "Protect critical and important information infrastructures",
      "Meet legal obligations under Law No. 25/2024",
      "Align with EU directives (NIS2, eIDAS2)",
      "Demonstrate commitment to national security standards",
    ],
    controls:
      "National cybersecurity measures, risk assessment methodologies, incident reporting, and critical infrastructure protection requirements",
  },
};

interface FrameworkPageContentProps {
  slug: string;
}

export default function FrameworkPageContent({
  slug,
}: FrameworkPageContentProps) {
  const framework = FRAMEWORKS.find((f) => f.slug === slug);

  if (!framework) {
    return null;
  }

  const colors = colorMap[framework.color] || colorMap.blue;
  const Icon = frameworkIcons[slug] || Shield;
  const details = frameworkDetails[slug] || {
    benefits: [
      "Automated compliance monitoring",
      "Continuous evidence collection",
      "Streamlined audit preparation",
      "Risk management integration",
      "Real-time compliance status",
    ],
    controls: "Framework-specific controls and requirements",
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-10 lg:py-12 hero-gradient-bg relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${colors.gradient} rounded-full blur-3xl opacity-20`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold text-surface-900 mb-6 tracking-tight">
                {framework.name}{" "}
                <span className={colors.text}>Compliance Automation</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-surface-600 mb-8 leading-relaxed">
                {framework.description}. Autenix helps you achieve and maintain{" "}
                {framework.shortName} compliance with{" "}
                <Link
                  href="/products/compliance-automation"
                  className="text-brand-600 hover:underline">
                  automated monitoring
                </Link>{" "}
                and{" "}
                <Link
                  href="/products/audit-readiness"
                  className="text-brand-600 hover:underline">
                  evidence collection
                </Link>
                .
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className={`group shadow-lg ${colors.bg} hover:opacity-90`}
                  asChild>
                  <Link href="/demo">
                    Get {framework.shortName} Demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-600 text-brand-600 hover:bg-brand-50 hover:border-brand-700 hover:text-brand-700"
                  asChild>
                  <Link href="/frameworks">View All Frameworks</Link>
                </Button>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-full max-w-sm mx-auto aspect-square rounded-3xl ${colors.light} border-2 ${colors.border} flex items-center justify-center shadow-xl`}>
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`text-7xl font-bold ${colors.text} mb-3`}>
                    {framework.shortName}
                  </motion.div>
                  <div className="text-surface-600 font-medium">
                    {framework.category} Compliance
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-1 ${colors.bg} rounded-full mx-auto mt-4`}
                  />
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">
              Why {framework.shortName} Compliance Matters
            </h2>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.08}>
            {details.benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-surface-200 p-6 h-full hover:shadow-lg transition-all duration-300">
                  <div
                    className={`w-10 h-10 rounded-xl ${colors.light} border ${colors.border} flex items-center justify-center mb-4`}>
                    <Check className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <p className="text-surface-700 font-medium leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How Autenix Helps Section */}
      <section className="py-10 lg:py-12 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 tracking-tight">
                How Autenix Automates {framework.shortName} Compliance
              </h2>
              <p className="text-lg text-surface-600 mb-8">
                Our{" "}
                <Link
                  href="/products/compliance-automation"
                  className="text-brand-600 hover:underline">
                  compliance automation platform
                </Link>{" "}
                handles the tedious parts of {framework.shortName} compliance so
                you can focus on your business.
              </p>
              <ul className="space-y-4">
                {[
                  `Automated control mapping to ${framework.shortName} requirements`,
                  "Continuous compliance monitoring with real-time alerts",
                  "Evidence collection from AWS, Azure, GCP, and Kubernetes",
                  "Gap analysis and remediation guidance",
                  "Audit-ready documentation and reporting",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full ${colors.light} flex items-center justify-center shrink-0 mt-0.5`}>
                      <Check className={`w-3 h-3 ${colors.text}`} />
                    </div>
                    <span className="text-surface-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl ${colors.light} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-semibold text-surface-900">
                    {framework.shortName} Controls Coverage
                  </h3>
                </div>
                <p className="text-surface-600 mb-6">{details.controls}</p>
                <div className="bg-surface-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-surface-600">
                      Automated Coverage
                    </span>
                    <span className={`text-sm font-semibold ${colors.text}`}>
                      High
                    </span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className={`${colors.bg} h-2.5 rounded-full progress-bar-animated`}
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Frameworks Section */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-4 tracking-tight">
              Explore Other Compliance Frameworks
            </h2>
            <p className="text-lg text-surface-600">
              Autenix supports 35+ compliance frameworks
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-4 gap-5"
            staggerDelay={0.1}>
            {FRAMEWORKS.filter((f) => f.slug !== framework.slug)
              .slice(0, 4)
              .map((otherFramework) => {
                const otherColors =
                  colorMap[otherFramework.color] || colorMap.blue;
                const OtherIcon = frameworkIcons[otherFramework.slug] || Shield;
                return (
                  <StaggerItem key={otherFramework.slug}>
                    <Link
                      href={`/frameworks/${otherFramework.slug}`}
                      className="group block bg-white rounded-xl border border-surface-200 p-5 card-hover text-center h-full">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-12 h-12 rounded-xl ${otherColors.light} border ${otherColors.border} flex items-center justify-center mx-auto mb-3`}>
                        <OtherIcon className={`w-6 h-6 ${otherColors.text}`} />
                      </motion.div>
                      <div
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${otherColors.light} ${otherColors.text} mb-2`}>
                        {otherFramework.shortName}
                      </div>
                      <h3 className="font-semibold text-surface-900 group-hover:text-brand-600 transition-colors text-sm">
                        {otherFramework.name}
                      </h3>
                    </Link>
                  </StaggerItem>
                );
              })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 lg:py-12 dark-section-gradient relative overflow-hidden">
        <div className="absolute inset-0 cta-pattern" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br ${colors.gradient} rounded-full blur-3xl opacity-30`}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Achieve {framework.shortName} Compliance?
            </h2>

            <p className="text-lg text-white mb-8">
              See how Autenix can help you get {framework.shortName} compliant
              faster with{" "}
              <Link
                href="/products/compliance-automation"
                className="text-brand-300 hover:underline">
                automation
              </Link>
              .
            </p>

            <Button
              size="lg"
              className="bg-white text-surface-900 hover:bg-surface-100 shadow-xl group"
              asChild>
              <Link href="/demo">
                Request {framework.shortName} Demo
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
