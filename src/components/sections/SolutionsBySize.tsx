"use client";

import Link from "next/link";
import {
  Rocket,
  TrendingUp,
  Building2,
  ArrowRight,
  Check,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../ui/AnimatedSection";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "For Startups",
    description:
      "Get your first SOC 2 certification fast without derailing product development.",
    icon: Rocket,
    href: "/solutions/startup",
    features: [
      "Quick setup & onboarding",
      "Startup-friendly workflows",
      "Essential framework coverage",
      "Streamlined evidence collection",
    ],
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    checkBg: "bg-emerald-100",
    checkText: "text-emerald-600",
    buttonClasses:
      "border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-700 hover:text-emerald-700",
  },
  {
    title: "For Growth Companies",
    description:
      "Scale compliance operations efficiently as you expand your customer base.",
    icon: TrendingUp,
    href: "/solutions/growth",
    features: [
      "Multi-framework support",
      "Advanced automation",
      "Team collaboration tools",
      "Custom policy templates",
    ],
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    checkBg: "bg-blue-100",
    checkText: "text-blue-600",
    popular: true,
    buttonClasses:
      "bg-brand-600 text-black hover:bg-brand-700 shadow-md hover:shadow-lg border-emerald-600",
  },
  {
    title: "For Enterprise",
    description:
      "Comprehensive GRC platform for complex, multi-entity compliance needs.",
    icon: Building2,
    href: "/solutions/enterprise",
    features: [
      "Enterprise-grade security",
      "Custom integrations",
      "Dedicated support team",
      "Advanced analytics & reporting",
    ],
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
    iconBg: "bg-violet-100",
    iconText: "text-violet-600",
    checkBg: "bg-violet-100",
    checkText: "text-violet-600",
    buttonClasses:
      "border-violet-600 text-violet-600 hover:bg-violet-50 hover:border-violet-700 hover:text-violet-700",
  },
];

export function SolutionsBySize() {
  return (
    <section className="py-10 lg:py-12 bg-surface-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-3 tracking-tight">
            Scale with <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-lg text-surface-600">
            Whether you&apos;re a seed-stage startup or a global enterprise,
            Autenix scales with your compliance needs.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.12}>
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <StaggerItem key={solution.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative bg-white rounded-3xl border ${solution.borderColor} overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:shadow-${solution.color}-500/10`}>
                  {solution.popular && (
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${solution.gradient}`}
                    />
                  )}

                  <div className="p-8">
                    {solution.popular && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-600 text-white text-xs font-medium rounded-full mb-4">
                        <Zap className="w-3 h-3" />
                        Most Popular
                      </motion.div>
                    )}

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.bgGradient} border ${solution.borderColor} flex items-center justify-center mb-6`}>
                      <Icon className={`w-7 h-7 ${solution.iconText}`} />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-surface-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-surface-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-surface-700">
                          <div
                            className={`w-5 h-5 rounded-full ${solution.checkBg} flex items-center justify-center flex-shrink-0`}>
                            <Check
                              className={`w-3 h-3 ${solution.checkText}`}
                            />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button
                      variant={solution.popular ? "primary" : "outline"}
                      className={`w-full group ${solution.buttonClasses}`}
                      asChild>
                      <Link href={solution.href}>
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
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
