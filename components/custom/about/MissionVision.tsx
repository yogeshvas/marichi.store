"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-wide text-sm md:text-base mb-2 uppercase block"
          >
            Purpose
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-neutral-900"
          >
            Mission & Vision
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="group relative p-8 md:p-12 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors"
          >
            <div className="absolute top-8 right-8 text-neutral-200 group-hover:text-primary/20 transition-colors">
              <span className="text-8xl font-bold leading-none">M</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                Our Mission
              </h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To empower businesses with intelligent conversational
                infrastructure that simplifies complexity, accelerates growth, and
                enables meaningful customer relationships at scale.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="group relative p-8 md:p-12 rounded-3xl bg-neutral-900 text-white overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10 font-bold text-9xl text-white transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
              V
            </div>
            {/* Abstract gradient blob */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/30 transition-colors" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                To become the global backbone of conversational commerce, enabling
                organizations to operate smarter, communicate better, and grow
                faster through intelligent automation and data-driven
                experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
