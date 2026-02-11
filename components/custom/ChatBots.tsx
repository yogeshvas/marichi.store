"use client"
import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Bot,
  Database,
  CreditCard,
  Megaphone,
  FileSignature,
  Users,
  ArrowRight,
  CheckCircle2,
  MoreVertical,
  Phone,
  Video,
  Send,
  Paperclip,
  Smile,
  ChevronLeft
} from 'lucide-react';

interface Message {
  id: number;
  type: 'received' | 'sent' | 'system' | 'image' | 'file' | 'payment';
  content: string;
  time?: string;
  delay: number;
}

interface FeatureData {
  id: string;
  tabName: string;
  icon: React.ReactNode;
  title: string;
  description?: string;
  points?: string[];
  chatData?: {
    contactName: string;
    avatarColor: string;
    messages: Message[];
  };
}

const features: FeatureData[] = [
  {
    id: 'overview',
    tabName: 'Overview',
    icon: <LayoutDashboard size={18} />,
    title: 'Overview',
    description: 'Marichi is a complete WhatsApp-first business operating system designed to power customer conversations from first message to final transaction.',
    chatData: {
      contactName: 'Marichi Bot',
      avatarColor: 'bg-blue-500',
      messages: [
        { id: 1, type: 'received', content: 'Welcome to Marichi! 👋', delay: 500 },
        { id: 2, type: 'received', content: 'I can help you with Sales, Support, and Operations. What would you like to explore?', delay: 1500 },
        { id: 3, type: 'sent', content: 'Show me the catalog please', delay: 3000 },
      ]
    }
  },
  {
    id: 'chatbots',
    tabName: 'AI Chatbots',
    icon: <Bot size={18} />,
    title: 'AI-Powered WhatsApp Chatbots',
    points: [
      'Context-aware conversations',
      'Multi-language support',
      'Intelligent decision trees',
      'AI + rule-based hybrid logic',
      'Seamless human handover'
    ],
    chatData: {
      contactName: 'Fashion Store Support',
      avatarColor: 'bg-pink-500',
      messages: [
        { id: 1, type: 'sent', content: 'Do you have this sneaker in size 9?', delay: 500 },
        { id: 2, type: 'received', content: 'Checking stock for you... 🔍', delay: 1500 },
        { id: 3, type: 'received', content: 'Yes! We have 2 pairs left in US 9. Would you like to reserve one?', delay: 3000 },
        { id: 4, type: 'sent', content: 'Yes please!', delay: 4500 },
      ]
    }
  },
  {
    id: 'crm',
    tabName: 'CRM Integrations',
    icon: <Database size={18} />,
    title: 'CRM & System Integrations',
    points: [
      'Salesforce, Zoho, HubSpot, custom CRMs',
      'ERP & OMS integrations',
      'Real-time data sync',
      'Unified customer profiles'
    ],
    chatData: {
      contactName: 'CRM Alert System',
      avatarColor: 'bg-purple-600',
      messages: [
        { id: 1, type: 'system', content: '🆕 New Lead Created in Salesforce', delay: 500 },
        { id: 2, type: 'received', content: 'Customer: Alice Smith\nInterest: Enterprise Plan\nSource: WhatsApp', delay: 1500 },
        { id: 3, type: 'system', content: '✅ Use-case mapped successfully', delay: 3000 },
      ]
    }
  },
  {
    id: 'payments',
    tabName: 'Payments',
    icon: <CreditCard size={18} />,
    title: 'Payments & Collections',
    points: [
      'Payment links inside WhatsApp',
      'Invoice sharing',
      'EMI & reminders',
      'Reconciliation support'
    ],
    chatData: {
      contactName: 'Billing Assistant',
      avatarColor: 'bg-green-600',
      messages: [
        { id: 1, type: 'received', content: 'Your subscription is due for renewal.', delay: 500 },
        { id: 2, type: 'payment', content: 'Invoice #INV-2024-001\nAmount: $49.00', delay: 1500 },
        { id: 3, type: 'sent', content: 'Paid via UPI.', delay: 3500 },
        { id: 4, type: 'received', content: 'Thank you! Payment received. ✅', delay: 5000 },
      ]
    }
  },
  {
    id: 'marketing',
    tabName: 'Marketing',
    icon: <Megaphone size={18} />,
    title: 'Marketing Automation',
    points: [
      'Broadcast campaigns',
      'Click-to-WhatsApp ads',
      'Segmentation & personalization',
      'Abandoned cart recovery'
    ],
    chatData: {
      contactName: 'Summer Promo',
      avatarColor: 'bg-orange-500',
      messages: [
        { id: 1, type: 'image', content: 'Summer Sale!', delay: 500 },
        { id: 2, type: 'received', content: 'Hi Sarah! ☀️ Our Summer Collection is here. Get 30% off this weekend only!', delay: 1500 },
        { id: 3, type: 'sent', content: 'Show me the dresses 👗', delay: 3000 },
      ]
    }
  },
  {
    id: 'documents',
    tabName: 'Documents',
    icon: <FileSignature size={18} />,
    title: 'Document Sharing & E-Sign',
    points: [
      'KYC documents',
      'Agreements & contracts',
      'Consent capture',
      'Secure digital signing'
    ],
    chatData: {
      contactName: 'DocuSign Bot',
      avatarColor: 'bg-blue-600',
      messages: [
        { id: 1, type: 'received', content: 'Please review and sign the service agreement to get started.', delay: 500 },
        { id: 2, type: 'file', content: 'Service_Agreement_v2.pdf', delay: 1500 },
        { id: 3, type: 'sent', content: 'Signed and uploaded.', delay: 3500 },
        { id: 4, type: 'received', content: 'Received. Account activated! 🚀', delay: 5000 },
      ]
    }
  },
  {
    id: 'collaboration',
    tabName: 'Collaboration',
    icon: <Users size={18} />,
    title: 'AI + Human Collaboration',
    points: [
      'Smart agent routing',
      'Conversation summaries',
      'Agent assist suggestions',
      'Performance analytics'
    ],
    chatData: {
      contactName: 'Support Team',
      avatarColor: 'bg-indigo-500',
      messages: [
        { id: 1, type: 'sent', content: 'I have a complex issue with my API key.', delay: 500 },
        { id: 2, type: 'received', content: 'I understand. Let me connect you with a specialist...', delay: 1500 },
        { id: 3, type: 'system', content: '👤 Agent James joined', delay: 3000 },
        { id: 4, type: 'received', content: 'Hi, James here. I see you\'re having API trouble. Let\'s fix that.', delay: 4500 },
      ]
    }
  }
];

const PhoneMockup: React.FC<{ data: FeatureData['chatData'] }> = ({ data }) => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);

  useEffect(() => {
    setVisibleMessages([]);
    if (!data) return;

    let timers: NodeJS.Timeout[] = [];

    data.messages.forEach((msg) => {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, msg]);
      }, msg.delay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [data]);

  if (!data) return null;

  return (
    <div className="w-[320px] h-[620px] bg-black rounded-[48px] p-3  relative overflow-hidden mx-auto lg:mx-0">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 mx-auto w-36 h-7 bg-black rounded-b-3xl z-20"></div>

      {/* Screen Content */}
      <div className="w-full h-full bg-[#E5DDD5] rounded-[40px] overflow-hidden flex flex-col relative">

        {/* Chat Header */}
        <div className="bg-[#075E54] px-4 py-3 pt-9 text-white flex items-center gap-3 shadow-md z-10">
          <ChevronLeft size={22} className="flex-shrink-0" />
          <div className={`w-9 h-9 rounded-full ${data.avatarColor} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
            {data.contactName[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm truncate">{data.contactName}</div>
            <div className="text-[11px] opacity-90">online</div>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Video size={20} />
            <Phone size={20} />
            <MoreVertical size={20} />
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto bg-[#E5DDD5] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
          <div className="flex justify-center mb-3">
            <div className="text-[11px] bg-[#FFFBDA] text-neutral-700 py-1.5 px-3 rounded-lg shadow-sm">
              Messages are end-to-end encrypted
            </div>
          </div>

          {visibleMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col max-w-[85%] ${msg.type === 'sent' ? 'ml-auto items-end' : 'mr-auto items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              {msg.type === 'system' ? (
                <div className="bg-[#FFFBDA] text-xs text-neutral-700 px-3 py-1.5 rounded-lg shadow-sm w-full text-center my-1">
                  {msg.content}
                </div>
              ) : (
                <div className={`
                  relative px-3 py-2 rounded-lg text-sm shadow-md
                  ${msg.type === 'sent' ? 'bg-[#D9FDD3] text-black rounded-tr-sm' : 'bg-white text-black rounded-tl-sm'}
                  ${msg.type === 'image' ? 'p-1' : ''}
                `}>
                  {msg.type === 'image' && (
                    <div className="w-52 h-36 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-1 flex items-center justify-center text-orange-500">
                      <Megaphone size={32} />
                    </div>
                  )}
                  {msg.type === 'file' && (
                    <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded mb-1 w-full border border-neutral-200">
                      <div className="w-10 h-12 bg-red-100 rounded flex items-center justify-center text-red-600">
                        <FileSignature size={20} />
                      </div>
                      <div className="text-xs font-medium truncate flex-1">{msg.content}</div>
                    </div>
                  )}
                  {msg.type === 'payment' && (
                    <div className="bg-green-50 p-3 rounded mb-1 border border-green-200 w-full">
                      <div className="flex items-center gap-2 text-green-700 font-bold mb-2">
                        <CreditCard size={16} />
                        <span className="text-sm">Payment Request</span>
                      </div>
                      <div className="text-xs text-neutral-700 whitespace-pre-wrap mb-3">{msg.content}</div>
                      <div className="bg-green-600 text-white text-xs py-2 rounded text-center font-semibold cursor-pointer hover:bg-green-700 transition">
                        Pay Now
                      </div>
                    </div>
                  )}

                  {msg.type !== 'image' && msg.type !== 'file' && msg.type !== 'payment' && (
                    <span className="whitespace-pre-wrap leading-relaxed">{msg.content}</span>
                  )}

                  <div className="flex justify-end items-center gap-1 mt-1">
                    <span className="text-[10px] text-neutral-500">10:42 AM</span>
                    {msg.type === 'sent' && <CheckCircle2 size={12} className="text-blue-500" />}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-[#F0F0F0] p-2 flex items-center gap-2 z-10">
          <Smile size={26} className="text-neutral-500 flex-shrink-0" />
          <Paperclip size={26} className="text-neutral-500 transform -rotate-45 flex-shrink-0" />
          <div className="flex-1 bg-white rounded-full px-4 py-2.5 text-sm text-neutral-400 shadow-sm">
            Type a message
          </div>
          <div className="w-11 h-11 bg-[#00A884] rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0 cursor-pointer hover:bg-[#008f72] transition">
            <Send size={18} />
          </div>
        </div>

      </div>
    </div>
  );
};


const Omnibox: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState('overview');

  const activeFeature = features.find(f => f.id === activeTabId) || features[0];

  return (

    <div className="min-h-screen bg-white from-slate-50 via-white to-slate-50 py-16 px-4">
      <div className="container mx-auto max-w-7xl">

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white p-2 rounded-2xl gap-2 overflow-x-auto max-w-full">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTabId(feature.id)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${activeTabId === feature.id
                  ? 'border border-neutral-300 text-black '
                  : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
                  }`}
              >
                <span>{feature.icon}</span>
                {feature.tabName}
              </button>
            ))}
          </div>
        </div>

        {/* Main Omnibox */}
        <div className="relative bg-white rounded-3xl p-8 lg:p-12 border border-neutral-200 overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-16 w-full items-center relative z-10">

            {/* Left Content */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">


              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                {activeFeature.title}
              </h2>

              {activeFeature.description && (
                <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
                  {activeFeature.description}
                </p>
              )}

              {activeFeature.points && (
                <div className="grid grid-cols-1 gap-4 w-full max-w-lg mb-10">
                  {activeFeature.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition">
                      <div className="flex-shrink-0 text-green-600 bg-green-100 p-1.5 rounded-full mt-0.5">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="text-neutral-800 font-medium text-base leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              )}

              <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-base hover:bg-neutral-800 transition-all flex items-center gap-3 group shadow-lg hover:shadow-xl ">
                Book a Product Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="transform  transition-transform duration-500 ease-out">
                <PhoneMockup data={activeFeature.chatData} />
              </div>
            </div>

          </div>

          {/* Background Gradients */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-100 to-red-100 opacity-30 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-red-100 to-red-100 opacity-30 blur-3xl rounded-full pointer-events-none" />
        </div>

        <div className="mt-12 text-center flex items-center justify-center gap-3">
          <div className="h-px bg-neutral-300 w-16" />
          <p className="text-xs text-neutral-400 font-semibold uppercase tracking-widest">Powered by Marichi OS</p>
          <div className="h-px bg-neutral-300 w-16" />
        </div>
      </div>
    </div>
  );
};

export default Omnibox;