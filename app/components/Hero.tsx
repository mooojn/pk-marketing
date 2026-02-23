"use client";

import { useEffect, useState } from "react";

/**
 * Hero — Conversion-optimised lead capture section
 * Design: Editorial split-layout with inline form, zero scroll required.
 * Colors sourced exclusively from global CSS variables (green-accented palette).
 */
export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    // Trigger entrance animations after mount
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    // TODO: wire up to your actual form handler / API
    setSubmitted(true);
  }

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[var(--bg-primary)]"
      aria-label="Hero section"
    >
      {/* ─── Ambient background layers ─────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-ambient)" }}
        aria-hidden="true"
      />
      {/* Diagonal stripe texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 80px, rgba(119,185,62,0.035) 80px, rgba(119,185,62,0.035) 81px)",
        }}
        aria-hidden="true"
      />

      {/* ─── Glowing orbs ──────────────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[560px] w-[560px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent-warm) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent-sage) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* ─── Main content grid ─────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-12 xl:px-16">

        {/* ── LEFT COLUMN: copy ──────────────────────────────────────────── */}
        <div
          className={`flex flex-col items-start lg:flex-1 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >

          {/* Eyebrow badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--accent-warm)]/10 px-4 py-1.5"
            style={{ transitionDelay: "0.1s" }}
          >
            {/* Pulsing dot */}
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-warm)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-warm)]" />
            </span>
            <span
              className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-warm)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Certified Marketing Agency
            </span>
          </div>

          {/* ── Headline — benefit-driven, ≤ 8 words ─────────────────────── */}
          <h1
            className="mb-5 text-[clamp(2rem,3.8vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Marketing That{" "}
            <span
              className="relative inline-block"
              style={{
                WebkitTextStroke: "1.5px var(--accent-warm)",
                WebkitTextFillColor: "transparent",
              }}
            >
              Actually Grows
              {/* animated underline */}
              <span
                className="absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-[var(--accent-warm)] to-[var(--accent-sage)]"
                style={{
                  width: isLoaded ? "100%" : "0%",
                  transition: "width 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s",
                }}
                aria-hidden="true"
              />
            </span>{" "}
            Your Business
          </h1>

          {/* ── Sub-headline — tackles objection, builds trust ────────────── */}
          <p
            className="mb-8 max-w-md text-base leading-[1.75] text-[var(--text-muted)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stop guessing what works. We build data-backed campaigns that fill your pipeline — or you don't pay.{" "}
            <span className="font-semibold text-[var(--text-primary)]">
              Results guaranteed, zero jargon.
            </span>
          </p>

          {/* ── Social-proof strip ───────────────────────────────────────── */}
          <div className="flex flex-wrap items-center gap-5">

            {/* Star rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-[var(--accent-gold)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-[var(--text-primary)]">4.9</span>
              <span className="text-xs text-[var(--text-muted)]">/ Trustpilot</span>
            </div>

            <div className="h-4 w-px bg-[var(--border-subtle)]" aria-hidden="true" />

            {/* Client count */}
            <p className="text-sm text-[var(--text-muted)]">
              <span className="font-bold text-[var(--text-primary)]">50+</span> international clients
            </p>

            <div className="h-4 w-px bg-[var(--border-subtle)]" aria-hidden="true" />

            {/* Projects */}
            <p className="text-sm text-[var(--text-muted)]">
              <span className="font-bold text-[var(--text-primary)]">150+</span> projects delivered
            </p>
          </div>
        </div>

        {/* ── RIGHT COLUMN: conversion form ──────────────────────────────── */}
        <div
          className={`mt-12 w-full transition-all duration-700 lg:mt-0 lg:w-[420px] xl:w-[460px] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.25s" }}
        >
          {/* Form card */}
          <div
            className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white/70 p-8 shadow-2xl backdrop-blur-xl"
            style={{ boxShadow: "0 32px 80px rgba(119,185,62,0.12), 0 8px 24px rgba(0,0,0,0.06)" }}
          >
            {/* Top accent bar */}
            <div
              className="absolute left-0 top-0 h-1 w-full rounded-t-2xl"
              style={{ background: "linear-gradient(90deg, var(--accent-warm), var(--accent-sage))" }}
              aria-hidden="true"
            />

            {!submitted ? (
              <>
                {/* Card headline */}
                <div className="mb-6">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-warm)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Free Strategy Call
                  </p>
                  <h2
                    className="mt-1 text-2xl font-bold text-[var(--text-primary)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Let's grow your brand
                  </h2>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    No commitment. Get a custom growth plan in 48 h.
                  </p>
                </div>

                {/* ─── Form ─────────────────────────────────────────────── */}
                <form onSubmit={handleSubmit} noValidate aria-label="Lead capture form">

                  {/* Name field */}
                  <div className="mb-4">
                    <label
                      htmlFor="hero-name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        id="hero-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        required
                        aria-required="true"
                        className={`
                          w-full rounded-xl border bg-[var(--bg-secondary)] px-4 py-3.5 text-sm text-[var(--text-primary)]
                          placeholder:text-slate-400 outline-none transition-all duration-200
                          ${focused === "name"
                            ? "border-[var(--accent-warm)] shadow-[0_0_0_3px_rgba(119,185,62,0.18)]"
                            : "border-[var(--border-subtle)] hover:border-[var(--accent-warm)]/50"
                          }
                        `}
                        style={{ fontFamily: "var(--font-display)" }}
                      />
                      {/* Focus indicator icon */}
                      {focused === "name" && (
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--accent-warm)]" aria-hidden="true">
                          ✦
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="mb-6">
                    <label
                      htmlFor="hero-email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Work Email
                    </label>
                    <div className="relative">
                      <input
                        id="hero-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        required
                        aria-required="true"
                        className={`
                          w-full rounded-xl border bg-[var(--bg-secondary)] px-4 py-3.5 text-sm text-[var(--text-primary)]
                          placeholder:text-slate-400 outline-none transition-all duration-200
                          ${focused === "email"
                            ? "border-[var(--accent-warm)] shadow-[0_0_0_3px_rgba(119,185,62,0.18)]"
                            : "border-[var(--border-subtle)] hover:border-[var(--accent-warm)]/50"
                          }
                        `}
                        style={{ fontFamily: "var(--font-display)" }}
                      />
                      {focused === "email" && (
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--accent-warm)]" aria-hidden="true">
                          ✦
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="submit"
                    className="
                      group relative w-full overflow-hidden rounded-xl px-6 py-4
                      text-sm font-bold uppercase tracking-[0.15em] text-white
                      transition-all duration-300
                      hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(119,185,62,0.45)]
                      active:translate-y-0 active:shadow-none
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-warm)] focus-visible:ring-offset-2
                    "
                    style={{
                      background: "linear-gradient(135deg, var(--accent-warm) 0%, var(--accent-sage) 100%)",
                      fontFamily: "var(--font-mono)",
                    }}
                    aria-label="Get your free marketing strategy"
                  >
                    {/* Shimmer overlay on hover */}
                    <span
                      className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-500 group-hover:translate-x-full"
                      aria-hidden="true"
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      Get My Free Strategy
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                  {/* Trust micro-copy */}
                  <p className="mt-3 text-center text-[11px] text-[var(--text-muted)]">
                    🔒 No spam. No credit card. 100% free.
                  </p>
                </form>
              </>
            ) : (
              /* ── Success state ─────────────────────────────────────────── */
              <div className="flex flex-col items-center py-8 text-center" role="status" aria-live="polite">
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: "rgba(119,185,62,0.12)" }}
                >
                  <svg className="h-8 w-8 text-[var(--accent-warm)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="mb-2 text-xl font-bold text-[var(--text-primary)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  You're on the list!
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Expect a custom strategy in your inbox within{" "}
                  <span className="font-semibold text-[var(--accent-warm)]">48 hours</span>.
                </p>
              </div>
            )}
          </div>

          {/* Below-card logos */}
          <div className="mt-5 flex items-center justify-center gap-6">
            {["Trustpilot", "Google", "Clutch"].map((name) => (
              <span
                key={name}
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Bottom metrics bar ────────────────────────────────────────────── */}
      <div
        className={`absolute bottom-0 left-0 w-full transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          transitionDelay: "0.55s",
          background: "linear-gradient(90deg, var(--accent-warm) 0%, var(--accent-sage) 100%)",
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            { number: "150+", label: "Projects Delivered" },
            { number: "1M+", label: "Traffic Generated" },
            { number: "100K+", label: "Leads Captured" },
            { number: "50+", label: "International Clients" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-5 text-center">
              <span
                className="text-xl font-bold text-white md:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.number}
              </span>
              <span
                className="mt-0.5 text-[10px] uppercase tracking-wider text-white/75"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}