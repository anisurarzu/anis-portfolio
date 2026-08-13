"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const contactItems = [
  {
    label: "Location",
    value: "Cologne, Germany",
    href: "https://maps.google.com/?q=Cologne,+Germany",
  },
  {
    label: "Email",
    value: "anisurrahman.arzu@gmail.com",
    href: "mailto:anisurrahman.arzu@gmail.com",
  },
  {
    label: "Phone",
    value: "+880 1789-879345",
    href: "tel:+8801789879345",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anisurrahman",
    href: "https://linkedin.com/in/anisurrahman",
  },
  {
    label: "GitHub",
    value: "github.com/anisurarzu",
    href: "https://github.com/anisurarzu",
  },
  {
    label: "X / Twitter",
    value: "@anisur_rahman",
    href: "https://twitter.com/anisur_rahman",
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:anisurrahman.arzu@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          eyebrow="Contact"
          title="Let’s talk about the next role."
          description="I am based in Cologne, hold a German Opportunity Card, and am open to full-time frontend and full-stack opportunities. I typically reply within one business day."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-white/[0.03] p-7 md:p-8"
          >
            <p className="text-sm text-muted">Based in</p>
            <p className="mt-1 font-display text-2xl font-semibold">
              Cologne, Germany
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Opportunity Card (Chancenkarte) holder, authorized to work in
              Germany and looking for a long-term engineering role. If you are
              hiring for React, Next.js, or product frontend work, I would like
              to hear from you.
            </p>

            <div className="mt-8 space-y-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-transparent px-3 py-3 transition-colors hover:border-border hover:bg-white/[0.03]"
                >
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-text">{item.value}</p>
                  </div>
                  <span className="text-accent">↗</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-white/[0.03] p-7 md:p-8"
          >
            <h3 className="font-display text-2xl font-semibold">
              Send a message
            </h3>
            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-muted">Name</span>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="input-field"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-muted">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="input-field"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-muted">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about the role, team, or project..."
                  className="input-field resize-none"
                />
              </label>
            </div>
            <button type="submit" className="btn-primary mt-6 w-full">
              {status === "sent" ? "Opening your email app..." : "Send message"}
            </button>
            <p className="mt-3 text-xs text-muted">
              This opens your email client so the message goes directly to me.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
