"use client";

import Link from "next/link";
import {
  Shield,
  Lock,
  Building2,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Award,
  FileCheck,
} from "lucide-react";
import { FRAMEWORKS } from "../../lib/constants";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../ui/AnimatedSection";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Lock,
  Building2,
  Globe2,
};

const frameworkIcons: Record<
  string,
  { icon: React.ElementType; color: string }
> = {
  "soc-2": { icon: Shield, color: "blue" },
  "iso-27001": { icon: Award, color: "indigo" },
  hipaa: { icon: FileCheck, color: "emerald" },
  "pci-dss": { icon: Lock, color: "orange" },
};

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string; ring: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    ring: "ring-blue-500/10",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-200",
    ring: "ring-indigo-500/10",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    ring: "ring-emerald-500/10",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-200",
    ring: "ring-orange-500/10",
  },
};

export function FrameworkShowcase() {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-8">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6">
            <CheckCircle2 className="w-4 h-4" />
            35+ Supported Frameworks
          </motion.div> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-3 tracking-tight">
            Compliance for{" "}
            <span className="gradient-text-emerald">Every Framework</span>
          </h2>
          <p className="text-base text-surface-600">
            From SOC 2 to ISO 27001, we support the frameworks that matter most
            to your business and customers.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-8"
          staggerDelay={0.1}>
          {FRAMEWORKS.slice(0, 4).map((framework, index) => {
            const fwConfig = frameworkIcons[framework.slug] || {
              icon: Shield,
              color: "blue",
            };
            const Icon = fwConfig.icon;
            const colors = colorClasses[fwConfig.color] || colorClasses.blue;

            return (
              <StaggerItem key={framework.slug}>
                <Link
                  href={`/frameworks/${framework.slug}`}
                  className="group flex items-start gap-5 bg-white rounded-2xl border border-surface-200 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5 hover:border-brand-200 hover:-translate-y-1">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 ring-4 ${colors.ring}`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-lg font-semibold text-surface-900 group-hover:text-brand-600 transition-colors">
                        {framework.name}
                      </h3>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                        {framework.category}
                      </span>
                    </div>
                    <p className="text-surface-600 text-sm leading-relaxed line-clamp-2 mb-3">
                      {framework.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 group-hover:gap-2.5 transition-all">
                      Get certified
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="group border-brand-600 text-brand-600 hover:bg-brand-50 hover:border-brand-700 hover:text-brand-700"
            asChild>
            <Link href="/frameworks">
              View all frameworks
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
