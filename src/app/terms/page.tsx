"use client";

import {
  Building2,
  Shield,
  AlertTriangle,
  XCircle,
  FileText,
  Mail,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../components/ui/AnimatedSection";

export default function TermsOfServicePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-8 lg:py-10 hero-gradient-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
              Terms of <span className="gradient-text">Service</span>
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
              These terms govern your use of the Autenix platform. Please read
              them carefully.
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
                By accessing or using Autenix, you agree to be bound by these
                Terms of Service. If you do not agree to these terms, you may
                not use our platform.
              </p>
            </AnimatedSection>

            {/* Who We Are */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    Who We Are
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  <strong>Autenix</strong> is a Software-as-a-Service (SaaS)
                  platform that provides compliance automation and monitoring
                  tools.
                </p>

                <div className="bg-surface-50 rounded-xl p-6 border border-surface-200">
                  <p className="text-surface-700">
                    Autenix helps organizations achieve and maintain compliance
                    with frameworks such as SOC 2, ISO 27001, HIPAA, GDPR, PCI
                    DSS, and other security and compliance standards by
                    automating evidence collection, control monitoring, and
                    compliance reporting.
                  </p>
                </div>

                <p className="text-surface-700">
                  Our platform connects to your cloud infrastructure (AWS,
                  Azure, GCP, Kubernetes) and business tools to provide
                  continuous compliance monitoring and generate compliance
                  reports.
                </p>
              </div>
            </AnimatedSection>

            {/* What We Provide */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    What We Provide (and What We Don't)
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <h3 className="font-semibold text-surface-900 mb-3">
                    What Autenix Provides:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-surface-700">
                    <li>
                      <strong>Compliance automation tools</strong> — automated
                      evidence collection from your infrastructure and
                      integrations
                    </li>
                    <li>
                      <strong>Continuous monitoring</strong> — real-time
                      monitoring of compliance controls and security
                      configurations
                    </li>
                    <li>
                      <strong>Compliance reporting</strong> — generation of
                      compliance reports, dashboards, and documentation
                    </li>
                    <li>
                      <strong>Framework support</strong> — support for 35+
                      compliance frameworks including SOC 2, ISO 27001, HIPAA,
                      GDPR, and PCI DSS
                    </li>
                    <li>
                      <strong>Integration capabilities</strong> — connections to
                      cloud infrastructure, identity providers, and business
                      tools
                    </li>
                    <li>
                      <strong>Policy templates and management</strong> —
                      templates and tools for managing compliance policies
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                  <h3 className="font-semibold text-surface-900 mb-3">
                    What Autenix Does NOT Provide:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-surface-700">
                    <li>
                      <strong>Legal advice</strong> — Autenix does not provide
                      legal advice. You should consult with qualified legal
                      counsel for legal matters related to compliance.
                    </li>
                    <li>
                      <strong>Audit services</strong> — Autenix does not replace
                      certified auditors or audit firms. We provide tools to
                      help you prepare for audits, but we do not conduct audits
                      or provide audit opinions.
                    </li>
                    <li>
                      <strong>Guaranteed compliance certification</strong> —
                      Autenix helps you achieve compliance, but we cannot
                      guarantee that you will pass audits or obtain
                      certifications. Compliance outcomes depend on many factors
                      beyond our control.
                    </li>
                    <li>
                      <strong>Regulatory representation</strong> — Autenix does
                      not represent you before regulatory bodies or auditors.
                    </li>
                  </ul>
                </div>

                <p className="text-surface-700 font-medium">
                  Autenix is a tool to assist with compliance management. It is
                  your responsibility to work with qualified legal, compliance,
                  and audit professionals as needed for your specific
                  requirements.
                </p>
              </div>
            </AnimatedSection>

            {/* User Responsibilities */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    Your Responsibilities
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  When using Autenix, you are responsible for the following:
                </p>

                <div className="bg-surface-50 rounded-xl p-6 border border-surface-200 space-y-4">
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Accurate Configuration
                    </h3>
                    <p className="text-surface-700">
                      You are responsible for correctly configuring integrations
                      with your cloud infrastructure, identity providers, and
                      other systems. Incorrect configuration may result in
                      incomplete or inaccurate compliance assessments.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Data Accuracy
                    </h3>
                    <p className="text-surface-700">
                      You must ensure that all data you provide to Autenix is
                      accurate, complete, and up-to-date. You are responsible
                      for the accuracy of information entered into the platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Access Control
                    </h3>
                    <p className="text-surface-700">
                      You are responsible for maintaining the security of your
                      account credentials and for controlling access to your
                      Autenix account. You must notify us immediately if you
                      suspect unauthorized access.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Compliance Requirements
                    </h3>
                    <p className="text-surface-700">
                      You are responsible for understanding and meeting your
                      specific compliance requirements. Autenix provides tools
                      to assist you, but you remain responsible for ensuring
                      your organization meets all applicable compliance
                      obligations.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Acceptable Use
                    </h3>
                    <p className="text-surface-700">
                      You agree to use Autenix only for lawful purposes and in
                      accordance with these Terms. You may not use the platform
                      to violate any laws, infringe on rights of others, or
                      interfere with the operation of the service.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Limitations of Liability */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    Limitations of Liability
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <div className="bg-surface-50 rounded-xl p-6 border border-surface-200 space-y-4">
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      No Guarantee of Audit Outcomes
                    </h3>
                    <p className="text-surface-700">
                      Autenix cannot and does not guarantee that you will pass
                      compliance audits or obtain certifications. Compliance
                      outcomes depend on many factors including the accuracy of
                      your data, proper implementation of controls, auditor
                      judgment, and regulatory requirements. While Autenix helps
                      you prepare for audits, we make no representations or
                      warranties about audit results.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Service Provided "As Is"
                    </h3>
                    <p className="text-surface-700">
                      Autenix is provided "as is" and "as available" without
                      warranties of any kind, either express or implied,
                      including but not limited to warranties of
                      merchantability, fitness for a particular purpose, or
                      non-infringement. We do not warrant that the service will
                      be uninterrupted, error-free, or completely secure.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Limitation of Damages
                    </h3>
                    <p className="text-surface-700">
                      To the maximum extent permitted by law, Autenix shall not
                      be liable for any indirect, incidental, special,
                      consequential, or punitive damages, or any loss of profits
                      or revenues, whether incurred directly or indirectly, or
                      any loss of data, use, goodwill, or other intangible
                      losses resulting from your use of the platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Maximum Liability
                    </h3>
                    <p className="text-surface-700">
                      Our total liability to you for all claims arising from or
                      related to your use of Autenix shall not exceed the amount
                      you paid to us in the twelve (12) months preceding the
                      claim, or one hundred dollars ($100), whichever is
                      greater.
                    </p>
                  </div>
                </div>

                <p className="text-surface-700">
                  Some jurisdictions do not allow the exclusion of certain
                  warranties or limitations of liability, so some of the above
                  limitations may not apply to you.
                </p>
              </div>
            </AnimatedSection>

            {/* Termination & Access */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    Termination & Access
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <div className="bg-surface-50 rounded-xl p-6 border border-surface-200 space-y-4">
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Your Right to Cancel
                    </h3>
                    <p className="text-surface-700">
                      You may cancel your Autenix account at any time by
                      contacting us at{" "}
                      <a
                        href="mailto:info@autenix.co"
                        className="text-brand-600 hover:text-brand-700 hover:underline">
                        info@autenix.co
                      </a>
                      . Upon cancellation, your access to the platform will end
                      at the conclusion of your current billing period, unless
                      you request immediate termination.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Our Right to Suspend or Terminate
                    </h3>
                    <p className="text-surface-700">
                      We reserve the right to suspend or terminate your access
                      to Autenix immediately, without notice, if:
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-surface-700 mt-2 ml-4">
                      <li>You violate these Terms of Service</li>
                      <li>
                        You engage in fraudulent, illegal, or harmful activity
                      </li>
                      <li>
                        You misuse the platform or attempt to interfere with its
                        operation
                      </li>
                      <li>You fail to pay fees when due</li>
                      <li>
                        We reasonably believe your use poses a security risk
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2">
                      Effect of Termination
                    </h3>
                    <p className="text-surface-700">
                      Upon termination of your account:
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-surface-700 mt-2 ml-4">
                      <li>
                        Your right to access and use Autenix will immediately
                        cease
                      </li>
                      <li>
                        We may delete your account data in accordance with our
                        Privacy Policy
                      </li>
                      <li>
                        You remain responsible for any fees incurred prior to
                        termination
                      </li>
                      <li>
                        Sections of these Terms that by their nature should
                        survive termination will remain in effect
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-surface-700">
                  We will provide reasonable notice before terminating service
                  for non-payment or other non-material breaches, except where
                  immediate termination is necessary to protect our platform or
                  other users.
                </p>
              </div>
            </AnimatedSection>

            {/* Account & Billing */}
            <AnimatedSection className="mb-12">
              <h2 className="text-2xl font-bold text-surface-900 mb-4">
                Account & Billing
              </h2>
              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  You must provide accurate and complete information when
                  creating an account. You are responsible for maintaining the
                  security of your account credentials.
                </p>
                <p>
                  Subscription fees are billed in advance on a monthly or annual
                  basis. All fees are non-refundable except as required by law
                  or as explicitly stated in your subscription agreement.
                </p>
                <p>
                  We reserve the right to change our pricing with reasonable
                  notice. Price changes will apply to subsequent billing cycles.
                </p>
              </div>
            </AnimatedSection>

            {/* Intellectual Property */}
            <AnimatedSection className="mb-12">
              <h2 className="text-2xl font-bold text-surface-900 mb-4">
                Intellectual Property
              </h2>
              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  The Autenix platform, including all software, designs, text,
                  graphics, and other content, is owned by Autenix and protected
                  by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You retain ownership of your data. By using Autenix, you grant
                  us a license to use, store, and process your data solely for
                  the purpose of providing the service.
                </p>
              </div>
            </AnimatedSection>

            {/* Changes to Terms */}
            <AnimatedSection className="mb-12">
              <h2 className="text-2xl font-bold text-surface-900 mb-4">
                Changes to These Terms
              </h2>
              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  We may update these Terms of Service from time to time. We
                  will notify you of material changes by posting the new Terms
                  on this page and updating the "Last updated" date. We may also
                  notify you via email if the changes are significant.
                </p>
                <p>
                  Your continued use of Autenix after changes become effective
                  constitutes acceptance of the updated Terms. If you do not
                  agree to the changes, you must stop using the platform and
                  cancel your account.
                </p>
              </div>
            </AnimatedSection>

            {/* Contact Us */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    Contact Us
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  If you have questions about these Terms of Service, please
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
              </div>
            </AnimatedSection>

            {/* Governing Law */}
            <AnimatedSection className="mb-12">
              <h2 className="text-2xl font-bold text-surface-900 mb-4">
                Governing Law
              </h2>
              <p className="text-base text-surface-700 leading-relaxed">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of Kosovo, without regard to its
                conflict of law provisions. Any disputes arising from these
                Terms or your use of Autenix shall be resolved in the courts of
                Kosovo.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
