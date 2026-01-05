"use client";

import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Layers,
  Users,
  BarChart3,
  Zap,
} from "lucide-react";
import { Button } from "../../../components/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../../components/ui/AnimatedSection";
import { FeatureList } from "../../../components/ui/FeatureList";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers,
    title: "Multi-Framework Compliance",
    description:
      "Manage SOC 2, ISO 27001, HIPAA, and GDPR with shared controls and unified evidence.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Assign compliance tasks, track progress, and collaborate across teams.",
  },
  {
    icon: BarChart3,
    title: "Advanced Compliance Reporting",
    description: "Executive dashboards and custom compliance reports for stakeholders.",
  },
];

const benefits = [
  "Unlimited compliance frameworks (SOC 2, ISO 27001, HIPAA, GDPR)",
  "Advanced integrations (400+ tools)",
  "Team roles and permissions",
  "Custom policy templates",
  "Vendor risk management",
  "Priority support",
  "API access",
  "Custom compliance workflows",
];

const frameworks = [
  { name: "SOC 2", progress: 94, color: "blue" },
  { name: "ISO 27001", progress: 87, color: "indigo" },
  { name: "HIPAA", progress: 92, color: "emerald" },
  { name: "GDPR", progress: 78, color: "violet" },
];

export default function GrowthSolutionPageContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-10 lg:py-12 hero-gradient-bg relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-500 to-violet-500 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-surface-900 mb-6 tracking-tight leading-[1.1]">
                Scale Your{" "}
                <span className="gradient-text">Multi-Framework Compliance</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-surface-600 mb-8 leading-relaxed">
                As your business grows, so do your compliance requirements.
                Autenix scales with you—supporting{" "}
                <Link href="/frameworks/soc-2" className="text-brand-600 hover:underline">SOC 2</Link>,{" "}
                <Link href="/frameworks/iso-27001" className="text-brand-600 hover:underline">ISO 27001</Link>,{" "}
                <Link href="/frameworks/hipaa" className="text-brand-600 hover:underline">HIPAA</Link>,{" "}
                <Link href="/frameworks/gdpr" className="text-brand-600 hover:underline">GDPR</Link>, multiple frameworks, teams,
                and <Link href="/products" className="text-brand-600 hover:underline">400+ integrations</Link>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="group shadow-lg shadow-brand-600/20 bg-brand-600 hover:bg-brand-700 text-black"
                  asChild>
                  <Link href="/demo">
                    Request Growth Demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-200 text-brand-700 hover:bg-brand-50"
                  asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="bg-white rounded-2xl dashboard-shadow border border-surface-200 overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-4 bg-gradient-to-r from-surface-50 to-white border-b border-surface-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-brand-50 flex items-center justify-center">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-600" />
                    </div>
                    <span className="text-sm font-medium text-surface-600">
                      Multi-Framework Dashboard
                    </span>
                  </div>
                  <div className="w-16" />
                </div>

                <div className="p-5 bg-gradient-to-b from-surface-50/50 to-white">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 gap-3 mb-5">
                    {frameworks.map((fw, i) => (
                      <motion.div
                        key={fw.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="p-3 bg-surface-50 rounded-xl">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-surface-700">
                            {fw.name}
                          </span>
                          <span className="font-semibold text-brand-600">
                            {fw.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-surface-200 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${fw.progress}%` }}
                            transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                            className={`bg-${fw.color}-500 h-2 rounded-full progress-bar-animated`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-white rounded-xl p-4 border border-surface-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-surface-700">
                        Team Activity
                      </span>
                      <span className="text-xs text-surface-500">
                        Last 7 days
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + i * 0.1 }}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-violet-400 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                            {String.fromCharCode(65 + i)}
                          </motion.div>
                        ))}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.6 }}
                          className="w-8 h-8 rounded-full bg-surface-100 border-2 border-white flex items-center justify-center text-surface-600 text-xs font-semibold">
                          +5
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-surface-900">
                          42 compliance tasks completed
                        </div>
                        <div className="text-xs text-emerald-600">
                          ↑ 18% from last week
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3 tracking-tight">
              Built for Multi-Framework Compliance at Scale
            </h2>
            <p className="text-base text-surface-600">
              Everything you need to manage <Link href="/frameworks/soc-2" className="text-brand-600 hover:underline">SOC 2</Link>,{" "}
              <Link href="/frameworks/iso-27001" className="text-brand-600 hover:underline">ISO 27001</Link>,{" "}
              <Link href="/frameworks/hipaa" className="text-brand-600 hover:underline">HIPAA</Link>, and <Link href="/frameworks/gdpr" className="text-brand-600 hover:underline">GDPR</Link> compliance at scale, from
              multi-framework support to advanced team collaboration.
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
            staggerDelay={0.1}>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl border border-surface-200 p-8 text-center h-full hover:shadow-xl hover:border-brand-200 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-7 h-7 text-brand-600" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-surface-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-surface-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 lg:py-10 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3 tracking-tight">
                Everything to Scale Your Compliance Program
              </h2>
              <p className="text-surface-600 mb-5">
                Our growth plan includes advanced features for teams managing
                <Link href="/frameworks/soc-2" className="text-brand-600 hover:underline"> SOC 2</Link>,{" "}
                <Link href="/frameworks/iso-27001" className="text-brand-600 hover:underline">ISO 27001</Link>,{" "}
                <Link href="/frameworks/hipaa" className="text-brand-600 hover:underline">HIPAA</Link>, and multiple frameworks with stakeholders.
              </p>
              <FeatureList
                features={benefits}
                variant="minimal"
                color="brand"
                columns={2}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl border-2 border-brand-500 ring-4 ring-brand-100 p-8 shadow-lg">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-medium mb-4">
                  <Zap className="w-3 h-3 mr-1" />
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-surface-900 mb-2">
                  Growth Plan
                </h3>
                <p className="text-surface-600 mb-6">
                  Perfect for companies scaling their SOC 2, ISO 27001, HIPAA, and GDPR compliance program
                </p>
                <Button className="w-full group text-black" size="lg" asChild>
                  <Link href="/demo">
                    Request Growth Demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
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
              Ready to Scale Your Compliance?
            </h2>

            <p className="text-base text-white mb-6">
              See how Autenix can help you manage{" "}
              <Link href="/frameworks/soc-2" className="text-brand-300 hover:underline">SOC 2</Link>,{" "}
              <Link href="/frameworks/iso-27001" className="text-brand-300 hover:underline">ISO 27001</Link>,{" "}
              <Link href="/frameworks/hipaa" className="text-brand-300 hover:underline">HIPAA</Link>, and <Link href="/frameworks/gdpr" className="text-brand-300 hover:underline">GDPR</Link> compliance at scale.
            </p>

            <Button
              size="lg"
              className="bg-white text-surface-900 hover:bg-surface-100 shadow-xl group"
              asChild>
              <Link href="/demo">
                Request Growth Demo
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

