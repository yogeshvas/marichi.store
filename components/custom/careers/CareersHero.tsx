"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CareersHero() {
  const scrollToRoles = () => {
    const rolesSection = document.getElementById("open-roles");
    if (rolesSection) {
      rolesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>We're hiring</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-neutral-900 leading-[1.1]">
              Build the future of <br className="hidden md:block" />
              <span className="text-primary">conversational commerce.</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl mb-10">
              Join a team of operators, engineers, and go-to-market leaders building the infrastructure that powers WhatsApp commerce across Africa and India.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Button
                size="lg"
                className="rounded-full text-base px-8 h-12 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:scale-105"
                onClick={scrollToRoles}
              >
                View Open Roles
              </Button>
            </div>
          </motion.div>

          {/* Key Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 py-8 border-t border-neutral-100"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold mb-1">
                <Clock className="w-4 h-4 text-neutral-400" />
                <h3>Work Model</h3>
              </div>
              <p className="text-neutral-500 text-sm">Office + Field Visits</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold mb-1">
                <MapPin className="w-4 h-4 text-neutral-400" />
                <h3>Regions</h3>
              </div>
              <p className="text-neutral-500 text-sm">Zambia · Tanzania · India (NE)</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold mb-1">
                <Zap className="w-4 h-4 text-neutral-400" />
                <h3>Response</h3>
              </div>
              <p className="text-neutral-500 text-sm">Fast hiring loop</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
