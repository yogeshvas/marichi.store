"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  MessageCircle,
  Zap,
  BarChart3,
  Bot,
  Send,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { openCalendly } from "@/lib/calendly";

// Animated floating particles
const FloatingParticle: React.FC<{
  delay: number;
  size: number;
  x: string;
  y: string;
  duration: number;
}> = ({ delay, size, x, y, duration }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ width: size, height: size, left: x, top: y }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Animated stat counter pill
const StatPill: React.FC<{
  icon: React.ElementType;
  value: string;
  label: string;
  delay: number;
}> = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, type: "spring" }}
  >
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10 shadow-lg"
    >
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <div className="text-xl font-black text-white">{value}</div>
        <div className="text-xs text-white/60 font-medium">{label}</div>
      </div>
    </motion.div>
  </motion.div>
);

// Animated WhatsApp message bubble for visual flair
const MessageBubble: React.FC<{
  text: string;
  delay: number;
  side: "left" | "right";
}> = ({ text, delay, side }) => (
  <motion.div
    initial={{ opacity: 0, x: side === "left" ? -30 : 30, scale: 0.8 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    className={`absolute ${side === "left" ? "left-4 sm:left-8 lg:left-16" : "right-4 sm:right-8 lg:right-16"} hidden md:flex`}
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 max-w-[180px]"
    >
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center">
          <MessageCircle size={10} className="text-green-400" />
        </div>
        <span className="text-[10px] text-white/50 font-medium">WhatsApp</span>
      </div>
      <p className="text-xs text-white/70 leading-relaxed">{text}</p>
    </motion.div>
  </motion.div>
);

export default function CTA() {
  return (
    <section className="relative py-16 md:py-28 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Floating particles */}
      <FloatingParticle delay={0} size={6} x="10%" y="20%" duration={4} />
      <FloatingParticle delay={0.5} size={4} x="85%" y="30%" duration={5} />
      <FloatingParticle delay={1} size={8} x="20%" y="70%" duration={3.5} />
      <FloatingParticle delay={1.5} size={5} x="75%" y="60%" duration={4.5} />
      <FloatingParticle delay={2} size={7} x="50%" y="15%" duration={3} />
      <FloatingParticle delay={0.8} size={4} x="40%" y="80%" duration={5.5} />
      <FloatingParticle delay={1.2} size={6} x="90%" y="75%" duration={4.2} />
      <FloatingParticle delay={0.3} size={5} x="60%" y="10%" duration={3.8} />

      {/* Floating message bubbles */}
      <MessageBubble
        text="Hey! 👋 Your order is confirmed"
        delay={0.3}
        side="left"
      />
      <MessageBubble
        text="⭐ Rate your experience!"
        delay={0.6}
        side="right"
      />

      {/* Main content */}
      <div className="container px-4 mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold text-white border border-white/10"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} className="text-primary" />
            </motion.div>
            Start Growing Today
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Ready to{" "}
            <span className="relative inline-block">
              <span className="text-primary">transform</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
            <br />
            your WhatsApp?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Join 500+ brands that use Marichi to automate, engage, and sell on
            WhatsApp. Set up in 10 minutes, see results from day one.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link href="/signup">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex h-14 items-center justify-center rounded-2xl bg-primary px-10 text-base font-bold text-white shadow-xl shadow-primary/25 transition-all overflow-hidden"
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative flex items-center gap-2">
                  Get Started Free
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </span>
              </motion.div>
            </Link>

            <button onClick={openCalendly}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-10 text-base font-bold text-white shadow-lg transition-all hover:bg-white/15"
              >
                <Send size={16} className="mr-2" />
                Book a Demo
              </motion.div>
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-white/40"
          >
            {[
              { icon: CheckCircle2, text: "No credit card required" },
              { icon: Zap, text: "Setup in 10 minutes" },
              { icon: Bot, text: "AI-powered automation" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <item.icon size={14} className="text-green-500/70" />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stat pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <StatPill
              icon={MessageCircle}
              value="98%"
              label="Open Rate"
              delay={0.5}
            />
            <StatPill
              icon={BarChart3}
              value="5×"
              label="Revenue Boost"
              delay={0.6}
            />
            <StatPill
              icon={Zap}
              value="10min"
              label="Quick Setup"
              delay={0.7}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
