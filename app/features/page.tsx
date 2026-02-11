"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Megaphone,
  ShoppingBag,
  MessageSquare,
  Settings,
  Layers,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Zap,
  CheckCircle2,
  Clock,
  FileText,
  Users,
  BarChart3,
  ShieldCheck,
  Bot,
  CreditCard,
  Target,
  Mail,
  Smartphone,
  Globe,
  Lock,
  Send,
} from "lucide-react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import Footer from "@/components/custom/Footer";
import { openCalendly } from "@/lib/calendly";

// ─── VISUALS: MARKETING ────────────────────────────────────

function MarketingJourneysVisual() {
  return (
    <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-pink-50/80 to-rose-50/50 border border-pink-100/50 p-4 overflow-hidden flex items-center justify-center">
      <div className="flex items-center gap-2">
        {/* Ad */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-20 bg-white rounded-lg border border-pink-100 shadow-sm p-2 flex flex-col items-center justify-center gap-1"
        >
          <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
            <Megaphone size={14} className="text-pink-500" />
          </div>
          <div className="h-1.5 w-10 bg-neutral-100 rounded-full" />
          <div className="h-1.5 w-8 bg-neutral-100 rounded-full" />
        </motion.div>

        {/* Arrow 1 */}
        <div className="flex flex-col items-center">
          <div className="h-0.5 w-6 bg-pink-200" />
          <span className="text-[8px] text-pink-400 font-bold mt-1">CLICK</span>
        </div>

        {/* WhatsApp Chat */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="w-16 h-20 bg-green-50 rounded-lg border border-green-100 shadow-sm p-2 flex flex-col items-center justify-center gap-1 relative"
        >
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <MessageSquare size={14} className="text-green-600" />
          </div>
          <div className="h-1.5 w-10 bg-green-200/50 rounded-full" />
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
          />
        </motion.div>

        {/* Arrow 2 */}
        <div className="flex flex-col items-center">
          <div className="h-0.5 w-6 bg-pink-200" />
          <span className="text-[8px] text-pink-400 font-bold mt-1">OPT-IN</span>
        </div>

        {/* Follow-up */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="w-16 h-20 bg-white rounded-lg border border-pink-100 shadow-sm p-2 flex flex-col items-center justify-center gap-1"
        >
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Send size={14} className="text-blue-500" />
          </div>
          <div className="h-1.5 w-10 bg-neutral-100 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}

function BroadcastCampaignsVisual() {
  const [sentCount, setSentCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSentCount(c => c < 3 ? c + 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-purple-50/80 to-violet-50/50 border border-purple-100/50 p-4 overflow-hidden flex flex-col items-center justify-center">
      <div className="mb-4 bg-white px-3 py-1.5 rounded-full border border-purple-100 shadow-sm flex items-center gap-2">
        <Target size={12} className="text-purple-500" />
        <span className="text-[10px] font-bold text-purple-700">Target Segment: VIP Users</span>
      </div>

      <div className="flex gap-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="relative"
          >
            <div className="w-10 h-10 bg-white rounded-full border border-neutral-100 flex items-center justify-center">
              <Users size={16} className="text-neutral-400" />
            </div>
            <AnimatePresence>
              {sentCount > i && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
                >
                  <CheckCircle2 size={8} className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
            {sentCount === i && (
              <motion.div
                layoutId="sending"
                className="absolute inset-0 border-2 border-purple-400 rounded-full"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-purple-400 font-mono">
        Status: {sentCount === 3 ? "Completed" : "Sending..."}
      </div>
    </div>
  );
}


// ─── VISUALS: COMMERCE ─────────────────────────────────────

function CommerceOrderingVisual() {
  const [cart, setCart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCart(c => c < 3 ? c + 1 : 0);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-orange-50/80 to-amber-50/50 border border-orange-100/50 p-4 overflow-hidden flex items-center justify-center">
      <div className="relative w-32 bg-white rounded-xl shadow-lg border border-neutral-100 p-3">
        <div className="flex justify-between items-center mb-2">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
            <ShoppingBag size={14} className="text-orange-600" />
          </div>
          <div className="bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            {cart}
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-full bg-neutral-100 rounded-full" />
          <div className="h-2 w-2/3 bg-neutral-100 rounded-full" />
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full mt-3 bg-neutral-900 text-white text-[8px] font-bold py-1.5 rounded-lg"
        >
          Add to Cart
        </motion.button>

        <AnimatePresence>
          {cart > 0 && (
            <motion.div
              key={cart}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -top-2 -right-2 text-orange-500"
            >
              <span className="text-xs font-bold">+1</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function PaymentsInvoicesVisual() {
  return (
    <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-teal-50/50 border border-emerald-100/50 p-4 overflow-hidden flex items-center justify-center">
      <div className="relative w-40 bg-white rounded-xl shadow-md border border-neutral-100 p-3 overflow-hidden">
        <div className="flex justify-between items-start mb-3">
          <FileText size={16} className="text-emerald-600" />
          <span className="text-[10px] font-bold text-neutral-400">INV-2024</span>
        </div>
        <div className="space-y-1 mb-3">
          <div className="flex justify-between text-[10px]">
            <span className="text-neutral-500">Service</span>
            <span className="font-bold">$50.00</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-neutral-500">Tax</span>
            <span className="font-bold">$5.00</span>
          </div>
          <div className="h-px bg-neutral-100 my-1" />
          <div className="flex justify-between text-[10px]">
            <span className="font-bold text-neutral-900">Total</span>
            <span className="font-bold text-emerald-600">$55.00</span>
          </div>
        </div>

        <div className="absolute inset-0 bg-white/50 flex items-center justify-center backdrop-blur-[1px]">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: -10 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="border-2 border-emerald-500 text-emerald-600 px-3 py-1 text-sm font-black uppercase rounded-lg tracking-widest bg-white/80"
          >
            PAID
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── VISUALS: SUPPORT ──────────────────────────────────────

function SupportInboxVisual() {
  return (
    <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-blue-50/80 to-sky-50/50 border border-blue-100/50 p-4 overflow-hidden flex flex-col justify-center gap-2">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className="bg-white rounded-lg border border-neutral-100 p-2 flex items-center gap-3 shadow-sm"
        >
          <div className="w-8 h-8 rounded-full bg-neutral-100 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="h-2 w-16 bg-neutral-200 rounded-full mb-1.5" />
            <div className="h-1.5 w-full bg-neutral-100 rounded-full" />
          </div>
          {i === 1 && (
            <div className="px-1.5 py-0.5 bg-blue-100 text-blue-600 text-[8px] font-bold rounded-md">
              Assign
            </div>
          )}
        </motion.div>
      ))}

      <motion.div
        className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </div>
  );
}

function SLAManagementVisual() {
  const [time, setTime] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t > 0 ? t - 1 : 15);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const isUrgent = time < 6;

  return (
    <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-red-50/80 to-orange-50/50 border border-red-100/50 p-4 overflow-hidden flex items-center justify-center">
      <div className={`relative w-32 h-32 rounded-full border-4 ${isUrgent ? "border-red-200" : "border-green-200"} flex items-center justify-center transition-colors duration-500`}>
        <motion.div
          className="text-2xl font-black tabular-nums text-neutral-700"
          animate={{ scale: isUrgent ? [1, 1.1, 1] : 1, color: isUrgent ? "#ef4444" : "#404040" }}
        >
          00:{time.toString().padStart(2, '0')}
        </motion.div>
        <div className="absolute -bottom-6 text-[10px] font-bold text-neutral-400">SLA TARGET</div>

        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="60" cy="60" r="58"
            fill="none"
            stroke={isUrgent ? "#ef4444" : "#22c55e"}
            strokeWidth="4"
            strokeDasharray="365"
            strokeDashoffset={365 - (365 * time) / 15}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
      </div>
    </div>
  );
}

// ─── VISUALS: OPERATIONS ───────────────────────────────────

function OnboardingKYCVisual() {
  return (
    <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-blue-50/50 border border-indigo-100/50 p-4 overflow-hidden flex items-center justify-center">
      <div className="w-48 bg-white rounded-xl shadow-sm border border-neutral-100 p-3 space-y-2">
        <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Verification Checklist</div>
        {["ID Card Upload", "Address Proof", "Selfie Verify"].map((item, i) => (
          <div key={item} className="flex items-center justify-between">
            <span className="text-[10px] text-neutral-600">{item}</span>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.8 }}
            >
              <CheckCircle2 size={12} className="text-indigo-500" />
            </motion.div>
          </div>
        ))}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3 }}
          className="h-1 bg-indigo-500 rounded-full mt-2"
        />
      </div>
    </div>
  );
}

function TeamCollaborationVisual() {
  return (
    <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-cyan-50/80 to-sky-50/50 border border-cyan-100/50 p-4 overflow-hidden flex items-center justify-center">
      <div className="relative w-full max-w-[200px] space-y-3">
        {/* Note 1 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 rounded-tl-none relative"
        >
          <div className="text-[9px] font-bold text-yellow-700 mb-1">Sarah (Admin)</div>
          <div className="text-[10px] text-yellow-800">Assigning this high-value lead to you, Mike.</div>
        </motion.div>

        {/* Note 2 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-sky-50 border border-sky-200 rounded-lg p-2 rounded-tr-none relative ml-auto"
        >
          <div className="text-[9px] font-bold text-sky-700 mb-1">Mike (Sales)</div>
          <div className="text-[10px] text-sky-800">Got it. Reaching out now.</div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── VISUALS: PLATFORM ─────────────────────────────────────

function IntegrationsVisualSmall() {
  return (
    <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 border border-neutral-200 p-4 overflow-hidden flex items-center justify-center">
      <div className="flex gap-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -5, 0] }}
            transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
            className="w-10 h-10 rounded-lg bg-white border border-neutral-200 shadow-sm flex items-center justify-center"
          >
            <Zap size={16} className="text-neutral-400" />
          </motion.div>
        ))}
      </div>
      <motion.svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.path
          d="M 50 100 Q 150 50 250 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="10 10"
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/50 border border-indigo-100/50 p-4 overflow-hidden flex items-end justify-center pb-8 gap-2">
      {[40, 70, 50, 90, 65, 85].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
          className="w-4 bg-indigo-500 rounded-t-sm opacity-80"
        />
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-4 right-4 text-[10px] font-bold text-indigo-500 flex items-center gap-1"
      >
        <ArrowRight size={10} className="-rotate-45" /> +124%
      </motion.div>
    </div>
  );
}

function AIAssistVisualSmall() {
  return (
    <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-teal-50/80 to-cyan-50/50 border border-teal-100/50 p-4 overflow-hidden flex items-center justify-center">
      <div className="bg-white rounded-xl border border-teal-100 shadow-sm p-3 max-w-[180px]">
        <div className="flex items-center gap-2 mb-2">
          <Bot size={14} className="text-teal-500" />
          <span className="text-[10px] font-bold text-teal-600">AI Verified</span>
        </div>
        <div className="h-1.5 w-full bg-neutral-100 rounded-full mb-1" />
        <div className="h-1.5 w-3/4 bg-neutral-100 rounded-full" />
        <div className="mt-2 flex gap-1">
          <div className="h-4 w-12 bg-teal-100 rounded-full" />
          <div className="h-4 w-12 bg-neutral-100 rounded-full" />
        </div>
      </div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -right-4 -bottom-4 opacity-10"
      >
        <Sparkles size={80} />
      </motion.div>
    </div>
  );
}

function ComplianceVisual() {
  return (
    <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-slate-50/80 to-gray-50/50 border border-slate-200/50 p-4 overflow-hidden flex flex-col items-center justify-center">
      <ShieldCheck size={32} className="text-slate-400 mb-2" />
      <div className="space-y-1 w-full max-w-[160px]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <div className="h-1 w-full bg-slate-200/50 rounded-full" />
          </div>
        ))}
      </div>
      <div className="mt-3 px-2 py-1 bg-slate-100 rounded text-[9px] font-mono text-slate-500">
        Audit Log: Secure
      </div>
    </div>
  );
}


// ─── DATA ──────────────────────────────────────────────────

const categories = [
  {
    title: "Marketing",
    color: "text-red-600",
    description: "Acquire, engage, and retain customers with powerful WhatsApp marketing tools.",
    features: [
      {
        title: "Marketing Journeys",
        desc: "Click-to-WhatsApp ads, opt-in capture, segmentation, and automated follow-up sequences.",
        visual: <MarketingJourneysVisual />,
        icon: Layers,
      },
      {
        title: "Broadcast Campaigns",
        desc: "Send personalized messages to segments with scheduling, tracking, and compliance.",
        visual: <BroadcastCampaignsVisual />,
        icon: Megaphone,
      },
    ],
  },
  {
    title: "Commerce",
    color: "text-orange-600",
    description: "Turn conversations into conversions with a complete storefront inside WhatsApp.",
    features: [
      {
        title: "Commerce & Ordering",
        desc: "Catalog browsing, cart management, and order capture inside WhatsApp.",
        visual: <CommerceOrderingVisual />,
        icon: ShoppingBag,
      },
      {
        title: "Payments & Invoices",
        desc: "Generate invoices, share payment links, and confirm payments automatically.",
        visual: <PaymentsInvoicesVisual />,
        icon: CreditCard,
      },
    ],
  },
  {
    title: "Support",
    color: "text-blue-600",
    description: "Delight your customers with fast, personalized, and efficient support.",
    features: [
      {
        title: "Support Inbox",
        desc: "Shared team inbox with assignment rules, internal notes, and customer timeline.",
        visual: <SupportInboxVisual />,
        icon: MessageSquare,
      },
      {
        title: "SLA Management",
        desc: "Track response times, set SLA targets, and get alerts before breaches.",
        visual: <SLAManagementVisual />,
        icon: Clock,
      },
    ],
  },
  {
    title: "Operations",
    color: "text-indigo-600",
    description: "Streamline your back-office and keep your team aligned.",
    features: [
      {
        title: "Onboarding & KYC",
        desc: "Guided checklists, document collection, and verification workflows.",
        visual: <OnboardingKYCVisual />,
        icon: FileText,
      },
      {
        title: "Team Collaboration",
        desc: "Role-based access, internal notes, and seamless handoffs between agents.",
        visual: <TeamCollaborationVisual />,
        icon: Users,
      },
    ],
  },
  {
    title: "Platform",
    color: "text-neutral-600",
    description: "Enterprise-grade reliability, security, and intelligence.",
    features: [
      {
        title: "Integrations",
        desc: "Connect CRM, payment gateways, and internal systems via API and webhooks.",
        visual: <IntegrationsVisualSmall />,
        icon: Zap,
      },
      {
        title: "Analytics",
        desc: "Campaign ROI, funnel tracking, response metrics, and exportable reports.",
        visual: <AnalyticsVisual />,
        icon: BarChart3,
      },
      {
        title: "AI Assist",
        desc: "Intent detection, suggested replies, and conversation summaries.",
        visual: <AIAssistVisualSmall />,
        icon: Bot,
      },
      {
        title: "Compliance",
        desc: "Template management, audit logs, and data export for governance.",
        visual: <ComplianceVisual />,
        icon: ShieldCheck,
      },
    ],
  },
];


// ─── MAIN PAGE ─────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />

      <main className="flex-1">
        <section className="relative py-16 md:py-28 overflow-hidden bg-white">
          {/* Subtle background */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="container px-4 mx-auto max-w-6xl relative z-10">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-700 transition-colors mb-10"
              >
                <ArrowLeft size={14} />
                Back to Home
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              className="text-center mb-24 space-y-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 rounded-full text-sm font-semibold text-white"
              >
                Feature Overview
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                Everything you need, <br />
                <span className="relative inline-block">
                  <span className="text-primary">nothing you don&apos;t</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </h1>

              <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                A complete feature set for WhatsApp commerce, support, and growth.
              </p>
            </motion.div>

            {/* Feature Categories */}
            <div className="space-y-24">
              {categories.map((category, catIndex) => (
                <div key={category.title} className="relative">
                  {/* Category Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                      <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${category.color}`}>
                        {category.title}
                      </h2>
                      <p className="text-neutral-500 max-w-md">
                        {category.description}
                      </p>
                    </div>
                    <div className="h-px flex-1 bg-neutral-100 ml-8 hidden md:block relative top-[-10px]" />
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                    {category.features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          whileHover={{ y: -5 }}
                          className="group"
                        >
                          <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                            {/* Visual Area */}
                            <div className="border-b border-neutral-50 bg-neutral-50/30">
                              {feature.visual}
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <div className={`w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center`}>
                                  <Icon size={16} className="text-neutral-600" />
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900">
                                  {feature.title}
                                </h3>
                              </div>
                              <p className="text-sm text-neutral-500 leading-relaxed">
                                {feature.desc}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-24 text-center"
            >
              <div className="inline-flex flex-col items-center gap-4 bg-neutral-900 rounded-3xl px-12 py-12 text-white shadow-2xl shadow-neutral-900/20 max-w-3xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 -z-10" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                <h3 className="text-2xl md:text-3xl font-bold">See features in action</h3>
                <p className="text-neutral-400 max-w-md mb-4">
                  Book a personalized demo with our team to explore how Marichi fits your specific use case.
                </p>
                <button onClick={openCalendly}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all gap-2"
                  >
                    Book Demo
                    <ArrowRight size={16} />
                  </motion.div>
                </button>
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
