"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  Sparkles,
  Play,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { SimpleFeatureList } from "../../components/ui/FeatureList";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Shield,
    title: "Personalized Demo",
    description: "See how Autenix works for your specific compliance needs",
  },
  {
    icon: Clock,
    title: "30 Minutes",
    description: "Quick overview of key features and capabilities",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Talk to compliance experts who understand your challenges",
  },
];

const features = [
  "Live platform walkthrough",
  "Framework-specific demonstration",
  "Integration overview",
  "Q&A with compliance experts",
  "Custom pricing discussion",
  "Implementation timeline",
];

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    employees: "",
    frameworks: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center hero-gradient-bg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </motion.div>
          <h1 className="text-3xl font-bold text-surface-900 mb-4">
            Demo Request Received!
          </h1>
          <p className="text-lg text-surface-600 mb-8">
            Thank you for your interest in Autenix. Our team will reach out
            within 24 hours to schedule your personalized demo.
          </p>
          <Button size="lg" asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-8 lg:py-10 hero-gradient-bg relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-500 to-violet-500 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <AnimatedSection>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl font-bold text-surface-900 mb-4 tracking-tight">
                See Autenix <span className="gradient-text">in Action</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base text-surface-600 mb-8 leading-relaxed">
                Get a personalized demo of the Autenix platform and see how we
                can help you achieve compliance faster.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-5 mb-8">
                {benefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-100 border border-brand-200 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-surface-900">
                          {benefit.title}
                        </h3>
                        <p className="text-surface-600">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-surface-50 rounded-xl p-5 border border-surface-200">
                <h3 className="font-semibold text-surface-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-500" />
                  What you&apos;ll see:
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-6">
                  <SimpleFeatureList
                    features={features.slice(0, 3)}
                    color="brand"
                    size="sm"
                  />
                  <SimpleFeatureList
                    features={features.slice(3)}
                    color="brand"
                    size="sm"
                  />
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl border border-surface-200 p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-surface-900 mb-6">
                  Request Your Demo
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                    />
                    <Input
                      label="Last Name"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Input
                    label="Work Email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                  <Input
                    label="Company"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    required
                  />
                  <Input
                    label="Job Title"
                    placeholder="Head of Security"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  />
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">
                      Company Size
                    </label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-200 bg-white text-surface-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                      value={formData.employees}
                      onChange={(e) =>
                        setFormData({ ...formData, employees: e.target.value })
                      }>
                      <option value="">Select...</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">
                      Frameworks of Interest
                    </label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-200 bg-white text-surface-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                      value={formData.frameworks}
                      onChange={(e) =>
                        setFormData({ ...formData, frameworks: e.target.value })
                      }>
                      <option value="">Select...</option>
                      <option value="soc2">SOC 2</option>
                      <option value="iso27001">ISO 27001</option>
                      <option value="hipaa">HIPAA</option>
                      <option value="pci">PCI-DSS</option>
                      <option value="gdpr">GDPR</option>
                      <option value="multiple">Multiple Frameworks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">
                      Anything specific you&apos;d like to discuss?
                    </label>
                    <textarea
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-200 bg-white text-surface-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 min-h-[100px] transition-all"
                      placeholder="Tell us about your compliance needs..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </motion.div>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group shadow-lg shadow-brand-600/20 text-black"
                    isLoading={isSubmitting}>
                    Request Demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <p className="text-xs text-surface-500 text-center">
                    By submitting, you agree to our Privacy Policy and Terms of
                    Service.
                  </p>
                </form>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
