"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Clock, MessageSquare, Briefcase, Zap } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Sales",
    description: "Start a conversation about our platform, pricing, and what's right for your business.",
    email: "hello@marichisolutions.com",
    responseTime: "Reply within 2 hours",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100"
  },
  {
    icon: MessageSquare,
    title: "Support",
    description: "Existing customer? Get technical help, resolve issues, or escalate a service concern.",
    email: "support@marichisolutions.com",
    responseTime: "Reply within 4 hours",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100"
  },
  {
    icon: Briefcase,
    title: "Partnerships",
    description: "Explore referral, reseller, implementation, or technology partnership opportunities.",
    email: "hello@marichisolutions.com",
    responseTime: "Reply within 1 business day",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100"
  }
];

export default function ContactInfo() {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border ${card.borderColor} bg-white hover:shadow-lg transition-shadow group relative overflow-hidden`}
            >
              <div className={`w-12 h-12 rounded-xl ${card.bgColor} ${card.color} flex items-center justify-center mb-6`}>
                <card.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-neutral-900">{card.title}</h3>
              <p className="text-neutral-500 mb-8 min-h-[48px] text-sm leading-relaxed">
                {card.description}
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${card.email}`}
                  className="block text-lg font-semibold text-neutral-900 hover:text-primary transition-colors"
                >
                  {card.email}
                </a>
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 uppercase tracking-wide">
                  <Clock className="w-3.5 h-3.5" />
                  {card.responseTime}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
