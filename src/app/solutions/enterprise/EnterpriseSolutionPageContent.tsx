"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Shield,
  Lock,
  Headphones,
  Users,
  Globe,
} from "lucide-react";
import { Button } from "../../../components/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../../components/ui/AnimatedSection";
import { SimpleFeatureList, FeatureList } from "../../../components/ui/FeatureList";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Custom Compliance Controls",
    description:
      "Map custom controls and frameworks specific to your organization's SOC 2, ISO 27001, or HIPAA requirements.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "SSO/SAML, SCIM provisioning, audit logs, and enterprise-grade encryption for compliance data.",
  },
  {
    icon: Headphones,
    title: "Dedicated Compliance Support",
    description: "Named account manager, priority support SLAs, and compliance experts.",
  },
];

const benefits = [
  "Unlimited compliance frameworks",
  "Custom framework support",
  "SSO/SAML authentication",
  "SCIM user provisioning",
  "Advanced audit logging",
  "Custom integrations",
  "Dedicated success manager",
  "On-premise deployment option",
  "Custom contracts & invoicing",
  "Enterprise SLAs",
];

const stats = [
  { label: "Business Units", value: "12", icon: Building2 },
  { label: "Active Frameworks", value: "8", icon: Shield },
  { label: "Team Members", value: "156", icon: Users },
  { label: "Overall Compliance", value: "96%", icon: Globe, highlight: true },
];

export default function EnterpriseSolutionPageContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-10 lg:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50/30" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-500 to-purple-500 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-surface-900 mb-6 tracking-tight leading-[1.1]">
                Enterprise-Grade{" "}
                <span className="gradient-text-violet">Compliance Automation</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-surface-600 mb-8 leading-relaxed">
                Complex organizations need flexible, secure, and scalable
                compliance solutions. Autenix Enterprise delivers
                enterprise-grade features for{" "}
                <Link href="/frameworks/soc-2" className="text-violet-600 hover:underline">SOC 2</Link>,{" "}
                <Link href="/frameworks/iso-27001" className="text-violet-600 hover:underline">ISO 27001</Link>,{" "}
                <Link href="/frameworks/hipaa" className="text-violet-600 hover:underline">HIPAA</Link>, and custom frameworks with dedicated support.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="group shadow-lg shadow-violet-600/20 bg-violet-600 hover:bg-violet-700"
                  asChild>
                  <Link href="/contact">
                    Contact Enterprise Sales
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-violet-200 text-violet-700 hover:bg-violet-50"
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
                    <div className="w-6 h-6 rounded-md bg-violet-50 flex items-center justify-center">
                      <Building2 className="w-3.5 h-3.5 text-violet-600" />
                    </div>
                    <span className="text-sm font-medium text-surface-600">
                      Enterprise Compliance Dashboard
                    </span>
                  </div>
                  <div className="w-16" />
                </div>

                <div className="p-5 bg-gradient-to-b from-surface-50/50 to-white">
                  <div className="space-y-3">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className={`p-4 rounded-xl ${
                            stat.highlight
                              ? "bg-violet-50 border border-violet-200"
                              : "bg-surface-50"
                          }`}>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded-lg ${
                                  stat.highlight ? "bg-violet-100" : "bg-white"
                                } flex items-center justify-center`}>
                                <Icon
                                  className={`w-4 h-4 ${
                                    stat.highlight
                                      ? "text-violet-600"
                                      : "text-surface-500"
                                  }`}
                                />
                              </div>
                              <span
                                className={`font-medium ${
                                  stat.highlight
                                    ? "text-violet-700"
                                    : "text-surface-700"
                                }`}>
                                {stat.label}
                              </span>
                            </div>
                            <span
                              className={`font-bold text-lg ${
                                stat.highlight
                                  ? "text-violet-700"
                                  : "text-surface-900"
                              }`}>
                              {stat.value}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
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
              Built for Enterprise Compliance
            </h2>
            <p className="text-base text-surface-600">
              Security, flexibility, and support designed for enterprise{" "}
              <Link href="/frameworks/soc-2" className="text-brand-600 hover:underline">SOC 2</Link>,{" "}
              <Link href="/frameworks/iso-27001" className="text-brand-600 hover:underline">ISO 27001</Link>, and{" "}
              <Link href="/frameworks/hipaa" className="text-brand-600 hover:underline">HIPAA</Link> requirements.
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
                    className="bg-white rounded-2xl border border-surface-200 p-8 text-center h-full hover:shadow-xl hover:border-violet-200 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-7 h-7 text-violet-600" />
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
                Enterprise Compliance Features
              </h2>
              <p className="text-surface-600 mb-5">
                Everything you need for enterprise-scale{" "}
                <Link href="/frameworks/soc-2" className="text-brand-600 hover:underline">SOC 2</Link>,{" "}
                <Link href="/frameworks/iso-27001" className="text-brand-600 hover:underline">ISO 27001</Link>, and{" "}
                <Link href="/frameworks/hipaa" className="text-brand-600 hover:underline">HIPAA</Link> compliance management.
              </p>
              <FeatureList
                features={benefits}
                variant="minimal"
                color="violet"
                columns={2}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="bg-white rounded-2xl border border-surface-200 p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-surface-900 mb-4">
                  Enterprise Compliance Plan
                </h3>
                <p className="text-surface-600 mb-6">
                  Custom pricing based on your organization&apos;s{" "}
                  <Link href="/frameworks/soc-2" className="text-brand-600 hover:underline">SOC 2</Link>,{" "}
                  <Link href="/frameworks/iso-27001" className="text-brand-600 hover:underline">ISO 27001</Link>, and compliance needs
                </p>
                <SimpleFeatureList
                  features={[
                    "Custom contract terms",
                    "Volume discounts for enterprise",
                    "Dedicated compliance support",
                  ]}
                  color="violet"
                  className="mb-6"
                />
                <Button
                  className="w-full bg-violet-600 hover:bg-violet-700 group"
                  size="lg"
                  asChild>
                  <Link href="/contact">
                    Contact Enterprise Sales
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
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
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready for Enterprise Compliance Automation?
            </h2>

            <p className="text-base text-white mb-6">
              Talk to our team about your enterprise{" "}
              <Link href="/frameworks/soc-2" className="text-violet-300 hover:underline">SOC 2</Link>,{" "}
              <Link href="/frameworks/iso-27001" className="text-violet-300 hover:underline">ISO 27001</Link>, and{" "}
              <Link href="/frameworks/hipaa" className="text-violet-300 hover:underline">HIPAA</Link> compliance requirements.
            </p>

            <Button
              size="lg"
              className="bg-white text-surface-900 hover:bg-surface-100 shadow-xl group"
              asChild>
              <Link href="/contact">
                Contact Enterprise Sales
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

