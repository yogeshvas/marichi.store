"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden relative">
      <div className="container px-4 mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            We are building the foundation for how businesses will communicate, transact, and grow in the next decade.
          </p>

          <div className="pt-8">
            <Link href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
              Book a Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

    </section>
  );
}
