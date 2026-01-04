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
  Check,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { PRODUCTS } from "../../lib/constants";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../components/ui/AnimatedSection";
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
  { bg: string; icon: string; border: string; light: string; gradient: string }
> = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "border-blue-200",
    light: "bg-blue-100",
    gradient: "from-blue-500 to-blue-600",
  },
  amber: {
    bg: "bg-amber-50",
    icon: "text-amber-600",
    border: "border-amber-200",
    light: "bg-amber-100",
    gradient: "from-amber-500 to-orange-500",
  },
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    border: "border-emerald-200",
    light: "bg-emerald-100",
    gradient: "from-emerald-500 to-teal-500",
  },
  violet: {
    bg: "bg-violet-50",
    icon: "text-violet-600",
    border: "border-violet-200",
    light: "bg-violet-100",
    gradient: "from-violet-500 to-purple-500",
  },
  rose: {
    bg: "bg-rose-50",
    icon: "text-rose-600",
    border: "border-rose-200",
    light: "bg-rose-100",
    gradient: "from-rose-500 to-pink-500",
  },
  cyan: {
    bg: "bg-cyan-50",
    icon: "text-cyan-600",
    border: "border-cyan-200",
    light: "bg-cyan-100",
    gradient: "from-cyan-500 to-blue-500",
  },
};

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <section className="py-10 lg:py-12 hero-gradient-bg relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-500 to-violet-500 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 mb-6 tracking-tight">
              The Complete{" "}
              <span className="gradient-text">Compliance Platform</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-surface-600 mb-8 leading-relaxed">
              Everything you need to achieve, maintain, and prove compliance.
              From automated monitoring to audit-ready documentation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}>
              <Button
                size="lg"
                className="group shadow-lg shadow-brand-600/20 text-black"
                asChild>
                <Link href="/demo">
                  Request Demo
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
            staggerDelay={0.1}>
            {PRODUCTS.map((product) => {
              const Icon = iconMap[product.icon];
              const colors = colorMap[product.color];
              return (
                <StaggerItem key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="group block bg-white rounded-2xl border border-surface-200 p-6 lg:p-8 card-hover h-full">
                    <div className="flex items-start gap-4 mb-5">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}>
                        {Icon && <Icon className={`w-7 h-7 ${colors.icon}`} />}
                      </motion.div>
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-surface-900 group-hover:text-brand-600 transition-colors">
                          {product.title}
                        </h2>
                        <p className="text-surface-500 text-sm mt-0.5">
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-surface-600 mb-5 leading-relaxed">
                      {product.description}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {product.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-surface-700">
                          <div
                            className={`w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                            <Check className={`w-3 h-3 ${colors.icon}`} />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <span className="inline-flex items-center gap-1.5 text-brand-600 font-medium group-hover:gap-2.5 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-surface-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-4 tracking-tight">
              Ready to transform your compliance?
            </h2>

            <p className="text-lg text-surface-600 mb-8">
              See how Autenix can help you achieve compliance faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group bg-brand-600 text-black hover:bg-brand-700 shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 transition-all"
                asChild>
                <Link href="/demo">
                  Request Demo
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-600 text-brand-600 hover:bg-brand-50 hover:border-brand-700 hover:text-brand-700"
                asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
