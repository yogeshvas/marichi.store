"use client";

import React, { useState } from "react";
import { Search, MapPin, Briefcase, Mail, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function OpenRoles() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section id="open-roles" className="py-24 bg-neutral-50 border-t border-neutral-100">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Open Roles</h2>
          <p className="text-xl text-neutral-500">Find your place on the team.</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
              <Input
                placeholder="Search roles..."
                className="pl-9 bg-neutral-50 border-transparent focus:bg-white transition-colors"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select defaultValue="engineering">
                <SelectTrigger className="w-[140px] md:w-[180px]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all-locations">
                <SelectTrigger className="w-[140px] md:w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-locations">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all-types">
                <SelectTrigger className="w-[140px] md:w-[180px] hidden md:flex">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="full-time">Full Time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-20 border-2 border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50 mb-20">
          <Briefcase className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">No roles match your search.</h3>
          <p className="text-neutral-500 max-w-md mx-auto">
            We're always looking for exceptional talent. If you don't see a role here, please reach out directly.
          </p>
        </div>

        {/* Direct Application CTA */}
        <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>Direct Application</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Apply fast.</h3>
              <p className="text-neutral-400 mb-8 text-lg">
                Send your CV and a short note directly to our hiring team. We review every email.
              </p>

              <a
                href="mailto:hello@marichisolutions.com"
                className="inline-flex items-center gap-2 text-2xl font-semibold text-primary hover:text-white transition-colors group"
              >
                hello@marichisolutions.com
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/50 backdrop-blur-sm">
              <h4 className="flex items-center gap-2 font-semibold mb-4 text-white">
                <Mail className="w-4 h-4 text-primary" />
                Tips for your email
              </h4>
              <ul className="space-y-4 text-sm text-neutral-300">
                <li className="flex gap-3">
                  <span className="font-mono text-primary bg-primary/10 px-1.5 rounded">Subject</span>
                  <span>[Role Name] — Your Name</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-primary bg-primary/10 px-1.5 rounded">Attach</span>
                  <span>CV as PDF</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-primary bg-primary/10 px-1.5 rounded">Include</span>
                  <span>A 2–3 line note on why this role interests you and how you can contribute.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
