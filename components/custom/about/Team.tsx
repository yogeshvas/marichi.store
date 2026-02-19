"use client";

import React from "react";
import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Rituraj",
    role: "Visionary",
    description:
      "A data enthusiast and product-driven entrepreneur, Rituraj brings deep expertise in building scalable platforms across commerce, SaaS, and digital ecosystems. He is driven by a relentless curiosity for understanding how data, technology, and human behavior intersect to create meaningful business impact.",
    initials: "R",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Yogesh Vashisth",
    role: "Architecture",
    description:
      "An engineering-focused technology leader, Yogesh specializes in designing scalable, resilient, and high-performance systems that power enterprise-grade platforms. His commitment to clean architecture and engineering excellence ensures the technology foundation is built for reliability, scalability, and future growth.",
    initials: "Y",
    color: "bg-purple-100 text-purple-600",
  },
];

const investors = [
  {
    name: "Shouvik Bhattacharyya",
    role: "Investor",
    description:
      "A seasoned business professional with extensive industry experience, Shouvik brings strategic insight and long-term perspective to support the company's growth journey and expansion.",
    initials: "S",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Hanumant Lal Shukla",
    role: "Investor",
    description:
      "A seasoned business leader with strong operational expertise, Hanumant provides guidance in building scalable operational frameworks and driving execution excellence across markets.",
    initials: "H",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function Team() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Leadership */}
        <div className="mb-24">
          <div className="mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-wide text-sm md:text-base mb-2 uppercase block"
            >
              The People Behind the Platform
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-neutral-900"
            >
              Leadership
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${member.color} flex items-center justify-center text-2xl md:text-3xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                  >
                    {member.initials}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
                        {member.name}
                      </h3>
                      <span className="text-primary font-medium">
                        {member.role}
                      </span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                      {member.description}
                    </p>
                    <div className="pt-2">
                      <a href="#" className="inline-flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors text-sm font-medium">
                        <Linkedin size={18} />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Investors */}
        <div>
          <div className="mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-wide text-sm md:text-base mb-2 uppercase block"
            >
              Backed By
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-neutral-900"
            >
              Investors
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {investors.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${member.color} flex items-center justify-center text-2xl md:text-3xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                  >
                    {member.initials}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
                        {member.name}
                      </h3>
                      <span className="text-primary font-medium">
                        {member.role}
                      </span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
