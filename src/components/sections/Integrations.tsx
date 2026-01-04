"use client";

import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Server,
  Shield,
  Zap,
  Database,
  Lock,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../ui/AnimatedSection";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

const integrations = [
  {
    name: "AWS",
    description: "Amazon Web Services",
    icon: Cloud,
    features: ["EC2", "S3", "IAM", "RDS", "Lambda", "CloudTrail"],
    color: "orange",
    gradient: "from-orange-500/10 to-orange-500/5",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
  },
  {
    name: "Azure",
    description: "Microsoft Azure",
    icon: Server,
    features: [
      "Virtual Machines",
      "Active Directory",
      "Storage",
      "SQL",
      "Functions",
    ],
    color: "blue",
    gradient: "from-blue-500/10 to-blue-500/5",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
  },
];

const moreIntegrations = [
  { name: "GCP", icon: Database, color: "red" },
  { name: "Kubernetes", icon: Server, color: "blue" },
  { name: "GitHub", icon: Shield, color: "gray" },
  { name: "Okta", icon: Lock, color: "indigo" },
];

export function Integrations() {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-50/50 to-white pointer-events-none" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-500 to-cyan-500 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-3 tracking-tight">
            Seamless Cloud <span className="gradient-text">Integration</span>
          </h2>
          <p className="text-base text-surface-600">
            Connect your cloud infrastructure and start monitoring compliance in
            minutes. Native integration with leading cloud providers.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8"
          staggerDelay={0.15}>
          {integrations.map((integration) => {
            const Icon = integration.icon;
            return (
              <StaggerItem key={integration.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`bg-gradient-to-br ${integration.gradient} rounded-2xl border ${integration.borderColor} p-6 lg:p-8 h-full transition-all duration-300 hover:shadow-xl`}>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 ${integration.iconBg} rounded-2xl shadow-sm flex items-center justify-center border border-surface-200`}>
                      <Icon className={`w-7 h-7 ${integration.iconText}`} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-surface-900">
                        {integration.name}
                      </h3>
                      <p className="text-surface-600">
                        {integration.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-surface-700 mb-3">
                      Services Monitored
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {integration.features.map((feature, i) => (
                        <motion.span
                          key={feature}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1.5 bg-white/80 rounded-lg text-sm text-surface-700 border border-surface-200 hover:border-surface-300 transition-colors">
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-surface-200/50">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-emerald-500"
                      />
                      <span className="text-sm text-surface-500">
                        Real-time monitoring
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:gap-2 transition-all cursor-pointer">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection className="mb-8">
          <div className="text-center mb-6">
            <span className="text-sm font-medium text-surface-500">
              Coming Soon
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {moreIntegrations.map((int, i) => {
              const Icon = int.icon;
              return (
                <motion.div
                  key={int.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-surface-50 rounded-xl border border-surface-200">
                  <Icon className="w-5 h-5 text-surface-500" />
                  <span className="text-sm font-medium text-surface-700">
                    {int.name}
                  </span>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-2 bg-brand-50 rounded-xl border border-brand-100">
              <Zap className="w-5 h-5 text-brand-500" />
              <span className="text-sm font-medium text-brand-700">
                +400 more
              </span>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
