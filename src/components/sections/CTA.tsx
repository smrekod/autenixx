"use client";

import Link from "next/link";
import { ArrowRight, Shield, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

export function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        children: {
          duration: 0.5,
        },
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="py-12 lg:py-14 relative overflow-hidden dark-section-gradient">
      <div className="absolute inset-0 cta-pattern opacity-20" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-brand-500/20 via-brand-500/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight text-balance">
            Ready to Simplify Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-violet-400 to-brand-400 animate-gradient">
              Compliance Journey
            </span>
            ?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-white mb-8 leading-relaxed">
            Join companies using Autenix to streamline compliance, reduce audit
            time, and build trust with customers.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="group bg-white text-black hover:bg-surface-100 shadow-lg shadow-black/20 hover:shadow-xl"
              asChild>
              <Link href="/demo">
                Request a Demo
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              asChild>
              <Link href="/contact">
                <Zap className="w-4 h-4 mr-2" />
                Contact Sales
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 justify-center items-center">
            {[
              { text: "Free demo", icon: CheckCircle2 },
              { text: "No commitment", icon: CheckCircle2 },
              { text: "Setup in minutes", icon: CheckCircle2 },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-white">
                <item.icon className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
