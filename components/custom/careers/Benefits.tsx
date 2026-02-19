"use client";

import React from "react";
import { Check } from "lucide-react";

const benefits = [
  "PF / ESI (where applicable)",
  "Medical support",
  "Performance bonus",
  "Learning budget",
  "Device allowance",
  "Flexible hours (role-dependent)",
  "Paid leave policy"
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Benefits</h2>
            <p className="text-xl text-neutral-500 mb-8">We take care of our people.</p>
            <p className="text-sm text-neutral-400 italic mt-8">
              Benefits vary by role, location, and employment type. Details shared during the offer stage.
            </p>
          </div>

          <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-neutral-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
