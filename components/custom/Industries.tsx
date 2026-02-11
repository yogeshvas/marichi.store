"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Stethoscope,
  ShieldCheck,
  ShoppingBag,
  Car,
  Truck,
  GraduationCap,
  Layers,
  CheckCircle2,
  Send,
  ChevronLeft,
  Phone,
  Video,
  MoreVertical,
  Smile,
  Paperclip,
  Clock,
  CalendarCheck,
  FileText,
  PackageCheck,
  Wrench,
  MapPin,
  BookOpen,
} from "lucide-react";

interface Message {
  id: number;
  type: "received" | "sent" | "system";
  content: string;
  delay: number;
}

interface IndustryData {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  bgGradient: string;
  tagline: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  featureIcon: React.ElementType;
  chatData: {
    contactName: string;
    avatarColor: string;
    messages: Message[];
  };
}

const industries: IndustryData[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    color: "text-emerald-600",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    tagline: "healthcare",
    title: "Clinic Appointment Booking",
    description:
      "Patients book, reschedule, and get reminders — all on WhatsApp. Reduce no-shows by 40%.",
    stat: "40%",
    statLabel: "Fewer No-Shows",
    featureIcon: CalendarCheck,
    chatData: {
      contactName: "City Clinic",
      avatarColor: "bg-emerald-500",
      messages: [
        {
          id: 1,
          type: "received",
          content: "Hi Priya! 👋 Your dental checkup is tomorrow at 4:00 PM with Dr. Mehta.",
          delay: 600,
        },
        {
          id: 2,
          type: "received",
          content: "Reply 1 to Confirm\nReply 2 to Reschedule\nReply 3 to Cancel",
          delay: 1800,
        },
        { id: 3, type: "sent", content: "1", delay: 3200 },
        {
          id: 4,
          type: "received",
          content: "✅ Confirmed! See you tomorrow. Don't forget to carry your insurance card.",
          delay: 4500,
        },
      ],
    },
  },
  {
    id: "insurance",
    name: "Insurance",
    icon: ShieldCheck,
    color: "text-blue-600",
    bgGradient: "from-blue-500/10 to-indigo-500/10",
    tagline: "insurance",
    title: "Policy Renewals & Claims",
    description:
      "Automated renewal reminders, document collection, and claim status updates.",
    stat: "3x",
    statLabel: "Faster Claims",
    featureIcon: FileText,
    chatData: {
      contactName: "SecureLife Insurance",
      avatarColor: "bg-blue-600",
      messages: [
        {
          id: 1,
          type: "received",
          content: "Hi Rahul! Your health policy #HL-2024 expires on March 15.",
          delay: 600,
        },
        {
          id: 2,
          type: "received",
          content: "🔄 Renew now to keep your family covered. Premium: ₹12,500/yr",
          delay: 1800,
        },
        { id: 3, type: "sent", content: "How do I renew?", delay: 3200 },
        {
          id: 4,
          type: "received",
          content: "Click here to pay securely 👉 pay.securelife.in/renew\n\nOr reply CALL for agent assistance.",
          delay: 4500,
        },
      ],
    },
  },
  {
    id: "retail",
    name: "Retail",
    icon: ShoppingBag,
    color: "text-orange-600",
    bgGradient: "from-orange-500/10 to-amber-500/10",
    tagline: "retail",
    title: "Order & Delivery Updates",
    description:
      "From catalog browse to delivery confirmation, keep customers informed at every step.",
    stat: "98%",
    statLabel: "Open Rate",
    featureIcon: PackageCheck,
    chatData: {
      contactName: "FreshMart",
      avatarColor: "bg-orange-500",
      messages: [
        {
          id: 1,
          type: "received",
          content: "📦 Order #FM-8921 Update!\n\nYour groceries are out for delivery.",
          delay: 600,
        },
        {
          id: 2,
          type: "received",
          content: "🚚 Estimated arrival: 30 mins\n📍 Track live: track.freshmart.in/8921",
          delay: 1800,
        },
        { id: 3, type: "sent", content: "Can I change delivery address?", delay: 3200 },
        {
          id: 4,
          type: "received",
          content: "Sure! Please share your updated address and I'll notify the driver. 🏠",
          delay: 4500,
        },
      ],
    },
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: Car,
    color: "text-red-600",
    bgGradient: "from-red-500/10 to-rose-500/10",
    tagline: "automotive",
    title: "Service Booking & Parts",
    description:
      "Book service appointments, share quotes, and notify when parts arrive.",
    stat: "2x",
    statLabel: "More Bookings",
    featureIcon: Wrench,
    chatData: {
      contactName: "AutoCare Plus",
      avatarColor: "bg-red-500",
      messages: [
        {
          id: 1,
          type: "received",
          content: "Hi Amit! Your Honda City (MH-02-AB-1234) is due for its 20,000 km service. 🚗",
          delay: 600,
        },
        { id: 2, type: "sent", content: "Yes, I'd like to book for Saturday", delay: 1800 },
        {
          id: 3,
          type: "received",
          content: "✅ Booked!\n📅 Sat, Feb 15 at 10 AM\n📍 AutoCare Andheri West\n\nEstimated cost: ₹4,500",
          delay: 3200,
        },
        {
          id: 4,
          type: "received",
          content: "We'll also check your brake pads. Drop-off anytime after 9 AM! 🔧",
          delay: 4800,
        },
      ],
    },
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    color: "text-violet-600",
    bgGradient: "from-violet-500/10 to-purple-500/10",
    tagline: "logistics",
    title: "Shipment Tracking",
    description:
      "Real-time delivery updates, POD collection, and driver coordination.",
    stat: "70%",
    statLabel: "Fewer Calls",
    featureIcon: MapPin,
    chatData: {
      contactName: "QuickShip Logistics",
      avatarColor: "bg-violet-600",
      messages: [
        {
          id: 1,
          type: "system",
          content: "📍 Shipment #QS-44210 Status Update",
          delay: 600,
        },
        {
          id: 2,
          type: "received",
          content: "Your shipment is at the Mumbai hub.\n\n🟢 Picked Up → 🟢 In Transit → 🟡 Out for Delivery",
          delay: 1800,
        },
        { id: 3, type: "sent", content: "ETA?", delay: 3200 },
        {
          id: 4,
          type: "received",
          content: "Expected delivery: Today by 6 PM.\nDriver: Rajesh (+91-98xxx)\n\nReply POD to upload proof of delivery.",
          delay: 4500,
        },
      ],
    },
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    color: "text-cyan-600",
    bgGradient: "from-cyan-500/10 to-sky-500/10",
    tagline: "education",
    title: "Admissions & Fee Collection",
    description:
      "Application tracking, fee reminders, and parent communication at scale.",
    stat: "5x",
    statLabel: "Faster Response",
    featureIcon: BookOpen,
    chatData: {
      contactName: "Bright Academy",
      avatarColor: "bg-cyan-500",
      messages: [
        {
          id: 1,
          type: "received",
          content: "Dear Parent, 🏫\n\nFee reminder for Ananya (Class 8-B)\nAmount: ₹25,000\nDue: Feb 28, 2026",
          delay: 600,
        },
        {
          id: 2,
          type: "received",
          content: "Pay online 👉 pay.brightacademy.in/fees\n\nOr reply RECEIPT after bank transfer.",
          delay: 1800,
        },
        { id: 3, type: "sent", content: "RECEIPT", delay: 3200 },
        {
          id: 4,
          type: "received",
          content: "Please share the payment screenshot and we'll update your account within 24 hrs. ✅",
          delay: 4500,
        },
      ],
    },
  },
];

// Mini phone mockup for industry chat preview
const IndustryPhoneMockup: React.FC<{ data: IndustryData["chatData"]; color: string }> = ({
  data,
  color,
}) => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);

  useEffect(() => {
    setVisibleMessages([]);
    if (!data) return;

    const timers: NodeJS.Timeout[] = [];

    data.messages.forEach((msg) => {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg]);
      }, msg.delay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [data]);

  if (!data) return null;

  return (
    <div className="w-[240px] h-[440px] sm:w-[280px] sm:h-[520px] bg-black rounded-[32px] sm:rounded-[40px] p-2 sm:p-2.5 relative overflow-hidden mx-auto shadow-2xl shadow-black/20">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 mx-auto w-28 h-6 bg-black rounded-b-2xl z-20" />

      {/* Screen */}
      <div className="w-full h-full bg-[#E5DDD5] rounded-[32px] overflow-hidden flex flex-col relative">
        {/* Chat Header */}
        <div className="bg-[#075E54] px-3 py-2.5 pt-8 text-white flex items-center gap-2 shadow-md z-10">
          <ChevronLeft size={18} className="flex-shrink-0" />
          <div
            className={`w-7 h-7 rounded-full ${data.avatarColor} flex items-center justify-center font-bold text-[10px] flex-shrink-0`}
          >
            {data.contactName[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-xs truncate">{data.contactName}</div>
            <div className="text-[9px] opacity-90">online</div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Video size={16} />
            <Phone size={16} />
            <MoreVertical size={16} />
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-3 space-y-1.5 overflow-y-auto bg-[#E5DDD5] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-[length:300px]">
          <div className="flex justify-center mb-2">
            <div className="text-[9px] bg-[#FFFBDA] text-neutral-700 py-1 px-2 rounded-md shadow-sm">
              Messages are end-to-end encrypted
            </div>
          </div>

          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col max-w-[85%] ${msg.type === "sent" ? "ml-auto items-end" : "mr-auto items-start"
                }`}
            >
              {msg.type === "system" ? (
                <div className="bg-[#FFFBDA] text-[10px] text-neutral-700 px-2 py-1 rounded-md shadow-sm w-full text-center my-1">
                  {msg.content}
                </div>
              ) : (
                <div
                  className={`
                    relative px-2.5 py-1.5 rounded-lg text-[11px] shadow-md leading-relaxed
                    ${msg.type === "sent"
                      ? "bg-[#D9FDD3] text-black rounded-tr-sm"
                      : "bg-white text-black rounded-tl-sm"
                    }
                  `}
                >
                  <span className="whitespace-pre-wrap">{msg.content}</span>
                  <div className="flex justify-end items-center gap-1 mt-0.5">
                    <span className="text-[8px] text-neutral-500">10:42 AM</span>
                    {msg.type === "sent" && (
                      <CheckCircle2 size={10} className="text-blue-500" />
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-[#F0F0F0] p-1.5 flex items-center gap-1.5 z-10">
          <Smile size={20} className="text-neutral-500 flex-shrink-0" />
          <Paperclip
            size={20}
            className="text-neutral-500 transform -rotate-45 flex-shrink-0"
          />
          <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[10px] text-neutral-400 shadow-sm">
            Type a message
          </div>
          <div className="w-8 h-8 bg-[#00A884] rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0">
            <Send size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Floating stat card
const FloatingStat: React.FC<{
  stat: string;
  label: string;
  icon: React.ElementType;
  delay: number;
}> = ({ stat, label, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="absolute"
    style={{
      bottom: "10%",
      right: "-5%",
    }}
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="bg-white rounded-2xl p-4 shadow-xl border border-neutral-100 flex items-center gap-3"
    >
      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
        <Icon size={20} className="text-green-600" />
      </div>
      <div>
        <div className="text-2xl font-black text-neutral-900">{stat}</div>
        <div className="text-xs text-neutral-500 font-medium">{label}</div>
      </div>
    </motion.div>
  </motion.div>
);

export default function Industries() {
  const [activeId, setActiveId] = useState("healthcare");
  const active = industries.find((i) => i.id === activeId) || industries[0];

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full text-sm font-semibold text-neutral-700 mb-4">
            <Layers size={16} />
            Industries
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Built for how your{" "}
            <span className="text-primary">industry works</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2">
            Every sector has unique workflows. Marichi adapts to yours.
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <motion.div
          className="flex justify-center mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex overflow-x-auto pb-2 sm:inline-flex sm:flex-wrap sm:justify-center bg-neutral-50 p-2 rounded-2xl gap-1.5 border border-neutral-100 max-w-full scrollbar-hide">
            {industries.map((industry) => {
              const Icon = industry.icon;
              const isActive = activeId === industry.id;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveId(industry.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${isActive
                    ? "bg-white text-neutral-900 shadow-md border border-neutral-200"
                    : "text-neutral-500 hover:text-neutral-800 hover:bg-white/50"
                    }`}
                >
                  <Icon size={16} className={isActive ? active.color : ""} />
                  {industry.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 bg-gradient-to-br ${active.bgGradient} border border-neutral-100 overflow-hidden`}
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/60 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-white/40 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Animated grid dots */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center relative z-10">
              {/* Left: Content */}
              <div className="space-y-6 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${active.color} bg-white/80 backdrop-blur-sm border border-white`}
                >
                  <active.icon size={14} />
                  {active.tagline}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight"
                >
                  {active.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-lg"
                >
                  {active.description}
                </motion.p>

                {/* Animated stat pill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="inline-flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg border border-neutral-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <active.featureIcon size={24} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-neutral-900">
                      {active.stat}
                    </div>
                    <div className="text-sm text-neutral-500 font-medium">
                      {active.statLabel}
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 px-6 py-3 bg-black text-white rounded-full font-bold text-sm hover:bg-neutral-800 transition-all flex items-center gap-2 group shadow-lg"
                >
                  See {active.name} Solution
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>

              {/* Right: Phone Mockup */}
              <div className="order-1 lg:order-2 flex justify-center relative">
                {/* Floating circles decoration */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`absolute w-64 h-64 rounded-full border-2 border-dashed ${active.color.replace("text-", "border-")} opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                />
                <motion.div
                  animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.3, 0.15] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className={`absolute w-80 h-80 rounded-full border ${active.color.replace("text-", "border-")} opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                >
                  <IndustryPhoneMockup
                    data={active.chatData}
                    color={active.color}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
