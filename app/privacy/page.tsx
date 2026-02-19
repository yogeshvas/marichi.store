"use client";

import React, { useEffect, useState } from "react";
import { LandingHeader } from "@/components/landing-header";
import Footer from "@/components/custom/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight, ShieldCheck, ChevronDown } from "lucide-react";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "scope", title: "2. Scope of this Policy" },
  { id: "information-collection", title: "3. Information We Collect" },
  { id: "legal-basis", title: "4. Legal Basis for Processing" },
  { id: "use-of-info", title: "5. Use of Collected Information" },
  { id: "whatsapp-processing", title: "6. WhatsApp Data Processing" },
  { id: "disclosure", title: "7. Disclosure and Data Sharing" },
  { id: "retention", title: "8. Data Retention" },
  { id: "security", title: "9. Data Security" },
  { id: "international", title: "10. International Transfers" },
  { id: "your-rights", title: "11. Your Rights" },
  { id: "automated-decision", title: "12. Automated Decision-Making" },
  { id: "cookies", title: "13. Cookies and Tracking" },
  { id: "childrens-privacy", title: "14. Children's Privacy" },
  { id: "third-party", title: "15. Third-Party Links" },
  { id: "changes", title: "16. Changes to Policy" },
  { id: "contact", title: "17. Contact" }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");
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
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container px-5 mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-semibold text-primary uppercase tracking-wider mb-6 shadow-sm">
                <ShieldCheck size={16} />
                <span>Privacy Policy</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-neutral-900">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">
                Transparency is foundational to trust. This policy explains how we collect, use, and protect your personal and business data.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-neutral-500">
                <span>Last updated: February 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                <span>Effective: February 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Table of Contents */}
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
              <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pr-4 pb-10 scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-transparent hover:scrollbar-thumb-neutral-300 transition-colors">
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4 px-2">
                  Contents
                </h4>
                <nav className="space-y-0.5">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "block w-full text-left px-3 py-2 text-[13px] leading-tight rounded-md transition-all duration-200 border-l-[3px]",
                        activeSection === section.id
                          ? "border-primary bg-primary/5 text-primary font-semibold"
                          : "border-transparent text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                      )}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
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
                <div id="introduction">
                  <h2>1. Introduction</h2>
                  <p>
                    Marichi ("Company", "we", "our", or "us") is committed to protecting the personal and business data of all individuals and entities that interact with our platform, website, APIs, integrations, and communications. This Privacy Policy sets out in formal terms the manner in which we collect, use, disclose, retain, and protect personal information in accordance with applicable data protection and privacy legislation.
                  </p>
                  <p>
                    We believe that transparency is foundational to trust. By engaging with any Marichi service, you acknowledge that you have read, understood, and agree to the practices described herein.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="scope">
                  <h2>2. Scope of this Policy</h2>
                  <p>This Privacy Policy applies to all data processing activities conducted by Marichi, including but not limited to:</p>
                  <ul className="grid md:grid-cols-2 gap-3 list-none pl-0 not-prose mt-6">
                    {[
                      "The Marichi website and all subdomains",
                      "The Marichi SaaS platform and dashboard",
                      "All APIs, webhooks, and developer integrations",
                      "WhatsApp Business API messaging infrastructure",
                      "Customer support, sales, and marketing communications",
                      "Third-party integrations enabled at the user's discretion"
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 bg-neutral-50/70 p-4 rounded-xl border border-neutral-100 text-neutral-700"
                      >
                        <ChevronRight className="shrink-0 mt-1 text-primary" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="information-collection">
                  <h2>3. Information We Collect</h2>
                  <div className="space-y-8 not-prose">
                    <div className="bg-neutral-50 p-6 md:p-8 rounded-2xl border border-neutral-100">
                      <h3 className="text-xl font-bold mb-4">3.1 Personal Identification Data</h3>
                      <ul className="space-y-2 text-neutral-700">
                        <li>Full name and job title.</li>
                        <li>Corporate email address and personal email address.</li>
                        <li>Phone number, including WhatsApp-registered numbers.</li>
                        <li>Company name, registered address, and industry sector.</li>
                        <li>Country and timezone of operation.</li>
                      </ul>
                    </div>

                    <div className="bg-neutral-50 p-6 md:p-8 rounded-2xl border border-neutral-100">
                      <h3 className="text-xl font-bold mb-4">3.2 Business and Transactional Data</h3>
                      <ul className="space-y-2 text-neutral-700">
                        <li>Order histories, payment records, and invoice data.</li>
                        <li>CRM integration data synced at the user's instruction.</li>
                        <li>Conversation logs and messaging metadata generated through the platform.</li>
                        <li>Configuration data including workflow rules and automation settings.</li>
                      </ul>
                    </div>

                    <div className="bg-neutral-50 p-6 md:p-8 rounded-2xl border border-neutral-100">
                      <h3 className="text-xl font-bold mb-4">3.3 Technical and Device Data</h3>
                      <ul className="space-y-2 text-neutral-700">
                        <li>IP address and approximate geolocation.</li>
                        <li>Browser type, version, and operating system.</li>
                        <li>Device identifiers and screen resolution.</li>
                        <li>Network and connectivity metadata.</li>
                      </ul>
                    </div>

                    <div className="bg-neutral-50 p-6 md:p-8 rounded-2xl border border-neutral-100">
                      <h3 className="text-xl font-bold mb-4">3.4 Usage Analytics</h3>
                      <ul className="space-y-2 text-neutral-700">
                        <li>Pages visited, features accessed, and time spent on platform.</li>
                        <li>Interaction patterns and session duration.</li>
                        <li>Error logs and diagnostic data.</li>
                        <li>Feature engagement metrics used for product improvement.</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-10">
                    We also use cookies, pixel tags, local storage, and similar tracking technologies — see <button onClick={() => scrollToSection("cookies")} className="text-primary hover:underline font-medium">Section 13</button>.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="legal-basis">
                  <h2>4. Legal Basis for Processing</h2>
                  <p>Where applicable law requires, we process your personal data on one or more of the following legal bases:</p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-6 not-prose">
                    {[
                      { title: "Consent", desc: "Where you have given freely provided, informed, and unambiguous consent." },
                      { title: "Contractual Necessity", desc: "Necessary to perform a contract to which you are a party." },
                      { title: "Legitimate Interests", desc: "Business interest not overridden by your fundamental rights." },
                      { title: "Legal Obligation", desc: "Required to comply with applicable law or regulatory directives." }
                    ].map((item, i) => (
                      <div key={i} className="p-5 rounded-xl border border-neutral-200 bg-white shadow-sm hover:border-primary/30 transition-colors">
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-sm text-neutral-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="use-of-info">
                  <h2>5. Use of Collected Information</h2>
                  <p>We use the information we collect for the following purposes:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Provisioning, operating, and maintaining platform services.</li>
                    <li>Processing transactions and sending related communications.</li>
                    <li>Responding to technical support requests.</li>
                    <li>Detecting, investigating, and preventing fraud, abuse, or security incidents.</li>
                    <li>Improving, analysing, and developing platform functionality and user experience.</li>
                    <li>Sending service notifications, policy updates, and operational alerts.</li>
                    <li>Marketing communications where you have provided consent or a legitimate interest exists.</li>
                    <li>Fulfilling obligations under applicable law or regulatory frameworks.</li>
                  </ul>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="whatsapp-processing">
                  <h2>6. WhatsApp Data Processing</h2>
                  <div className="bg-green-50 border border-green-100 p-6 md:p-8 rounded-2xl not-prose space-y-4">
                    <p className="font-medium text-green-800">
                      Marichi operates as a technology layer on the WhatsApp Business Platform. In doing so, we adhere to Meta's Business and WhatsApp Business Policy requirements.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "All end-user messaging is initiated only after explicit opt-in consent has been obtained.",
                        "Businesses are contractually required to provide a clear mechanism for users to opt out.",
                        "Message content is processed through Meta's infrastructure and subject to their data agreements.",
                        "We do not access, read, or retain the substantive content beyond what is technically required.",
                        "Businesses bear independent responsibility for their compliance with WhatsApp's Messaging Policy."
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-green-700">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="disclosure">
                  <h2>7. Disclosure and Data Sharing</h2>
                  <p>We do not sell personal data. We may share data in the following circumstances:</p>

                  <h3 className="mt-8">7.1 Service Providers</h3>
                  <p>We engage vetted third-party processors for hosting, analytics, payment processing, and customer support under data processing agreements that impose confidentiality and security obligations.</p>

                  <h3 className="mt-6">7.2 Technology Partners</h3>
                  <p>Where you have authorised integrations with third-party tools such as CRM platforms, accounting software, or communication services, data is shared at your express instruction.</p>

                  <h3 className="mt-6">7.3 Legal and Regulatory Authorities</h3>
                  <p>We may disclose information when required by law, court order, regulatory investigation, or to protect the rights, safety, and property of Marichi, its users, or the public.</p>

                  <h3 className="mt-6">7.4 Corporate Transactions</h3>
                  <p>In the event of a merger, acquisition, asset sale, or business restructuring, personal data may be transferred as part of the transaction, subject to standard confidentiality protections.</p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="retention">
                  <h2>8. Data Retention</h2>
                  <p>
                    We retain personal data for as long as is necessary to fulfil the purposes described in this policy, to maintain active account relationships, or to comply with applicable legal, tax, accounting, and audit requirements. Specific retention periods are determined by the nature of the data and the operational or regulatory context. Upon account termination, data is deleted or anonymised within a commercially reasonable period, subject to any outstanding legal holds or obligations.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="security">
                  <h2>9. Data Security</h2>
                  <p>We implement comprehensive technical and organisational security measures, including:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Encryption of data in transit using TLS 1.2 or higher.</li>
                    <li>Encryption of data at rest using industry-standard algorithms.</li>
                    <li>Role-based access controls restricting internal access to authorised personnel.</li>
                    <li>Continuous security monitoring, intrusion detection, and anomaly alerting.</li>
                    <li>Periodic security assessments, penetration testing, and vulnerability management.</li>
                    <li>Incident response procedures with defined notification timelines.</li>
                  </ul>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="international">
                  <h2>10. International Data Transfers</h2>
                  <p>
                    Marichi may process and store data in jurisdictions outside your country of residence. Where such transfers occur, we ensure adequate safeguards are in place, including standard contractual clauses approved by relevant regulatory authorities, binding corporate rules, or transfers to jurisdictions recognised as providing an adequate level of data protection.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="your-rights">
                  <h2>11. Your Rights</h2>
                  <p>Subject to applicable law, you may exercise the following rights with respect to your personal data:</p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-6 not-prose">
                    {["Right of Access", "Right to Correction", "Right to Erasure", "Right to Restriction", "Right to Data Portability", "Right to Object", "Right to Withdraw Consent"].map((right, i) => (
                      <div key={i} className="px-5 py-4 bg-white border border-neutral-200 rounded-xl text-neutral-700 shadow-sm hover:border-primary/30 transition-colors">
                        {right}
                      </div>
                    ))}
                  </div>
                  <p className="mt-6">
                    To exercise any of these rights, please submit a written request to our legal contact address provided in Section 17.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="automated-decision">
                  <h2>12. Automated Decision-Making</h2>
                  <p>
                    Where we employ automated processing, including AI-assisted routing or classification, that produces decisions with significant effects on individuals, we will provide appropriate safeguards and, where required by law, a right to human review.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="cookies">
                  <h2>13. Cookies and Tracking</h2>
                  <p>We use the following categories of cookies and tracking technologies:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li><strong>Strictly Necessary Cookies:</strong> Essential for operation.</li>
                    <li><strong>Performance and Analytics Cookies:</strong> For insights and improvement.</li>
                    <li><strong>Functional Cookies:</strong> For personalisation.</li>
                    <li><strong>Marketing Cookies:</strong> For interest-based communications.</li>
                  </ul>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="childrens-privacy">
                  <h2>14. Children's Privacy</h2>
                  <p>
                    Our services are not directed at, and we do not knowingly collect personal data from, individuals under the age of 18 or the applicable age of digital consent in their jurisdiction.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="third-party">
                  <h2>15. Third-Party Links and Services</h2>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such third parties.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div id="changes">
                  <h2>16. Changes to this Policy</h2>
                  <p>
                    We reserve the right to update this Privacy Policy at any time. Material changes will be communicated via email or prominent platform notifications at least 14 days prior to their effective date.
                  </p>
                </div>

                <hr className="my-16 border-neutral-200" />

                <div
                  id="contact"
                  className="relative mt-12 rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white p-8 md:p-12 shadow-2xl"
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">17. Contact — Data Protection</h2>
                    <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                      For privacy-related enquiries, data subject requests, or to contact our Data Protection Officer, please write to:
                    </p>
                    <div className="space-y-4">
                      <p className="text-xl font-semibold">Marichi — Legal & Privacy</p>
                      <a
                        href="mailto:privacy@marichi.co"
                        className="inline-flex items-center gap-3 text-2xl text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        privacy@marichi.co
                        <span className="text-xl opacity-70">↗</span>
                      </a>
                    </div>
                    <p className="mt-10 text-neutral-400 text-sm">
                      We endeavour to respond to all legitimate requests within 30 days.
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