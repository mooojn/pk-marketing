"use client";

import { useState } from "react";

export default function CaseStudies() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const studies = [
        {
            title: "TechFlow SaaS Growth",
            category: "SEO & Content Strategy",
            result: "+240% Organic Traffic",
            description: "How we took a B2B SaaS startup from zero to market leader in 6 months through targeted content clusters.",
            imageGradient: "linear-gradient(135deg, #FF6B6B 0%, #556270 100%)",
            color: "var(--accent-coral)"
        },
        {
            title: "Luxe Realty Rebranding",
            category: "Web Design & Branding",
            result: "3x Lead Quality",
            description: "A complete digital overhaul for a luxury real estate firm, resulting in higher qualified leads and a premium brand image.",
            imageGradient: "linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)",
            color: "var(--accent-warm)"
        },
        {
            title: "FitLife App Launch",
            category: "Social Media Marketing",
            result: "50k Downloads in 30 Days",
            description: "Executing a viral social media campaign for a new health & fitness app, smashing launch targets.",
            imageGradient: "linear-gradient(135deg, #10B981 0%, #3B82F6 100%)",
            color: "var(--accent-sage)"
        }
    ];

    return (
        <section className="py-12 lg:py-20" style={{ background: 'var(--bg-primary)' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mb-16 lg:mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12" style={{ background: 'var(--accent-warm)' }} />
                        <span
                            className="text-sm font-semibold tracking-wide uppercase"
                            style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-warm)' }}
                        >
                            Proven Results
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                    >
                        Client <span style={{ color: 'var(--accent-warm)' }}>Success Stories</span>
                    </h2>

                    <p
                        className="text-lg leading-relaxed max-w-2xl"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}
                    >
                        We don’t just promise results; we deliver them. Explore how we’ve helped brands like yours achieve extraordinary growth.
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studies.map((study, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500"
                            style={{
                                background: '#FFFFFF',
                                border: '1px solid var(--border-subtle)',
                                boxShadow: hoveredIndex === index ? '0 25px 50px -12px rgba(0, 0, 0, 0.1)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)'
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Image Placeholder area */}
                            <div
                                className="h-64 relative overflow-hidden"
                                style={{ background: study.imageGradient }}
                            >
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                                {/* Result Tag */}
                                <div
                                    className="absolute bottom-6 left-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white shadow-lg"
                                    style={{ color: study.color, fontFamily: 'var(--font-mono)' }}
                                >
                                    {study.result}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-8 flex flex-col">
                                <span
                                    className="text-xs uppercase tracking-wider font-semibold mb-3"
                                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                                >
                                    {study.category}
                                </span>

                                <h3
                                    className="text-2xl font-bold mb-4 group-hover:text-[var(--accent-warm)] transition-colors duration-300"
                                    style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                                >
                                    {study.title}
                                </h3>

                                <p
                                    className="text-base leading-relaxed mb-8 flex-1"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    {study.description}
                                </p>

                                {/* Read More Button */}
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
