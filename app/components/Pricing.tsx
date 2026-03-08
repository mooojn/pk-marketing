"use client";

import React, { useState } from 'react';

type ServiceType = 'meta' | 'google';

type Plan = {
    name: string;
    description: string;
    price: string;
    features: string[];
    accent: string;
    bgAccent: string;
    popular?: boolean;
};

const Pricing = () => {
    const [activeService, setActiveService] = useState<ServiceType>('meta');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const baseCardBorder = "rgba(15, 23, 42, 0.1)";
    const baseCardShadow = "0 14px 34px -20px rgba(15, 23, 42, 0.32), 0 1px 0 rgba(255,255,255,0.9) inset";
    const whatsappNumber = "923706037115";

    const openWhatsApp = (serviceName: string, planName: string, planPrice: string) => {
        const message = `Hi Adzzly, I'm interested in your ${serviceName} ${planName} package (${planPrice} / month). Please share more details.`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const pricingByService: Record<ServiceType, { label: string; plans: Plan[] }> = {
        meta: {
            label: 'Meta Ads (Facebook & Instagram)',
            plans: [
                {
                    name: 'Basic Package',
                    description: 'Ideal for startups and small businesses launching online campaigns.',
                    price: 'PKR 35,000',
                    features: [
                        'Ad account setup and business manager configuration.',
                        'Audience and competitor research for focused targeting.',
                        'Creation and management of 2 campaigns (traffic or engagement).',
                        'Up to 4 ad creatives (images or short videos).',
                        'Basic ad copywriting with CTA suggestions.',
                        'Monthly performance report with key insights.'
                    ],
                    accent: 'var(--accent-sage)',
                    bgAccent: 'rgba(16, 185, 129, 0.12)'
                },
                {
                    name: 'Standard Package',
                    description: 'Built for growing businesses aiming for stronger conversions and scale.',
                    price: 'PKR 45,000',
                    features: [
                        'Everything in Basic Package.',
                        'Management of 4-6 campaigns (traffic, engagement, conversion).',
                        'Pixel setup and event tracking for optimization.',
                        'Retargeting campaigns to re-engage visitors.',
                        'A/B testing for creatives and ad copy.',
                        'Up to 8 ad creatives each month.',
                        'Fortnightly optimization reports and budget guidance.'
                    ],
                    accent: 'var(--accent-warm)',
                    bgAccent: 'rgba(119, 185, 62, 0.12)',
                    popular: true
                },
                {
                    name: 'Premium Package',
                    description: 'For brands that want full-funnel performance and aggressive growth.',
                    price: 'PKR 80,000',
                    features: [
                        'Everything in Standard Package.',
                        'Complete funnel strategy: awareness to conversion.',
                        'Dynamic product ads and catalog setup (if applicable).',
                        'Custom audience segmentation and lookalike creation.',
                        'Advanced copywriting and creative direction.',
                        'Weekly reporting with continuous optimization.',
                        'Dedicated marketing consultant for strategy support.'
                    ],
                    accent: 'var(--accent-coral)',
                    bgAccent: 'rgba(244, 63, 94, 0.12)'
                }
            ]
        },
        google: {
            label: 'Google Ads Services',
            plans: [
                {
                    name: 'Basic Package',
                    description: 'Great for businesses that need initial visibility and qualified leads.',
                    price: 'PKR 35,000',
                    features: [
                        'Google Ads account and campaign setup.',
                        'Keyword research and ad group structuring.',
                        'Creation and management of 2 search campaigns.',
                        'Ad extension setup: sitelinks, call, and location.',
                        'Monthly reporting with keyword and performance insights.'
                    ],
                    accent: 'var(--accent-teal)',
                    bgAccent: 'rgba(13, 148, 136, 0.12)'
                },
                {
                    name: 'Standard Package',
                    description: 'For teams ready to expand campaign types and improve conversion quality.',
                    price: 'PKR 45,000',
                    features: [
                        'Everything in Basic Package.',
                        '4-6 campaigns across Search and Display networks.',
                        'Conversion tracking via GTM or Analytics.',
                        'Ongoing CPC and CTR optimization.',
                        'Negative keyword refinement to cut wasted spend.',
                        'Fortnightly analysis, ad copy optimization, and budget guidance.'
                    ],
                    accent: 'var(--accent-warm)',
                    bgAccent: 'rgba(119, 185, 62, 0.12)',
                    popular: true
                },
                {
                    name: 'Premium Package',
                    description: 'Designed for established brands needing full multi-channel coverage.',
                    price: 'PKR 80,000',
                    features: [
                        'Everything in Standard Package.',
                        'Multi-channel strategy: Search, Display, YouTube, Remarketing.',
                        'Advanced audience segmentation and bid strategy customization.',
                        'Custom ad copywriting with landing page consultation.',
                        'Competitor analysis for keywords and ad insights.',
                        'Weekly reports and strategic growth calls.'
                    ],
                    accent: 'var(--accent-purple)',
                    bgAccent: 'rgba(124, 58, 237, 0.12)'
                }
            ]
        }
    };

    const activeServiceData = pricingByService[activeService];

    return (
        <section className="relative py-10 lg:py-14 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
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

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mb-10 lg:mb-14">
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
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5"
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
                        Toggle between Meta and Google services, then pick the package that matches your growth stage.
                    </p>
                </div>

                {/* Service Toggle */}
                <div className="mb-8 lg:mb-10 flex justify-center">
                    <div
                        className="relative grid grid-cols-2 p-1.5 rounded-2xl w-full max-w-md"
                        style={{
                            border: '1px solid rgba(15, 23, 42, 0.14)',
                            background: 'linear-gradient(140deg, rgba(255,255,255,0.9) 0%, rgba(241,245,249,0.8) 100%)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 18px 40px -28px rgba(15, 23, 42, 0.65), inset 0 1px 0 rgba(255,255,255,0.9)'
                        }}
                    >
                        <div
                            className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-xl transition-all duration-500 ease-out"
                            style={{
                                left: activeService === 'meta' ? '6px' : 'calc(50% + 2px)',
                                background: 'linear-gradient(135deg, var(--accent-warm) 0%, var(--accent-sage) 100%)',
                                boxShadow: '0 12px 24px -14px rgba(15, 23, 42, 0.7)'
                            }}
                        />

                        {([
                            { key: 'meta', label: 'Meta Ads' },
                            { key: 'google', label: 'Google Ads' }
                        ] as const).map((service) => {
                            const isActive = activeService === service.key;

                            return (
                                <button
                                    key={service.key}
                                    type="button"
                                    className="relative z-10 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300"
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        color: isActive ? '#ffffff' : 'var(--text-primary)',
                                        textShadow: isActive ? '0 1px 0 rgba(15, 23, 42, 0.2)' : 'none'
                                    }}
                                    onClick={() => {
                                        setActiveService(service.key);
                                        setHoveredIndex(null);
                                    }}
                                >
                                    {service.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div key={activeService} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7 items-stretch animate-scale-in">
                    {activeServiceData.plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-6 lg:p-7 transition-all duration-500 rounded-2xl group flex flex-col ${plan.popular ? 'md:col-span-2 xl:col-span-1 xl:-mt-4 xl:mb-4 z-10' : ''}`}
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
                            onClick={() => openWhatsApp(activeServiceData.label, plan.name, plan.price)}
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

                            <div
                                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                                style={{ background: `linear-gradient(90deg, ${plan.accent} 0%, transparent 100%)` }}
                            />

                            {/* Plan Name */}
                            <div className="mb-4 mt-2 flex items-center justify-between gap-3">
                                <h3
                                    className="text-xl lg:text-2xl font-bold"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        color: 'var(--text-primary)'
                                    }}
                                >
                                    {plan.name}
                                </h3>
                                <span
                                    className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full uppercase tracking-widest"
                                    style={{
                                        color: plan.accent,
                                        background: plan.bgAccent,
                                        fontFamily: 'var(--font-mono)'
                                    }}
                                >
                                    {activeService === 'meta' ? 'Meta' : 'Google'}
                                </span>
                            </div>

                            {/* Description */}
                            <p
                                className="text-sm mb-6 min-h-12"
                                style={{
                                    color: 'var(--text-muted)',
                                    lineHeight: '1.6'
                                }}
                            >
                                {plan.description}
                            </p>

                            {/* Price */}
                            <div className="mb-6 flex items-baseline gap-1.5 flex-wrap">
                                <span
                                    className="text-3xl lg:text-4xl font-bold"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        color: plan.accent
                                    }}
                                >
                                    {plan.price}
                                </span>
                                <span className="text-xs sm:text-sm text-gray-400 font-mono">/month</span>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full mb-6 bg-linear-to-r from-transparent via-gray-200 to-transparent" />

                            {/* Features */}
                            <ul className="space-y-3.5 mb-8 grow">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3 text-sm">
                                        <div
                                            className="mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
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
                                className="w-full py-3.5 text-[11px] sm:text-xs tracking-[0.18em] uppercase font-semibold transition-all duration-300 relative overflow-hidden group/btn"
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    background: 'transparent',
                                    color: plan.accent,
                                    border: `1px solid ${plan.accent}`
                                }}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    openWhatsApp(activeServiceData.label, plan.name, plan.price);
                                }}
                            >
                                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
                                    Choose {plan.name.replace(' Package', '')}
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
