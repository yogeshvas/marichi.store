"use client";

import React from "react";
import { LandingHeader } from "@/components/landing-header";
import Footer from "@/components/custom/Footer";
import CareersHero from "@/components/custom/careers/CareersHero";
import WhyMarichi from "@/components/custom/careers/WhyMarichi";
import Benefits from "@/components/custom/careers/Benefits";
import OpenRoles from "@/components/custom/careers/OpenRoles";
import HiringProcess from "@/components/custom/careers/HiringProcess";
import { ArrowRight } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900 font-sans selection:bg-primary/10 selection:text-primary">
      <LandingHeader />

      <main className="flex-1">
        <CareersHero />
        <WhyMarichi />
        <Benefits />
        <OpenRoles />
        <HiringProcess />

        {/* Don't see the right role? Section */}
        <section className="py-24 bg-neutral-50 border-t border-neutral-100 text-center">
          <div className="container px-4 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-neutral-900">Don't see the right role?</h2>
            <p className="text-xl text-neutral-500 mb-10 max-w-2xl mx-auto">
              We're always interested in exceptional people. Send us your CV and tell us how you can contribute.
            </p>
            <a
              href="mailto:hello@marichisolutions.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-neutral-200 rounded-full font-semibold text-neutral-900 hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md"
            >
              Email Your Resume
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
