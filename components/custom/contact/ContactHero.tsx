"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Reply within 2 hours</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-neutral-900 leading-[1.1]">
              Let's talk.
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">
              Whether you're exploring the platform, need support, or want to explore a partnership — we're here.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
