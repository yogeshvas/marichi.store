"use client";

import React, { useState } from "react";
import { Search, MapPin, Briefcase, Mail, ArrowUpRight, Clock, CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const jobOpenings = [
  {
    id: "sales-zambia",
    title: "Sales Representative — Zambia",
    department: "sales",
    location: "zambia",
    locationDisplay: "Zambia, Africa",
    type: "full-time",
    description:
      "Drive WhatsApp commerce adoption across Zambia. You'll onboard local businesses, build merchant relationships, and grow Marichi's footprint across the region. Field-based role with strong local market ownership.",
  },
  {
    id: "sales-india",
    title: "Sales Executive — India",
    department: "sales",
    location: "gurgaon",
    locationDisplay: "Gurgaon, India (Hybrid / Remote)",
    type: "full-time",
    description:
      "Join our India sales team to acquire and grow merchant accounts across the country. Based out of Gurgaon with flexibility for remote work. You'll own a pipeline, run demos, and close deals for our WhatsApp commerce platform.",
  },
  {
    id: "sales-india-remote",
    title: "Sales Executive — India (Remote)",
    department: "sales",
    location: "remote",
    locationDisplay: "Remote, India",
    type: "full-time",
    description:
      "Fully remote sales role focused on the Indian market. Ideal for driven self-starters who can manage their territory independently. You'll prospect, run virtual demos, and close merchants onto the Marichi platform.",
  },
  {
    id: "engineer-india",
    title: "Software Engineer",
    department: "engineering",
    location: "gurgaon",
    locationDisplay: "Gurgaon, India (Hybrid / Remote)",
    type: "full-time",
    description:
      "Build the infrastructure powering conversational commerce at scale. Work on WhatsApp API integrations, merchant dashboards, and backend services. Stack includes Node.js / TypeScript, Next.js, and cloud infrastructure. Gurgaon-based with remote flexibility.",
  },
  {
    id: "engineer-india-remote",
    title: "Software Engineer (Remote)",
    department: "engineering",
    location: "remote",
    locationDisplay: "Remote, India",
    type: "full-time",
    description:
      "Fully remote engineering role. Contribute to core product features, API integrations, and platform reliability. We value async communication, strong ownership, and shipping fast. Apply if you're India-based and want to build something global from home.",
  },
];

export default function OpenRoles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState("all-departments");
  const [location, setLocation] = useState("all-locations");
  const [type, setType] = useState("all-types");
  const [selectedRole, setSelectedRole] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = department === "all-departments" || job.department === department;
    const matchesLocation = location === "all-locations" || job.location === location;
    const matchesType = type === "all-types" || job.type === type;
    return matchesSearch && matchesDept && matchesLocation && matchesType;
  });

  const handleApplyNow = (jobTitle: string) => {
    setSelectedRole(jobTitle);
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setFormStatus("success");
        form.reset();
        setSelectedRole("");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

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
            <div className="flex flex-wrap gap-3">
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-departments">All Departments</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                </SelectContent>
              </Select>

              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-locations">All Locations</SelectItem>
                  <SelectItem value="gurgaon">Gurgaon, India</SelectItem>
                  <SelectItem value="zambia">Zambia, Africa</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>

              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="w-[140px] hidden md:flex">
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

        {/* Roles List */}
        <div className="mb-20 max-w-4xl mx-auto">
          {filteredJobs.length > 0 ? (
            <div className="grid gap-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:items-center justify-between group"
                >
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{job.title}</h3>
                    <p className="text-neutral-500 mb-4 md:mb-0 max-w-2xl">{job.description}</p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <div className="inline-flex items-center gap-1.5 text-sm text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.locationDisplay}
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-sm text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200 capitalize">
                        <Briefcase className="w-3.5 h-3.5" />
                        {job.department}
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-sm text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200 capitalize">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type.replace("-", " ")}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Button
                      onClick={() => handleApplyNow(job.title)}
                      className="w-full md:w-auto bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl px-6 py-5 group-hover:-translate-y-0.5 transition-transform shadow-sm"
                    >
                      Apply Now
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50">
              <Briefcase className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">No roles match your search.</h3>
              <p className="text-neutral-500 max-w-md mx-auto">
                We're always looking for exceptional talent. If you don't see a role here, reach out directly.
              </p>
            </div>
          )}
        </div>

        {/* Application Form */}
        <div id="application-form" className="bg-neutral-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>Direct Application</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Apply fast.</h3>
              <p className="text-neutral-400 mb-8 text-lg">
                Submit your application directly. Our team reviews every profile and gets back quickly.
              </p>

              <div className="space-y-4 text-sm text-neutral-300 mb-8">
                <div className="flex gap-3 items-center">
                  <span className="font-mono text-primary bg-primary/10 px-1.5 p-1 rounded">
                    <Mail size={16} />
                  </span>
                  <span>hello@marichisolutions.com</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="font-mono text-primary bg-primary/10 px-1.5 p-1 rounded">
                    <MapPin size={16} />
                  </span>
                  <span>Gurgaon, India · Zambia, Africa · Remote</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50 backdrop-blur-sm">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle className="w-14 h-14 text-green-400" />
                  <h4 className="text-xl font-bold text-white">Application Received!</h4>
                  <p className="text-neutral-400 text-sm max-w-xs">
                    Thanks for applying. We'll review your profile and reach out shortly.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 border-neutral-600 text-white hover:bg-neutral-700"
                    onClick={() => setFormStatus("idle")}
                  >
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="hidden"
                    name="access_key"
                    value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""}
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Job Application — Marichi Solutions"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="first_name"
                      placeholder="First Name"
                      required
                      className="bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 h-11"
                    />
                    <Input
                      name="last_name"
                      placeholder="Last Name"
                      required
                      className="bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 h-11"
                    />
                  </div>

                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 h-11"
                  />

                  <Input
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    className="bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 h-11"
                  />

                  {/* Role selector */}
                  <select
                    name="role"
                    required
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full h-11 rounded-md bg-neutral-900/50 border border-neutral-700 text-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="" disabled className="text-neutral-500 bg-neutral-900">
                      Select Role Applying For
                    </option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title} className="bg-neutral-900">
                        {job.title}
                      </option>
                    ))}
                  </select>

                  <div>
                    <Input
                      type="url"
                      name="linkedin"
                      placeholder="LinkedIn Profile URL (Optional)"
                      className="bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 h-11"
                    />
                  </div>

                  <div>
                    <Input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="bg-neutral-900/50 border-neutral-700 text-neutral-400 h-12 pt-2.5 pb-2.5 px-3 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-neutral-800 file:text-white hover:file:bg-neutral-700 file:cursor-pointer cursor-pointer"
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Why are you a great fit? (Optional)"
                    className="w-full h-24 rounded-md bg-neutral-900/50 border border-neutral-700 text-white placeholder:text-neutral-500 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />

                  {formStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <XCircle className="w-4 h-4 shrink-0" />
                      <span>Something went wrong. Please try again or email us directly.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full bg-white hover:bg-neutral-200 text-neutral-900 font-semibold h-11 rounded-lg transition-colors disabled:opacity-60"
                  >
                    {formStatus === "loading" ? "Submitting…" : "Submit Application"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
