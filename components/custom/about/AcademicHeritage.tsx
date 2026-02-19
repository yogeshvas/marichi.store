"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function AcademicHeritage() {
  return (
    <section className="py-20 bg-neutral-50 border-t border-neutral-100">
      <div className="container px-4 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium tracking-wide text-sm md:text-base mb-2 uppercase block">
            Academic Heritage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Our Foundation
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            The company is proudly operated by alumni of the Indian Institute of
            Technology (IIT) Kharagpur and MIT Sloan. This strong academic
            foundation combined with real-world execution experience enables us
            to build solutions that are both deeply innovative and pragmatically
            designed for real business challenges.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Placeholder for Logo - simpler to use text if logos aren't available but user asked for visuals. I will use text representation with a distinctive font style */}
            <div className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <div className="w-12 h-12 bg-neutral-900 text-white rounded-lg flex items-center justify-center text-xl font-serif">I</div>
              <span>IIT Kharagpur</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <div className="w-12 h-12 bg-red-800 text-white rounded-lg flex items-center justify-center text-xl font-serif">M</div>
              <span>MIT Sloan</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
