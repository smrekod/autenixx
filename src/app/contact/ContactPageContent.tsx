"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Building2,
  CheckCircle2,
  Send,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../components/ui/AnimatedSection";
import { motion } from "framer-motion";

const contactOptions = [
  {
    icon: MessageSquare,
    title: "Sales",
    description:
      "Talk to our sales team about pricing and enterprise compliance solutions",
    email: "sales@autenix.co",
    color: "blue",
  },
  {
    icon: Building2,
    title: "Partnerships",
    description: "Explore partnership and compliance integration opportunities",
    email: "partners@autenix.co",
    color: "violet",
  },
  {
    icon: Mail,
    title: "General Inquiries",
    description: "For all other questions about our compliance platform",
    email: "info@autenix.co",
    color: "emerald",
  },
];

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
  },
};

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to submit form. Please try again."
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
            Message Sent!
          </h1>
          <p className="text-lg text-surface-600 mb-8">
            Thank you for reaching out. Our compliance experts will get back to you within 24 hours.
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
      {/* Hero Section */}
      <section className="py-8 lg:py-10 hero-gradient-bg relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-500 to-violet-500 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-surface-900 mb-4 tracking-tight">
              Contact Autenix <span className="gradient-text">Compliance Experts</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-surface-600">
              Have questions about <Link href="/frameworks/soc-2" className="text-brand-600 hover:underline">SOC 2</Link>, <Link href="/frameworks/iso-27001" className="text-brand-600 hover:underline">ISO 27001</Link>, or our <Link href="/products" className="text-brand-600 hover:underline">compliance automation platform</Link>? Our team is here to help you achieve compliance faster.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer
            className="grid md:grid-cols-3 gap-5 mb-6"
            staggerDelay={0.1}>
            {contactOptions.map((option) => {
              const Icon = option.icon;
              const colors = colorClasses[option.color];
              return (
                <StaggerItem key={option.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl border border-surface-200 p-6 text-center hover:shadow-lg transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </motion.div>
                    <h2 className="text-lg font-semibold text-surface-900 mb-2">
                      {option.title}
                    </h2>
                    <p className="text-surface-600 text-sm mb-4">
                      {option.description}
                    </p>
                    <a
                      href={`mailto:${option.email}`}
                      className={`${colors.text} hover:underline font-medium text-sm`}>
                      {option.email}
                    </a>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Contact Form */}
          <AnimatedSection className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-surface-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
                  <Send className="w-5 h-5 text-brand-600" />
                </div>
                <h2 className="text-2xl font-bold text-surface-900">
                  Send Us a Message
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <Input
                  label="Company"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">
                    Subject
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-200 bg-white text-surface-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required>
                    <option value="">Select a subject...</option>
                    <option value="sales">Sales Inquiry - Compliance Platform</option>
                    <option value="support">Support Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-200 bg-white text-surface-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 min-h-[150px] transition-all"
                    placeholder="Tell us about your compliance needs..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full group shadow-lg shadow-brand-600/20"
                  isLoading={isSubmitting}>
                  Send Message
                  <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-10 bg-surface-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-xl font-bold text-surface-900 mb-3">
              Prefer a Live Demo of Our Compliance Platform?
            </h2>
            <p className="text-surface-600 mb-5">
              See Autenix in action with a personalized walkthrough of our <Link href="/products/compliance-automation" className="text-brand-600 hover:underline">compliance automation</Link> features.
            </p>
            <Button size="lg" className="group" asChild>
              <Link href="/demo">
                Request a Demo
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2">
                  →
                </motion.span>
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

