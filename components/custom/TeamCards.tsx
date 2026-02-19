"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, X } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

const leadership: TeamMember[] = [
  {
    name: "Rituraj",
    role: "Visionary",
    description:
      "A data enthusiast and product-driven entrepreneur, Rituraj brings deep expertise in building scalable platforms across commerce, SaaS, and digital ecosystems. He is driven by a relentless curiosity for understanding how data, technology, and human behavior intersect to create meaningful business impact and leads the vision of building intelligent infrastructure for a digital-first future.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFZXdoYn8SsUg/profile-displayphoto-crop_800_800/B56ZtQqA9tJIAI-/0/1766584754466?e=1772668800&v=beta&t=Dj6Ufciuk43ffYvbn1yey16_RCQ8jlClt0wIJMZhYm0",
    linkedin: "https://www.linkedin.com/in/rituraj0810/",
  },
  {
    name: "Yogesh Vashisth",
    role: "Architecture",
    description:
      "An engineering-focused technology leader, Yogesh specializes in designing scalable, resilient, and high-performance systems that power enterprise-grade platforms. His commitment to clean architecture and engineering excellence ensures the technology foundation is built for reliability, scalability, and future growth.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQHSRPMHSXxSPA/feedshare-shrink_800/B56ZjLBxQDHMAk-/0/1755752897595?e=2147483647&v=beta&t=ymcd1YI-rk2HRSxShZutx9Y4BNSVKx1gPchZQIfieWw",
    linkedin: "https://www.linkedin.com/in/yogeshvashisth/",
  },
];

const investors: TeamMember[] = [
  {
    name: "Shouvik Bhattacharyya",
    role: "Investor",
    description:
      "A seasoned business professional with extensive industry experience, Shouvik brings strategic insight and long-term perspective to support the company's growth journey and expansion.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    linkedin: "#",
  },
  {
    name: "Hanumant Lal Shukla",
    role: "Investor",
    description:
      "A seasoned business leader with strong operational expertise, Hanumant provides guidance in building scalable operational frameworks and driving execution excellence across markets.",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQGudLGag68zig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516588103467?e=1772668800&v=beta&t=5VXw82hKuHC41rP5P6iWf275pJsie6OEOPYtKiy27cA",
    linkedin: "https://www.linkedin.com/in/hanumantl/",
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Close modal when clicking outside or on close button
  const handleClose = () => setSelectedMember(null);

  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Main Header - Center Aligned */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-neutral-900"
          >
            Our Team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-neutral-900"
          >
            Meet the <span className="text-primary">visionaries</span>
          </motion.h2>
        </div>

        {/* Leadership Grid */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-2xl font-bold text-neutral-900 text-center relative inline-block left-1/2 -translate-x-1/2"
          >
            Leadership
            <span className="block w-12 h-1 bg-primary mt-2 mx-auto rounded-full" />
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {leadership.map((member) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>

        {/* Investors Grid */}
        <div>
          <div className="mb-12 text-center">
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

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {investors.map((member) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal / Detailed View */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal Card */}
              <motion.div
                layoutId={`card-${selectedMember.name}`}
                className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-10"
                >
                  <X size={20} className="text-neutral-600" />
                </button>

                <div className="flex flex-col md:flex-row">
                  {/* Image Side */}
                  <div className="md:w-2/5 h-64 md:h-auto relative">
                    <motion.img
                      layoutId={`image-${selectedMember.name}`}
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:w-3/5 flex flex-col justify-center">
                    <motion.h3
                      layoutId={`name-${selectedMember.name}`}
                      className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2"
                    >
                      {selectedMember.name}
                    </motion.h3>
                    <motion.span
                      layoutId={`role-${selectedMember.name}`}
                      className="text-primary font-medium text-lg mb-6 block"
                    >
                      {selectedMember.role}
                    </motion.span>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-neutral-600 leading-relaxed mb-6"
                    >
                      {selectedMember.description}
                    </motion.p>

                    {selectedMember.linkedin && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <a
                          href={selectedMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors font-medium text-sm"
                        >
                          <Linkedin size={18} />
                          <span>Connect on LinkedIn</span>
                        </a>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function TeamMemberCard({ member, onClick }: { member: TeamMember, onClick: () => void }) {
  return (
    <motion.div
      layoutId={`card-${member.name}`}
      onClick={onClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] max-w-sm border border-neutral-100 flex flex-col items-center text-center p-6"
    >
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md relative mx-auto">
        <motion.img
          layoutId={`image-${member.name}`}
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <motion.h3
        layoutId={`name-${member.name}`}
        className="text-xl font-bold text-neutral-900 mb-1"
      >
        {member.name}
      </motion.h3>

      <motion.span
        layoutId={`role-${member.name}`}
        className="text-primary font-medium text-sm"
      >
        {member.role}
      </motion.span>

      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold text-neutral-400 uppercase tracking-wider">
        Click to view profile
      </div>
    </motion.div>
  );
}
