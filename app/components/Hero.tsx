"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <>
            <div className={`transition-all duration-500 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} />

            {/* Hero Section */}
            <section className="relative min-h-screen overflow-hidden" style={{ background: 'var(--bg-primary)' }}>

                {/* Ambient Gradient Background */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'var(--gradient-ambient)' }}
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'var(--gradient-mesh)' }}
                />

                {/* Floating Geometric Shapes */}
                <div className="absolute top-20 right-[15%] w-72 h-72 animate-float-slow">
                    <div
                        className="w-full h-full rounded-3xl rotate-12 animate-border-glow"
                        style={{
                            border: '1px solid var(--border-subtle)',
                            background: 'linear-gradient(135deg, rgba(212, 132, 26, 0.05) 0%, transparent 50%)'
                        }}
                    />
                </div>

                <div className="absolute bottom-32 left-[10%] w-48 h-48 animate-float-delayed">
                    <div
                        className="w-full h-full rotate-45"
                        style={{
                            border: '1px solid rgba(232, 90, 79, 0.25)',
                            background: 'linear-gradient(45deg, rgba(232, 90, 79, 0.06) 0%, transparent 60%)'
                        }}
                    />
                </div>

                {/* Glowing Orbs */}
                <div
                    className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full animate-pulse-glow"
                    style={{ background: 'radial-gradient(circle, rgba(212, 132, 26, 0.12) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full animate-pulse-glow"
                    style={{
                        background: 'radial-gradient(circle, rgba(90, 125, 82, 0.1) 0%, transparent 70%)',
                        animationDelay: '3s'
                    }}
                />

                {/* Main Content */}
                <div className="relative z-10 min-h-screen flex pt-20">

                    {/* Left Side - Navigation & Branding */}
                    <div
                        className={`hidden lg:flex flex-col justify-between py-12 px-8 w-24 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                        style={{
                            borderRight: '1px solid var(--border-subtle)',
                            animationDelay: '0.2s'
                        }}
                    >
                        {/* Logo Mark */}
                        <div
                            className="w-12 h-12 flex items-center justify-center rounded-lg"
                            style={{
                                border: '2px solid var(--accent-warm)',
                                color: 'var(--accent-warm)'
                            }}
                        >
                            <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>A</span>
                        </div>

                        {/* Vertical Text */}
                        <div
                            className="-rotate-90 whitespace-nowrap text-xs tracking-[0.3em] uppercase"
                            style={{
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--text-muted)',
                                transformOrigin: 'center center',
                                marginBottom: '100px'
                            }}
                        >
                            Est. 2024
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col gap-4">
                            {['TW', 'IN', 'GH'].map((text, i) => (
                                <a
                                    key={text}
                                    href="#"
                                    className="text-xs tracking-widest transition-colors duration-300"
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--text-muted)'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-warm)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                                >
                                    {text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Center - Main Content */}
                    <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 lg:px-20 xl:px-32 py-12 lg:py-20">

                        {/* Eyebrow */}
                        <div
                            className={`flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                            style={{ animationDelay: '0.3s' }}
                        >
                            <div
                                className="h-px w-8 sm:w-12 origin-left"
                                style={{
                                    background: 'var(--accent-warm)',
                                    animation: isLoaded ? 'line-draw 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards' : 'none',
                                    width: 0
                                }}
                            />
                            <span
                                className="text-xs sm:text-sm font-semibold tracking-wide uppercase"
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    color: 'var(--accent-warm)'
                                }}
                            >
                                Beyond Ordinary
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1
                            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6 sm:mb-8 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-primary)',
                                animationDelay: '0.4s'
                            }}
                        >
                            <span className="block">BUILD</span>
                            <span
                                className="block relative"
                                style={{
                                    WebkitTextStroke: '1.5px var(--accent-warm)',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                DIFFERENT
                                {/* Decorative underscore */}
                                <span
                                    className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 rounded-full"
                                    style={{
                                        background: 'linear-gradient(90deg, var(--accent-warm), var(--accent-coral))',
                                        animation: isLoaded ? 'line-draw 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards' : 'none',
                                        width: 0
                                    }}
                                />
                            </span>
                            <span
                                className="block mt-2 sm:mt-4"
                                style={{ color: 'var(--text-muted)' }}
                            >
                                FUTURES
                            </span>
                        </h1>

                        {/* Description */}
                        <p
                            className={`max-w-xl text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-muted)',
                                animationDelay: '0.6s',
                                lineHeight: '1.7'
                            }}
                        >
                            We craft digital experiences that challenge convention. Where strategy meets artistry,
                            and innovation becomes <span style={{ color: 'var(--accent-warm)' }}>unforgettable</span>.
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                            style={{ animationDelay: '0.7s' }}
                        >
                            {/* Primary CTA */}
                            <button
                                className="group relative px-10 py-5 text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-500 overflow-hidden"
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    background: 'var(--accent-warm)',
                                    color: '#FFFFFF',
                                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--accent-coral)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--accent-warm)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start Your Project
                                    <svg
                                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>

                            {/* Secondary CTA */}
                            <button
                                className="group px-10 py-5 text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300"
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    background: 'transparent',
                                    color: 'var(--text-primary)',
                                    border: '1px solid var(--border-subtle)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--accent-warm)';
                                    e.currentTarget.style.color = 'var(--accent-warm)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                            >
                                View Our Work
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div
                            className={`flex flex-wrap items-center gap-8 mt-16 pt-8 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                            style={{
                                borderTop: '1px solid var(--border-subtle)',
                                animationDelay: '0.9s'
                            }}
                        >
                            {[
                                { number: '150+', label: 'Projects Delivered' },
                                { number: '98%', label: 'Client Satisfaction' },
                                { number: '12', label: 'Industry Awards' }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span
                                        className="text-3xl font-bold"
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            color: 'var(--accent-warm)'
                                        }}
                                    >
                                        {stat.number}
                                    </span>
                                    <span
                                        className="text-xs tracking-wider uppercase"
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            color: 'var(--text-muted)'
                                        }}
                                    >
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Decorative Panel */}
                    <div
                        className={`hidden xl:block w-96 relative ${isLoaded ? 'animate-slide-right' : 'opacity-0'}`}
                        style={{ animationDelay: '0.5s' }}
                    >
                        {/* Diagonal Stripe Pattern */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 60px,
                  rgba(212, 132, 26, 0.04) 60px,
                  rgba(212, 132, 26, 0.04) 61px
                )`
                            }}
                        />

                        {/* Version Badge */}
                        <div
                            className="absolute bottom-12 right-8 px-4 py-2"
                            style={{
                                border: '1px solid var(--border-subtle)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '10px',
                                letterSpacing: '0.2em',
                                color: 'var(--text-muted)',
                                background: 'rgba(255, 255, 255, 0.6)'
                            }}
                        >
                            V2.0.24
                        </div>
                    </div>
                </div>

                {/* Bottom Scroll Indicator */}
                <div
                    className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                    style={{ animationDelay: '1.1s' }}
                >
                    <span
                        className="text-xs tracking-[0.3em] uppercase"
                        style={{
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-muted)'
                        }}
                    >
                        Scroll
                    </span>
                    <div
                        className="w-px h-12"
                        style={{
                            background: 'linear-gradient(to bottom, var(--accent-warm), transparent)'
                        }}
                    />
                </div>

            </section>
        </>
    );
}
