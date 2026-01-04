"use client";

export const runtime = 'edge';

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  Shield,
  AlertTriangle,
  BadgeCheck,
  ClipboardCheck,
  FileText,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "../../../components/ui/Button";
import { PRODUCTS } from "../../../lib/constants";
import { DashboardMockup } from "../../../components/ui/DashboardMockup";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../../components/ui/AnimatedSection";
import {
  FeatureList,
  type FeatureListColor,
} from "../../../components/ui/FeatureList";
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
  {
    bg: string;
    text: string;
    light: string;
    gradient: string;
    feature: FeatureListColor;
  }
> = {
  blue: {
    bg: "bg-blue-600",
    text: "text-blue-600",
    light: "bg-blue-50",
    gradient: "from-blue-500 to-blue-600",
    feature: "blue",
  },
  amber: {
    bg: "bg-amber-600",
    text: "text-amber-600",
    light: "bg-amber-50",
    gradient: "from-amber-500 to-orange-500",
    feature: "amber",
  },
  emerald: {
    bg: "bg-emerald-600",
    text: "text-emerald-600",
    light: "bg-emerald-50",
    gradient: "from-emerald-500 to-teal-500",
    feature: "emerald",
  },
  violet: {
    bg: "bg-violet-600",
    text: "text-violet-600",
    light: "bg-violet-50",
    gradient: "from-violet-500 to-purple-500",
    feature: "violet",
  },
  rose: {
    bg: "bg-rose-600",
    text: "text-rose-600",
    light: "bg-rose-50",
    gradient: "from-rose-500 to-pink-500",
    feature: "rose",
  },
  cyan: {
    bg: "bg-cyan-600",
    text: "text-cyan-600",
    light: "bg-cyan-50",
    gradient: "from-cyan-500 to-blue-500",
    feature: "cyan",
  },
};

const dashboardTypeMap: Record<
  string,
  "compliance" | "risk" | "trust" | "audit" | "policy" | "vendor"
> = {
  "compliance-automation": "compliance",
  "risk-management": "risk",
  "trust-center": "trust",
  "audit-readiness": "audit",
  "policy-generator": "policy",
  "vendor-risk": "vendor",
};

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const Icon = iconMap[product.icon];
  const colors = colorMap[product.color];
  const dashboardType = dashboardTypeMap[slug] || "compliance";

  return (
    <div className="pt-20">
      <section className="py-10 lg:py-12 hero-gradient-bg relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${colors.gradient} rounded-full blur-3xl opacity-10`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-surface-900 mb-6 tracking-tight leading-[1.1]">
                {product.tagline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-surface-600 mb-8 leading-relaxed">
                {product.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="group bg-black text-white hover:bg-surface-900 shadow-lg"
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
                  <Link href="/products">View All Products</Link>
                </Button>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <DashboardMockup
                type={dashboardType}
                color={product.color}
                icon={product.icon}
                title={product.title}
                subtitle="Dashboard Preview"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
              Everything you need for {product.title.toLowerCase()}
            </h2>
          </AnimatedSection>

          <FeatureList
            features={product.features}
            variant="compact"
            color={colors.feature}
            columns={3}
            className="max-w-5xl mx-auto"
          />
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3 tracking-tight">
              Explore Other Features
            </h2>
            <p className="text-base text-surface-600">
              Discover the complete Autenix compliance platform
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-3 gap-6"
            staggerDelay={0.1}>
            {PRODUCTS.filter((p) => p.slug !== product.slug)
              .slice(0, 3)
              .map((otherProduct) => {
                const OtherIcon = iconMap[otherProduct.icon];
                const otherColors = colorMap[otherProduct.color];
                return (
                  <StaggerItem key={otherProduct.slug}>
                    <Link
                      href={`/products/${otherProduct.slug}`}
                      className="group block bg-white rounded-2xl border border-surface-200 p-6 card-hover h-full">
                      <div
                        className={`w-12 h-12 rounded-xl ${otherColors.light} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        {OtherIcon && (
                          <OtherIcon
                            className={`w-6 h-6 ${otherColors.text}`}
                          />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-surface-900 mb-2 group-hover:text-brand-600 transition-colors">
                        {otherProduct.title}
                      </h3>
                      <p className="text-surface-600 text-sm leading-relaxed">
                        {otherProduct.tagline}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-brand-600 text-sm font-medium group-hover:gap-2.5 transition-all">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-10 lg:py-12 dark-section-gradient relative overflow-hidden">
        <div className="absolute inset-0 cta-pattern opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br ${colors.gradient} rounded-full blur-3xl opacity-20`}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to get started with {product.title}?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base text-white mb-6">
              See how Autenix can transform your compliance program.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}>
              <Button
                size="lg"
                className="bg-white text-surface-900 hover:bg-surface-100 shadow-xl group"
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
    </div>
  );
}
