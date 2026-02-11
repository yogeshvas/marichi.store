import { Marquee } from "@/components/ui/marquee"
import { Star } from "lucide-react"

const items = [
  {
    name: "Raghavendra Singh",
    title: "Founder, Urban Attire",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raghav",
    body: "Marichi's WhatsApp automation helped us recover 45% of abandoned carts. It's been a game-changer for our D2C brand.",
  },
  {
    name: "Priya Sharma",
    title: "Ops Head, FreshMart",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    body: "The support ticketing system on WhatsApp reduced our response time from hours to minutes. Our customers love it!",
  },
  {
    name: "Arjun Mehta",
    title: "Marketing Lead, EdTech Pro",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    body: "Broadcast campaigns have never been this effective. 98% open rates with Marichi vs 15% on email. Incredible ROI.",
  },
  {
    name: "Sarah Jenkins",
    title: "CEO, FinServe",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    body: "Automating KYC document collection via WhatsApp saved our team hundreds of hours manually verifying files.",
  },
  {
    name: "David Chen",
    title: "Manager, QuickLogistics",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    body: "The automated shipment updates kept our customers informed and slashed our 'where is my order' calls by 70%.",
  },
]

function TestimonialCard({ item }: { item: (typeof items)[number] }) {
  return (
    <div className="relative flex h-full w-[18rem] sm:w-[22rem] flex-col items-start justify-between rounded-2xl border border-neutral-100 bg-white p-5 sm:p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-neutral-200/80">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="mb-6 text-[15px] leading-relaxed text-neutral-600 font-normal">
        "{item.body}"
      </div>
      <div className="mt-auto flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-neutral-100">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold text-neutral-900">
            {item.name}
          </div>
          <div className="text-xs text-neutral-500 font-medium">
            {item.title}
          </div>
        </div>
      </div>
    </div>
  )
}

export function MarqueeDemo() {
  return (
    <div className="py-12 md:py-24 bg-neutral-50/50 border-y border-neutral-100">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-2 text-center lg:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              Trusted by fast-growing <span className="text-primary">market leaders</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Join 500+ businesses using Marichi to automate conversations, drive sales, and delight customers on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="avatar" />
                ))}
              </div>
              <div className="flex flex-col justify-center text-sm">
                <span className="font-bold text-neutral-900">4.9/5 Rating</span>
                <span className="text-neutral-500">from 2,000+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: Marquee */}
          <div className="lg:col-span-3 relative overflow-hidden mask-gradient-x">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-50/50 to-transparent z-10 lg:from-neutral-50/0"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-50/50 to-transparent z-10 lg:from-neutral-50/0"></div>

            <Marquee pauseOnHover className="py-4 [--duration:40s]">
              {[...items, ...items].map((item, index) => (
                <TestimonialCard key={index} item={item} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="py-4 [--duration:40s] mt-4">
              {[...items, ...items].reverse().map((item, index) => (
                <TestimonialCard key={index} item={item} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}
