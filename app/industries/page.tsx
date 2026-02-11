"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Stethoscope,
  ShoppingCart,
  Car,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Truck,
  GraduationCap,
  Landmark,
  Factory,
  CalendarCheck,
  Pill,
  FlaskConical,
  UserCheck,
  FileText,
  ClipboardCheck,
  FolderSearch,
  HelpCircle,
  Package,
  MapPin,
  RotateCcw,
  Megaphone,
  Wrench,
  CircleDollarSign,
  Bell,
  Send,
  Users,
  BookOpen,
  CreditCard,
  Receipt,
  AlertTriangle,
  PackageCheck,
  MessageSquare,
  Headphones,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { LandingHeader } from "@/components/landing-header";
import Footer from "@/components/custom/Footer";
import { openCalendly } from "@/lib/calendly";

interface IndustryCard {
  name: string;
  icon: React.ElementType;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  glowFrom: string;
  features: { text: string; icon: React.ElementType }[];
}

const industries: IndustryCard[] = [
  {
    name: "Healthcare",
    icon: Stethoscope,
    description:
      "Appointment booking, prescription refills, lab results, and patient engagement.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    glowFrom: "from-emerald-50",
    features: [
      { text: "Appointment reminders", icon: CalendarCheck },
      { text: "Prescription renewals", icon: Pill },
      { text: "Lab report delivery", icon: FlaskConical },
      { text: "Patient follow-up", icon: UserCheck },
    ],
  },
  {
    name: "Insurance",
    icon: ShieldCheck,
    description:
      "Policy renewals, claims tracking, document collection, and customer service.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    glowFrom: "from-blue-50",
    features: [
      { text: "Renewal reminders", icon: Bell },
      { text: "Claim status updates", icon: ClipboardCheck },
      { text: "KYC document collection", icon: FolderSearch },
      { text: "Policy queries", icon: HelpCircle },
    ],
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description:
      "Order updates, catalog sharing, returns handling, and loyalty programs.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    glowFrom: "from-orange-50",
    features: [
      { text: "Order confirmations", icon: Package },
      { text: "Delivery tracking", icon: MapPin },
      { text: "Return requests", icon: RotateCcw },
      { text: "Promo campaigns", icon: Megaphone },
    ],
  },
  {
    name: "Automotive",
    icon: Car,
    description:
      "Service booking, parts availability, pickup reminders, and sales follow-up.",
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-100",
    glowFrom: "from-violet-50",
    features: [
      { text: "Service scheduling", icon: Wrench },
      { text: "Parts quotes", icon: CircleDollarSign },
      { text: "Pickup notifications", icon: Bell },
      { text: "Lead nurturing", icon: Send },
    ],
  },
  {
    name: "Logistics",
    icon: Truck,
    description:
      "Shipment tracking, POD collection, driver coordination, and customer updates.",
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-100",
    glowFrom: "from-sky-50",
    features: [
      { text: "Tracking updates", icon: MapPin },
      { text: "Delivery confirmations", icon: PackageCheck },
      { text: "Driver dispatch", icon: Users },
      { text: "Issue escalation", icon: AlertTriangle },
    ],
  },
  {
    name: "Education",
    icon: GraduationCap,
    description:
      "Admissions, fee collection, parent communication, and student engagement.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    glowFrom: "from-amber-50",
    features: [
      { text: "Application tracking", icon: FileText },
      { text: "Fee reminders", icon: CreditCard },
      { text: "Parent updates", icon: MessageSquare },
      { text: "Event notifications", icon: BookOpen },
    ],
  },
  {
    name: "Financial Services",
    icon: Landmark,
    description:
      "Account updates, transaction alerts, loan processing, and customer support.",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100",
    glowFrom: "from-teal-50",
    features: [
      { text: "Balance alerts", icon: Bell },
      { text: "Loan status", icon: Receipt },
      { text: "Statement requests", icon: FileText },
      { text: "Fraud alerts", icon: AlertTriangle },
    ],
  },
  {
    name: "Manufacturing",
    icon: Factory,
    description:
      "Order processing, dealer management, warranty claims, and support.",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100",
    glowFrom: "from-rose-50",
    features: [
      { text: "Order updates", icon: Package },
      { text: "Dealer comms", icon: MessageSquare },
      { text: "Warranty requests", icon: Settings },
      { text: "Technical support", icon: Headphones },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />

      <main className="flex-1">
        <section className="relative py-16 md:py-28 overflow-hidden bg-white">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:48px_48px]" />

          {/* Soft gradient blobs */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-emerald-100/20 rounded-full blur-[100px]" />
          </div>

          <div className="container px-4 mx-auto max-w-6xl relative z-10">
            {/* Back link */}
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
              className="text-center mb-16 space-y-5"
              initial={{ opacity: 0, y: 20 }}
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
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles size={16} className="text-primary" />
                </motion.div>
                Industries
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                Built for{" "}
                <span className="relative inline-block">
                  <span className="text-primary">every</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>{" "}
                industry
              </h1>

              <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                Marichi adapts to your industry&apos;s unique needs. Discover
                how WhatsApp can transform your customer experience.
              </p>
            </motion.div>

            {/* Industry Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3 },
                    }}
                    className="group"
                  >
                    <div className="relative h-full bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Hover gradient glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${industry.glowFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div
                          className={`w-12 h-12 rounded-xl ${industry.bgColor} ${industry.borderColor} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon size={22} className={industry.color} />
                        </div>

                        {/* Name */}
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">
                          {industry.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                          {industry.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2.5">
                          {industry.features.map((feature, i) => (
                            <motion.li
                              key={feature.text}
                              initial={{ opacity: 0, x: -8 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 0.3 + index * 0.05 + i * 0.06,
                              }}
                              className="flex items-center gap-2.5"
                            >
                              <div
                                className={`w-6 h-6 rounded-lg ${industry.bgColor} flex items-center justify-center flex-shrink-0`}
                              >
                                <feature.icon
                                  size={12}
                                  className={industry.color}
                                />
                              </div>
                              <span className="text-[13px] text-neutral-600 font-medium">
                                {feature.text}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom hover accent line */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${industry.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
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
                  Don&apos;t see your industry?
                </p>
                <p className="text-neutral-500 text-sm">
                  We work with businesses across sectors. Let&apos;s talk.
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
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span className="relative flex items-center gap-2">
                      Contact Us
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
