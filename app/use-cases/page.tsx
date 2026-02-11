"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Target,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  FileText,
  Bell,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  Filter,
  UserPlus,
  Package,
  Headphones,
  Receipt,
  ScanLine,
  AlertCircle,
  Smartphone,
  Send,
  Calendar,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import Footer from "@/components/custom/Footer";
import { openCalendly } from "@/lib/calendly";

// ─── VISUAL: LEAD GENERATION (Funnel) ──────────────────────
function LeadGenVisual() {
  const [leads, setLeads] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setLeads((prev) => [...prev, id]);
      setTimeout(() => {
        setLeads((prev) => prev.filter((l) => l !== id));
      }, 2000);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-pink-50/80 to-rose-50/50 border border-pink-100/50 p-4 overflow-hidden flex flex-col items-center">
      {/* Funnel Shape */}
      <div className="relative mt-2">
        <Filter size={48} className="text-pink-200" />

        {/* Falling Leads */}
        <AnimatePresence>
          {leads.map((id) => (
            <motion.div
              key={id}
              initial={{ y: -40, opacity: 0, scale: 0.5 }}
              animate={{ y: 20, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 text-pink-500"
            >
              <UserPlus size={14} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Conversion Output */}
      <div className="mt-8 bg-white rounded-xl border border-pink-100 px-4 py-2 shadow-sm flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
          <MessageSquare size={14} className="text-green-600" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-neutral-500 uppercase">Converted</div>
          <div className="text-sm font-bold text-neutral-900">+128 Leads</div>
        </div>
      </div>
    </div>
  );
}

// ─── VISUAL: ORDER MANAGEMENT (Cart) ───────────────────────
function OrderManagementVisual() {
  const [items, setItems] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((i) => (i < 3 ? i + 1 : 0));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-orange-50/80 to-amber-50/50 border border-orange-100/50 p-4 overflow-hidden flex items-center justify-center">
      <div className="w-40 bg-white rounded-xl shadow-lg border border-neutral-100 overflow-hidden">
        {/* App Header */}
        <div className="bg-neutral-900 px-3 py-2 flex items-center justify-between">
          <div className="w-8 h-1 bg-white/20 rounded-full" />
          <div className="flex items-center gap-1.5">
            <ShoppingCart size={10} className="text-white" />
            <span className="text-[10px] font-bold text-white">{items}</span>
          </div>
        </div>

        {/* Product List */}
        <div className="p-2 space-y-2">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-neutral-100" />
              <div className="flex-1">
                <div className="h-1.5 w-12 bg-neutral-200 rounded-full mb-1" />
                <div className="h-1.5 w-8 bg-neutral-100 rounded-full" />
              </div>
              <motion.div
                animate={{ scale: items >= i ? [1, 1.2, 1] : 1 }}
                className={`w-5 h-5 rounded-full flex items-center justify-center ${items >= i ? "bg-orange-500 text-white" : "bg-neutral-100 text-neutral-300"
                  }`}
              >
                <span className="text-[10px] font-bold">+</span>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Checkout Button */}
        <div className="p-2 pt-0">
          <motion.div
            animate={{ opacity: items > 0 ? 1 : 0.5 }}
            className="w-full bg-orange-500 py-1.5 rounded-md text-center"
          >
            <span className="text-[8px] font-bold text-white uppercase tracking-wider">Checkout</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── VISUAL: CUSTOMER SUPPORT (Chat) ───────────────────────
function SupportVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-blue-50/80 to-sky-50/50 border border-blue-100/50 p-4 overflow-hidden flex flex-col justify-center px-8">
      {/* Customer Message */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : -10 }}
        className="self-start bg-white border border-neutral-100 rounded-2xl rounded-tl-none px-3 py-2 shadow-sm mb-3 max-w-[80%]"
      >
        <p className="text-[10px] text-neutral-600">My order hasn't arrived yet.</p>
      </motion.div>

      {/* Ticket Created */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="self-center mb-3 bg-neutral-100 px-2 py-1 rounded-full flex items-center gap-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[8px] font-medium text-neutral-500">Ticket #294 Created</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Agent Reply */}
      <AnimatePresence>
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="self-end bg-blue-500 text-white rounded-2xl rounded-tr-none px-3 py-2 shadow-sm max-w-[80%]"
          >
            <p className="text-[10px]">Hi! I can see it's out for delivery right now.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rate */}
      {step >= 3 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute bottom-4 right-4 bg-white p-1.5 rounded-full shadow-md border border-neutral-100 text-yellow-400"
        >
          <Sparkles size={12} fill="currentColor" />
        </motion.div>
      )}
    </div>
  );
}

// ─── VISUAL: COLLECTIONS (Billing) ─────────────────────────
function CollectionsVisual() {
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPaid((p) => !p);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-green-50/50 border border-emerald-100/50 p-4 overflow-hidden flex items-center justify-center">
      <div className="relative w-40 bg-white rounded-xl shadow-md border border-neutral-100 p-4 flex flex-col items-center text-center">
        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mb-2">
          <Receipt size={20} className="text-emerald-600" />
        </div>
        <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Invoice Due</div>
        <div className="text-xl font-bold text-neutral-900 mb-3">$450.00</div>

        <motion.button
          animate={{
            backgroundColor: paid ? "#22c55e" : "#f5f5f5",
            color: paid ? "#ffffff" : "#737373",
          }}
          className="w-full py-1.5 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1.5 transition-colors duration-500"
        >
          {paid ? (
            <>
              <CheckCircle2 size={10} /> Paid
            </>
          ) : (
            <>
              <Clock size={10} /> Pay Now
            </>
          )}
        </motion.button>

        {/* Confetti */}
        {paid && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-emerald-100/50 rounded-xl"
          />
        )}
      </div>
    </div>
  );
}

// ─── VISUAL: ONBOARDING (KYC) ──────────────────────────────
function KYCVisual() {
  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-violet-50/50 border border-indigo-100/50 p-4 overflow-hidden flex items-center justify-center">
      <div className="relative w-48 h-28 bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden flex">
        {/* ID Photo */}
        <div className="w-16 bg-neutral-100 border-r border-neutral-100 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-neutral-200" />
        </div>
        {/* ID Details */}
        <div className="flex-1 p-3 space-y-2">
          <div className="h-2 w-20 bg-neutral-200 rounded-full" />
          <div className="h-2 w-16 bg-neutral-100 rounded-full" />
          <div className="h-2 w-24 bg-neutral-100 rounded-full" />
        </div>

        {/* Scanning Laser */}
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-0.5 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]"
        />

        {/* Valid Overlay */}
        <div className="absolute top-2 right-2">
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, times: [0.8, 0.9, 1] }}
          >
            <CheckCircle2 size={16} className="text-green-500" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── VISUAL: NOTIFICATIONS ─────────────────────────────────
function NotificationsVisual() {
  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-yellow-50/80 to-amber-50/50 border border-yellow-100/50 p-4 overflow-hidden flex items-center justify-center">
      {/* Phone */}
      <div className="relative w-32 h-44 bg-white border border-neutral-200 rounded-2xl shadow-sm p-2 flex flex-col overflow-hidden">
        <div className="w-8 h-1 bg-neutral-100 rounded-full mx-auto mb-4" />

        {/* Alert Bubble */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          className="bg-neutral-50 border border-neutral-100 rounded-xl p-2 mb-2 flex gap-2 items-start"
        >
          <div className="w-6 h-6 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
            <Bell size={12} className="text-yellow-600" />
          </div>
          <div className="space-y-1 w-full">
            <div className="h-1.5 w-12 bg-neutral-200 rounded-full" />
            <div className="h-1 w-full bg-neutral-100 rounded-full" />
          </div>
        </motion.div>

        {/* Notification Bell Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            className="text-yellow-400 opacity-20"
          >
            <Bell size={64} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────

const useCases = [
  {
    title: "Lead Generation",
    description: "Capture leads from ads and convert them with personalized WhatsApp conversations.",
    visual: <LeadGenVisual />,
    list: ["Click-to-WhatsApp ads", "Opt-in capture", "Automated nurturing", "Segment by intent"],
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    title: "Order Management",
    description: "Let customers browse, order, and track deliveries without leaving WhatsApp.",
    visual: <OrderManagementVisual />,
    list: ["Catalog sharing", "Cart & checkout", "Invoice generation", "Delivery updates"],
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    title: "Customer Support",
    description: "Resolve issues faster with a shared inbox, routing, and full customer context.",
    visual: <SupportVisual />,
    list: ["Team inbox", "Ticket creation", "SLA tracking", "CSAT capture"],
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    title: "Collections & Billing",
    description: "Automate payment reminders and confirmations to reduce manual follow-ups.",
    visual: <CollectionsVisual />,
    list: ["Due reminders", "Payment links", "Receipt sharing", "Statement requests"],
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    title: "Onboarding & KYC",
    description: "Guide customers through document submission and verification step by step.",
    visual: <KYCVisual />,
    list: ["Checklist flows", "Doc upload links", "Status updates", "Audit logs"],
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    title: "Notifications & Alerts",
    description: "Send transactional updates, appointment reminders, and time-sensitive alerts.",
    visual: <NotificationsVisual />,
    list: ["Order confirmations", "Appointment reminders", "Delivery ETAs", "Service alerts"],
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
  },
];

// ─── MAIN PAGE ─────────────────────────────────────────────

export default function UseCasesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />

      <main className="flex-1">
        <section className="relative py-16 md:py-28 overflow-hidden bg-white">
          {/* Subtle background */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

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
              className="text-center mb-20 space-y-5"
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
                Use Cases
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                Ready to build your{" "}
                <span className="relative inline-block">
                  <span className="text-primary">use case?</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </h1>

              <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                Tell us what you&apos;re trying to solve. We have a solution for every industry.
              </p>
            </motion.div>

            {/* Use Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {useCases.map((useCase, index) => {
                return (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                      {/* Visual Area */}
                      <div className="h-52 relative border-b border-neutral-50 bg-neutral-50/30">
                        {useCase.visual}
                      </div>

                      {/* Content Area */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-neutral-900 mb-2">
                            {useCase.title}
                          </h3>
                          <p className="text-sm text-neutral-500 leading-relaxed">
                            {useCase.description}
                          </p>
                        </div>

                        {/* Feature List */}
                        <ul className="space-y-2.5 mt-auto">
                          {useCase.list.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${useCase.bg.replace("bg-", "bg-").replace("-50", "-500")}`} />
                              <span className="text-xs font-medium text-neutral-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-20 text-center"
            >
              <div className="inline-flex flex-col items-center gap-4 bg-neutral-50 rounded-3xl px-12 py-10 border border-neutral-100 max-w-2xl mx-auto">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-2">
                  <Sparkles size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Have a unique use case?</h3>
                <p className="text-neutral-500 text-sm max-w-sm">
                  Our platform is flexible enough to handle any workflow. Let&apos;s build it together.
                </p>
                <div className="pt-2">
                  <button onClick={openCalendly}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex h-12 items-center justify-center rounded-xl bg-neutral-900 px-8 text-sm font-bold text-white shadow-lg transition-all gap-2"
                    >
                      Book Demo
                      <ArrowRight size={16} />
                    </motion.div>
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
