"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export type FeatureListVariant = "compact" | "minimal" | "inline";
export type FeatureListColor =
  | "blue"
  | "emerald"
  | "rose"
  | "violet"
  | "amber"
  | "cyan"
  | "brand";

interface FeatureListProps {
  features: string[];
  variant?: FeatureListVariant;
  color?: FeatureListColor;
  columns?: 2 | 3 | 4 | 5;
  animated?: boolean;
  className?: string;
}

const colorMap: Record<
  FeatureListColor,
  { bg: string; text: string; dot: string; border: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    dot: "bg-blue-500",
    border: "border-blue-100",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    dot: "bg-emerald-500",
    border: "border-emerald-100",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    dot: "bg-rose-500",
    border: "border-rose-100",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    dot: "bg-violet-500",
    border: "border-violet-100",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    dot: "bg-amber-500",
    border: "border-amber-100",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    dot: "bg-cyan-500",
    border: "border-cyan-100",
  },
  brand: {
    bg: "bg-brand-50",
    text: "text-brand-600",
    dot: "bg-brand-500",
    border: "border-brand-100",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

/**
 * FeatureList - A compact, modern feature display component
 *
 * Variants:
 * - compact: Small cards with subtle border and background on hover
 * - minimal: Simple list with small check indicators (most space-efficient)
 * - inline: Inline flow layout for very dense displays
 */
export function FeatureList({
  features,
  variant = "compact",
  color = "brand",
  columns = 3,
  animated = true,
  className,
}: FeatureListProps) {
  const colors = colorMap[color];

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
    5: "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  };

  if (variant === "inline") {
    return (
      <motion.div
        initial={animated ? "hidden" : "visible"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className={cn("flex flex-wrap gap-2", className)}>
        {features.map((feature, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm",
              "bg-surface-100 text-surface-700 border border-surface-200",
              "hover:bg-surface-50 transition-colors"
            )}>
            <span className={cn("w-1.5 h-1.5 rounded-full", colors.dot)} />
            {feature}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (variant === "minimal") {
    return (
      <motion.ul
        initial={animated ? "hidden" : "visible"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className={cn("grid gap-x-6 gap-y-2.5", gridCols[columns], className)}>
        {features.map((feature, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="flex items-center gap-2.5 group">
            <span
              className={cn(
                "w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0",
                colors.bg
              )}>
              <Check className={cn("w-2.5 h-2.5", colors.text)} />
            </span>
            <span className="text-sm text-surface-600 group-hover:text-surface-900 transition-colors">
              {feature}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    );
  }

  // Default: compact variant
  return (
    <motion.div
      initial={animated ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={cn("grid gap-3", gridCols[columns], className)}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={cn(
            "group flex items-start gap-3 p-3.5 rounded-xl",
            "bg-white border border-surface-150",
            "hover:border-surface-250 hover:shadow-sm",
            "transition-all duration-200"
          )}>
          <span
            className={cn(
              "w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5",
              colors.bg,
              "group-hover:scale-105 transition-transform"
            )}>
            <Check className={cn("w-3 h-3", colors.text)} />
          </span>
          <span className="text-sm text-surface-700 leading-snug font-medium">
            {feature}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

/**
 * FeatureSection - Complete section with title and feature list
 * Use this for "Everything you need for X" style sections
 */
interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: string[];
  variant?: FeatureListVariant;
  color?: FeatureListColor;
  columns?: 2 | 3 | 4 | 5;
  className?: string;
  background?: "white" | "gray";
}

export function FeatureSection({
  title,
  subtitle,
  features,
  variant = "compact",
  color = "brand",
  columns = 3,
  className,
  background = "white",
}: FeatureSectionProps) {
  return (
    <section
      className={cn(
        "py-10 lg:py-12",
        background === "white" ? "bg-white" : "bg-surface-50",
        className
      )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-surface-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        <FeatureList
          features={features}
          variant={variant}
          color={color}
          columns={columns}
          className="max-w-5xl mx-auto"
        />
      </div>
    </section>
  );
}

/**
 * SimpleFeatureList - Ultra-compact inline check list
 * Perfect for sidebars, cards, and tight spaces
 */
interface SimpleFeatureListProps {
  features: string[];
  color?: FeatureListColor;
  className?: string;
  size?: "sm" | "md";
}

export function SimpleFeatureList({
  features,
  color = "brand",
  className,
  size = "md",
}: SimpleFeatureListProps) {
  const colors = colorMap[color];

  return (
    <ul className={cn("space-y-2", className)}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Check
            className={cn(
              colors.text,
              size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
            )}
          />
          <span
            className={cn(
              "text-surface-700",
              size === "sm" ? "text-sm" : "text-base"
            )}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

