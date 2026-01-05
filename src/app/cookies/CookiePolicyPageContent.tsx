"use client";

import { Cookie, Shield, XCircle, CheckCircle } from "lucide-react";
import {
  AnimatedSection,
} from "../../components/ui/AnimatedSection";

export default function CookiePolicyPageContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-8 lg:py-10 hero-gradient-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
              Cookie <span className="gradient-text">Policy</span>
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
              We keep it simple. Here&apos;s exactly what cookies we use (or don&apos;t
              use) on our website.
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
                This Cookie Policy explains what cookies are, how we use them
                (or don&apos;t use them), and your choices regarding cookies. We
                believe in transparency, so we&apos;ll be straightforward about our
                cookie usage.
              </p>
            </AnimatedSection>

            {/* What Are Cookies */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    What Are Cookies?
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  Cookies are small text files that websites store on your device
                  when you visit them. They help websites remember your
                  preferences and improve your browsing experience.
                </p>
                <p>
                  There are different types of cookies:
                </p>
                <ul className="space-y-2 list-disc list-inside text-surface-700 ml-4">
                  <li>
                    <strong>Essential cookies</strong> — required for the website
                    to function properly
                  </li>
                  <li>
                    <strong>Analytics cookies</strong> — used to understand how
                    visitors use the website
                  </li>
                  <li>
                    <strong>Advertising cookies</strong> — used to show you
                    targeted ads
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* What Cookies We Use */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    What Cookies We Use
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <h3 className="font-semibold text-surface-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    Essential Cookies (If Any)
                  </h3>
                  <p className="text-surface-700 mb-2">
                    We may use minimal essential cookies to:
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-surface-700 ml-4">
                    <li>Maintain your session if you log into your account</li>
                    <li>Remember your preferences (if applicable)</li>
                    <li>Ensure website security and functionality</li>
                  </ul>
                  <p className="text-surface-700 mt-3 text-sm">
                    <strong>Note:</strong> We use minimal cookies. Many modern
                    websites can function without storing cookies on your
                    device, and we aim to keep our cookie usage to the absolute
                    minimum necessary.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* What Cookies We Don't Use */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    What Cookies We Don&apos;t Use
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <div className="bg-rose-50 rounded-xl p-6 border border-rose-100 space-y-4">
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-rose-600" />
                      No Analytics Cookies
                    </h3>
                    <p className="text-surface-700">
                      We do not use analytics cookies or tracking cookies. We
                      don&apos;t use Google Analytics, Facebook Pixel, or any other
                      third-party tracking services that would place cookies on
                      your device to track your behavior.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-rose-600" />
                      No Advertising Cookies
                    </h3>
                    <p className="text-surface-700">
                      We do not use advertising cookies. We don&apos;t show ads on
                      our website, and we don&apos;t use cookies to track you for
                      advertising purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-surface-900 mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-rose-600" />
                      No Third-Party Tracking
                    </h3>
                    <p className="text-surface-700">
                      We do not allow third-party services to place tracking
                      cookies on your device. We respect your privacy and don&apos;t
                      track your browsing behavior across websites.
                    </p>
                  </div>
                </div>

                <p className="text-surface-700 font-medium">
                  In short: We don&apos;t track you. We don&apos;t use cookies to follow
                  you around the internet. We keep it simple and privacy-focused.
                </p>
              </div>
            </AnimatedSection>

            {/* Managing Cookies */}
            <AnimatedSection className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-4">
                    Managing Cookies
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  Since we use minimal (or no) cookies, there&apos;s not much to
                  manage. However, you can control cookies through your browser
                  settings:
                </p>

                <div className="bg-surface-50 rounded-xl p-6 border border-surface-200">
                  <h3 className="font-semibold text-surface-900 mb-3">
                    Browser Settings
                  </h3>
                  <p className="text-surface-700 mb-3">
                    Most browsers allow you to:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-surface-700 ml-4">
                    <li>
                      View and delete cookies stored on your device
                    </li>
                    <li>
                      Block cookies from specific websites or all websites
                    </li>
                    <li>
                      Set your browser to notify you when cookies are being set
                    </li>
                  </ul>
                  <p className="text-surface-700 mt-3 text-sm">
                    Note: Blocking all cookies may affect the functionality of
                    some websites, but since we use minimal cookies, blocking
                    them should not significantly impact your experience on our
                    website.
                  </p>
                </div>

                <p className="text-surface-700">
                  For instructions on managing cookies in your specific browser,
                  please refer to your browser&apos;s help documentation.
                </p>
              </div>
            </AnimatedSection>

            {/* Changes to This Policy */}
            <AnimatedSection className="mb-12">
              <h2 className="text-2xl font-bold text-surface-900 mb-4">
                Changes to This Policy
              </h2>
              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  We may update this Cookie Policy from time to time. If we make
                  any material changes, we will update the &quot;Last updated&quot; date at
                  the top of this page.
                </p>
                <p>
                  If we start using cookies in a way that differs from what&apos;s
                  described here, we will update this policy to reflect those
                  changes. We believe in transparency, so we&apos;ll always be clear
                  about our cookie usage.
                </p>
              </div>
            </AnimatedSection>

            {/* Contact Us */}
            <AnimatedSection className="mb-12">
              <h2 className="text-2xl font-bold text-surface-900 mb-4">
                Questions About Cookies?
              </h2>
              <div className="space-y-4 text-base text-surface-700 leading-relaxed">
                <p>
                  If you have questions about our use of cookies, please contact
                  us:
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
          </div>
        </div>
      </section>
    </div>
  );
}

