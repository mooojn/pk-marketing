"use client";
import { services } from "../data/services";

export default function Footer() {
    const socialLinks = [
        { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
        { name: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z" },
    ];

    return (
        <footer
            className="relative overflow-hidden border-t border-[var(--border-subtle)] pt-20 pb-8"
            style={{
                background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 42%, #f1f5f9 100%)",
            }}
        >
            <div
                className="pointer-events-none absolute -top-20 -left-10 h-64 w-64 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(119,185,62,0.18) 0%, transparent 72%)" }}
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(244,114,182,0.14) 0%, transparent 75%)" }}
                aria-hidden="true"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    <div className="lg:col-span-1">
                        <a href="#" className="mb-6 inline-flex items-center">
                            <img src="/bg-logo.jpeg" alt="Adzzly Logo" className="h-24 w-auto object-contain" />
                        </a>

                        <p
                            className="mb-6 text-base leading-relaxed"
                            style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}
                        >
                            Your trusted digital marketing partner in Lahore. We help businesses grow with creative,
                            result-driven marketing solutions.
                        </p>

                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    aria-label={social.name}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-white/90 text-[var(--text-muted)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-warm)] hover:bg-[var(--accent-warm)] hover:text-white"
                                >
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4
                            className="mb-6 text-lg font-bold"
                            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                        >
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((item, id) => (
                                <li key={id}>
                                    <a
                                        href="#services"
                                        className="inline-flex items-center gap-2 text-base text-[var(--text-muted)] transition-all duration-300 hover:translate-x-1.5 hover:text-[var(--accent-warm)]"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4
                            className="mb-6 text-lg font-bold"
                            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {["About Us", "Our Work", "Case Studies", "Contact"].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="inline-flex items-center text-base text-[var(--text-muted)] transition-all duration-300 hover:translate-x-1.5 hover:text-[var(--accent-warm)]"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4
                            className="mb-6 text-lg font-bold"
                            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                        >
                            Get In Touch
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-white/85 p-3">
                                <svg className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-warm)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}>Lahore, Pakistan</span>
                            </div>
                            <div className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-white/85 p-3">
                                <svg className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-warm)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}>info@adzomarketing.com</span>
                            </div>
                            <div className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-white/85 p-3">
                                <svg className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-warm)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}>+92 300 1234567</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8 h-px w-full bg-[var(--border-subtle)]" />

                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-[var(--text-muted)]" style={{ fontFamily: "var(--font-display)" }}>
                        (c) {new Date().getFullYear()} Adzo. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--accent-warm)]"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
