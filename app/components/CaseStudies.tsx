"use client";

import { useState } from "react";

type Study = {
    title: string;
    category: string;
    result: string;
    description: string;
    image: string;
    highlights: string[];
    color: string;
};

export default function CaseStudies() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const studies: Study[] = [
        {
            title: "Meta Lead Generation Campaign",
            category: "Meta Ads | Lead Generation",
            result: "849 Leads in 30 Days",
            description: "Generated 849 form leads with a GBP2.20 CPL on a GBP1,867.48 spend while maintaining strong scale and efficiency.",
            image: "/case-studies/1.jpeg",
            highlights: ["GBP2.20 CPL", "86,350 Reach", "262,812 Impressions"],
            color: "var(--accent-warm)",
        },
        {
            title: "Google Ads Sales & Conversion",
            category: "Google Ads | Performance Marketing",
            result: "759,349 Impressions",
            description: "Drove 667 signups and 385.75 lead-form submissions at PKR265 cost per conversion with consistent campaign momentum.",
            image: "/case-studies/2.jpeg",
            highlights: ["667 Signups", "385.75 Lead Forms", "PKR278,924 Spend"],
            color: "var(--accent-coral)",
        },
        {
            title: "Ecommerce Growth Sprint",
            category: "Ecommerce | Shopify Growth",
            result: "Rs 325,173 Sales",
            description: "Scaled ecommerce performance to 8,388 sessions and 118 orders during the Apr 5 - May 6 campaign window.",
            image: "/case-studies/3.jpeg",
            highlights: ["8,388 Sessions", "118 Orders", "Apr 5 - May 6"],
            color: "var(--accent-sage)",
        },
    ];

    return (
        <section id="case-studies" className="py-8 lg:py-10" style={{ background: "var(--bg-primary)" }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-3xl mb-16 lg:mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12" style={{ background: "var(--accent-warm)" }} />
                        <span
                            className="text-sm font-semibold tracking-wide uppercase"
                            style={{ fontFamily: "var(--font-display)", color: "var(--accent-warm)" }}
                        >
                            Proven Results
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6"
                        style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                    >
                        Client <span style={{ color: "var(--accent-warm)" }}>Success Stories</span>
                    </h2>

                    <p
                        className="text-lg leading-relaxed max-w-2xl"
                        style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}
                    >
                        We do not just promise results; we deliver them. Explore how we have helped brands achieve measurable growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studies.map((study, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500"
                            style={{
                                background: "#FFFFFF",
                                border: "1px solid var(--border-subtle)",
                                boxShadow:
                                    hoveredIndex === index
                                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                                        : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                                transform: hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="h-64 relative overflow-hidden bg-slate-100">
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/25 transition-colors duration-500" />

                                <div
                                    className="absolute bottom-6 left-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white shadow-lg"
                                    style={{ color: study.color, fontFamily: "var(--font-mono)" }}
                                >
                                    {study.result}
                                </div>
                            </div>

                            <div className="flex-1 p-8 flex flex-col">
                                <span
                                    className="text-xs uppercase tracking-wider font-semibold mb-3"
                                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                                >
                                    {study.category}
                                </span>

                                <h3
                                    className="text-2xl font-bold mb-4 group-hover:text-[var(--accent-warm)] transition-colors duration-300"
                                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                                >
                                    {study.title}
                                </h3>

                                <p className="text-base leading-relaxed mb-6 flex-1" style={{ color: "var(--text-muted)" }}>
                                    {study.description}
                                </p>

                                <div className="mb-7 flex flex-wrap gap-2">
                                    {study.highlights.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
                                            style={{
                                                fontFamily: "var(--font-mono)",
                                                color: study.color,
                                                borderColor: `${study.color}33`,
                                                background: `${study.color}12`,
                                            }}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 group/btn"
                                    style={{ color: study.color }}
                                >
                                    <span>Read Case Study</span>
                                    <svg
                                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
