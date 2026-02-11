import { LandingHeader } from "@/components/landing-header";
import Pricing from "@/components/custom/Pricing";
import Footer from "@/components/custom/Footer";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
