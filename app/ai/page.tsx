"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Brain,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Route,
  BookOpen,
  FileText,
  UserCheck,
  CheckCircle2,
  XCircle,
  Send,
  Bot,
  Tag,
  Clock,
  Zap,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import Footer from "@/components/custom/Footer";
import { openCalendly } from "@/lib/calendly";

// ─── INTERACTIVE VISUAL: Intent Detection ─────────────────
function IntentDetectionVisual() {
  const messages = [
    { text: "I need help with my order", tag: "Support", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { text: "Can I upgrade my plan?", tag: "Sales", color: "bg-green-100 text-green-700 border-green-200" },
    { text: "Where's my invoice?", tag: "Billing", color: "bg-amber-100 text-amber-700 border-amber-200" },
    { text: "My delivery is late", tag: "Support", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { text: "I want to buy bulk", tag: "Sales", color: "bg-green-100 text-green-700 border-green-200" },
  ];
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveIdx((i) => (i + 1) % messages.length), 2200);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 border border-blue-100/50 p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Live Scanning</span>
      </div>
      <div className="space-y-2">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: i === activeIdx ? 1 : 0.4,
              scale: i === activeIdx ? 1 : 0.97,
              x: i === activeIdx ? 0 : -4,
            }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <div className={`flex-1 bg-white/80 rounded-lg px-3 py-1.5 border border-neutral-100 ${i === activeIdx ? "shadow-md" : ""}`}>
              <span className="text-[11px] text-neutral-700">{msg.text}</span>
            </div>
            <AnimatePresence mode="wait">
              {i === activeIdx && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className={`px-2 py-0.5 rounded-md text-[9px] font-bold border ${msg.color} flex items-center gap-1`}
                >
                  <Tag size={8} />
                  {msg.tag}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-3 right-3"
      >
        <Brain size={16} className="text-blue-300" />
      </motion.div>
    </div>
  );
}

// ─── INTERACTIVE VISUAL: Agent Assist ──────────────────────
function AgentAssistVisual() {
  const [step, setStep] = useState(0);
  const suggestions = [
    "I'll check the status of order #4821 for you right away.",
    "Your order is being packed and will ship within 24 hours.",
  ];

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1200),
      setTimeout(() => setStep(2), 2800),
      setTimeout(() => setStep(3), 4200),
      setTimeout(() => setStep(0), 5800),
    ];
    const loop = setInterval(() => {
      setStep(0);
      setTimeout(() => setStep(1), 1200);
      setTimeout(() => setStep(2), 2800);
      setTimeout(() => setStep(3), 4200);
    }, 5800);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, []);

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-green-50/50 border border-emerald-100/50 p-4 overflow-hidden">
      {/* Customer message */}
      <div className="flex gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
          <span className="text-[8px] font-bold text-neutral-500">C</span>
        </div>
        <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 border border-neutral-100 shadow-sm">
          <p className="text-[11px] text-neutral-700">Where is my order #4821?</p>
        </div>
      </div>

      {/* AI thinking */}
      <AnimatePresence>
        {step >= 1 && step < 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 mb-3 ml-8"
          >
            <Bot size={12} className="text-emerald-500" />
            <span className="text-[10px] text-emerald-600 font-medium">AI suggesting...</span>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="flex gap-0.5"
            >
              {[0, 1, 2].map((d) => (
                <motion.div
                  key={d}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.6, delay: d * 0.15, repeat: Infinity }}
                  className="w-1 h-1 rounded-full bg-emerald-400"
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Suggestion card */}
      <AnimatePresence>
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="ml-8 bg-emerald-50 rounded-xl px-3 py-2 border border-emerald-200 mb-2"
          >
            <div className="flex items-center gap-1 mb-1">
              <Sparkles size={9} className="text-emerald-500" />
              <span className="text-[9px] font-bold text-emerald-600">Suggested Reply</span>
            </div>
            <p className="text-[11px] text-neutral-700">{suggestions[0]}</p>
            <div className="flex gap-2 mt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`px-2 py-0.5 rounded-md text-[9px] font-bold flex items-center gap-1 transition-all ${step >= 3 ? "bg-emerald-500 text-white" : "bg-emerald-100 text-emerald-700"}`}
              >
                <ThumbsUp size={8} />
                {step >= 3 ? "Sent ✓" : "Approve"}
              </motion.button>
              <button className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-neutral-100 text-neutral-500 flex items-center gap-1">
                <XCircle size={8} />
                Edit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── INTERACTIVE VISUAL: Conversation Summary ──────────────
function SummaryVisual() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCollapsed((c) => !c), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-purple-50/80 to-violet-50/50 border border-purple-100/50 p-4 overflow-hidden">
      <AnimatePresence mode="wait">
        {!collapsed ? (
          <motion.div
            key="chat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare size={10} className="text-purple-400" />
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Conversation</span>
            </div>
            {[
              { side: "left", text: "Hi, I need to return my laptop" },
              { side: "right", text: "Sure! I'll initiate the return process" },
              { side: "left", text: "How long will the refund take?" },
              { side: "right", text: "Refund processed within 5-7 business days" },
            ].map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.side === "left" ? -10 : 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`flex ${msg.side === "right" ? "justify-end" : ""}`}
              >
                <div className={`px-2.5 py-1.5 rounded-lg text-[10px] max-w-[75%] ${msg.side === "left" ? "bg-white border border-neutral-100 text-neutral-700" : "bg-purple-100 text-purple-800"}`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="summary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <FileText size={10} className="text-purple-500" />
              <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">Auto-Summary</span>
            </div>
            <div className="bg-white rounded-xl p-3 border border-purple-100 shadow-sm">
              <p className="text-[11px] text-neutral-700 leading-relaxed">
                <span className="font-bold">Topic:</span> Laptop return & refund<br />
                <span className="font-bold">Resolution:</span> Return initiated<br />
                <span className="font-bold">Timeline:</span> 5-7 business days<br />
                <span className="font-bold">Status:</span>{" "}
                <span className="text-green-600 font-bold">Resolved ✓</span>
              </p>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5 }}
              className="h-0.5 bg-gradient-to-r from-purple-300 to-purple-100 rounded-full mt-3"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── INTERACTIVE VISUAL: Knowledge Base Q&A ────────────────
function KnowledgeBaseVisual() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowAnswer(true), 1500);
    const timer2 = setTimeout(() => setApproved(true), 3500);
    const reset = setTimeout(() => {
      setShowAnswer(false);
      setApproved(false);
    }, 5500);
    const loop = setInterval(() => {
      setShowAnswer(false);
      setApproved(false);
      setTimeout(() => setShowAnswer(true), 1500);
      setTimeout(() => setApproved(true), 3500);
    }, 5500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(reset); clearInterval(loop); };
  }, []);

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-amber-50/80 to-yellow-50/50 border border-amber-100/50 p-4 overflow-hidden">
      {/* Question */}
      <div className="flex items-start gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
          <span className="text-[9px]">❓</span>
        </div>
        <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 border border-neutral-100">
          <p className="text-[11px] text-neutral-700">What is your refund policy?</p>
        </div>
      </div>

      {/* Knowledge Base searching */}
      <AnimatePresence>
        {!showAnswer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 ml-8 mb-2"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
              <BookOpen size={11} className="text-amber-500" />
            </motion.div>
            <span className="text-[10px] text-amber-600 font-medium">Searching knowledge base...</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Answer from KB */}
      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="ml-8"
          >
            <div className="bg-amber-50 rounded-xl px-3 py-2 border border-amber-200 mb-2">
              <div className="flex items-center gap-1 mb-1">
                <BookOpen size={9} className="text-amber-600" />
                <span className="text-[9px] font-bold text-amber-600">From: refund-policy.md</span>
              </div>
              <p className="text-[10px] text-neutral-700">Full refund within 30 days of purchase. Items must be unused and in original packaging.</p>
            </div>
            <AnimatePresence>
              {approved ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-1 ml-1"
                >
                  <CheckCircle2 size={10} className="text-green-500" />
                  <span className="text-[9px] font-bold text-green-600">Agent approved • Sent to customer</span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1 ml-1"
                >
                  <Clock size={10} className="text-amber-400" />
                  <span className="text-[9px] text-amber-600 font-medium">Awaiting agent approval...</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── INTERACTIVE VISUAL: Smart Routing ─────────────────────
function SmartRoutingVisual() {
  const [activeRoute, setActiveRoute] = useState(0);
  const routes = [
    { label: "Billing Query", team: "Finance Team", color: "bg-blue-100 text-blue-700", dot: "bg-blue-400" },
    { label: "Angry Customer", team: "Senior Agent", color: "bg-red-100 text-red-700", dot: "bg-red-400" },
    { label: "Product Question", team: "Sales Team", color: "bg-green-100 text-green-700", dot: "bg-green-400" },
  ];

  useEffect(() => {
    const timer = setInterval(() => setActiveRoute((i) => (i + 1) % routes.length), 2000);
    return () => clearInterval(timer);
  }, [routes.length]);

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-sky-50/80 to-cyan-50/50 border border-sky-100/50 p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <Route size={10} className="text-sky-500" />
        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Smart Router</span>
      </div>

      {routes.map((route, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: i === activeRoute ? 1 : 0.35,
            scale: i === activeRoute ? 1 : 0.97,
          }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-2"
        >
          {/* Message */}
          <div className={`flex-1 bg-white/80 rounded-lg px-3 py-2 border ${i === activeRoute ? "border-sky-200 shadow-md" : "border-neutral-100"}`}>
            <span className="text-[10px] text-neutral-600">{route.label}</span>
          </div>

          {/* Arrow animation */}
          {i === activeRoute && (
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-1"
            >
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight size={10} className="text-sky-400" />
              </motion.div>
            </motion.div>
          )}

          {/* Team badge */}
          <motion.div
            animate={{
              opacity: i === activeRoute ? 1 : 0.3,
              scale: i === activeRoute ? 1 : 0.9,
            }}
            className={`px-2 py-1 rounded-lg text-[9px] font-bold border ${route.color} flex items-center gap-1 whitespace-nowrap`}
          >
            <div className={`w-1.5 h-1.5 rounded-full ${route.dot}`} />
            {route.team}
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-3 right-3 text-[9px] text-sky-400 font-medium flex items-center gap-1"
      >
        <Zap size={9} />
        Auto-routing
      </motion.div>
    </div>
  );
}

// ─── INTERACTIVE VISUAL: Safety Controls ───────────────────
function SafetyControlsVisual() {
  const [checks, setChecks] = useState([false, false, false]);

  useEffect(() => {
    const run = () => {
      setChecks([false, false, false]);
      setTimeout(() => setChecks([true, false, false]), 800);
      setTimeout(() => setChecks([true, true, false]), 1600);
      setTimeout(() => setChecks([true, true, true]), 2400);
    };
    run();
    const loop = setInterval(run, 4000);
    return () => clearInterval(loop);
  }, []);

  const items = [
    { label: "Content filtered", sub: "No PII detected" },
    { label: "Agent reviewed", sub: "Approved by Sarah K." },
    { label: "Audit logged", sub: "Entry #29481" },
  ];

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-rose-50/80 to-pink-50/50 border border-rose-100/50 p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck size={10} className="text-rose-500" />
        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Safety Pipeline</span>
      </div>

      <div className="space-y-2.5">
        {items.map((item, i) => (
          <motion.div
            key={i}
            animate={{ opacity: checks[i] ? 1 : 0.4 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{
                scale: checks[i] ? [1, 1.3, 1] : 1,
                backgroundColor: checks[i] ? "#22c55e" : "#e5e7eb",
              }}
              transition={{ duration: 0.4 }}
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
            >
              {checks[i] ? (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <CheckCircle2 size={12} className="text-white" />
                </motion.div>
              ) : (
                <div className="w-2 h-2 rounded-full bg-neutral-300" />
              )}
            </motion.div>
            <div>
              <p className="text-[11px] font-bold text-neutral-700">{item.label}</p>
              <p className="text-[9px] text-neutral-400">{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connecting line */}
      <div className="absolute left-6.5 top-14 bottom-8 w-px bg-neutral-200" />

      <AnimatePresence>
        {checks.every(Boolean) && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-3 right-3 px-2 py-1 bg-green-100 rounded-lg border border-green-200"
          >
            <span className="text-[9px] font-bold text-green-700">✓ All checks passed</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── FEATURE DATA ──────────────────────────────────────────
const features = [
  {
    icon: Tag,
    title: "Intent Detection",
    description: "Automatically categorize incoming messages by intent — support, sales, billing — and route accordingly.",
    visual: <IntentDetectionVisual />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    icon: Bot,
    title: "Agent Assist",
    description: "Suggest replies based on context and past conversations. Agents approve with one click.",
    visual: <AgentAssistVisual />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
  },
  {
    icon: FileText,
    title: "Conversation Summaries",
    description: "Auto-generate summaries when conversations end or handoff. No manual note-taking.",
    visual: <SummaryVisual />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base Q&A",
    description: "Answer common questions from your knowledge base with human approval before sending.",
    visual: <KnowledgeBaseVisual />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
  },
  {
    icon: Route,
    title: "Smart Routing",
    description: "Route conversations to the right team or agent based on topic, sentiment, or priority.",
    visual: <SmartRoutingVisual />,
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-100",
  },
  {
    icon: ShieldCheck,
    title: "Safety Controls",
    description: "All AI suggestions require human approval. Full audit trail for compliance.",
    visual: <SafetyControlsVisual />,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100",
  },
];

// ─── MAIN PAGE ─────────────────────────────────────────────
export default function AIPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />

      <main className="flex-1">
        <section className="relative py-16 md:py-28 overflow-hidden bg-white">
          {/* Subtle background */}
          <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px]" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[120px]" />
          </div>

          <div className="container px-4 mx-auto max-w-6xl relative z-10">
            {/* Back */}
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-700 transition-colors mb-10">
                <ArrowLeft size={14} /> Back to Home
              </Link>
            </motion.div>

            {/* Hero */}
            <motion.div
              className="text-center mb-20 space-y-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 rounded-full text-sm font-semibold text-white"
              >
                <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Brain size={16} className="text-primary" />
                </motion.div>
                AI Automation
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                Rules first,{" "}
                <span className="relative inline-block">
                  <span className="text-primary">AI second</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </h1>

              <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                AI that assists your team — not replaces them. Every suggestion requires human approval.
              </p>
            </motion.div>

            {/* Capabilities header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Capabilities</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-2">AI that fits your workflow</h2>
              <p className="text-sm text-neutral-500 mt-2 max-w-lg mx-auto">
                Practical AI features designed for customer-facing teams.
              </p>
            </motion.div>

            {/* Feature cards — 2-column, text + interactive visual */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="group"
                  >
                    <div className="relative h-full bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Hover glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${feature.bgColor.replace("bg-", "")}/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl ${feature.bgColor} ${feature.borderColor} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon size={18} className={feature.color} />
                          </div>
                          <h3 className="text-lg font-bold text-neutral-900">{feature.title}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                          {feature.description}
                        </p>

                        {/* Interactive visual */}
                        {feature.visual}
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
              className="mt-16 text-center"
            >
              <div className="inline-flex flex-col items-center gap-4 bg-neutral-50 rounded-2xl px-10 py-8 border border-neutral-100">
                <p className="text-neutral-900 font-bold text-lg">
                  See AI Assist in action
                </p>
                <p className="text-neutral-500 text-sm">
                  Book a demo to see how it works with your team.
                </p>
                <button onClick={openCalendly}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-8 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all gap-2 overflow-hidden relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative flex items-center gap-2">
                      Book Demo
                      <ArrowRight size={14} />
                    </span>
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
