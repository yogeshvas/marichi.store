import {
  Megaphone,
  ShoppingCart,
  LifeBuoy,
  CreditCard,
  UserCheck,
  Puzzle,
  BarChart3,
  ArrowRight
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

const features = [
  {
    Icon: Megaphone,
    name: "Marketing Journeys",
    description: "Click-to-WhatsApp ads, opt-ins, segmentation, and automated follow-ups that convert.",
    href: "#",
    cta: "Start Marketing",
    background: <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />,
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    Icon: ShoppingCart,
    name: "Commerce & Payments",
    description: "Catalog browsing, cart, invoices, and payment links — all inside WhatsApp.",
    href: "#",
    cta: "Sell More",
    background: <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />,
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    Icon: LifeBuoy,
    name: "Support & Ticketing",
    description: "Shared inbox with roles, SLA tracking, and escalation workflows.",
    href: "#",
    cta: "Get Support",
    background: <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-100 to-transparent pointer-events-none" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: CreditCard,
    name: "Collections",
    description: "Automated reminders, payment links, and receipt confirmations.",
    href: "#",
    cta: "Collect Faster",
    background: <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-100 to-transparent pointer-events-none" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: UserCheck,
    name: "Onboarding & KYC",
    description: "Step-by-step document collection with status updates.",
    href: "#",
    cta: "Automate KYC",
    background: <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-100 to-transparent pointer-events-none" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Puzzle,
    name: "Integrations",
    description: "Connect your CRM, payment gateway, and internal tools via Webhooks and API.",
    href: "#",
    cta: "Connect Apps",
    background: <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />,
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    Icon: BarChart3,
    name: "Analytics",
    description: "Campaign ROI, response times, and agent productivity reports.",
    href: "#",
    cta: "See Insights",
    background: <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-100 to-transparent pointer-events-none" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
];

export function BentoDemo() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
          Everything you need to <span className="text-primary">run your business</span>
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          From marketing to support, Marichi offers a complete suite of tools to manage your WhatsApp business operations efficiently.
        </p>
      </div>

      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  )
}
