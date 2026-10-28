"use client";

import { Send } from "lucide-react";
import { type FormEvent, useRef, useState } from "react";
import { contactLinks, profile } from "@/data/portfolio";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const isSubmitting = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting.current) return;
    isSubmitting.current = true;
    setStatus("loading");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          projectType: formData.get("projectType"),
          message: formData.get("message"),
        }),
      });
      const result: unknown = await response.json();
      const message = result && typeof result === "object" && "message" in result && typeof result.message === "string"
        ? result.message
        : undefined;

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(message || "Unable to send your message. Please try again or email me directly.");
        return;
      }

      form.reset();
      setStatus("success");
      setStatusMessage(message || "Message sent successfully. Thanks for reaching out!");
    } catch {
      setStatus("error");
      setStatusMessage(controller.signal.aborted
        ? "This is taking longer than expected. Delivery could not be confirmed. Please try again later or email me directly."
        : "Delivery could not be confirmed. Check your connection and try again, or email me directly.");
    } finally {
      window.clearTimeout(timeout);
      isSubmitting.current = false;
    }
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
            <div className="rounded-2xl border border-cyan-300/20 bg-panel/95 p-5 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Direct Contact</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Open to full-stack roles and client projects.</h3>
              <p className="mt-3 text-sm leading-6 text-cyan-50/75">
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
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-panel/95 p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-panel"
                >
                  <span className="rounded-lg bg-cyan-300/10 p-3 text-cyan-200">
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
            aria-busy={status === "loading"}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-panel/95 p-6 shadow-card md:p-8"
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
                    className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-300">Email</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50"
                  />
                </label>
              </div>
              <label className="mt-4 block space-y-2">
                <span className="text-sm font-medium text-slate-300">Project Type</span>
                <input
                  name="projectType"
                  type="text"
                  placeholder="SaaS dashboard, e-commerce app, API integration..."
                  className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50"
                />
              </label>
              <label className="mt-4 block space-y-2">
                <span className="text-sm font-medium text-slate-300">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder={`Hi ${profile.name.split(" ")[0]}, I would like to discuss...`}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50"
                />
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                className="primary-action mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "loading" ? "Sending..." : status === "error" ? "Try Again" : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
              <p role="status" aria-live="polite" aria-atomic="true" className={`mt-4 text-sm ${status === "success" ? "text-cyan-200" : status === "error" ? "text-rose-300" : "text-slate-400"}`}>
                {statusMessage || (status === "loading" ? "Sending your message..." : "Have a role or project in mind? Send me a message.")}
              </p>
              {status === "error" && (
                <a href={`mailto:${profile.email}`} className="mt-2 inline-block text-sm text-cyan-200 underline underline-offset-4">
                  Email me directly
                </a>
              )}
            </div>
          </form>
        </div>
      </div>
    </MotionSection>
  );
}
