"use client";

import { motion } from "motion/react";
import { Link2, Settings2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Connect",
    description: "Link your WhatsApp Business API account. We handle the technical setup.",
    icon: Link2,
  },
  {
    id: "02",
    title: "Configure",
    description: "Set up flows, routing rules, and templates. No code required.",
    icon: Settings2,
  },
  {
    id: "03",
    title: "Launch",
    description: "Go live with marketing campaigns, support flows, or commerce.",
    icon: Rocket,
  },
  {
    id: "04",
    title: "Optimize",
    description: "Track performance, refine flows, and scale what works.",
    icon: TrendingUp,
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            From setup to scale in days. Marichi is designed for fast deployment. Most teams are live within a week.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Animated Rocket Path (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full w-48 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{
                left: ["-20%", "120%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Rocket Icon Animation */}
          <motion.div
            className="hidden md:block absolute top-8 text-primary z-10"
            animate={{
              left: ["0%", "98%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              translateX: "-50%"
            }}
          >
            <Rocket className="w-8 h-8 rotate-45" fill="currentColor" />
          </motion.div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center border border-neutral-100 dark:border-neutral-700 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm border-4 border-neutral-50 dark:border-neutral-900">
                      {step.id}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-50">
                  {step.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-8 text-neutral-300 dark:text-neutral-700">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto animate-bounce">
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
