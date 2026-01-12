"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  Shield,
  Zap,
  Cloud,
  FileText,
  Bell,
  BarChart3,
  Activity,
  Clock,
  Award,
  ChevronRight,
  Star,
  Quote,
  TrendingUp,
  Layers,
  Target,
  LineChart,
  Database,
  Lock,
  Users,
  Globe,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../components/ui/AnimatedSection";
import { motion } from "framer-motion";

// Simplified 1v1 comparison data - Autenix vs Other Platforms
const comparisonFeatures = [
  {
    feature: "Multi-Cloud Support",
    description: "AWS, Azure, GCP & Kubernetes",
    autenix: true,
    others: "partial",
    tooltip: "Native integrations with all major cloud providers",
  },
  {
    feature: "Framework Coverage",
    description: "Compliance frameworks supported",
    autenix: "35+",
    others: "15-25",
    tooltip: "Number of compliance frameworks supported out of the box",
  },
  {
    feature: "Automated Evidence Collection",
    description: "Auto-gather compliance evidence",
    autenix: true,
    others: "partial",
    tooltip: "Automatically collect and organize compliance evidence",
  },
  {
    feature: "Continuous Monitoring",
    description: "24/7 real-time monitoring",
    autenix: true,
    others: "partial",
    tooltip: "Real-time monitoring of your compliance status",
  },
  {
    feature: "Audit Readiness Workflow",
    description: "Streamlined audit preparation",
    autenix: true,
    others: false,
    tooltip: "Streamlined workflows to prepare for audits efficiently",
  },
  {
    feature: "Policy Templates Library",
    description: "Pre-built policy templates",
    autenix: true,
    others: "partial",
    tooltip: "Pre-built policy templates for rapid compliance setup",
  },
  {
    feature: "Vendor Risk Management",
    description: "Third-party risk monitoring",
    autenix: true,
    others: "partial",
    tooltip: "Manage and monitor third-party vendor risks",
  },
  {
    feature: "Trust Center Portal",
    description: "Customer-facing compliance status",
    autenix: true,
    others: "partial",
    tooltip: "Customer-facing portal to showcase compliance status",
  },
  {
    feature: "Real-time Compliance Score",
    description: "Live scoring with instant updates",
    autenix: true,
    others: false,
    tooltip: "Live compliance scoring with instant updates",
  },
  {
    feature: "Transparent Pricing",
    description: "Clear, upfront pricing",
    autenix: true,
    others: false,
    tooltip: "Clear, upfront pricing without hidden costs",
  },
];

const keyStrengths = [
  {
    icon: Activity,
    title: "Real-time Compliance Score",
    description: "Live compliance scoring with instant drift alerts",
  },
  {
    icon: Layers,
    title: "400+ Integrations",
    description: "Connect to all your tools and infrastructure",
  },
  {
    icon: Zap,
    title: "Audit-ready Automation",
    description: "Automated evidence collection and audit prep",
  },
];

// Feature blocks data
const featureBlocks = [
  {
    icon: FileText,
    title: "Automated Evidence Collection",
    description:
      "Automatically gather compliance evidence from your cloud infrastructure, identity providers, and business tools. No manual screenshots or exports needed.",
    benefits: [
      "Connect 400+ integrations",
      "Real-time evidence syncing",
      "Automatic evidence mapping",
    ],
    link: "/products/audit-readiness",
    color: "blue",
  },
  {
    icon: Bell,
    title: "Continuous Monitoring & Alerts",
    description:
      "24/7 monitoring of your compliance posture with instant alerts when something needs attention. Stay compliant without constant manual checks.",
    benefits: [
      "Real-time drift detection",
      "Smart alert prioritization",
      "Slack/Teams notifications",
    ],
    link: "/products/compliance-automation",
    color: "emerald",
  },
  {
    icon: BarChart3,
    title: "Compliance Dashboards & Scoring",
    description:
      "Visual dashboards that give you instant visibility into your compliance status across all frameworks. Track progress and identify gaps at a glance.",
    benefits: [
      "Real-time compliance score",
      "Framework-specific views",
      "Executive reporting",
    ],
    link: "/products/compliance-automation",
    color: "violet",
  },
  {
    icon: FileText,
    title: "Policy Generator",
    description:
      "Generate audit-ready policies tailored to your organization in minutes. Our AI-powered templates ensure you meet all framework requirements.",
    benefits: [
      "100+ policy templates",
      "Auto-customization",
      "Version control built-in",
    ],
    link: "/products/policy-generator",
    color: "amber",
  },
];

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string; bgLight: string }
> = {
  blue: {
    bg: "bg-blue-500",
    text: "text-blue-600",
    border: "border-blue-100",
    bgLight: "bg-blue-50",
  },
  emerald: {
    bg: "bg-emerald-500",
    text: "text-emerald-600",
    border: "border-emerald-100",
    bgLight: "bg-emerald-50",
  },
  violet: {
    bg: "bg-violet-500",
    text: "text-violet-600",
    border: "border-violet-100",
    bgLight: "bg-violet-50",
  },
  amber: {
    bg: "bg-amber-500",
    text: "text-amber-600",
    border: "border-amber-100",
    bgLight: "bg-amber-50",
  },
};

// Why Autenix Wins data
const whyAutenixWins = [
  {
    icon: Clock,
    title: "Faster Audit Preparation",
    description:
      "Reduce audit prep time by 80% with automated evidence collection and organized audit trails.",
    stat: "80%",
    statLabel: "faster prep time",
  },
  {
    icon: Zap,
    title: "Fewer Manual Tasks",
    description:
      "Automate 90% of repetitive compliance tasks. Focus on what matters while Autenix handles the rest.",
    stat: "90%",
    statLabel: "automation rate",
  },
  {
    icon: Cloud,
    title: "Better Multi-Cloud Coverage",
    description:
      "Native support for AWS, Azure, GCP, and Kubernetes with 400+ integrations for complete coverage.",
    stat: "400+",
    statLabel: "integrations",
  },
];

// Testimonials data (without specific competitor names)
const testimonials = [
  {
    quote:
      "Autenix cut our SOC 2 audit prep time from 3 months to 3 weeks. The automation is incredible.",
    author: "Sarah Chen",
    role: "Head of Security",
    company: "TechStart Inc.",
    rating: 5,
  },
  {
    quote:
      "We evaluated several compliance platforms before choosing Autenix. The multi-cloud support and pricing transparency made the decision easy.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "CloudScale Solutions",
    rating: 5,
  },
  {
    quote:
      "The real-time compliance scoring changed how we think about security. We're always audit-ready now.",
    author: "Emily Watson",
    role: "VP of Engineering",
    company: "DataFlow Systems",
    rating: 5,
  },
];

const trustedCompanies = [
  "TechCorp",
  "CloudScale",
  "DataFlow",
  "SecureNet",
  "InnovateTech",
  "DigitalFirst",
];

// Status cell for comparison
function StatusCell({
  status,
  highlight,
}: {
  status: boolean | string;
  highlight?: boolean;
}) {
  if (status === true) {
    return (
      <div className="flex items-center justify-center gap-2">
        <div
          className={`w-8 h-8 rounded-full ${
            highlight ? "bg-emerald-100" : "bg-emerald-50"
          } flex items-center justify-center`}>
          <Check
            className={`w-5 h-5 ${
              highlight ? "text-emerald-600" : "text-emerald-500"
            }`}
          />
        </div>
        {highlight && (
          <span className="text-sm font-medium text-emerald-600">Yes</span>
        )}
      </div>
    );
  }
  if (status === false) {
    return (
      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center">
          <X className="w-5 h-5 text-surface-400" />
        </div>
        <span className="text-sm text-surface-400">No</span>
      </div>
    );
  }
  if (status === "partial") {
    return (
      <div className="flex items-center justify-center">
        <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
          Limited
        </span>
      </div>
    );
  }
  // For text values like "35+"
  return (
    <span
      className={`font-bold text-center block ${
        highlight ? "text-brand-600 text-lg" : "text-surface-600"
      }`}>
      {status}
    </span>
  );
}

// Metric comparison card
function MetricCard({
  icon: Icon,
  title,
  autenixValue,
  othersValue,
  autenixLabel,
  othersLabel,
  unit,
}: {
  icon: React.ElementType;
  title: string;
  autenixValue: number;
  othersValue: number;
  autenixLabel?: string;
  othersLabel?: string;
  unit?: string;
}) {
  const maxValue = Math.max(autenixValue, othersValue);
  const autenixPercent = (autenixValue / maxValue) * 100;
  const othersPercent = (othersValue / maxValue) * 100;

  return (
    <div className="bg-white rounded-2xl border border-surface-200 p-6 hover:shadow-lg transition-all">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-brand-600" />
        </div>
        <h3 className="text-lg font-semibold text-surface-900">{title}</h3>
      </div>

      <div className="space-y-5">
        {/* Autenix Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-brand-600">
              Autenix
            </span>
            <span className="text-lg font-bold text-brand-600">
              {autenixValue}
              {unit}
            </span>
          </div>
          <div className="h-4 bg-surface-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${autenixPercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600 progress-bar-animated"
            />
          </div>
          {autenixLabel && (
            <span className="text-xs text-brand-500">{autenixLabel}</span>
          )}
        </div>

        {/* Others Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-surface-500">
              Other Platforms
            </span>
            <span className="text-lg font-semibold text-surface-500">
              {othersValue}
              {unit}
            </span>
          </div>
          <div className="h-4 bg-surface-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${othersPercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="h-full rounded-full bg-surface-300"
            />
          </div>
          {othersLabel && (
            <span className="text-xs text-surface-400">{othersLabel}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ComparePageContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 lg:py-16 hero-gradient-bg relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-500 to-violet-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.02, 0.05, 0.02] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6">
                <Award className="w-4 h-4 text-brand-600" />
                <span className="text-sm font-medium text-brand-700">
                  #1 Rated Compliance Platform
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
                Why Choose <span className="gradient-text">Autenix</span> Over
                Other Compliance Platforms
              </h1>

              <p className="text-lg text-surface-600 mb-6 leading-relaxed">
                Automated, scalable, multi-cloud, and audit-ready. See how
                Autenix outperforms other compliance automation platforms across
                every key metric.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  className="group shadow-lg text-brand-600"
                  asChild>
                  <Link href="/demo">
                    Request a Demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-600 text-brand-600 hover:bg-brand-50"
                  asChild>
                  <Link href="/products">See Features</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-surface-600">
                {[
                  { text: "Multi-cloud support", icon: Cloud },
                  { text: "35+ frameworks", icon: Shield },
                  { text: "Audit-ready", icon: Check },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <span className="font-medium text-surface-700">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Dashboard Preview - Side by Side Comparison Visual */}
            <AnimatedSection delay={0.2} direction="left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl dashboard-shadow border border-surface-200/80 overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-surface-50 to-white border-b border-surface-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2">
                    <Target className="w-4 h-4 text-brand-600" />
                    <span className="text-sm font-medium text-surface-600">
                      Autenix vs Other Platforms
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  {/* Header comparison */}
                  <div className="grid grid-cols-3 gap-4 text-center pb-4 border-b border-surface-200">
                    <div></div>
                    <div>
                      <div className="text-xs text-brand-600 font-semibold mb-1">
                        AUTENIX
                      </div>
                      <div className="text-2xl font-bold text-brand-600">
                        94%
                      </div>
                      <div className="text-xs text-surface-500">
                        Compliance Score
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-surface-400 font-semibold mb-1">
                        OTHERS
                      </div>
                      <div className="text-2xl font-bold text-surface-400">
                        67%
                      </div>
                      <div className="text-xs text-surface-400">Average</div>
                    </div>
                  </div>

                  {/* Comparison bars */}
                  {[
                    {
                      name: "Framework Coverage",
                      autenix: 95,
                      others: 60,
                      icon: Shield,
                    },
                    {
                      name: "Automation Level",
                      autenix: 90,
                      others: 55,
                      icon: Zap,
                    },
                    {
                      name: "Integration Count",
                      autenix: 100,
                      others: 45,
                      icon: Layers,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.name} className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-surface-600">
                          <Icon className="w-3.5 h-3.5" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <div className="h-3 bg-surface-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.autenix}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className="h-full bg-gradient-to-r from-brand-500 to-brand-600 rounded-full progress-bar-animated"
                              />
                            </div>
                            <span className="text-xs font-semibold text-brand-600">
                              {item.autenix}%
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="h-3 bg-surface-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.others}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1,
                                  delay: index * 0.1 + 0.2,
                                }}
                                className="h-full bg-surface-300 rounded-full"
                              />
                            </div>
                            <span className="text-xs font-medium text-surface-400">
                              {item.others}%
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Strengths Callouts */}
      <section className="py-8 bg-white border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer
            className="grid md:grid-cols-3 gap-6"
            staggerDelay={0.1}>
            {keyStrengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <StaggerItem key={strength.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-surface-50 border border-surface-200 hover:border-brand-200 hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-900">
                        {strength.title}
                      </h3>
                      <p className="text-sm text-surface-600">
                        {strength.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Feature Comparison Section - 1v1 Style */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3 tracking-tight">
              Autenix vs Other Platforms:{" "}
              <span className="gradient-text">Feature Comparison</span>
            </h2>
            <p className="text-surface-600 max-w-2xl mx-auto">
              See how Autenix stands out from other compliance automation
              solutions across key features.
            </p>
          </AnimatedSection>

          {/* Comparison Table - 1v1 Format */}
          <AnimatedSection>
            <div className="overflow-hidden rounded-2xl border border-surface-200 shadow-lg">
              {/* Header */}
              <div className="grid grid-cols-3 bg-surface-50 border-b border-surface-200">
                <div className="px-6 py-4 text-sm font-semibold text-surface-700">
                  Feature
                </div>
                <div className="px-4 py-4 text-center bg-brand-50">
                  <div className="text-xs font-medium text-brand-600 bg-brand-100 px-2 py-0.5 rounded-full inline-block mb-1">
                    Recommended
                  </div>
                  <div className="text-sm font-semibold text-brand-700">
                    Autenix
                  </div>
                </div>
                <div className="px-4 py-4 text-center">
                  <div className="text-sm font-semibold text-surface-600">
                    Other Platforms
                  </div>
                </div>
              </div>

              {/* Rows */}
              {comparisonFeatures.map((row, index) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-3 border-b border-surface-200 last:border-b-0 hover:bg-surface-50/50 transition-colors">
                  <div className="px-6 py-4">
                    <div className="font-medium text-surface-800 text-sm">
                      {row.feature}
                    </div>
                    <div className="text-xs text-surface-500 mt-0.5">
                      {row.description}
                    </div>
                  </div>
                  <div className="px-4 py-4 bg-brand-50/30 flex items-center justify-center">
                    <StatusCell status={row.autenix} highlight />
                  </div>
                  <div className="px-4 py-4 flex items-center justify-center">
                    <StatusCell status={row.others} />
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Legend */}
          <AnimatedSection className="mt-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-surface-600">Full Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                  Limited
                </span>
                <span className="text-surface-600">Partial Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-surface-100 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-surface-400" />
                </div>
                <span className="text-surface-600">Not Available</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Metrics Comparison Charts */}
      <section className="py-12 lg:py-16 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3 tracking-tight">
              Compliance Platform{" "}
              <span className="gradient-text">Metrics Comparison</span>
            </h2>
            <p className="text-surface-600 max-w-2xl mx-auto">
              Autenix leads across all key compliance automation metrics
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection>
              <MetricCard
                icon={Shield}
                title="Framework Support"
                autenixValue={35}
                othersValue={20}
                unit="+"
                autenixLabel="Comprehensive coverage"
                othersLabel="Industry average"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <MetricCard
                icon={Zap}
                title="Automation Rate"
                autenixValue={95}
                othersValue={65}
                unit="%"
                autenixLabel="Near-complete automation"
                othersLabel="Requires manual work"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <MetricCard
                icon={Database}
                title="Integrations"
                autenixValue={400}
                othersValue={150}
                unit="+"
                autenixLabel="Extensive ecosystem"
                othersLabel="Limited connections"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <MetricCard
                icon={Clock}
                title="Setup Time"
                autenixValue={2}
                othersValue={6}
                unit=" weeks"
                autenixLabel="Fast implementation"
                othersLabel="Lengthy onboarding"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <MetricCard
                icon={LineChart}
                title="Time Saved"
                autenixValue={80}
                othersValue={40}
                unit="%"
                autenixLabel="Significant time savings"
                othersLabel="Moderate improvement"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <MetricCard
                icon={Users}
                title="Customer Satisfaction"
                autenixValue={98}
                othersValue={82}
                unit="%"
                autenixLabel="Exceptional support"
                othersLabel="Average experience"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Detailed Feature Blocks */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3 tracking-tight">
              Autenix <span className="gradient-text">Feature Highlights</span>
            </h2>
            <p className="text-surface-600 max-w-2xl mx-auto">
              Explore what makes Autenix the leading choice for compliance
              automation
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-2 gap-6"
            staggerDelay={0.1}>
            {featureBlocks.map((block) => {
              const Icon = block.icon;
              const colors = colorClasses[block.color];
              return (
                <StaggerItem key={block.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl border border-surface-200 p-6 h-full hover:shadow-lg hover:border-surface-300 transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${colors.bgLight} border ${colors.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-surface-900 mb-2">
                          {block.title}
                        </h3>
                        <p className="text-surface-600 text-sm leading-relaxed">
                          {block.description}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 ml-16">
                      {block.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-2 text-sm text-surface-700">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${colors.bg}`}
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={block.link}
                      className={`inline-flex items-center gap-1 text-sm font-medium ${colors.text} hover:underline ml-16`}>
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Autenix Wins */}
      <section className="py-12 lg:py-16 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3 tracking-tight">
              Why <span className="gradient-text">Autenix Wins</span>
            </h2>
            <p className="text-surface-600 max-w-2xl mx-auto">
              Real results from organizations who chose Autenix
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-3 gap-6"
            staggerDelay={0.1}>
            {whyAutenixWins.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white rounded-2xl border border-surface-200 p-6 text-center hover:shadow-lg transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-brand-600" />
                    </div>

                    <div className="mb-3">
                      <span className="text-3xl font-bold text-brand-600">
                        {item.stat}
                      </span>
                      <span className="text-sm text-surface-500 ml-1">
                        {item.statLabel}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-surface-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-surface-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Additional Benefits List */}
          <AnimatedSection className="mt-10">
            <div className="bg-white rounded-2xl border border-surface-200 p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Check, text: "Faster audit preparation" },
                  { icon: Check, text: "Fewer manual compliance tasks" },
                  { icon: Check, text: "Better multi-cloud coverage" },
                  { icon: Check, text: "Real-time compliance visibility" },
                  { icon: Check, text: "Lower total cost of ownership" },
                  { icon: Check, text: "Dedicated customer success team" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-50 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-surface-700 font-medium">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials & Trust Signals */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3 tracking-tight">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-surface-600 max-w-2xl mx-auto">
              See why companies choose Autenix for compliance automation
            </p>
          </AnimatedSection>

          {/* Testimonials Grid */}
          <StaggerContainer
            className="grid md:grid-cols-3 gap-6 mb-12"
            staggerDelay={0.1}>
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.author}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-surface-50 rounded-2xl border border-surface-200 p-6 h-full relative">
                  <Quote className="w-8 h-8 text-brand-200 absolute top-4 right-4" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>

                  <p className="text-surface-700 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center text-white font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-surface-900 text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-surface-500 text-xs">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Trust Logos */}
          <AnimatedSection>
            <div className="text-center">
              <p className="text-sm text-surface-500 mb-6">
                Trusted by 500+ companies worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                {trustedCompanies.map((company) => (
                  <div
                    key={company}
                    className="text-lg font-semibold text-surface-400">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 lg:py-20 dark-section-gradient relative overflow-hidden">
        <div className="absolute inset-0 cta-pattern opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <TrendingUp className="w-4 h-4 text-brand-300" />
              <span className="text-sm font-medium text-white/90">
                Join 500+ companies using Autenix
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Compliance?
            </h2>

            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              See why leading companies choose Autenix for{" "}
              <Link href="/frameworks/soc-2" className="underline">
                SOC 2
              </Link>
              ,{" "}
              <Link href="/frameworks/iso-27001" className="underline">
                ISO 27001
              </Link>
              , and{" "}
              <Link href="/frameworks/hipaa" className="underline">
                HIPAA
              </Link>{" "}
              compliance automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-surface-900 hover:bg-surface-100 shadow-xl group"
                asChild>
                <Link href="/demo">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild>
                <Link href="/contact">Get Started Free</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
