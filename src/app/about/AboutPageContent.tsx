"use client";

import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Target,
  Heart,
  Zap,
  Users,
  Globe,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../components/ui/AnimatedSection";
import { motion } from "framer-motion";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "We practice what we preach. Security is built into everything we do, from our platform to our processes.",
    color: "blue",
  },
  {
    icon: Target,
    title: "Customer Success",
    description:
      "Your success is our success. We're committed to helping you achieve your compliance goals.",
    color: "emerald",
  },
  {
    icon: Heart,
    title: "Transparency",
    description:
      "We believe in open, honest communication with our customers, partners, and team.",
    color: "rose",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We're constantly improving and evolving to meet the changing needs of compliance.",
    color: "amber",
  },
];

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
  },
  rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100" },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
  },
};

const stats = [
  { value: "35+", label: "Compliance Frameworks Supported" },
  { value: "400+", label: "Platform Integrations" },
  { value: "500+", label: "Companies Trust Autenix" },
  { value: "24/7", label: "Continuous Compliance Monitoring" },
];

export default function AboutPageContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-8 lg:py-10 hero-gradient-bg relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-500 to-violet-500 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
              About Autenix: Making <span className="gradient-text">Compliance Simple</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-surface-600 leading-relaxed">
              Autenix was founded with a clear mission: to help organizations
              achieve and maintain compliance with <Link href="/frameworks/soc-2" className="text-brand-600 hover:underline">SOC 2</Link>, <Link href="/frameworks/iso-27001" className="text-brand-600 hover:underline">ISO 27001</Link>, <Link href="/frameworks/hipaa" className="text-brand-600 hover:underline">HIPAA</Link>, and 35+ other frameworks—without the complexity,
              spreadsheets, and manual work that typically comes with it.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 lg:py-10 bg-white border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center">
                  <div className="text-3xl font-bold text-brand-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-surface-600">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-4 tracking-tight">
                Our Mission: Automated Compliance for Every Organization
              </h2>
              <div className="space-y-4 text-base text-surface-600 leading-relaxed">
                <p>
                  Compliance shouldn&apos;t be a burden. It should be a
                  competitive advantage. We believe that every organization
                  deserves access to enterprise-grade <Link href="/products/compliance-automation" className="text-brand-600 hover:underline">compliance automation tools</Link> that
                  actually make their lives easier.
                </p>
                <p>
                  Our platform automates the tedious parts of
                  compliance—<Link href="/products/audit-readiness" className="text-brand-600 hover:underline">evidence collection</Link>, <Link href="/products/compliance-automation" className="text-brand-600 hover:underline">control monitoring</Link>,
                  documentation—so you can focus on what matters: building great
                  products and serving your customers.
                </p>
                <p>
                  We&apos;re building the future of compliance: automated,
                  continuous, and integrated into the tools you already use.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-brand-100 text-lg leading-relaxed">
                  A world where compliance is automated, continuous, and enables
                  organizations to build trust with their customers
                  effortlessly.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 lg:py-10 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3 tracking-tight">
              The Principles That Guide Autenix
            </h2>
            <p className="text-base text-surface-600">
              These values shape everything we do at Autenix
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}>
            {values.map((value) => {
              const Icon = value.icon;
              const colors = colorClasses[value.color];
              return (
                <StaggerItem key={value.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl border border-surface-200 p-6 text-center h-full hover:shadow-lg transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-surface-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-surface-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3 tracking-tight">
                What Autenix Does: Compliance Automation Platform
              </h2>
            </div>
            <div className="space-y-4 text-base text-surface-600">
              <p>
                Autenix is an enterprise <Link href="/products" className="text-brand-600 hover:underline">compliance automation platform</Link> that helps
                organizations achieve and maintain compliance with frameworks
                like <Link href="/frameworks/soc-2" className="text-brand-600 hover:underline">SOC 2</Link>, <Link href="/frameworks/iso-27001" className="text-brand-600 hover:underline">ISO 27001</Link>, <Link href="/frameworks/hipaa" className="text-brand-600 hover:underline">HIPAA</Link>, <Link href="/frameworks/pci-dss" className="text-brand-600 hover:underline">PCI-DSS</Link>, and many more.
              </p>
              <p>
                Our platform connects to your cloud infrastructure (AWS, Azure,
                GCP, Kubernetes) and business tools, automatically collecting
                evidence and monitoring controls in real-time.
              </p>
              <div className="bg-surface-50 rounded-xl p-6 border border-surface-200">
                <p className="font-medium text-surface-900 mb-4">The Autenix platform provides:</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    { text: "Continuous compliance monitoring across 35+ frameworks", link: "/frameworks" },
                    { text: "Automated evidence collection from 400+ integrations", link: "/products/audit-readiness" },
                    { text: "Policy generation and management", link: "/products/policy-generator" },
                    { text: "Vendor risk management", link: "/products/vendor-risk" },
                    { text: "Audit preparation and readiness", link: "/products/audit-readiness" },
                    { text: "Trust center for customer-facing documentation", link: "/products/trust-center" },
                  ].map((item, i) => (
                    <motion.li
                      key={item.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-surface-700">
                      <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-brand-600" />
                      </div>
                      <Link href={item.link} className="text-sm hover:text-brand-600 transition-colors">{item.text}</Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <p>
                Whether you&apos;re a <Link href="/solutions/startup" className="text-brand-600 hover:underline">startup getting your first SOC 2</Link> or an
                <Link href="/solutions/enterprise" className="text-brand-600 hover:underline"> enterprise managing multiple frameworks</Link> across business units,
                Autenix scales with your needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 lg:py-12 dark-section-gradient relative overflow-hidden">
        <div className="absolute inset-0 cta-pattern opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Simplify Your Compliance?
            </h2>

            <p className="text-base text-white mb-6">
              Join 500+ organizations who trust Autenix for automated compliance management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-surface-900 hover:bg-surface-100 shadow-xl group"
                asChild>
                <Link href="/demo">
                  Request a Demo
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

