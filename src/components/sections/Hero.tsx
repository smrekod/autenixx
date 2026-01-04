"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Button } from "../ui/Button";
import {
  ArrowRight,
  Shield,
  Check,
  Cloud,
  Lock,
  Zap,
  TrendingUp,
} from "lucide-react";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const frameworks = [
    { name: "SOC 2", progress: 94, color: "bg-blue-500" },
    { name: "ISO 27001", progress: 87, color: "bg-indigo-500" },
    { name: "HIPAA", progress: 92, color: "bg-emerald-500" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 hero-gradient-bg opacity-50" />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 w-[700px] h-[700px] bg-gradient-to-br from-brand-500 to-violet-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full blur-3xl"
      />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23000'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-surface-900 leading-[1.1] mb-6 tracking-tight text-balance">
              Compliance <span className="gradient-text">Automation</span>
              <br />
              for Modern Enterprises
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-surface-900 mb-8 leading-relaxed">
              Automate compliance monitoring and governance across AWS, Azure,
              GCP, Kubernetes, and M365. Get audit-ready faster with continuous
              monitoring and automated evidence collection.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/demo"
                className="text-black group inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 px-7 py-3.5 text-base gap-2.5 bg-surface-100 text-surface-900 hover:bg-surface-200 active:bg-surface-300 shadow-lg shadow-surface-900/10">
                Request Demo
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="group border-brand-600 text-brand-600 hover:bg-brand-50 hover:border-brand-700 hover:text-brand-700"
                asChild>
                <Link href="/products">
                  Explore Platform
                  <Zap className="w-4 h-4 ml-2 text-brand-500 group-hover:text-brand-600 transition-colors" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-surface-900">
              {[
                { text: "Multi-cloud support", icon: Cloud },
                { text: "35+ frameworks", icon: Shield },
                { text: "Continuous monitoring", icon: TrendingUp },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="relative">
            <div className="relative bg-white rounded-2xl dashboard-shadow border border-surface-200/80 overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-surface-50 to-white border-b border-surface-200">
                <div className="flex items-center gap-1.5">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 rounded-full bg-red-400 cursor-pointer"
                  />
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer"
                  />
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 rounded-full bg-green-400 cursor-pointer"
                  />
                </div>
                <div className="flex-1 flex items-center justify-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-brand-50 flex items-center justify-center">
                    <Shield className="w-3.5 h-3.5 text-brand-600" />
                  </div>
                  <span className="text-sm font-medium text-surface-600">
                    Autenix Dashboard
                  </span>
                </div>
                <div className="w-16" />
              </div>

              <div className="p-5 bg-gradient-to-b from-surface-50/50 to-white">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    {
                      label: "Compliance Score",
                      value: "94%",
                      color: "emerald",
                      trend: "+2.3%",
                    },
                    {
                      label: "Controls Passed",
                      value: "247/263",
                      color: "blue",
                      trend: null,
                    },
                    {
                      label: "Active Frameworks",
                      value: "5",
                      color: "violet",
                      trend: null,
                    },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className={`bg-${stat.color}-50 rounded-xl p-3 border border-${stat.color}-100/50 cursor-default`}>
                      <div className="text-xs text-surface-500 mb-1 font-medium">
                        {stat.label}
                      </div>
                      <div className="flex items-end gap-1.5">
                        <span
                          className={`text-xl font-bold text-${stat.color}-600`}>
                          {stat.value}
                        </span>
                        {stat.trend && (
                          <span className="text-xs font-medium text-emerald-600 mb-0.5">
                            {stat.trend}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white rounded-xl p-4 border border-surface-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-surface-700">
                      Framework Status
                    </span>
                    <span className="text-xs text-surface-600">
                      Live updates
                    </span>
                  </div>
                  <div className="space-y-3">
                    {frameworks.map((fw, i) => (
                      <div key={fw.name} className="flex items-center gap-3">
                        <div className="w-20 text-sm text-surface-600 font-medium">
                          {fw.name}
                        </div>
                        <div className="flex-1 bg-surface-100 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${fw.progress}%` }}
                            transition={{
                              duration: 1.2,
                              delay: 1 + i * 0.15,
                              ease: [0.25, 0.4, 0.25, 1],
                            }}
                            className={`${fw.color} h-2 rounded-full progress-bar-animated`}
                          />
                        </div>
                        <div className="w-10 text-sm text-surface-700 text-right font-semibold">
                          {fw.progress}%
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.4, delay: 1.2 },
                scale: { duration: 0.4, delay: 1.2 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                },
              }}
              className="absolute -top-3 -right-3 bg-white rounded-xl shadow-xl shadow-surface-900/10 p-3.5 border border-surface-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-surface-900">
                    SOC 2 Ready
                  </div>
                  <div className="text-xs text-emerald-600 font-medium">
                    All controls passed ✓
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, 6, 0] }}
              transition={{
                opacity: { duration: 0.4, delay: 1.4 },
                scale: { duration: 0.4, delay: 1.4 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.8,
                },
              }}
              className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-xl shadow-surface-900/10 p-3.5 border border-surface-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-surface-900">
                    Multi-Cloud
                  </div>
                  <div className="text-xs text-surface-500">
                    AWS • Azure • GCP
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
              transition={{
                opacity: { duration: 0.4, delay: 1.6 },
                scale: { duration: 0.4, delay: 1.6 },
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                },
              }}
              className="absolute top-1/2 -right-6 bg-white rounded-xl shadow-lg shadow-surface-900/10 px-4 py-2.5 border border-surface-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-brand-50 flex items-center justify-center">
                  <Lock className="w-3.5 h-3.5 text-brand-600" />
                </div>
                <span className="text-sm font-medium text-surface-700">
                  Encrypted
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
