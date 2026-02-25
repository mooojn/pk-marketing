"use client";

import { useEffect, useState } from "react";

interface FormData {
  email: string;
  website: string;
}

interface Stat {
  number: string;
  label: string;
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({ email: "", website: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): boolean {
    const nextErrors: Partial<FormData> = {};
    const email = formData.email.trim();

    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!validate()) return;

    // TODO: wire this to your lead endpoint / CRM
    setSubmitted(true);
  }

  const stats: Stat[] = [
    { number: "154%", label: "Average Lead Growth" },
    { number: "93", label: "Campaigns Scaled" },
    { number: "48h", label: "To First Plan" },
  ];

  const proofItems: string[] = ["No long-term contracts", "Weekly performance reporting"];

  const platforms: string[] = ["Google", "Clutch", "Trustpilot"];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[var(--bg-primary)]"
      aria-label="Hero section"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-ambient)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 80px, rgba(119,185,62,0.035) 80px, rgba(119,185,62,0.035) 81px)",
        }}
        aria-hidden="true"
      />

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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 pb-28 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:pb-24 xl:px-16">
        <div
          className={`flex flex-col items-start transition-all duration-700 lg:flex-1 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--accent-warm)]/10 px-4 py-1.5"
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-warm)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-warm)]" />
            </span>
            <span
              className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-warm)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Performance Marketing Partner
            </span>
          </div>

          <h1
            className="mb-5 text-[clamp(2rem,3.8vw,3.35rem)] font-extrabold leading-[1.08] tracking-tight text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Turn ad spend into <span className="text-[var(--accent-warm)]">predictable revenue</span>
          </h1>

          <p
            className="mb-7 max-w-xl text-base leading-[1.75] text-[var(--text-muted)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We launch and optimize campaigns that bring qualified leads, lower acquisition costs,
            and prove ROI weekly. <span className="font-semibold text-[var(--text-primary)]">Get your free growth plan in 48 hours.</span>
          </p>

          <ul className="mb-8 grid w-full max-w-xl gap-2.5 sm:grid-cols-2">
            {proofItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                <span
                  className="mt-[2px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--accent-warm)]/20 text-[10px] font-bold text-[var(--accent-warm)]"
                  aria-hidden="true"
                >
                  v
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-[var(--accent-gold)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-[var(--text-primary)]">4.9/5</span>
              <span className="text-xs text-[var(--text-muted)]">from clients</span>
            </div>

            <div className="hidden h-4 w-px bg-[var(--border-subtle)] sm:block" aria-hidden="true" />

            <p className="text-sm text-[var(--text-muted)]">
              <span className="font-bold text-[var(--text-primary)]">50+</span> brands scaled
            </p>

            <a
              href="#case-studies"
              className="shrink-0 rounded-full border border-[var(--border-subtle)] bg-white/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] shadow-sm transition-colors hover:border-[var(--accent-warm)] hover:text-[var(--accent-warm)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              See case studies
            </a>
          </div>
        </div>

        <div
          className={`mt-12 w-full transition-all duration-700 lg:mt-0 lg:w-[420px] xl:w-[460px] ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "0.25s" }}
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white/70 p-8 shadow-2xl backdrop-blur-xl"
            style={{ boxShadow: "0 32px 80px rgba(119,185,62,0.12), 0 8px 24px rgba(0,0,0,0.06)" }}
          >
            <div
              className="absolute left-0 top-0 h-1 w-full rounded-t-2xl"
              style={{ background: "linear-gradient(90deg, var(--accent-warm), var(--accent-sage))" }}
              aria-hidden="true"
            />

            {!submitted ? (
              <>
                <div className="mb-6">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-warm)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Free Growth Plan
                  </p>
                  <h2
                    className="mt-1 text-2xl font-bold text-[var(--text-primary)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    See how many leads you can unlock
                  </h2>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">Takes 30 seconds. No sales pressure.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate aria-label="Lead capture form">
                  <div className="mb-4">
                    <label
                      htmlFor="hero-email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Work Email
                    </label>
                    <input
                      id="hero-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      required
                      aria-required="true"
                      className={`
                        w-full rounded-xl border bg-[var(--bg-secondary)] px-4 py-3.5 text-sm text-[var(--text-primary)]
                        placeholder:text-slate-400 outline-none transition-all duration-200
                        ${
                          errors.email
                            ? "border-red-400 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.2)]"
                            : "border-[var(--border-subtle)] focus:border-[var(--accent-warm)] focus:shadow-[0_0_0_3px_rgba(119,185,62,0.18)] hover:border-[var(--accent-warm)]/50"
                        }
                      `}
                      style={{ fontFamily: "var(--font-display)" }}
                    />
                    {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email}</p> : null}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="hero-website"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Website (optional)
                    </label>
                    <input
                      id="hero-website"
                      name="website"
                      type="text"
                      autoComplete="url"
                      placeholder="yourcompany.com"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-4 py-3.5 text-sm text-[var(--text-primary)] placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-[var(--accent-warm)]/50 focus:border-[var(--accent-warm)] focus:shadow-[0_0_0_3px_rgba(119,185,62,0.18)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    />
                  </div>

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
                    <span
                      className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-500 group-hover:translate-x-full"
                      aria-hidden="true"
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      Get My Free Growth Plan
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

                  <p className="mt-3 text-center text-[11px] text-[var(--text-muted)]">No spam. No credit card. Cancel anytime.</p>
                  <p className="mt-1 text-center text-[11px] font-semibold text-[var(--text-primary)]">7 onboarding slots left this month</p>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center py-8 text-center" role="status" aria-live="polite">
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: "rgba(119,185,62,0.12)" }}
                >
                  <svg
                    className="h-8 w-8 text-[var(--accent-warm)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                  You are on the list
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Check your inbox. Your custom plan will arrive within <span className="font-semibold text-[var(--accent-warm)]">48 hours</span>.
                </p>
              </div>
            )}
          </div>

          <div className="mt-5 flex items-center justify-center gap-6">
            {platforms.map((name) => (
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

      <div
        className={`relative z-20 w-full transition-all duration-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{
          transitionDelay: "0.55s",
          background: "linear-gradient(90deg, var(--accent-warm) 0%, var(--accent-sage) 100%)",
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px sm:grid-cols-3">
          {stats.map((stat) => (
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
