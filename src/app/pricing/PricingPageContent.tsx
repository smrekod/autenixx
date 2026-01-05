"use client";

import Link from "next/link";
import { ArrowRight, HelpCircle, Building2, Rocket, Zap } from "lucide-react";
import { Button } from "../../components/ui/Button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../components/ui/AnimatedSection";
import { SimpleFeatureList } from "../../components/ui/FeatureList";
import { motion } from "framer-motion";

const features = [
  {
    category: "Compliance Management",
    items: [
      "Automated compliance monitoring",
      "35+ supported frameworks",
      "Continuous control testing",
      "Evidence collection automation",
    ],
  },
  {
    category: "Integrations",
    items: [
      "AWS & Azure native integrations",
      "Cloud infrastructure monitoring",
      "Identity provider connections",
      "API access for custom workflows",
    ],
  },
  {
    category: "Team & Collaboration",
    items: [
      "Role-based access control",
      "Team collaboration tools",
      "Audit trail & activity logs",
      "Custom notifications",
    ],
  },
  {
    category: "Reporting & Audits",
    items: [
      "Real-time compliance dashboards",
      "Auditor-ready reports",
      "Custom policy templates",
      "Gap analysis & recommendations",
    ],
  },
];

const faqs = [
  {
    question: "How does Autenix compliance platform pricing work?",
    answer:
      "Our pricing is customized based on your organization's size, compliance needs, and the number of frameworks you require. Schedule a demo to get a personalized quote for SOC 2, ISO 27001, HIPAA, or multi-framework compliance.",
  },
  {
    question: "Do you offer a free trial of the compliance platform?",
    answer:
      "We offer personalized demos where you can see the platform in action with your specific use case. Contact our team to schedule a demo and see how Autenix automates compliance monitoring.",
  },
  {
    question: "What compliance frameworks does Autenix support?",
    answer:
      "We support 35+ compliance frameworks including SOC 2, ISO 27001, HIPAA, GDPR, PCI DSS, NIST, CIS, and many more. We're continuously adding new frameworks based on customer needs.",
  },
  {
    question: "Do you offer discounts for startups?",
    answer:
      "Yes, we have special pricing for early-stage startups looking for their first SOC 2 or ISO 27001 certification. Contact our sales team to learn more about our startup program.",
  },
  {
    question: "What's included in Autenix onboarding?",
    answer:
      "Every customer receives dedicated onboarding support including initial setup, integration configuration with AWS/Azure/GCP, team training, and ongoing success management.",
  },
  {
    question: "Can I switch compliance plans later?",
    answer:
      "Yes! You can upgrade or adjust your plan at any time as your compliance needs evolve. We'll work with you to ensure you have the right coverage for SOC 2, ISO 27001, HIPAA, or any combination of frameworks.",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Fast Implementation",
    description:
      "Get up and running in days, not months. Our team handles the heavy lifting for compliance setup.",
  },
  {
    icon: Zap,
    title: "Automated Monitoring",
    description:
      "Continuous compliance monitoring with real-time alerts and automated remediation guidance.",
  },
  {
    icon: Building2,
    title: "Dedicated Support",
    description:
      "Work directly with compliance experts who understand SOC 2, ISO 27001, and HIPAA requirements.",
  },
];

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PricingPageContent() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pt-20">
        {/* Hero */}
        <section className="py-8 lg:py-10 hero-gradient-bg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <AnimatedSection>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
                Compliance Automation{" "}
                <span className="gradient-text">Pricing</span>
              </h1>
              <p className="text-lg text-surface-600 max-w-2xl mx-auto mb-8">
                Flexible pricing for{" "}
                <Link
                  href="/frameworks/soc-2"
                  className="text-brand-600 hover:underline">
                  SOC 2
                </Link>
                ,{" "}
                <Link
                  href="/frameworks/iso-27001"
                  className="text-brand-600 hover:underline">
                  ISO 27001
                </Link>
                ,{" "}
                <Link
                  href="/frameworks/hipaa"
                  className="text-brand-600 hover:underline">
                  HIPAA
                </Link>
                , and multi-framework compliance. Get a personalized demo and
                pricing tailored to your specific compliance requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-black">
                <Button
                  size="lg"
                  className="group shadow-lg shadow-brand-600/25 text-black"
                  asChild>
                  <Link href="/demo">
                    Request a Demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-600 text-brand-600 hover:bg-brand-50 hover:border-brand-700 hover:text-brand-700 text-black"
                  asChild>
                  <Link href="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-8 lg:py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer
              className="grid md:grid-cols-3 gap-6"
              staggerDelay={0.1}>
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <StaggerItem key={benefit.title}>
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7 text-brand-600" />
                      </div>
                      <h2 className="text-lg font-semibold text-surface-900 mb-2">
                        {benefit.title}
                      </h2>
                      <p className="text-surface-600">{benefit.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-8 lg:py-10 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3 tracking-tight">
                Everything You Need for Compliance Automation
              </h2>
              <p className="text-surface-600 max-w-2xl mx-auto">
                Our platform includes all the tools and features you need to
                achieve and maintain{" "}
                <Link
                  href="/frameworks/soc-2"
                  className="text-brand-600 hover:underline">
                  SOC 2
                </Link>
                ,{" "}
                <Link
                  href="/frameworks/iso-27001"
                  className="text-brand-600 hover:underline">
                  ISO 27001
                </Link>
                ,{" "}
                <Link
                  href="/frameworks/hipaa"
                  className="text-brand-600 hover:underline">
                  HIPAA
                </Link>
                , and other compliance certifications.
              </p>
            </AnimatedSection>

            <StaggerContainer
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
              staggerDelay={0.08}>
              {features.map((feature) => (
                <StaggerItem key={feature.category}>
                  <div className="bg-white rounded-xl border border-surface-200 p-5 h-full">
                    <h3 className="text-base font-semibold text-surface-900 mb-3">
                      {feature.category}
                    </h3>
                    <SimpleFeatureList
                      features={feature.items}
                      color="emerald"
                      size="sm"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Card */}
        <section className="py-8 lg:py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-surface-900 via-surface-900 to-surface-800 rounded-2xl p-6 md:p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-transparent to-transparent" />
                <div className="relative">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    See Autenix Compliance Platform in Action
                  </h2>
                  <p className="text-base text-surface-300 max-w-xl mx-auto mb-6">
                    Schedule a personalized demo to see how Autenix can
                    streamline your{" "}
                    <Link
                      href="/frameworks/soc-2"
                      className="text-brand-300 hover:underline">
                      SOC 2
                    </Link>
                    ,{" "}
                    <Link
                      href="/frameworks/iso-27001"
                      className="text-brand-300 hover:underline">
                      ISO 27001
                    </Link>
                    , or{" "}
                    <Link
                      href="/frameworks/hipaa"
                      className="text-brand-300 hover:underline">
                      HIPAA
                    </Link>{" "}
                    compliance journey and get custom pricing for your
                    organization.
                  </p>
                  <Button
                    size="lg"
                    className="group shadow-lg shadow-brand-600/25"
                    asChild>
                    <Link href="/demo">
                      Request a Demo
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8 lg:py-10 bg-surface-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3 tracking-tight">
                Compliance Platform Pricing FAQ
              </h2>
              <p className="text-base text-surface-600">
                Common questions about Autenix pricing and compliance automation
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-4" staggerDelay={0.05}>
              {faqs.map((faq) => (
                <StaggerItem key={faq.question}>
                  <div className="bg-white rounded-2xl border border-surface-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-surface-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-surface-900 mb-2 text-lg">
                          {faq.question}
                        </h3>
                        <p className="text-surface-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-10 lg:py-12 dark-section-gradient relative overflow-hidden">
          <div className="absolute inset-0 cta-pattern opacity-20" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ready to Automate Your Compliance?
              </h2>
              <p className="text-base text-white mb-6">
                Schedule a demo today and see how Autenix can transform your
                <Link
                  href="/frameworks/soc-2"
                  className="text-brand-300 hover:underline">
                  {" "}
                  SOC 2
                </Link>
                ,{" "}
                <Link
                  href="/frameworks/iso-27001"
                  className="text-brand-300 hover:underline">
                  ISO 27001
                </Link>
                , or{" "}
                <Link
                  href="/frameworks/hipaa"
                  className="text-brand-300 hover:underline">
                  HIPAA
                </Link>{" "}
                compliance process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-surface-900 hover:bg-surface-100 group"
                  asChild>
                  <Link href="/demo">
                    Request Demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
