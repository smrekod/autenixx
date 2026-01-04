"use client";

import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  BadgeCheck,
  ClipboardCheck,
  FileText,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PRODUCTS } from "../../lib/constants";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../ui/AnimatedSection";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  AlertTriangle,
  BadgeCheck,
  ClipboardCheck,
  FileText,
  Users,
};

const colorMap: Record<
  string,
  { bg: string; text: string; border: string; hoverBg: string; ring: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    hoverBg: "group-hover:bg-blue-100",
    ring: "ring-blue-500/10",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
    hoverBg: "group-hover:bg-amber-100",
    ring: "ring-amber-500/10",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    hoverBg: "group-hover:bg-emerald-100",
    ring: "ring-emerald-500/10",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
    hoverBg: "group-hover:bg-violet-100",
    ring: "ring-violet-500/10",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-100",
    hoverBg: "group-hover:bg-rose-100",
    ring: "ring-rose-500/10",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-100",
    hoverBg: "group-hover:bg-cyan-100",
    ring: "ring-cyan-500/10",
  },
};

export function PlatformOverview() {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface-50 to-transparent pointer-events-none" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-500 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-8">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-100 rounded-full text-brand-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Complete Platform
          </motion.div> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-3 tracking-tight">
            The Complete{" "}
            <span className="gradient-text">Compliance Platform</span>
          </h2>
          <p className="text-base text-surface-600">
            Everything you need to achieve, maintain, and prove compliance—all
            in one place.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.08}>
          {PRODUCTS.map((product) => {
            const Icon = iconMap[product.icon];
            const colors = colorMap[product.color];
            return (
              <StaggerItem key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group block h-full bg-white rounded-2xl border border-surface-200 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5 hover:border-brand-200 hover:-translate-y-1">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors border ${colors.bg} ${colors.border} ${colors.hoverBg} ring-4 ${colors.ring}`}>
                    {Icon && <Icon className={`w-6 h-6 ${colors.text}`} />}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-surface-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-surface-600 mb-4 leading-relaxed text-sm">
                    {product.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 group-hover:gap-2.5 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium transition-colors group">
            View all products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
