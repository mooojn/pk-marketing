"use client";

import React, { useState } from 'react';

const Pricing = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const baseCardBorder = "rgba(15, 23, 42, 0.1)";
    const baseCardShadow = "0 14px 34px -20px rgba(15, 23, 42, 0.32), 0 1px 0 rgba(255,255,255,0.9) inset";
    const whatsappNumber = "923706037115";

    const openWhatsApp = (planName: string, planPrice: string) => {
        const message = `Hi Adzzly, I'm interested in the ${planName} package (${planPrice}/month). Please share more details.`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const plans = [
        {
            name: "Basic",
            description: "Essential tools for small businesses taking their first digital steps.",
            price: "45,000 PKR",
            features: [
                "10 Static Posts per month",
                "10 Creative Stories",
                "Content Creation Plan",
                "SM Posting Strategy",
                "Ads Management (Meta / TikTok)",
                "Lead Generation Focus",
                "Monthly Performance Report",
                "Video Editing (4 videos, raw content by client)",
                "CRM Integration",
                "Dedicated Account Manager"
            ],
            accent: "var(--accent-sage)", // Emerald
            bgAccent: "rgba(16, 185, 129, 0.1)"
        },
        {
            name: "Growth",
            description: "Comprehensive solution for growing brands ready to scale.",
            price: "70,000 PKR",
            features: [
                "15 Static Posts per month",
                "15 Creative Stories",
                "Content Creation Plan",
                "Creative Marketing Strategy",
                "Ads Management (Meta / TikTok)",
                "Lead Generation Focus",
                "Performance Report after 15 days",
                "Video Editing (4 videos, raw content by client)",
                "CRM Integration",
                "Dedicated Account Manager"
            ],
            accent: "var(--accent-warm)", // Indigo (Primary)
            bgAccent: "rgba(79, 70, 229, 0.1)",
            popular: true
        },
        {
            name: "Premium",
            description: "Full-scale digital transformation for established organizations.",
            price: "95,000 PKR",
            features: [
                "20 Static Posts per month",
                "20 Creative Stories",
                "Advance Content Creation",
                "Advance Marketing Strategy",
                "Ads Management (Meta / TikTok)",
                "Lead Generation Focus",
                "Weekly Performance Reporting",
                "Video Editing (8 videos, raw content by client)",
                "CRM Integration",
                "Dedicated Account Manager"
            ],
            accent: "var(--accent-coral)", // Rose
            bgAccent: "rgba(244, 63, 94, 0.1)"
        }
    ];

    return (
        <section className="relative py-8 lg:py-10 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
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
                        Select <span style={{ color: 'var(--accent-warm)' }}> Your Package</span>
                    </h2>

                    <p
                        className="text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--text-muted)',
                            lineHeight: '1.8'
                        }}
                    >
                        Choose the package that fits your goals, or get a custom solution tailored to you.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 lg:p-10 transition-all duration-500 rounded-2xl group ${plan.popular ? 'lg:-mt-8 lg:mb-8 z-10' : ''}`}
                            style={{
                                background: hoveredIndex === index
                                    ? "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,0.98) 100%)"
                                    : "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.92) 100%)",
                                border: `1px solid ${hoveredIndex === index ? plan.accent : baseCardBorder}`,
                                backdropFilter: 'blur(10px)',
                                boxShadow: hoveredIndex === index
                                    ? `0 24px 45px -18px ${plan.bgAccent}, ${baseCardShadow}`
                                    : baseCardShadow,
                                transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)'
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => openWhatsApp(plan.name, plan.price)}
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
                                <span className="text-sm text-gray-400 font-mono">/month</span>
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
                                type="button"
                                className="w-full py-4 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 relative overflow-hidden group/btn"
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    background: 'transparent',
                                    color: plan.accent,
                                    border: `1px solid ${plan.accent}`
                                }}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    openWhatsApp(plan.name, plan.price);
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
