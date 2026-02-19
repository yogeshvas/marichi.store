"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Globe2, Code2, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "High Ownership, Real Impact",
    description: "Ship decisions that move markets. Every team member owns outcomes, not just tasks."
  },
  {
    icon: Globe2,
    title: "Emerging Markets at Scale",
    description: "Build for Zambia, Tanzania, and India — markets growing faster than any others on earth."
  },
  {
    icon: Code2,
    title: "Product + Engineering Excellence",
    description: "We care obsessively about craft — clean code, elegant UX, and products that actually delight."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Execution",
    description: "Decisions backed by evidence. Analytics run through every team, every sprint, every launch."
  }
];

export default function WhyMarichi() {
  return (
    <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Marichi</h2>
            <p className="text-xl text-neutral-400">Where work has meaning.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-800 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
              <p className="text-neutral-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
