"use client"

import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { AnimatedList } from "@/components/ui/animated-list"

interface NotificationData {
  id: number
  name: string
  message: string
  timeAgo: string
  icon: string
}

type NotificationProps = {
  notification: NotificationData
}

function Notification({ notification }: NotificationProps) {
  return (
    <div className="flex w-full max-w-[350px] items-center justify-between gap-4 rounded-2xl border border-neutral-50 bg-white p-3.5 shadow-xl shadow-neutral-200 dark:border-neutral-900 dark:bg-neutral-950 dark:shadow-neutral-950/70">
      <img
        src={notification.icon}
        alt={notification.name}
        className="h-10 w-10 rounded-full"
      />
      <div className="flex w-full flex-col">
        <div className="flex w-full items-start justify-between">
          <span className="text-sm font-medium">{notification.name}</span>
          <span className="text-xs text-neutral-400">
            {notification.timeAgo}
          </span>
        </div>
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          {notification.message}
        </span>
      </div>
    </div>
  )
}

const notifications: NotificationData[] = [
  {
    id: 1,
    name: "Track Order",
    message: "Your order #8921 is out for delivery 📦. Track here: bit.ly/track",
    timeAgo: "2m ago",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  },
  {
    id: 2,
    name: "OTP Verification",
    message: "Your OTP is 4829. Do not share this with anyone 🔒.",
    timeAgo: "5m ago",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  },
  {
    id: 3,
    name: "Appointment",
    message: "Confirmed: Dental checkup tomorrow at 4 PM 🦷.",
    timeAgo: "10m ago",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  },
  {
    id: 4,
    name: "New Collection",
    message: "Check out our Summer Collection 2026 ☀️👗!",
    timeAgo: "15m ago",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  },
  {
    id: 5,
    name: "Payment Success",
    message: "₹1,200 received via UPI. Thanks for shopping with us! 💸",
    timeAgo: "20m ago",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  },
  {
    id: 6,
    name: "Feedback",
    message: "How was your experience? Rate us ⭐️⭐️⭐️⭐️⭐️",
    timeAgo: "30m ago",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  },
  {
    id: 7,
    name: "Abandoned Cart",
    message: "You left items in your cart! Complete purchase now for 10% off 🛒",
    timeAgo: "1h ago",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  },
  {
    id: 8,
    name: "Support Log",
    message: "Ticket #404: Issue resolved. Let us know if you need help 🛠️",
    timeAgo: "2h ago",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  },
  {
    id: 9,
    name: "Welcome",
    message: "Hi Rahul! Welcome to Marichi Solutions. Create your first bot now 🤖",
    timeAgo: "3h ago",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  },
  {
    id: 10,
    name: "Webinar Alert",
    message: "Live in 10 mins: How to Scale Sales on WhatsApp 📈. Join link: zoom.us/j/...",
    timeAgo: "4h ago",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  },
]

import { motion } from "motion/react"
import { Meteors } from "./ui/meteors"
import { DotPattern } from "./ui/dot-pattern"
import { cn } from "@/lib/utils"

// ... (Notification data remains the same, so we don't need to repeat it in the tool call if it's unchanged, but for `replace_file_content` we need the full block context or precise targeting. Since I'm replacing the `HeroSection` and imports, I'll target the component and imports primarily. I will use `replace_file_content` carefully to update the component.)

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 pb-8 pt-10 md:px-8 md:py-20 lg:flex-row lg:gap-20">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="flex flex-col items-start gap-4 lg:w-1/2">
        <motion.h1
          className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          5X Your Revenue
          with the Power of WhatsApp
        </motion.h1>
        <motion.p
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-l sm:leading-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Broadcast, Automate, Engage, Sell – Powered by Official WhatsApp Business API. Scale customer engagement and drive 3–5× higher revenue.
        </motion.p>
        <motion.div
          className="flex flex-col items-start gap-2 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/signup"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="#demo"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Request Demo
          </Link>
        </motion.div>

        <motion.div
          className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span>Official WhatsApp API</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span>Green Tick Verification</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span>98% Open Rates</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative flex w-full max-w-[400px] flex-col overflow-hidden sm:max-w-[500px] lg:w-1/2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="relative flex h-[350px] w-full flex-col overflow-hidden rounded-lg bg-background p-4 shadow-sm sm:h-[400px] sm:p-6">
          <AnimatedList
            stackGap={20}
            columnGap={105}
            scaleFactor={0.05}
            scrollDownDuration={5}
            formationDuration={1}
          >
            {notifications.map((notification) => (
              <Notification key={notification.id} notification={notification} />
            ))}
          </AnimatedList>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-background to-transparent z-10"></div>
        </div>
      </motion.div>
    </section>
  )
}
