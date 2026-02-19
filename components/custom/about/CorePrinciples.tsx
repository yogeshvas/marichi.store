"use client";

import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Cpu, Database, Zap } from "lucide-react";

const principles = [
  {
    icon: MessageSquare,
    text: "The future of commerce will not be defined by channels, but by conversations.",
  },
  {
    icon: Cpu,
    text: "Technology should be invisible yet powerful — simplifying complexity while amplifying human potential.",
  },
  {
    icon: Database,
    text: "Data is the foundation of intelligent decision-making and meaningful customer engagement.",
  },
  {
    icon: Zap,
    text: "Digital transformation should be intuitive, scalable, and impactful.",
  },
];

export default function CorePrinciples() {
  return (
    <section className="py-20 md:py-32 bg-white border-t border-neutral-100">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-wide text-sm md:text-base mb-2 uppercase block"
          >
            Core Principles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-neutral-900"
          >
            What We Believe
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 md:p-10 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <span className="text-4xl md:text-5xl font-bold text-neutral-100 group-hover:text-primary/10 transition-colors font-mono">
                  0{index + 1}
                </span>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <principle.icon size={20} />
                  </div>
                  <p className="text-lg md:text-xl text-neutral-800 font-medium leading-relaxed">
                    {principle.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
