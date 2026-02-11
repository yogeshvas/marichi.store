"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "motion/react";
import {
  MessageSquare,
  Users,
  BarChart3,
  GitBranch,
  ShieldCheck,
  Webhook,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MoreHorizontal,
  Search,
  Plus,
  Filter,
  Inbox,
  Clock,
  Briefcase,
  FileText,
  Lock,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import Footer from "@/components/custom/Footer";
import { openCalendly } from "@/lib/calendly";

// ─── VISUALS ───────────────────────────────────────────────

function InboxVisual() {
  return (
    <div className="w-full h-full bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden flex flex-col">
      {/* App Header */}
      <div className="h-10 border-b border-neutral-100 flex items-center px-4 justify-between bg-neutral-50/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="text-[10px] font-medium text-neutral-400">Unified Inbox</div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-16 md:w-48 border-r border-neutral-100 flex flex-col bg-neutral-50/30">
          <div className="p-3 border-b border-neutral-100">
            <div className="bg-white border border-neutral-200 rounded-md py-1.5 px-2 flex items-center gap-2">
              <Search size={12} className="text-neutral-400" />
              <div className="h-1.5 w-16 bg-neutral-100 rounded-full hidden md:block" />
            </div>
          </div>
          <div className="flex-1 p-2 space-y-1 overflow-y-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`p-2 rounded-lg flex items-center gap-3 ${i === 1 ? "bg-white shadow-sm border border-neutral-100" : "hover:bg-neutral-100/50"}`}>
                <div className="w-8 h-8 rounded-full bg-neutral-200 relative shrink-0">
                  {i === 1 && <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />}
                </div>
                <div className="hidden md:block flex-1 min-w-0">
                  <div className="h-2 w-20 bg-neutral-200 rounded-full mb-1.5" />
                  <div className="h-1.5 w-full bg-neutral-100 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-white relative">
          <div className="p-4 border-b border-neutral-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-200" />
              <div>
                <div className="h-2 w-24 bg-neutral-200 rounded-full mb-1" />
                <div className="h-1.5 w-16 bg-green-100 text-green-600 text-[8px] font-bold px-1 rounded-sm flex items-center">Active Now</div>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-neutral-200 mt-1" />
              <div className="bg-neutral-100 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                <div className="h-1.5 w-40 bg-neutral-200 rounded-full mb-1.5" />
                <div className="h-1.5 w-24 bg-neutral-200 rounded-full" />
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-primary/10 rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                <div className="h-1.5 w-32 bg-primary/20 rounded-full mb-1.5" />
                <div className="h-1.5 w-48 bg-primary/20 rounded-full" />
              </div>
              <div className="w-6 h-6 rounded-full bg-primary/20 mt-1" />
            </div>
          </div>

          {/* Typing Indicator */}
          <div className="p-3 border-t border-neutral-100">
            <div className="bg-neutral-50 rounded-full h-9 flex items-center px-4 justify-between border border-neutral-100">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight size={10} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CollaborationVisual() {
  return (
    <div className="w-full h-full bg-neutral-900 rounded-2xl border border-neutral-800 shadow-xl overflow-hidden p-6 relative">
      <div className="absolute top-4 right-4 flex -space-x-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-neutral-700 flex items-center justify-center text-[10px] text-white font-bold">
            U{i}
          </div>
        ))}
        <div className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center text-[10px] text-white">
          +2
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {/* Chat Bubble */}
        <div className="p-3 bg-neutral-800 rounded-xl rounded-tl-none border border-neutral-700 max-w-[80%]">
          <p className="text-neutral-400 text-xs">Customer asking for custom pricing on Enterprise plan.</p>
        </div>

        {/* Internal Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-yellow-900/30 border border-yellow-700/50 rounded-xl p-3 max-w-[80%] ml-auto relative"
        >
          <div className="flex items-center gap-2 mb-1">
            <Lock size={10} className="text-yellow-500" />
            <span className="text-[10px] font-bold text-yellow-500 uppercase">Internal Note Only</span>
          </div>
          <p className="text-yellow-200/80 text-xs">@Sarah can you approve a 15% discount for them? They are a high volume lead.</p>

          <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-neutral-900 text-[10px] font-bold">
            @
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="w-full h-full bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden p-6 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="text-sm font-bold text-neutral-900">Performance</div>
          <div className="text-xs text-neutral-400">Last 7 days</div>
        </div>
        <div className="px-2 py-1 bg-neutral-100 rounded text-xs font-medium text-neutral-600">Export</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl">
          <div className="text-[10px] text-indigo-400 font-bold uppercase mb-1">Response Time</div>
          <div className="text-2xl font-bold text-indigo-900">1m 24s</div>
          <div className="text-[10px] text-green-600 font-medium">↓ 12% vs last week</div>
        </div>
        <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
          <div className="text-[10px] text-emerald-500 font-bold uppercase mb-1">CSAT Score</div>
          <div className="text-2xl font-bold text-emerald-900">4.8/5</div>
          <div className="text-[10px] text-green-600 font-medium">Top 5% industry</div>
        </div>
      </div>

      <div className="flex-1 flex items-end gap-2 px-2">
        {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 95].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ duration: 1, delay: i * 0.05 }}
            className="flex-1 bg-neutral-900 rounded-t-sm opacity-80"
          />
        ))}
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="w-full h-full bg-neutral-50 rounded-2xl border border-neutral-200 shadow-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6">
        {/* Node 1 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bg-white border border-neutral-200 shadow-sm rounded-xl p-3 w-40 text-center z-10"
        >
          <div className="text-[10px] font-bold text-neutral-400 mb-1">TRIGGER</div>
          <div className="text-xs font-bold text-neutral-900">New Order Created</div>
        </motion.div>

        <div className="h-8 w-0.5 bg-neutral-300" />

        {/* Node 2 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white border text-blue-600 border-blue-200 shadow-sm rounded-xl p-3 w-40 text-center z-10"
        >
          <div className="text-[10px] font-bold text-blue-400 mb-1">ACTION</div>
          <div className="text-xs font-bold">Send Confirmation</div>
        </motion.div>

        <div className="h-8 w-0.5 bg-neutral-300" />

        {/* Node 3 (Branch) */}
        <div className="relative">
          <div className="h-0.5 w-32 bg-neutral-300 absolute top-0 left-1/2 -translate-x-1/2" />
          <div className="flex gap-8 mt-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white border border-neutral-200 shadow-sm rounded-xl p-3 w-32 text-center z-10"
            >
              <div className="text-[10px] font-bold text-neutral-400 mb-1">DELAY</div>
              <div className="text-xs font-bold text-neutral-900">Wait 2 Days</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white border border-neutral-200 shadow-sm rounded-xl p-3 w-32 text-center z-10"
            >
              <div className="text-[10px] font-bold text-neutral-400 mb-1">CONDITION</div>
              <div className="text-xs font-bold text-neutral-900">If Not Paid</div>
            </motion.div>
          </div>
          {/* Vertical lines for branch */}
          <div className="absolute top-0 left-[calc(50%-4rem)] h-8 w-0.5 bg-neutral-300" />
          <div className="absolute top-0 right-[calc(50%-4rem)] h-8 w-0.5 bg-neutral-300" />
        </div>
      </div>
    </div>
  );
}

function ComplianceVisual() {
  return (
    <div className="w-full h-full bg-slate-50 rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-8 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-sm relative"
      >
        <ShieldCheck size={48} className="text-slate-400" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center"
        >
          <CheckCircle2 size={14} className="text-white" />
        </motion.div>
      </motion.div>

      <h3 className="text-lg font-bold text-slate-800 mb-2">Enterprise Compliant</h3>
      <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">ISO 27001 Certified • GDPR Ready • Data Encryption</p>

      <div className="flex gap-2">
        <div className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-mono text-slate-500">Log_ID: 8492</div>
        <div className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-mono text-slate-500">Status: OK</div>
      </div>
    </div>
  );
}

function APIVisual() {
  return (
    <div className="w-full h-full bg-[#1e1e1e] rounded-2xl border border-neutral-800 shadow-xl overflow-hidden p-6 font-mono text-xs">
      <div className="flex gap-1.5 mb-4 opacity-50">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>

      <div className="text-blue-400 mb-2">POST /v1/messages/send</div>

      <motion.div
        className="text-neutral-400 space-y-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div><span className="text-purple-400">{`{`}</span></div>
        <div className="pl-4"><span className="text-sky-300">"to"</span>: <span className="text-orange-300">"+15550123456"</span>,</div>
        <div className="pl-4"><span className="text-sky-300">"type"</span>: <span className="text-green-300">"template"</span>,</div>
        <div className="pl-4"><span className="text-sky-300">"template"</span>: <span className="text-purple-400">{`{`}</span></div>
        <div className="pl-8"><span className="text-sky-300">"name"</span>: <span className="text-orange-300">"order_update"</span>,</div>
        <div className="pl-8"><span className="text-sky-300">"language"</span>: <span className="text-orange-300">"en_US"</span></div>
        <div className="pl-4"><span className="text-purple-400">{`}`}</span></div>
        <div><span className="text-purple-400">{`}`}</span></div>
      </motion.div>

      <div className="mt-4 text-green-400">
        <span className="text-neutral-600">→ </span>
        200 OK <span className="text-neutral-600 text-[10px]">142ms</span>
      </div>
    </div>
  );
}


// ─── FEATURES DATA ─────────────────────────────────────────

const features = [
  {
    id: "inbox",
    title: "Unified Inbox",
    description: "All WhatsApp conversations in one place with team assignment, smart routing, and quick replies.",
    visual: <InboxVisual />,
    icon: MessageSquare,
  },
  {
    id: "collab",
    title: "Team Collaboration",
    description: "Internal notes, handoffs, and role-based access. Discuss tickets privately without leaving the chat.",
    visual: <CollaborationVisual />,
    icon: Users,
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    description: "Real-time metrics on response times, conversion rates, and team performance to drive decisions.",
    visual: <AnalyticsVisual />,
    icon: BarChart3,
  },
  {
    id: "automation",
    title: "Automation Builder",
    description: "Visual flow builder for follow-ups, reminders, and triggered messages. No code required.",
    visual: <AutomationVisual />,
    icon: GitBranch,
  },
  {
    id: "compliance",
    title: "Compliance Tools",
    description: "Opt-in management, template approvals, and audit logs built in to keep you safe.",
    visual: <ComplianceVisual />,
    icon: ShieldCheck,
  },
  {
    id: "api",
    title: "API & Webhooks",
    description: "Connect to your CRM, payment system, and internal tools seamlessly with our robust API.",
    visual: <APIVisual />,
    icon: Webhook,
  },
];


// ─── MAIN PAGE ─────────────────────────────────────────────

export default function PlatformPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  // Create refs for each section
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveFeature(index);
            }
          });
        },
        { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
      );
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <LandingHeader />

      <main className="flex-1">

        {/* Hero */}
        <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="container px-4 mx-auto max-w-5xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-6">
                The complete <br />
                <span className="text-primary">WhatsApp platform</span>
              </h1>
              <p className="text-xl text-neutral-500 max-w-2xl mx-auto mb-10">
                Everything you need to sell, support, and grow on WhatsApp — unified in one powerful platform.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={openCalendly}>
                  <div className="h-12 px-8 bg-neutral-900 text-white rounded-xl flex items-center justify-center font-bold shadow-lg hover:bg-neutral-800 transition-colors cursor-pointer">
                    Book Demo
                  </div>
                </button>
                <Link href="#explore" className="h-12 px-8 bg-neutral-100 text-neutral-900 rounded-xl flex items-center justify-center font-bold hover:bg-neutral-200 transition-colors">
                  Explore Features
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sticky Scroll Section */}
        <section id="explore" className="relative pb-32">
          <div className="container px-4 mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">

              {/* Left: Scrollable Text Content */}
              <div className="w-full lg:w-1/2 space-y-24 lg:space-y-48 py-12 lg:py-24">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const isActive = activeFeature === index;

                  return (
                    <div
                      key={feature.id}
                      ref={(el) => { if (el) sectionRefs.current[index] = el; }}
                      className={`transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-40"}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center mb-6">
                        <Icon size={24} className="text-neutral-900" />
                      </div>
                      <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                        {feature.title}
                      </h2>
                      <p className="text-lg text-neutral-500 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                      <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary cursor-pointer mb-8 lg:mb-0">
                        Learn more <ArrowRight size={14} />
                      </div>

                      {/* Mobile Visual */}
                      <div className="lg:hidden w-full h-80 rounded-xl overflow-hidden shadow-sm border border-neutral-100">
                        {feature.visual}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right: Sticky Visual */}
              <div className="hidden lg:block w-1/2 relative">
                <div className="sticky top-24 h-[600px] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      {features[activeFeature].visual}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile: Visuals interspersed (Alternative view for mobile if needed, but here sticky breaks on mobile so we might want to stack them differently. For now, we will hide sticky on mobile and just show visual below text using block logic) */}

            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="container px-4 mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
              Book a demo to see Marichi in action and discover how it can transform your customer engagement.
            </p>
            <button onClick={openCalendly}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all gap-2"
              >
                Book Demo
                <ArrowRight size={16} />
              </motion.div>
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
