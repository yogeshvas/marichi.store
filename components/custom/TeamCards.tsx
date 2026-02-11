"use client";

import React from "react";
import { motion } from "motion/react";
import { Users, Sparkles, Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  title: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Shabik Bhattacharya",
    role: "Investor & Advisor",
    title: "The Catalyst",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    linkedin: "#",
  },
  {
    name: "Hanumanth Lal Shukla",
    role: "Handles Execution",
    title: "The Operator",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQGudLGag68zig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516588103467?e=1772668800&v=beta&t=5VXw82hKuHC41rP5P6iWf275pJsie6OEOPYtKiy27cA",
    linkedin: "https://www.linkedin.com/in/hanumantl/",
  },
  {
    name: "Ritutaj",
    role: "Handles Product",
    title: "The Visionary",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFZXdoYn8SsUg/profile-displayphoto-crop_800_800/B56ZtQqA9tJIAI-/0/1766584754466?e=1772668800&v=beta&t=Dj6Ufciuk43ffYvbn1yey16_RCQ8jlClt0wIJMZhYm0",
    linkedin: "https://www.linkedin.com/in/rituraj0810/",
  },
  {
    name: "Yogesh",
    role: "Handles Technology",
    title: "The Architect",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHSRPMHSXxSPA/feedshare-shrink_800/B56ZjLBxQDHMAk-/0/1755752897595?e=2147483647&v=beta&t=ymcd1YI-rk2HRSxShZutx9Y4BNSVKx1gPchZQIfieWw",
    linkedin: "https://www.linkedin.com/in/yogeshvashisth/",
  },
];

export default function TeamSection() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-full text-sm font-semibold text-white mb-4"
          >
            <Users size={16} />
            Our Team
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Meet the{" "}
            <span className="text-primary relative">
              visionaries
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            The minds behind Marichi — a team obsessed with transforming how
            businesses grow on WhatsApp.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.12, duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Title badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-neutral-700 uppercase tracking-wider">
                      {member.title}
                    </span>
                  </div>

                  {/* LinkedIn icon */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 shadow-md"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-neutral-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-50 rounded-full text-sm font-medium text-neutral-500 border border-neutral-100">
            <Sparkles size={14} className="text-primary" />
            Building the future of conversational commerce
          </div>
        </motion.div>
      </div>
    </section>
  );
}
