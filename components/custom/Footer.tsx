"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "WhatsApp Business API", href: "#" },
    { label: "Chatbot Builder", href: "#" },
    { label: "Broadcast Campaigns", href: "#" },
    { label: "Team Inbox", href: "#" },
    { label: "Analytics Dashboard", href: "#" },
  ],
  Solutions: [
    { label: "Marketing", href: "#" },
    { label: "Commerce", href: "#" },
    { label: "Support", href: "#" },
    { label: "Onboarding", href: "#" },
    { label: "Notifications", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Webinars", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-14 border-b border-white/5"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Get the latest from{" "}
                <span className="text-primary">Marichi</span>
              </h3>
              <p className="text-white/50 max-w-md leading-relaxed">
                Product updates, WhatsApp marketing tips, and growth strategies.
                No spam, unsubscribe anytime.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm font-medium focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="h-14 px-8 rounded-2xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all hover:shadow-primary/30"
              >
                Subscribe
                <Send size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-3 lg:col-span-2 space-y-6"
          >
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Marichi Logo"
                width={36}
                height={36}
              />
              <span className="text-xl font-bold text-white">Marichi</span>
            </Link>
            <p className="text-white/40 leading-relaxed text-sm max-w-sm">
              The all-in-one WhatsApp Business Platform. Automate conversations,
              drive revenue, and delight customers at scale.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                {
                  icon: Mail,
                  text: "hello@marichi.in",
                  href: "mailto:hello@marichi.in",
                },
                {
                  icon: Phone,
                  text: "+91 98765 43210",
                  href: "tel:+919876543210",
                },
                {
                  icon: MapPin,
                  text: "Mumbai, India",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-white/70 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/15 transition-colors">
                    <item.icon size={14} />
                  </div>
                  {item.text}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-2 pt-2">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + catIndex * 0.08, duration: 0.5 }}
              className="space-y-5"
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="py-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-sm text-white/30">
              <span>© 2026 Marichi Solutions. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={14} className="text-primary fill-primary" />
              </motion.span>
              <span>in India</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/30">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Refund Policy", href: "/refund" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-white/60 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* WhatsApp badge */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold"
            >
              <MessageCircle size={14} />
              Official WhatsApp Partner
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
