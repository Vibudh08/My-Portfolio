"use client";

import { Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { contactLinks, profile } from "@/data/portfolio";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        projectType: formData.get("projectType"),
        message: formData.get("message"),
      }),
    });
    const result = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setStatusMessage(result.message ?? "Unable to send message right now.");
      return;
    }

    form.reset();
    setStatus("success");
    setStatusMessage(result.message ?? "Message sent successfully.");
  }

  return (
    <MotionSection id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build a product that feels reliable."
          description="Reach out for full-stack roles, freelance builds, SaaS dashboards, commerce workflows, or API-heavy product work."
        />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-teal-300/20 bg-teal-300/10 p-5 shadow-glow">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">Direct Contact</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Open to full-stack roles and client projects.</h3>
              <p className="mt-3 text-sm leading-6 text-teal-50/75">
                Best fit: Next.js applications, SaaS dashboards, backend APIs, e-commerce workflows, and product UI
                systems.
              </p>
            </div>
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("#") ? undefined : "_blank"}
                  rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-0.5 hover:border-teal-300/30 hover:bg-white/[0.06]"
                >
                  <span className="rounded-lg bg-teal-300/10 p-3 text-teal-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-500">{link.label}</span>
                    <span className="block break-all text-sm font-medium text-slate-200">{link.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-panel/80 p-6 shadow-card md:p-8"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="relative">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-300">Name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300/50"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-300">Email</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300/50"
                  />
                </label>
              </div>
              <label className="mt-4 block space-y-2">
                <span className="text-sm font-medium text-slate-300">Project Type</span>
                <input
                  name="projectType"
                  type="text"
                  placeholder="SaaS dashboard, e-commerce app, API integration..."
                  className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300/50"
                />
              </label>
              <label className="mt-4 block space-y-2">
                <span className="text-sm font-medium text-slate-300">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder={`Hi ${profile.name.split(" ")[0]}, I would like to discuss...`}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300/50"
                />
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
              {statusMessage ? (
                <p className={`mt-4 text-sm ${status === "success" ? "text-teal-200" : "text-rose-300"}`}>
                  {statusMessage}
                </p>
              ) : (
                <p className="mt-4 text-sm text-slate-500">Your message will reach me by email after submit.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </MotionSection>
  );
}
