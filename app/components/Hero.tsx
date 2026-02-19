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

                    {/* Center - Main Content */}
                    <div className="flex-1 flex flex-col justify-start lg:justify-center px-6 sm:px-8 lg:px-20 xl:px-32 pt-8 pb-80 lg:py-20 lg:pb-32">

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
                            <span className="block">CERTIFIED</span>
                            <span
                                className="block relative"
                                style={{
                                    WebkitTextStroke: '1.5px var(--accent-warm)',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                MARKETING
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
                                AGENCY
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
                            className={`mb-4 flex flex-col sm:flex-row gap-4 sm:gap-6 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                            style={{ animationDelay: '0.7s' }}
                        >
                            {/* Primary CTA */}
                            <button
                                className="group relative px-6 py-4 sm:px-10 sm:py-5 text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-500 overflow-hidden"
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
                                className="group px-6 py-4 sm:px-10 sm:py-5 text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300"
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

                            {/* Trust Logos (Desktop) */}
                            <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 lg:gap-6 mt-4 sm:mt-0 lg:ml-6 lg:border-l lg:pl-6" style={{ borderColor: 'var(--border-subtle)' }}>
                                {/* Trustpilot */}
                                <div className="space-y-1">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Trustpilot</p>
                                </div>

                                {/* Google */}
                                <div className="space-y-1">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="w-4 h-4 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-[#F6B704]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Google</p>
                                </div>

                                {/* Clutch */}
                                <div className="space-y-1">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="w-4 h-4 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-[#FF3D00]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Clutch</p>
                                </div>
                            </div>
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

                    </div>
                </div>

                {/* Full Width Metrics Bar */}
                <div
                    className={`absolute bottom-0 left-0 w-full py-8 backdrop-blur-md ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                    style={{
                        background: 'var(--accent-warm)',
                        animationDelay: '1.1s'
                    }}
                >
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { number: '150+', label: 'Projects Delivered' },
                                { number: '1-million', label: 'Traffic' },
                                { number: '100k', label: 'Leads' },
                                { number: '50+', label: 'International clients' }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <span
                                        className="text-2xl md:text-3xl font-bold mb-1"
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        {stat.number}
                                    </span>
                                    <span
                                        className="text-xs tracking-wider uppercase"
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            color: 'rgba(255, 255, 255, 0.8)'
                                        }}
                                    >
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
