"use client";

import React, { useState } from 'react';

const Pricing = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const plans = [
        {
            name: "Starter",
            description: "Essential tools for small businesses taking their first digital steps.",
            price: "$999",
            features: [
                "Single Page Website",
                "Basic SEO Setup",
                "Social Media Setup",
                "1 Month Support",
                "Mobile Responsive"
            ],
            accent: "var(--accent-sage)", // Emerald
            bgAccent: "rgba(16, 185, 129, 0.1)"
        },
        {
            name: "Professional",
            description: "Comprehensive solution for growing brands ready to scale.",
            price: "$2,499",
            features: [
                "5-Page Custom Website",
                "Advanced SEO Strategy",
                "Content Marketing (4 Posts)",
                "Social Media Management",
                "3 Months Support",
                "Analytics Dashboard"
            ],
            accent: "var(--accent-warm)", // Indigo (Primary)
            bgAccent: "rgba(79, 70, 229, 0.1)",
            popular: true
        },
        {
            name: "Enterprise",
            description: "Full-scale digital transformation for established organizations.",
            price: "Custom",
            features: [
                "E-commerce / Web App",
                "Full-Funnel Marketing",
                "Daily Content & Management",
                "Dedicated Account Manager",
                "24/7 Priority Support",
                "Custom Integrations"
            ],
            accent: "var(--accent-coral)", // Rose
            bgAccent: "rgba(244, 63, 94, 0.1)"
        }
    ];

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
            {/* Background Ambience */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{ background: 'var(--gradient-ambient)' }}
            />

            {/* Floating Geometry for Visual Interest */}
            <div className="absolute top-20 left-[10%] w-64 h-64 animate-float-slow pointer-events-none opacity-20">
                <div
                    className="w-full h-full rounded-full blur-3xl"
                    style={{ background: 'var(--accent-warm)' }}
                />
            </div>
            <div className="absolute bottom-20 right-[5%] w-96 h-96 animate-float-delayed pointer-events-none opacity-10">
                <div
                    className="w-full h-full rotate-45"
                    style={{
                        border: '2px solid var(--accent-coral)',
                        background: 'transparent'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div
                            className="h-px w-12"
                            style={{ background: 'var(--accent-warm)' }}
                        />
                        <span
                            className="text-sm font-semibold tracking-wide uppercase"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--accent-warm)'
                            }}
                        >
                            Investment
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6"
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--text-primary)'
                        }}
                    >
                        Transparent <span style={{ color: 'var(--accent-warm)' }}>Pricing</span>
                    </h2>

                    <p
                        className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--text-muted)',
                            lineHeight: '1.8'
                        }}
                    >
                        No hidden fees, no surprises. Choose the package that fits your growth stage,
                        or contact us for a tailored solution designed around your unique goals.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 lg:p-10 transition-all duration-500 rounded-lg group ${plan.popular ? 'lg:-mt-8 lg:mb-8 z-10' : ''}`}
                            style={{
                                background: plan.popular ? 'var(--bg-primary)' : 'rgba(255, 255, 255, 0.6)',
                                border: `1px solid ${hoveredIndex === index ? plan.accent : 'var(--border-subtle)'}`,
                                backdropFilter: 'blur(10px)',
                                boxShadow: hoveredIndex === index
                                    ? `0 20px 40px -10px ${plan.bgAccent}`
                                    : plan.popular
                                        ? '0 10px 30px -5px rgba(0,0,0,0.05)'
                                        : 'none',
                                transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)'
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {plan.popular && (
                                <div
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        background: plan.accent,
                                        color: '#fff'
                                    }}
                                >
                                    Most Popular
                                </div>
                            )}

                            {/* Plan Name */}
                            <h3
                                className="text-2xl font-bold mb-2"
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                {plan.name}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-sm mb-8 min-h-[48px]"
                                style={{
                                    color: 'var(--text-muted)',
                                    lineHeight: '1.6'
                                }}
                            >
                                {plan.description}
                            </p>

                            {/* Price */}
                            <div className="mb-8 flex items-baseline gap-1">
                                <span
                                    className="text-4xl lg:text-5xl font-bold"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        color: plan.accent
                                    }}
                                >
                                    {plan.price}
                                </span>
                                {plan.price !== "Custom" && (
                                    <span className="text-sm text-gray-400 font-mono">/project</span>
                                )}
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                            {/* Features */}
                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3 text-sm">
                                        <div
                                            className="mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                                            style={{ background: plan.bgAccent }}
                                        >
                                            <svg
                                                className="w-2.5 h-2.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                style={{ color: plan.accent }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span style={{ color: 'var(--text-muted)' }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className="w-full py-4 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 relative overflow-hidden group/btn"
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    background: 'transparent',
                                    color: plan.accent,
                                    border: `1px solid ${plan.accent}`
                                }}
                            >
                                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
                                    Choose {plan.name}
                                </span>
                                <div
                                    className="absolute inset-0 w-full h-full transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"
                                    style={{ background: plan.accent }}
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
