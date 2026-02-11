"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Plug,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Database,
  CreditCard,
  FileSpreadsheet,
  Webhook,
  Code2,
  Workflow,
  CheckCircle2,
  RefreshCw,
  Server,
  Link as LinkIcon,
  Bot,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import Footer from "@/components/custom/Footer";
import { openCalendly } from "@/lib/calendly";

// ─── INTERACTIVE VISUAL: CRM Systems ─────────────────────
function CRMVisual() {
  const [synced, setSynced] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSynced(false);
      setTimeout(() => setSynced(true), 1500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const crms = [
    { name: "Salesforce", color: "bg-blue-500" },
    { name: "HubSpot", color: "bg-orange-500" },
    { name: "Zoho", color: "bg-yellow-500" },
  ];

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 border border-blue-100/50 p-6 overflow-hidden flex flex-col items-center justify-center">
      <div className="flex items-center gap-8 md:gap-12">
        {/* Marichi Node */}
        <div className="relative">
          <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-neutral-100 flex items-center justify-center relative z-10">
            <Bot size={28} className="text-primary" />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-neutral-400">Marichi</div>
        </div>

        {/* Connection Lines */}
        <div className="relative w-16 md:w-24 h-1 bg-neutral-200 rounded-full overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-blue-500 w-1/2 rounded-full opacity-50"
          />
        </div>

        {/* CRM Nodes */}
        <div className="flex flex-col gap-2">
          {crms.map((crm, i) => (
            <motion.div
              key={crm.name}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className={`w-8 h-8 rounded-lg ${crm.color} flex items-center justify-center shadow-md text-white font-bold text-[10px]`}>
                {crm.name[0]}
              </div>
              <AnimatePresence>
                {synced && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    <CheckCircle2 size={14} className="text-green-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 text-[10px] font-semibold text-blue-400 flex items-center gap-1.5">
        <RefreshCw size={10} className={synced ? "" : "animate-spin"} />
        {synced ? "Sync Complete" : "Syncing contacts..."}
      </div>
    </div>
  );
}

// ─── INTERACTIVE VISUAL: Payment Gateways ────────────────
function PaymentsVisual() {
  const [status, setStatus] = useState<"processing" | "success">("processing");

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus("processing");
      setTimeout(() => setStatus("success"), 2000);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-green-50/50 border border-emerald-100/50 p-6 overflow-hidden flex items-center justify-center">
      <div className="relative w-48 bg-white rounded-xl shadow-lg border border-neutral-100 p-4">
        {/* Card Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="h-2 w-12 bg-neutral-100 rounded-full" />
          <div className="h-4 w-8 bg-neutral-200 rounded" />
        </div>

        {/* Amount */}
        <div className="text-center mb-4">
          <div className="text-2xl font-bold text-neutral-900">$129.00</div>
          <div className="text-[10px] text-neutral-400">Total Amount</div>
        </div>

        {/* Status Indicator */}
        <motion.div
          animate={{
            backgroundColor: status === "success" ? "#dcfce7" : "#f3f4f6", // emerald-100 vs neutral-100
            scale: status === "success" ? [1, 1.05, 1] : 1
          }}
          className="rounded-lg p-2 text-center"
        >
          {status === "processing" ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 border-2 border-neutral-300 border-t-neutral-500 rounded-full animate-spin" />
              <span className="text-[10px] font-bold text-neutral-500">Processing...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={12} className="text-green-600" />
              <span className="text-[10px] font-bold text-green-700">Payment Verified</span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Floating Particles */}
      <motion.div
        className="absolute top-10 right-10 text-emerald-400"
        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Sparkles size={16} />
      </motion.div>
    </div>
  );
}

// ─── INTERACTIVE VISUAL: Accounting & ERP ──────────────────
function AccountingVisual() {
  const [rows, setRows] = useState([
    { id: 1, desc: "Inv #1023", amount: "$1,200", status: "Paid" },
    { id: 2, desc: "Inv #1024", amount: "$850", status: "Pending" },
    { id: 3, desc: "Inv #1025", amount: "$2,400", status: "Paid" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRows(prev => {
        const newRows = [...prev];
        // Simulate a new row being added
        const lastId = newRows[newRows.length - 1].id;
        newRows.push({
          id: lastId + 1,
          desc: `Inv #${1023 + lastId}`,
          amount: `$${Math.floor(Math.random() * 2000) + 500}`,
          status: "Draft"
        });
        if (newRows.length > 3) newRows.shift();
        return newRows;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-amber-50/80 to-yellow-50/50 border border-amber-100/50 p-6 overflow-hidden flex flex-col justify-center">
      <div className="bg-white rounded-lg border border-neutral-100 shadow-sm overflow-hidden w-full max-w-xs mx-auto">
        {/* Table Header */}
        <div className="grid grid-cols-3 gap-2 px-3 py-2 bg-neutral-50 border-b border-neutral-100">
          <div className="text-[9px] font-bold text-neutral-400">INVOICE</div>
          <div className="text-[9px] font-bold text-neutral-400">AMOUNT</div>
          <div className="text-[9px] font-bold text-neutral-400 text-right">STATUS</div>
        </div>

        {/* Table Rows */}
        <div className="p-1 space-y-1">
          <AnimatePresence mode="popLayout">
            {rows.map((row) => (
              <motion.div
                key={row.id}
                initial={{ opacity: 0, x: -20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: "auto" }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-3 gap-2 px-2 py-1.5 rounded-md hover:bg-neutral-50"
              >
                <div className="text-[10px] font-medium text-neutral-700">{row.desc}</div>
                <div className="text-[10px] text-neutral-500">{row.amount}</div>
                <div className="text-right">
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${row.status === "Paid" ? "bg-green-100 text-green-700" :
                      row.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                        "bg-neutral-100 text-neutral-500"
                    }`}>
                    {row.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-4 -right-4 opacity-10"
      >
        <FileSpreadsheet size={100} className="text-amber-500" />
      </motion.div>
    </div>
  );
}

// ─── INTERACTIVE VISUAL: Webhooks ──────────────────────────
function WebhooksVisual() {
  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-violet-50/80 to-purple-50/50 border border-violet-100/50 p-6 overflow-hidden flex items-center justify-center">
      {/* Event Source */}
      <div className="relative z-10">
        <div className="w-12 h-12 bg-white rounded-xl shadow border border-neutral-100 flex items-center justify-center">
          <Zap size={20} className="text-yellow-500 fill-yellow-500" />
        </div>
      </div>

      {/* JSON Payload Particle */}
      <div className="flex-1 h-0.5 bg-neutral-200 mx-4 relative">
        <motion.div
          animate={{ x: ["0%", "400%"], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -translate-y-1/2 w-8 h-6 bg-violet-600 rounded-md flex items-center justify-center shadow-lg z-20"
        >
          <span className="text-[8px] font-mono text-white text-nowrap">{`{}`}</span>
        </motion.div>
      </div>

      {/* Destination Server */}
      <div className="relative z-10">
        <div className="w-12 h-12 bg-white rounded-xl shadow border border-neutral-100 flex items-center justify-center">
          <Server size={20} className="text-violet-500" />
        </div>
      </div>

      {/* Code snippet background */}
      <div className="absolute inset-0 opacity-5 font-mono text-[8px] p-2 pointer-events-none select-none">
        {`POST /hooks/catch HTTP/1.1
Host: callback.example.com
Content-Type: application/json

{
  "event": "order.created",
  "data": {
    "id": "ord_123"
  }
}`}
      </div>
    </div>
  );
}

// ─── INTERACTIVE VISUAL: REST API ──────────────────────────
function APIVisual() {
  const [text, setText] = useState("");
  const fullText = `curl -X POST https://api.marichi.com/v1/messages \\
  -d '{"to": "+1234567890", "text": "Hello"}'`;

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, idx));
      idx++;
      if (idx > fullText.length) {
        idx = 0;
        // Pause at the end
      }
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="relative w-full h-52 rounded-2xl bg-[#1e1e1e] p-5 overflow-hidden font-mono text-xs shadow-xl">
      <div className="flex gap-1.5 mb-4 opacity-50">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>

      <div className="text-green-400 mb-2">
        <span className="text-blue-400">➜</span> ~ {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 H-4 bg-green-400 ml-1 align-middle"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: text.length === fullText.length ? 1 : 0 }}
        className="mt-4 text-neutral-400"
      >
        <span className="text-purple-400">{`{`}</span>
        <br />
        &nbsp;&nbsp;<span className="text-blue-300">"status"</span>: <span className="text-green-300">"sent"</span>,
        <br />
        &nbsp;&nbsp;<span className="text-blue-300">"id"</span>: <span className="text-orange-300">"msg_8492"</span>
        <br />
        <span className="text-purple-400">{`}`}</span>
      </motion.div>
    </div>
  );
}

// ─── INTERACTIVE VISUAL: Zapier & Make ─────────────────────
function ZapierVisual() {
  return (
    <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-orange-50/80 to-red-50/50 border border-orange-100/50 p-6 overflow-hidden flex items-center justify-center">
      <div className="relative flex items-center gap-1">
        {/* Step 1 */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-12 h-12 bg-white rounded-xl shadow-md border border-neutral-100 flex items-center justify-center z-10"
        >
          <Bot size={20} className="text-neutral-600" />
        </motion.div>

        {/* Connectors */}
        <div className="w-8 h-1 bg-orange-200" />

        {/* Step 2 */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="w-12 h-12 bg-white rounded-xl shadow-md border border-neutral-100 flex items-center justify-center z-10"
        >
          <Database size={20} className="text-blue-500" />
        </motion.div>

        {/* Connectors */}
        <div className="w-8 h-1 bg-orange-200" />

        {/* Step 3 */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="w-12 h-12 bg-white rounded-xl shadow-md border border-neutral-100 flex items-center justify-center z-10"
        >
          <Zap size={20} className="text-orange-500 fill-orange-500" />
        </motion.div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:16px_16px]" />
    </div>
  );
}

// ─── DATA ──────────────────────────────────────────────────
const integrations = [
  {
    icon: Database,
    title: "CRM Systems",
    description: "Sync leads, contacts, and deals with Salesforce, HubSpot, Zoho, or your custom CRM.",
    visual: <CRMVisual />,
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: CreditCard,
    title: "Payment Gateways",
    description: "Generate payment links and confirm payments with your existing gateway (Stripe, PayStack, Flutterwave).",
    visual: <PaymentsVisual />,
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: FileSpreadsheet,
    title: "Accounting & ERP",
    description: "Push invoices and sync customer data with QuickBooks, Xero, SAP, or Sage.",
    visual: <AccountingVisual />,
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Real-time event notifications for any system that accepts webhooks (New message, Order placed, etc).",
    visual: <WebhooksVisual />,
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Code2,
    title: "REST API",
    description: "Full API access to build custom integrations and automate workflowsProgrammatically.",
    visual: <APIVisual />,
    bg: "bg-neutral-100",
    border: "border-neutral-200",
    iconColor: "text-neutral-700",
  },
  {
    icon: Workflow,
    title: "Zapier & Make",
    description: "Connect to 5000+ apps without writing code using automation platforms like Zapier.",
    visual: <ZapierVisual />,
    bg: "bg-orange-50",
    border: "border-orange-100",
    iconColor: "text-orange-600",
  },
];

// ─── MAIN PAGE ─────────────────────────────────────────────
export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />

      <main className="flex-1">
        <section className="relative py-16 md:py-28 overflow-hidden bg-white">
          {/* Subtle background */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]" />

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
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <RefreshCw size={14} className="text-white" />
                </motion.div>
                Integrations
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                Connect your{" "}
                <span className="relative inline-block">
                  <span className="text-primary">stack</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </h1>

              <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                Marichi fits into your existing tools. CRM, payments, accounting — all connected seamlessly.
              </p>
            </motion.div>

            {/* Integration Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {integrations.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden h-full hover:shadow-xl transition-all duration-300 flex flex-col">
                      {/* Visual Area */}
                      <div className="h-52 relative border-b border-neutral-50">
                        {item.visual}
                      </div>

                      {/* Content Area */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center flex-shrink-0`}>
                            <Icon size={18} className={item.iconColor} />
                          </div>
                          <h3 className="text-lg font-bold text-neutral-900 leading-tight">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                          {item.description}
                        </p>
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
                  <Plug size={24} className="text-neutral-400" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Need a custom integration?</h3>
                <p className="text-neutral-500 text-sm max-w-sm">
                  Our team can help you connect any system to Marichi. Just ask.
                </p>
                <div className="pt-2">
                  <button onClick={openCalendly}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex h-12 items-center justify-center rounded-xl bg-neutral-900 px-8 text-sm font-bold text-white shadow-lg transition-all gap-2"
                    >
                      Talk to Us
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
