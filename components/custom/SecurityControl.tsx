"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Shield,
  Users,
  ScrollText,
  FileCheck2,
  Download,
  Lock,
  Eye,
  CheckCircle2,
  Fingerprint,
} from "lucide-react";

interface SecurityFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  visual: React.ReactNode;
}

// Mini visual components for each security card
const AccessVisual = () => (
  <div className="relative w-full h-32 mt-4 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 p-3">
    {/* Role badges */}
    {[
      { label: "Admin", color: "bg-red-100 text-red-700 border-red-200", x: 8, y: 8 },
      { label: "Manager", color: "bg-amber-100 text-amber-700 border-amber-200", x: 48, y: 36 },
      { label: "Agent", color: "bg-green-100 text-green-700 border-green-200", x: 16, y: 64 },
    ].map((role, i) => (
      <motion.div
        key={role.label}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 + i * 0.15 }}
        viewport={{ once: true }}
        className={`absolute px-2.5 py-1 rounded-lg text-[10px] font-bold ${role.color} border flex items-center gap-1.5`}
        style={{ left: role.x, top: role.y }}
      >
        <Users size={10} />
        {role.label}
      </motion.div>
    ))}
    {/* Lines connecting them */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 120">
      <motion.line
        x1="60" y1="20" x2="85" y2="48"
        stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="4 2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      />
      <motion.line
        x1="60" y1="20" x2="55" y2="76"
        stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="4 2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      />
    </svg>
    {/* Shield icon top-right */}
    <motion.div
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute top-2 right-2"
    >
      <Lock size={16} className="text-blue-300" />
    </motion.div>
  </div>
);

const AuditVisual = () => (
  <div className="relative w-full h-32 mt-4 overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100/50 p-3">
    {/* Log entries */}
    {[
      { text: "Admin changed template", time: "2m ago", icon: "🔧" },
      { text: "Agent sent broadcast", time: "15m ago", icon: "📤" },
      { text: "Manager exported data", time: "1h ago", icon: "📁" },
    ].map((log, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 + i * 0.15 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-2"
      >
        <span className="text-xs">{log.icon}</span>
        <div className="flex-1 bg-white/80 rounded-lg px-2.5 py-1.5 border border-amber-100/50 flex items-center justify-between">
          <span className="text-[10px] font-medium text-neutral-700 truncate">{log.text}</span>
          <span className="text-[9px] text-neutral-400 whitespace-nowrap ml-2">{log.time}</span>
        </div>
      </motion.div>
    ))}
    {/* Pulse dot */}
    <motion.div
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-500"
    />
  </div>
);

const TemplateVisual = () => (
  <div className="relative w-full h-32 mt-4 overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100/50 p-3">
    {/* Template cards */}
    {[
      { label: "Order Update", status: "Approved", color: "text-green-600" },
      { label: "Payment Reminder", status: "Approved", color: "text-green-600" },
      { label: "Welcome Message", status: "Pending", color: "text-amber-600" },
    ].map((tpl, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 + i * 0.12 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-2 bg-white/80 rounded-lg px-2.5 py-2 border border-green-100/40"
      >
        <div className="flex items-center gap-2">
          <FileCheck2 size={12} className="text-green-500" />
          <span className="text-[10px] font-semibold text-neutral-700">{tpl.label}</span>
        </div>
        <div className={`flex items-center gap-1 ${tpl.color}`}>
          <CheckCircle2 size={10} />
          <span className="text-[9px] font-bold">{tpl.status}</span>
        </div>
      </motion.div>
    ))}
    {/* WhatsApp check */}
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      className="absolute bottom-2 right-2"
    >
      <div className="bg-green-500 rounded-full p-1">
        <CheckCircle2 size={12} className="text-white" />
      </div>
    </motion.div>
  </div>
);

const ExportVisual = () => (
  <div className="relative w-full h-32 mt-4 overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100/50 p-3 flex items-center justify-center">
    {/* Export animation */}
    <div className="relative">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2"
      >
        <div className="bg-white rounded-xl p-3 shadow-md border border-purple-100 relative">
          <Download size={24} className="text-purple-500" />
          {/* Animated dots */}
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-500 flex items-center justify-center"
          >
            <span className="text-[6px] text-white font-bold">↓</span>
          </motion.div>
        </div>
      </motion.div>

      {/* File types orbiting */}
      {["CSV", "XLS", "PDF"].map((type, i) => (
        <motion.div
          key={type}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2.67,
          }}
          className="absolute top-1/2 left-1/2"
          style={{
            width: 80,
            height: 80,
            marginLeft: -40,
            marginTop: -40,
          }}
        >
          <div
            className="absolute bg-white shadow-sm rounded-md px-1.5 py-0.5 border border-purple-100 text-[8px] font-bold text-purple-600"
            style={{
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            .{type}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const features: SecurityFeature[] = [
  {
    icon: Users,
    title: "Role-Based Access",
    description:
      "Define who sees what. Agents, managers, and admins each get appropriate permissions.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    visual: <AccessVisual />,
  },
  {
    icon: ScrollText,
    title: "Audit Logs",
    description:
      "Every action logged. Know who did what and when for compliance and troubleshooting.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    visual: <AuditVisual />,
  },
  {
    icon: FileCheck2,
    title: "Template Compliance",
    description:
      "WhatsApp-approved templates ensure your messages get delivered without restrictions.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    visual: <TemplateVisual />,
  },
  {
    icon: Download,
    title: "Data Export",
    description:
      "Export conversations, contacts, and analytics. Your data is always accessible.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    visual: <ExportVisual />,
  },
];

export default function SecurityControl() {
  return (
    <section className="py-12 md:py-24 bg-neutral-50/50 overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-full text-sm font-semibold text-white mb-4"
          >
            <Shield size={16} />
            Security & Control
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Enterprise-grade{" "}
            <span className="text-primary">governance</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Built for teams that need visibility, compliance, and control at
            scale.
          </p>
        </motion.div>

        {/* Central Shield Visual + Cards */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="relative bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                    {/* Top icon */}
                    <div
                      className={`w-12 h-12 rounded-xl ${feature.bgColor} ${feature.borderColor} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={22} className={feature.color} />
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Visual element */}
                    {feature.visual}

                    {/* Hover glow */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${feature.bgColor.replace("bg-", "from-")}/30 to-transparent`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500"
          >
            {[
              { icon: Shield, text: "SOC 2 Compliant" },
              { icon: Lock, text: "End-to-End Encrypted" },
              { icon: Fingerprint, text: "GDPR Ready" },
              { icon: Eye, text: "Full Transparency" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-neutral-100 shadow-sm"
              >
                <item.icon size={14} className="text-green-600" />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
