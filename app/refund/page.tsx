"use client";

import React, { useEffect, useState } from "react";
import { LandingHeader } from "@/components/landing-header";
import Footer from "@/components/custom/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight, CreditCard, ReceiptText, ChevronDown } from "lucide-react";

const sections = [
  { id: "overview", title: "1. Overview" },
  { id: "subscription-fees", title: "2. Subscription Fees" },
  { id: "free-trials", title: "3. Free Trials" },
  { id: "eligibility", title: "4. Refund Eligibility" },
  { id: "non-refundable", title: "5. Non-Refundable Circumstances" },
  { id: "cancellation", title: "6. Cancellation Policy" },
  { id: "disputes", title: "7. Chargebacks & Disputes" },
  { id: "payment-methods", title: "8. Accepted Payment Methods" },
  { id: "taxes", title: "9. Taxes and Duties" },
  { id: "pricing", title: "10. Pricing Changes" },
  { id: "exceptional", title: "11. Exceptional Circumstances" },
  { id: "liability", title: "12. Limitation of Liability" },
  { id: "jurisdiction", title: "13. Governing Law" },
  { id: "contact", title: "14. Contact" }
];

export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState("overview");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (top <= scrollPosition && top + height > scrollPosition) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-primary/10 selection:text-primary">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/90 to-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      <LandingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-neutral-50 to-white border-b border-neutral-100 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container px-5 mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-semibold text-primary uppercase tracking-wider mb-6 shadow-sm">
                <ReceiptText size={16} />
                <span>Refund Policy</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-neutral-900">
                Refund & Cancellation Policy
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">
                We aim for fairness and transparency. This policy explains how subscriptions, cancellations, and refunds work on Marichi.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-neutral-500">
                <span>Last updated: February 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                <span>Effective: February 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile TOC */}
        <div className="lg:hidden sticky top-[4.5rem] z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
          <div className="container px-5 mx-auto py-3">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none select-none">
                <span className="text-lg font-semibold text-neutral-900">Table of Contents</span>
                <ChevronDown className="transition-transform group-open:rotate-180 text-neutral-500" size={20} />
              </summary>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "text-left px-4 py-2.5 text-sm rounded-lg transition-colors",
                      activeSection === section.id
                        ? "bg-primary/10 text-primary font-medium border border-primary/20"
                        : "hover:bg-neutral-100 text-neutral-700"
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </details>
          </div>
        </div>

        <div className="container px-5 mx-auto max-w-6xl py-12 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-3 -mr-3 scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-neutral-100">
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-5 px-2">
                  Contents
                </h4>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "block w-full text-left px-4 py-2.5 text-sm rounded-lg transition-all duration-200 border-l-4",
                        activeSection === section.id
                          ? "border-primary bg-primary/5 text-primary font-medium"
                          : "border-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50/70 hover:border-neutral-300"
                      )}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* ────────────────────────────────────────────── */}
            {/* MAIN CONTENT */}
            {/* ────────────────────────────────────────────── */}
            <div className="lg:col-span-9">
              <div
                className="prose prose-neutral prose-lg max-w-none
                  prose-headings:scroll-mt-32
                  prose-h2:text-3xl prose-h2:font-bold prose-h2:tracking-tight prose-h2:mt-16 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-12 prose-h3:mb-5
                  prose-p:leading-relaxed prose-p:text-neutral-700 prose-p:my-6
                  prose-ul:my-6 prose-li:my-2 prose-li:marker:text-primary
                  prose-strong:font-semibold prose-strong:text-neutral-900
                  first:prose-p:mt-0
                "
              >
                <div id="overview">
                  <h2>1. Overview</h2>
                  <p>
                    Marichi ("Company", "we", "our", or "us") provides a subscription-based Software-as-a-Service ("SaaS") platform for WhatsApp commerce and digital transformation. This Refund and Cancellation Policy governs the terms under which subscription fees, add-on charges, and any other platform-related payments are handled, cancelled, or refunded.
                  </p>
                  <p>
                    By subscribing to any Marichi service tier or add-on, you acknowledge that you have read and agreed to the terms of this policy in full. This policy should be read in conjunction with our Terms of Service and any order form or subscription agreement executed between you and the Company.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="subscription-fees">
                  <h2>2. Subscription Fees</h2>
                  <p>
                    All subscription fees are billed in advance on a monthly or annual basis, as elected at the time of subscription. Subscription fees are generally non-refundable, except as expressly provided in this policy or where required by applicable law.
                  </p>
                  <p>
                    By completing your subscription purchase, you authorise the Company to charge the stated subscription fee to your designated payment method on each applicable renewal date, without further prior notice, unless you have cancelled your subscription in accordance with Section 6.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="free-trials">
                  <h2>3. Free Trials</h2>
                  <div className="bg-neutral-50 p-6 md:p-8 rounded-2xl border border-neutral-100 space-y-6 not-prose">
                    <p className="text-neutral-700">
                      Where the Company offers a free trial period, access to the platform is provided at no charge for the stated trial duration.
                    </p>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                        <CreditCard size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1.5">Automatic Conversion</h4>
                        <p className="text-neutral-600">
                          Unless you cancel your subscription before the conclusion of the free trial, your account will automatically convert to a paid subscription at the applicable plan rate.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-500 italic border-l-4 border-neutral-300 pl-4">
                      Retroactive refunds will not be issued for failure to cancel prior to the trial's expiry.
                    </p>
                  </div>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="eligibility">
                  <h2>4. Refund Eligibility</h2>
                  <p>Refund requests will be considered solely in the following circumstances:</p>
                  <div className="grid sm:grid-cols-3 gap-4 mt-6 not-prose">
                    {[
                      { title: "Billing Errors", desc: "Incorrect amount charged due to technical error." },
                      { title: "Duplicate Payments", desc: "Same fee charged more than once in a cycle." },
                      { title: "Material Failure", desc: "Prolonged and verified service outage." }
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl border border-neutral-200 bg-white shadow-sm hover:border-primary/30 transition-colors"
                      >
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-sm text-neutral-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6">
                    All refund requests must be submitted in writing to <strong>billing@marichi.co</strong> within <strong>thirty (30) days</strong> of the charge in question.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="non-refundable">
                  <h2>5. Non-Refundable Circumstances</h2>
                  <p>The following circumstances are expressly excluded from refund eligibility:</p>
                  <ul className="grid md:grid-cols-2 gap-3 list-none pl-0 mt-6 not-prose">
                    {[
                      "Change of Mind",
                      "Unused Services (features, API credits, quotas)",
                      "Partial Billing Cycles",
                      "Failure to Cancel Prior to Renewal",
                      "Third-Party Charges (WhatsApp, Telcos)",
                      "Promotional and Discounted Plans"
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 bg-neutral-50 p-4 rounded-xl border border-neutral-100 text-neutral-700"
                      >
                        <span className="w-2 h-2 rounded-full bg-neutral-400 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="cancellation">
                  <h2>6. Cancellation Policy</h2>
                  <p>
                    Subscribers may cancel their subscription at any time through the account settings portal or by submitting a cancellation request to our customer support team.
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Cancellations submitted before the next billing renewal date will take effect at the end of the current paid billing period.</li>
                    <li>No partial refunds are issued for unused time remaining in a billing cycle following cancellation.</li>
                    <li>Access to the platform will be maintained until the end of the paid billing period.</li>
                    <li>Annual subscribers wishing to cancel mid-term will retain access until the annual period concludes; no pro-rated refund will be issued.</li>
                  </ul>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="disputes">
                  <h2>7. Chargebacks and Payment Disputes</h2>
                  <p>
                    We request that subscribers contact our billing support team prior to initiating a chargeback or payment dispute with their bank or payment provider. The Company reserves the right to investigate all chargeback claims and to provide relevant documentation and evidence of service delivery to the applicable financial institution.
                  </p>
                  <div className="mt-6 bg-red-50 border border-red-100 p-5 rounded-xl text-red-800 text-sm not-prose">
                    <strong className="block mb-1.5">Warning:</strong> Initiating an unjustified chargeback may result in suspension or termination of your account and may be subject to recovery proceedings under applicable law.
                  </div>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="payment-methods">
                  <h2>8. Accepted Payment Methods</h2>
                  <p>
                    The Company accepts payments via the following methods, subject to availability in your jurisdiction:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Major credit and debit cards (Visa, Mastercard, American Express).</li>
                    <li>Bank transfers and NEFT/RTGS (for enterprise accounts, by prior arrangement).</li>
                    <li>Digital payment platforms as made available on the checkout interface.</li>
                  </ul>
                  <p className="mt-6">
                    All transactions are processed through secure, PCI-DSS compliant payment gateways.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="taxes">
                  <h2>9. Taxes and Duties</h2>
                  <p>
                    All subscription fees are stated exclusive of applicable taxes unless expressly indicated otherwise. Subscribers are solely responsible for all applicable taxes, levies, duties, and withholdings arising in connection with their use of the platform.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="pricing">
                  <h2>10. Pricing Changes</h2>
                  <p>
                    The Company reserves the right to revise its subscription fees, add-on pricing, and any other charges at any time. For existing subscribers, material price changes will be communicated via email or platform notification at least thirty (30) days prior to the effective date.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="exceptional">
                  <h2>11. Exceptional Circumstances</h2>
                  <p>
                    At its sole and absolute discretion, the Company may consider refund requests arising from exceptional or extenuating circumstances not otherwise addressed in this policy. Any such discretionary refund does not constitute a waiver of this policy, nor does it create a precedent or obligation to grant refunds in similar future circumstances.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="liability">
                  <h2>12. Limitation of Liability</h2>
                  <p>
                    The Company does not guarantee uninterrupted, error-free, or continuous availability of the platform. Our liability with respect to any service disruption, failure, or interruption shall be limited to the extent expressly set forth in the Terms of Service.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="jurisdiction">
                  <h2>13. Governing Law and Jurisdiction</h2>
                  <p>
                    This Refund and Cancellation Policy shall be governed by and construed in accordance with the laws of [Jurisdiction Placeholder], without regard to its conflict of law principles. Any disputes arising in connection with this policy shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction Placeholder].
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div
                  id="contact"
                  className="relative mt-12 rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white p-8 md:p-12 shadow-2xl"
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact — Billing Support</h2>
                    <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                      For billing enquiries, refund requests, cancellation assistance, or disputes:
                    </p>
                    <div className="space-y-4">
                      <p className="text-xl font-semibold">Marichi — Billing Support</p>
                      <a
                        href="mailto:billing@marichi.co"
                        className="inline-flex items-center gap-3 text-2xl text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        billing@marichi.co
                        <span className="text-xl opacity-70">↗</span>
                      </a>
                    </div>
                    <p className="mt-10 text-neutral-400 text-sm">
                      We aim to respond within 3–5 business days.<br />
                      Please include your account email, subscription plan, and relevant invoice/transaction details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}