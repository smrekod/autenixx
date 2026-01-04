"use client";

import { CloudCog, ScanSearch, FileCheck, Bell, Sparkles } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../ui/AnimatedSection";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Connect Your Infrastructure",
    description:
      "Integrate with AWS, Azure, GCP, Kubernetes, and 400+ tools in minutes. No agents required.",
    icon: CloudCog,
    color: "blue",
  },
  {
    step: "02",
    title: "Automated Assessment",
    description:
      "Autenix scans your infrastructure and maps findings to compliance frameworks automatically.",
    icon: ScanSearch,
    color: "indigo",
  },
  {
    step: "03",
    title: "Evidence Collection",
    description:
      "Continuous evidence collection keeps you audit-ready without manual screenshots or exports.",
    icon: FileCheck,
    color: "emerald",
  },
  {
    step: "04",
    title: "Continuous Monitoring",
    description:
      "Real-time alerts notify you of compliance drift so you can remediate issues before they escalate.",
    icon: Bell,
    color: "violet",
  },
];

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string; ring: string; line: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    ring: "ring-blue-500/10",
    line: "from-blue-500 to-blue-300",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-100",
    ring: "ring-indigo-500/10",
    line: "from-indigo-500 to-indigo-300",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    ring: "ring-emerald-500/10",
    line: "from-emerald-500 to-emerald-300",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
    ring: "ring-violet-500/10",
    line: "from-violet-500 to-violet-300",
  },
};

export function HowItWorks() {
  return (
    <section className="py-10 bg-surface-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-3 tracking-tight">
            How <span className="gradient-text">Autenix</span> Works
          </h2>
          <p className="text-base text-surface-600">
            Get from zero to audit-ready in four simple steps. Our platform does
            the heavy lifting so you can focus on your business.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          staggerDelay={0.1}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colors = colorClasses[step.color];
            return (
              <StaggerItem key={step.step}>
                <motion.div whileHover={{ y: -6 }} className="relative h-full">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 -translate-x-4 z-0">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${colors.line} origin-left`}
                      />
                    </div>
                  )}

                  <div className="relative z-10 bg-white rounded-2xl border border-surface-200 p-6 h-full transition-all duration-300 hover:shadow-xl hover:border-surface-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-5 ring-4 ${colors.ring}`}>
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </motion.div>

                    <div
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text} tracking-wider mb-3`}>
                      STEP {step.step}
                    </div>

                    <h3 className="text-lg font-semibold text-surface-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-surface-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
