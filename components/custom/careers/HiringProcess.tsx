"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Submit your CV + a short note"
  },
  {
    number: "02",
    title: "Screening",
    description: "30-min intro call with our team"
  },
  {
    number: "03",
    title: "Practical",
    description: "A focused take-home or case"
  },
  {
    number: "04",
    title: "Final",
    description: "Culture + leadership conversation"
  },
  {
    number: "05",
    title: "Offer",
    description: "Fast loop — we move quickly"
  }
];

export default function HiringProcess() {
  return (
    <section className="py-24 bg-white border-t border-neutral-100">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Hiring Process</h2>
          <p className="text-xl text-neutral-500">Simple. Fast. Respectful.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-neutral-100 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white md:bg-transparent"
            >
              <div className="w-24 h-24 rounded-full bg-white border-2 border-neutral-100 flex items-center justify-center mb-6 text-2xl font-bold text-neutral-300 shadow-sm relative z-10 group hover:border-primary hover:text-primary transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-2 text-neutral-900">{step.title}</h3>
              <p className="text-sm text-neutral-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
