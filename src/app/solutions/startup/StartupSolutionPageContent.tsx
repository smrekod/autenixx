"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Rocket,
  Zap,
  Clock,
  Target,
  Shield,
  TrendingUp,
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
    icon: Zap,
    title: "Quick Setup",
    description:
      "Get started in minutes with guided onboarding and pre-built SOC 2 and ISO 27001 templates.",
  },
  {
    icon: Clock,
    title: "Fast Time to Compliance",
    description: "Achieve your first SOC 2 or ISO 27001 certification in weeks, not months.",
  },
  {
    icon: Target,
    title: "Focus on What Matters",
    description: "Essential compliance controls coverage without enterprise complexity.",
  },
];

const benefits = [
  "Pre-built SOC 2 and ISO 27001 policy templates",
  "Guided compliance journey with step-by-step workflows",
  "Essential framework coverage (SOC 2, ISO 27001)",
  "Budget-friendly startup pricing",
  "Self-service onboarding",
  "Integration with startup-friendly tools",
];

const steps = [
  { name: "Setup Complete", status: "complete" },
  { name: "Policies Created", status: "complete" },
  { name: "Controls Mapped", status: "complete" },
  { name: "Evidence Collected", status: "active" },
];

export default function StartupSolutionPageContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-10 lg:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50/30" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-surface-900 mb-6 tracking-tight leading-[1.1]">
                Startup Compliance:{" "}
                <span className="gradient-text-emerald">
                  Get SOC 2 & ISO 27001 Fast
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-surface-600 mb-8 leading-relaxed">
                Your first <Link href="/frameworks/soc-2" className="text-emerald-600 hover:underline">SOC 2</Link> or <Link href="/frameworks/iso-27001" className="text-emerald-600 hover:underline">ISO 27001</Link> shouldn&apos;t slow you down.
                Autenix helps startups achieve compliance quickly with guided
                workflows and <Link href="/products/compliance-automation" className="text-emerald-600 hover:underline">compliance automation</Link>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="group shadow-lg shadow-emerald-600/20 bg-emerald-600 hover:bg-emerald-700"
                  asChild>
                  <Link href="/demo">
                    Request Startup Demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
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
                    <div className="w-6 h-6 rounded-md bg-emerald-50 flex items-center justify-center">
                      <Rocket className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium text-surface-600">
                      Startup SOC 2 Dashboard
                    </span>
                  </div>
                  <div className="w-16" />
                </div>

                <div className="p-5 bg-gradient-to-b from-surface-50/50 to-white">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Days to SOC 2", value: "45", color: "emerald" },
                      { label: "Controls", value: "89%", color: "blue" },
                      { label: "Evidence", value: "156", color: "violet" },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className={`bg-${stat.color}-50 rounded-xl p-3 border border-${stat.color}-100/50`}>
                        <div className="text-xs text-surface-500 mb-1 font-medium">
                          {stat.label}
                        </div>
                        <span
                          className={`text-xl font-bold text-${stat.color}-600`}>
                          {stat.value}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white rounded-xl p-4 border border-surface-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-surface-700">
                        Your SOC 2 Journey
                      </span>
                      <span className="text-xs text-emerald-600 font-medium">
                        75% Complete
                      </span>
                    </div>
                    <div className="space-y-2">
                      {steps.map((step, index) => (
                        <motion.div
                          key={step.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.1 }}
                          className="flex items-center gap-3 p-2.5 bg-surface-50 rounded-lg">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center ${
                              step.status === "complete"
                                ? "bg-emerald-100 text-emerald-600"
                                : "bg-blue-100 text-blue-600"
                            }`}>
                            {step.status === "complete" ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <TrendingUp className="w-4 h-4" />
                            )}
                          </div>
                          <span
                            className={`text-sm font-medium ${
                              step.status === "complete"
                                ? "text-surface-900"
                                : "text-blue-600"
                            }`}>
                            {step.name}
                          </span>
                          {step.status === "active" && (
                            <motion.span
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="ml-auto text-xs text-blue-600 font-medium">
                              In Progress
                            </motion.span>
                          )}
                        </motion.div>
                      ))}
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
              Built for Startup Speed: Fast SOC 2 & ISO 27001
            </h2>
            <p className="text-base text-surface-600">
              We understand startups need to move fast. That&apos;s why
              we&apos;ve designed our <Link href="/products/compliance-automation" className="text-brand-600 hover:underline">compliance automation platform</Link> to get you{" "}
              <Link href="/frameworks/soc-2" className="text-brand-600 hover:underline">SOC 2</Link> or <Link href="/frameworks/iso-27001" className="text-brand-600 hover:underline">ISO 27001</Link> compliant without slowing you down.
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
                    className="bg-white rounded-2xl border border-surface-200 p-8 text-center h-full hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-7 h-7 text-emerald-600" />
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
                Everything Startups Need for First SOC 2 or ISO 27001
              </h2>
              <p className="text-surface-600 mb-5">
                Our startup plan includes everything you need to achieve your
                first <Link href="/frameworks/soc-2" className="text-brand-600 hover:underline">SOC 2</Link> or <Link href="/frameworks/iso-27001" className="text-brand-600 hover:underline">ISO 27001</Link> compliance certification.
              </p>
              <FeatureList
                features={benefits}
                variant="minimal"
                color="emerald"
                columns={2}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="bg-white rounded-2xl border border-surface-200 p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-surface-900 mb-6">
                  Most Popular Startup Frameworks
                </h3>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="flex items-center gap-3 mb-1">
                      <Shield className="w-5 h-5 text-emerald-600" />
                      <Link href="/frameworks/soc-2" className="font-semibold text-surface-900 hover:text-emerald-600">
                        SOC 2 Compliance
                      </Link>
                    </div>
                    <p className="text-sm text-surface-600">
                      The most requested compliance framework by enterprise customers - get SOC 2 certified fast
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                    <div className="flex items-center gap-3 mb-1">
                      <Shield className="w-5 h-5 text-indigo-600" />
                      <Link href="/frameworks/iso-27001" className="font-semibold text-surface-900 hover:text-indigo-600">
                        ISO 27001 Certification
                      </Link>
                    </div>
                    <p className="text-sm text-surface-600">
                      International security standard for expanding globally - achieve ISO 27001 certification
                    </p>
                  </motion.div>
                </div>
              </div>
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
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready for Your First SOC 2 or ISO 27001?
            </h2>

            <p className="text-base text-white mb-6">
              Join hundreds of startups using Autenix to achieve{" "}
              <Link href="/frameworks/soc-2" className="text-emerald-300 hover:underline">SOC 2</Link> and{" "}
              <Link href="/frameworks/iso-27001" className="text-emerald-300 hover:underline">ISO 27001</Link> compliance faster.
            </p>

            <Button
              size="lg"
              className="bg-white text-surface-900 hover:bg-surface-100 shadow-xl group"
              asChild>
              <Link href="/demo">
                Request Startup Demo
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

