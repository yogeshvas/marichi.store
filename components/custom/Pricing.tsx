"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Check,
  Sparkles,
  ArrowRight,
  Zap,
  Crown,
  Building2,
  Users,
  MessageSquare,
  Bot,
  BarChart3,
  Headphones,
  Globe,
  Shield,
  Server,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { openCalendly } from "@/lib/calendly";

interface PricingTier {
  name: string;
  icon: React.ElementType;
  tagline: string;
  price: string;
  popular?: boolean;
  features: { text: string; icon: React.ElementType }[];
  cta: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  accentGlow: string;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    icon: Zap,
    tagline: "For small teams getting started with WhatsApp.",
    price: "Contact us",
    features: [
      { text: "Up to 3 team members", icon: Users },
      { text: "1,000 conversations/month", icon: MessageSquare },
      { text: "Basic automation flows", icon: Bot },
      { text: "Shared inbox", icon: MessageSquare },
      { text: "Email support", icon: Headphones },
    ],
    cta: "Get Started",
    accentColor: "text-blue-600",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100",
    accentGlow: "from-blue-100/60",
  },
  {
    name: "Growth",
    icon: Crown,
    tagline: "For growing teams with higher volumes.",
    price: "Contact us",
    popular: true,
    features: [
      { text: "Up to 10 team members", icon: Users },
      { text: "10,000 conversations/month", icon: MessageSquare },
      { text: "Advanced automation", icon: Bot },
      { text: "CRM integrations", icon: Globe },
      { text: "Analytics dashboard", icon: BarChart3 },
      { text: "Priority support", icon: Headphones },
    ],
    cta: "Book Demo",
    accentColor: "text-primary",
    accentBg: "bg-red-50",
    accentBorder: "border-red-100",
    accentGlow: "from-red-100/60",
  },
  {
    name: "Enterprise",
    icon: Building2,
    tagline: "For large teams with custom requirements.",
    price: "Custom",
    features: [
      { text: "Unlimited team members", icon: Users },
      { text: "Unlimited conversations", icon: MessageSquare },
      { text: "Custom integrations", icon: Globe },
      { text: "Dedicated account manager", icon: Shield },
      { text: "SLA guarantees", icon: Shield },
      { text: "On-premise option", icon: Server },
    ],
    cta: "Contact Sales",
    accentColor: "text-purple-600",
    accentBg: "bg-purple-50",
    accentBorder: "border-purple-100",
    accentGlow: "from-purple-100/60",
  },
];

export default function Pricing() {
  return (
    <section className="relative py-16 md:py-28 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Soft gradient accents */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-purple-100/30 rounded-full blur-[80px]" />
      </div>

      {/* Content */}
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 rounded-full text-sm font-semibold text-white"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} className="text-primary" />
            </motion.div>
            Pricing
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
            Simple, transparent{" "}
            <span className="relative inline-block">
              <span className="text-primary">pricing</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </h2>

          <p className="text-lg text-neutral-500 max-w-xl mx-auto">
            Plans that grow with your business. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  type: "spring",
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                {/* Popular badge */}
                {tier.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  >
                    <div className="px-4 py-1.5 bg-primary rounded-full text-xs font-bold text-white shadow-lg shadow-primary/20 flex items-center gap-1.5">
                      <Crown size={12} />
                      Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full rounded-3xl overflow-hidden ${tier.popular
                    ? "ring-2 ring-primary/30 shadow-xl shadow-primary/10"
                    : "border border-neutral-200 shadow-lg shadow-neutral-100/50"
                    }`}
                >
                  <div className="relative h-full rounded-3xl bg-white p-8 overflow-hidden">
                    {/* Hover gradient glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tier.accentGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header */}
                      <div className="mb-8">
                        <div
                          className={`w-12 h-12 rounded-xl ${tier.accentBg} ${tier.accentBorder} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon size={22} className={tier.accentColor} />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                          {tier.name}
                        </h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                          {tier.tagline}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="mb-8">
                        <span className="text-3xl font-black text-neutral-900">
                          {tier.price}
                        </span>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3.5 mb-10 flex-1">
                        {tier.features.map((feature, i) => (
                          <motion.li
                            key={feature.text}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.3 + index * 0.1 + i * 0.05,
                            }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-5 h-5 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                              <Check size={12} className="text-green-600" />
                            </div>
                            <span className="text-sm text-neutral-600 font-medium">
                              {feature.text}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <button onClick={openCalendly} className="block w-full">
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative w-full h-12 rounded-xl flex items-center justify-center text-sm font-bold transition-all overflow-hidden ${tier.popular
                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                            : "bg-neutral-900 text-white hover:bg-neutral-800"
                            }`}
                        >
                          {/* Shimmer on popular */}
                          {tier.popular && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{ x: ["-200%", "200%"] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                          )}
                          <span className="relative flex items-center gap-2">
                            {tier.cta}
                            <ArrowRight size={16} />
                          </span>
                        </motion.div>
                      </button>
                    </div>
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
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-400 text-sm mb-4">
            Need a custom plan?{" "}
            <span className="text-neutral-600 font-medium">
              Let&apos;s discuss your requirements.
            </span>
          </p>
          <button onClick={openCalendly}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 px-8 text-sm font-bold text-neutral-700 shadow-sm transition-all hover:bg-neutral-200"
            >
              Contact Sales
              <ArrowRight size={14} className="ml-2" />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </section>
  );
}
