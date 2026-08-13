"use client";

import { useState } from "react";
import Image from "next/image";

type HeaderProps = {
  activeSection: string;
  onNavigate: (id: string) => void;
};

const items = [
  { key: "home", label: "Home" },
  { key: "projects", label: "Work" },
  { key: "experience", label: "Experience" },
  { key: "skills", label: "Skills" },
  { key: "contact", label: "Contact" },
];

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const handleNav = (key: string) => {
    onNavigate(key);
    setOpen(false);
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-2 rounded-full px-3 py-1.5"
            aria-label="Go to home"
          >
            <span className="relative h-8 w-8 overflow-hidden rounded-full border border-accent/40">
              <Image
                src="/images/anisur.png"
                alt="Anisur Rahman Arzu"
                fill
                className="object-cover object-[center_20%]"
                sizes="32px"
              />
            </span>
            <span className="hidden sm:block font-display font-semibold tracking-tight">
              Anisur
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {items.map((item) => {
              const active = activeSection === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNav(item.key)}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    active
                      ? "text-[#04110c]"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-accent" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1UdQKpJHBLMAf6Sus04yq_hiJWjwnSdW2/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-text hover:bg-accent hover:text-[#04110c] transition-colors"
            >
              Resume
            </a>
            <button
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`h-px w-4 bg-text transition-transform ${
                    open ? "translate-y-[4px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-4 bg-text transition-transform ${
                    open ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <div className="glass absolute top-20 left-4 right-4 rounded-3xl p-4">
            {items.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left ${
                  activeSection === item.key
                    ? "bg-accent-dim text-accent"
                    : "text-text"
                }`}
              >
                {item.label}
                {activeSection === item.key && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
