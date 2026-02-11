import { LandingHeader } from "@/components/landing-header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/custom/HowItWorks"
import { InfiniteRibbonDemo } from "@/components/shared/Ribbon"
import LogoCloud from "@/components/logo-cloud"
import ChatBots from "@/components/custom/ChatBots"
import { BentoDemo } from "@/components/custom/Bento"
import { MarqueeDemo } from "@/components/custom/Testimonials"
import Industries from "@/components/custom/Industries"
import SecurityControl from "@/components/custom/SecurityControl"
import CTA from "@/components/custom/CTA"
import Footer from "@/components/custom/Footer"
import TeamSection from "@/components/custom/TeamCards"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
      </main>

      <div className="-m-16 md:-m-42">
        <InfiniteRibbonDemo />
      </div>
      <div className="">
        <LogoCloud />
      </div>
      <Industries />
      {/* <div className="">
        <ChatBots />
      </div> */}
      {/* <div className="">
        <BentoDemo />
      </div> */}
      <div className="">
        <MarqueeDemo />
      </div>

      <SecurityControl />
      <div className="">
        <HowItWorks />
      </div>
      <TeamSection />
      <CTA />
      <Footer />
    </div>
  )
}