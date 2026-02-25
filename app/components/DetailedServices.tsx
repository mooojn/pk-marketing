"use client";

import React, { useState } from 'react';

const DetailedServices = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const baseCardBorder = "rgba(15, 23, 42, 0.1)";
    const baseCardShadow = "0 14px 34px -20px rgba(15, 23, 42, 0.32), 0 1px 0 rgba(255,255,255,0.9) inset";

    const capabilities = [
        {
            title: "Shopify Development",
            description: "Custom themes, app integrations, and high-conversion store setups.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            accent: "var(--accent-sage)",
            bgAccent: "rgba(16, 185, 129, 0.1)"
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform apps for iOS and Android using React Native.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            accent: "var(--accent-warm)",
            bgAccent: "rgba(79, 70, 229, 0.1)"
        },
        {
            title: "Desktop CRM Solutions",
            description: "Tailored customer relationship management software for desktop environments.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            accent: "var(--accent-coral)",
            bgAccent: "rgba(244, 63, 94, 0.1)"
        },
        {
            title: "Meta Ads Management",
            description: "Data-driven ad campaigns on Facebook and Instagram to scale ROI.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
            ),
            accent: "var(--accent-purple)",
            bgAccent: "rgba(124, 58, 237, 0.1)"
        },
        {
            title: "AI Model Development",
            description: "Custom AI solutions, chatbots, and automation workflows.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            accent: "var(--accent-teal)",
            bgAccent: "rgba(13, 148, 136, 0.1)"
        },
        {
            title: "UI/UX Design",
            description: "User-centric design systems that are beautiful and functional.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            accent: "var(--accent-gold)",
            bgAccent: "rgba(245, 158, 11, 0.1)"
        },
        {
            title: "Brand Identity",
            description: "Complete visual identity systems, logos, and brand guidelines.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            accent: "var(--accent-navy-light)",
            bgAccent: "rgba(51, 65, 85, 0.1)"
        },
        {
            title: "Cloud Infrastructure",
            description: "Scalable hosting, AWS/Azure setup, and security optimizations.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            accent: "var(--accent-warm)",
            bgAccent: "rgba(79, 70, 229, 0.1)"
        }
    ];

    return (
        <section
            className="relative py-8 lg:py-10 overflow-hidden"
            style={{ background: 'var(--bg-primary)' }}
            id="detailed-services"
        >
            {/* Background Ambience - Same as Pricing */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{ background: 'var(--gradient-ambient)' }}
            />

            {/* Floating Geometry for Visual Interest - Repositioned to be behind header */}
            <div className="absolute top-10 left-[-10%] md:top-20 md:left-[10%] w-48 h-48 md:w-64 md:h-64 animate-float-slow pointer-events-none opacity-20">
                <div
                    className="w-full h-full rounded-full blur-3xl"
                    style={{ background: 'var(--accent-warm)' }}
                />
            </div>
            <div className="absolute top-48 right-[-20%] md:top-20 md:right-[10%] w-64 h-64 md:w-96 md:h-96 animate-float-delayed pointer-events-none opacity-10">
                <div
                    className="w-full h-full rotate-45"
                    style={{
                        border: '2px solid var(--accent-warm)',
                        background: 'transparent'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12" style={{ background: 'var(--accent-warm)' }} />
                            <span
                                className="text-sm font-semibold tracking-wide uppercase"
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    color: 'var(--accent-warm)'
                                }}
                            >
                                Capabilities
                            </span>
                        </div>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-primary)'
                            }}
                        >
                            Our 360° <span style={{ color: 'var(--accent-warm)' }}>Marketing Services</span>
                        </h2>
                        <p
                            className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-muted)',
                                lineHeight: '1.8'
                            }}
                        >
                            Beyond packages, we offer specialized engineering and design capabilities to tackle your most complex challenges.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((item, index) => (
                        <div
                            key={index}
                            className="group relative p-8 transition-all duration-500 rounded-2xl"
                            style={{
                                background: hoveredIndex === index
                                    ? "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,0.98) 100%)"
                                    : "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.92) 100%)",
                                border: `1px solid ${hoveredIndex === index ? item.accent : baseCardBorder}`,
                                backdropFilter: 'blur(10px)',
                                boxShadow: hoveredIndex === index
                                    ? `0 24px 45px -18px ${item.bgAccent}, ${baseCardShadow}`
                                    : baseCardShadow,
                                transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)'
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div
                                className="w-12 h-12 mb-6 rounded-lg flex items-center justify-center transition-colors duration-300"
                                style={{
                                    background: item.bgAccent,
                                    color: item.accent
                                }}
                            >
                                {item.icon}
                            </div>

                            <h3
                                className="text-xl font-bold mb-3"
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                {item.title}
                            </h3>

                            <p
                                className="text-sm leading-relaxed mb-6 min-h-[60px]"
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    color: 'var(--text-muted)'
                                }}
                            >
                                {item.description}
                            </p>

                            {/* Arrow Link - Similar to other sections but styled like Pricing */}
                            <div
                                className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300"
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    color: item.accent,
                                    opacity: hoveredIndex === index ? 1 : 0.7
                                }}
                            >
                                Explore
                                <svg
                                    className="w-4 h-4 transition-transform duration-300"
                                    style={{ transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)' }}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DetailedServices;
