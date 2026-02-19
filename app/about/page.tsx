import React from "react";
import { LandingHeader } from "@/components/landing-header";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/about/Hero";
import MissionVision from "@/components/custom/about/MissionVision";
import CorePrinciples from "@/components/custom/about/CorePrinciples";
import Team from "@/components/custom/about/Team";
import AcademicHeritage from "@/components/custom/about/AcademicHeritage";
import AboutCTA from "@/components/custom/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900">
      <LandingHeader />
      <main className="flex-1">
        <Hero />
        <MissionVision />
        <CorePrinciples />
        <Team />
        <AcademicHeritage />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
