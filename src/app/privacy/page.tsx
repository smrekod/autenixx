"use client";

import { Shield, Lock, Database, Users, Mail, FileText } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../components/ui/AnimatedSection";

const sections = [
  {
    icon: Database,
    title: "What Data We Collect",
    id: "data-collection",
  },
  {
    icon: FileText,
    title: "How We Use Your Data",
    id: "data-usage",
  },
  {
    icon: Lock,
    title: "How We Store & Protect Data",
    id: "data-protection",
  },
  {
    icon: Users,
    title: "Third Parties",
    id: "third-parties",
  },
  {
    icon: Shield,
    title: "Your Rights",
    id: "user-rights",
  },
  {
    icon: Mail,
    title: "Contact Us",
    id: "contact",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-8 lg:py-10 hero-gradient-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto mb-4">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-base text-surface-600 max-w-2xl mx-auto">
              We are committed to protecting your privacy. This policy explains
              exactly what data we collect, how we use it, and how we protect
              it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <AnimatedSection className="mb-12">
              <p className="text-base text-surface-600 leading-relaxed">
                At Autenix, we take your privacy seriously. This Privacy Policy
                describes the information we collect, how we use it, and your
                rights regarding that information. We are transparent about our
                practices because trust is fundamental to compliance.
              </p>
            </AnimatedSection>

            {/* What Data We Collect */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    What Data We Collect
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p className="font-semibold text-surface-900">
                  We collect the following specific types of data:
                </p>

                <div className="bg-surface-50 rounded-xl p-6 border border-surface-200">
                  <h3 className="font-semibold text-surface-900 mb-3">
                    Information You Provide to Us
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-surface-700">
                    <li>
                      <strong>Name, email address, and company name</strong> —
                      collected when you fill out our demo request form or
                      contact form
                    </li>
                    <li>
                      <strong>Account information</strong> — when you create an
                      account, we collect your name, email, company, and any
                      profile information you provide
                    </li>
                    <li>
                      <strong>Communication data</strong> — messages, emails,
                      and other communications you send to us
                    </li>
                  </ul>
                </div>

                <div className="bg-surface-50 rounded-xl p-6 border border-surface-200">
                  <h3 className="font-semibold text-surface-900 mb-3">
                    Infrastructure Metadata
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-surface-700">
                    <li>
                      If you connect your cloud infrastructure (AWS, Azure, GCP,
                      Kubernetes) to our platform, we collect:
                    </li>
                    <li className="ml-6">
                      Configuration metadata (resource types, regions, service
                      names)
                    </li>
                    <li className="ml-6">
                      Security and compliance control states
                    </li>
                    <li className="ml-6">
                      Access logs and activity metadata (for compliance
                      monitoring)
                    </li>
                    <li className="ml-6">
                      We do <strong>not</strong> collect sensitive data,
                      passwords, or personal information from your
                      infrastructure
                    </li>
                  </ul>
                </div>

                <div className="bg-surface-50 rounded-xl p-6 border border-surface-200">
                  <h3 className="font-semibold text-surface-900 mb-3">
                    Usage Analytics
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-surface-700">
                    <li>
                      Basic, non-invasive analytics including page views,
                      feature usage, and general platform interaction patterns
                    </li>
                    <li>
                      We use this data to improve our service and understand how
                      features are used
                    </li>
                    <li>
                      We do not track individual user behavior across websites
                      or use invasive tracking technologies
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* How We Use Your Data */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    How We Use Your Data
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>We use your data for the following specific purposes:</p>

                <ul className="space-y-3 list-disc list-inside text-surface-700">
                  <li>
                    <strong>Providing compliance assessments</strong> — to
                    analyze your infrastructure and generate compliance reports
                    for frameworks like SOC 2, ISO 27001, HIPAA, GDPR, and PCI
                    DSS
                  </li>
                  <li>
                    <strong>Generating reports</strong> — to create
                    auditor-ready compliance reports and dashboards
                  </li>
                  <li>
                    <strong>Improving the service</strong> — to identify bugs,
                    understand feature usage, and enhance platform performance
                  </li>
                  <li>
                    <strong>Customer support</strong> — to respond to your
                    inquiries, provide technical assistance, and resolve issues
                  </li>
                  <li>
                    <strong>Account management</strong> — to manage your
                    account, authenticate users, and provide access to platform
                    features
                  </li>
                  <li>
                    <strong>Security and fraud prevention</strong> — to detect
                    and prevent unauthorized access, fraud, and security threats
                  </li>
                </ul>

                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 mt-4">
                  <p className="text-surface-700">
                    <strong>We do not sell your data.</strong> We do not share
                    your personal information with third parties for marketing
                    purposes. We do not use your data for advertising.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* How We Store & Protect Data */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    How We Store & Protect Data
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  As a compliance platform, data security is fundamental to our
                  business. We implement the following security measures:
                </p>

                <div className="bg-surface-50 rounded-xl p-6 border border-surface-200 space-y-4">
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Encryption
                    </h3>
                    <ul className="space-y-1 list-disc list-inside text-surface-700">
                      <li>
                        <strong>Encryption at rest</strong> — all data stored in
                        our databases is encrypted using industry-standard
                        encryption algorithms
                      </li>
                      <li>
                        <strong>Encryption in transit</strong> — all data
                        transmitted between your devices and our servers uses
                        TLS 1.2 or higher
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Access Controls
                    </h3>
                    <ul className="space-y-1 list-disc list-inside text-surface-700">
                      <li>
                        We follow the{" "}
                        <strong>principle of least privilege</strong> —
                        employees only have access to data necessary for their
                        job functions
                      </li>
                      <li>
                        All access is logged and monitored for security purposes
                      </li>
                      <li>
                        Multi-factor authentication is required for all employee
                        accounts
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Secure Infrastructure
                    </h3>
                    <ul className="space-y-1 list-disc list-inside text-surface-700">
                      <li>
                        We use secure cloud infrastructure with regular security
                        audits and compliance certifications
                      </li>
                      <li>
                        Our infrastructure is regularly updated with security
                        patches
                      </li>
                      <li>
                        We conduct regular security assessments and penetration
                        testing
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Data Retention
                    </h3>
                    <p className="text-surface-700">
                      We retain your data only for as long as necessary to
                      provide our services and comply with legal obligations.
                      When you delete your account, we delete your personal data
                      within 30 days, except where we are required to retain it
                      for legal or compliance purposes.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Third Parties */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    Third Parties
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  We work with the following categories of third-party service
                  providers to operate our platform:
                </p>

                <div className="bg-surface-50 rounded-xl p-6 border border-surface-200 space-y-4">
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Cloud Hosting
                    </h3>
                    <p className="text-surface-700">
                      We use cloud hosting providers to host our platform and
                      store data. These providers are contractually obligated to
                      protect your data and comply with applicable data
                      protection laws.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Analytics
                    </h3>
                    <p className="text-surface-700">
                      We may use analytics services to understand how our
                      platform is used. These services collect aggregated,
                      anonymized data and do not identify individual users.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Email Services
                    </h3>
                    <p className="text-surface-700">
                      We use email service providers to send transactional
                      emails, notifications, and support communications. These
                      providers process email addresses and message content only
                      for the purpose of delivering emails.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Payment Processors
                    </h3>
                    <p className="text-surface-700">
                      If you purchase a subscription, payment information is
                      processed by third-party payment processors. We do not
                      store your full payment card information.
                    </p>
                  </div>
                </div>

                <p className="text-surface-700">
                  All third-party service providers are required to maintain
                  appropriate security measures and are prohibited from using
                  your data for any purpose other than providing services to us.
                </p>
              </div>
            </AnimatedSection>

            {/* User Rights */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    Your Rights
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  Depending on your location, you may have the following rights
                  regarding your personal data:
                </p>

                <div className="bg-surface-50 rounded-xl p-6 border border-surface-200 space-y-3">
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Right to Access
                    </h3>
                    <p className="text-surface-700">
                      You can request a copy of the personal data we hold about
                      you.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Right to Rectification
                    </h3>
                    <p className="text-surface-700">
                      You can request that we correct any inaccurate or
                      incomplete personal data.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Right to Deletion
                    </h3>
                    <p className="text-surface-700">
                      You can request that we delete your personal data, subject
                      to certain legal exceptions (such as our obligation to
                      retain data for compliance purposes).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Right to Data Portability
                    </h3>
                    <p className="text-surface-700">
                      You can request that we provide your data in a structured,
                      commonly used, and machine-readable format.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Right to Object
                    </h3>
                    <p className="text-surface-700">
                      You can object to certain processing of your personal
                      data, such as processing for direct marketing purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Right to Withdraw Consent
                    </h3>
                    <p className="text-surface-700">
                      If we process your data based on consent, you can withdraw
                      that consent at any time.
                    </p>
                  </div>
                </div>

                <p className="text-surface-700">
                  To exercise any of these rights, please contact us using the
                  information provided in the Contact Us section below.
                </p>
              </div>
            </AnimatedSection>

            {/* Contact Us */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    Contact Us
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  If you have questions about this Privacy Policy or wish to
                  exercise your rights regarding your personal data, please
                  contact us:
                </p>

                <div className="bg-surface-50 rounded-xl p-6 border border-surface-200">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-surface-900 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:info@autenix.co"
                        className="text-brand-600 hover:text-brand-700 hover:underline">
                        info@autenix.co
                      </a>
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-900 mb-1">
                        For Privacy Concerns
                      </h3>
                      <a
                        href="mailto:info@autenix.co"
                        className="text-brand-600 hover:text-brand-700 hover:underline">
                        info@autenix.co
                      </a>
                      <p className="text-sm text-surface-600 mt-1">
                        Please include "Privacy Request" in the subject line.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-900 mb-1">
                        Address
                      </h3>
                      <p className="text-surface-700">
                        RR. Shefqet Shkupi
                        <br />
                        Prishtina, Kosovo
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-surface-700">
                  We will respond to your inquiry within 30 days.
                </p>
              </div>
            </AnimatedSection>

            {/* Changes to Policy */}
            <AnimatedSection className="mb-12">
              <h2 className="text-2xl font-bold text-surface-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-base text-surface-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new Privacy
                Policy on this page and updating the "Last updated" date. We
                encourage you to review this Privacy Policy periodically.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
