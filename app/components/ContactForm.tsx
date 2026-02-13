"use client";

import { useState } from "react";

export default function ContactForm() {
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
    const [budget, setBudget] = useState<string>("");

    const packages = [
        "Starter Package",
        "Professional Package",
        "Custom Solution"
    ];

    const budgetRanges = [
        "< $1k",
        "$1k - $5k",
        "$5k - $10k",
        "$10k+"
    ];

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
            {/* Background Gradients */}
            <div
                className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.08), transparent 40%),
                                 radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.08), transparent 40%)`
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Copy */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12" style={{ background: 'var(--accent-warm)' }} />
                            <span
                                className="text-sm font-semibold tracking-wide uppercase"
                                style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-warm)' }}
                            >
                                Get Started
                            </span>
                        </div>

                        <h2
                            className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
                            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                        >
                            Let's Build Something <br />
                            <span style={{ color: 'var(--accent-warm)' }}>Extraordinary</span>
                        </h2>

                        <p
                            className="text-lg leading-relaxed mb-10"
                            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}
                        >
                            Ready to transform your digital presence? Fill out the form, and let's discuss how we can help you achieve your goals with our expert marketing solutions.
                        </p>

                        {/* Contact Highlights */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(79, 70, 229, 0.1)' }}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent-warm)' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Call Us Directly</p>
                                    <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>+92 300 1234567</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(79, 70, 229, 0.1)' }}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent-warm)' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Email Us</p>
                                    <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>hello@adzomarketing.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div
                        className="relative p-8 lg:p-10 rounded-3xl"
                        style={{
                            background: '#FFFFFF',
                            border: '1px solid var(--border-subtle)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)'
                        }}
                    >
                        <form className="space-y-8">
                            {/* Personal Info */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-4 rounded-xl text-base outline-none transition-all duration-300 placeholder:text-gray-400"
                                        style={{
                                            background: 'var(--bg-secondary)',
                                            border: '1px solid transparent',
                                            color: 'var(--text-primary)'
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--accent-warm)';
                                            e.currentTarget.style.background = '#FFFFFF';
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.borderColor = 'transparent';
                                            e.currentTarget.style.background = 'var(--bg-secondary)';
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-4 rounded-xl text-base outline-none transition-all duration-300 placeholder:text-gray-400"
                                        style={{
                                            background: 'var(--bg-secondary)',
                                            border: '1px solid transparent',
                                            color: 'var(--text-primary)'
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--accent-warm)';
                                            e.currentTarget.style.background = '#FFFFFF';
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.borderColor = 'transparent';
                                            e.currentTarget.style.background = 'var(--bg-secondary)';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Package Selection */}
                            <div>
                                <label className="block text-sm font-medium mb-3 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Select Package</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {packages.map((pkg) => (
                                        <button
                                            key={pkg}
                                            type="button"
                                            onClick={() => setSelectedPackage(pkg)}
                                            className="px-4 py-3 rounded-lg text-sm text-center transition-all duration-300 border"
                                            style={{
                                                background: selectedPackage === pkg ? 'var(--accent-warm)' : 'var(--bg-secondary)',
                                                borderColor: selectedPackage === pkg ? 'var(--accent-warm)' : 'transparent',
                                                color: selectedPackage === pkg ? '#FFFFFF' : 'var(--text-muted)'
                                            }}
                                        >
                                            {pkg}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Budget Selection */}
                            <div>
                                <label className="block text-sm font-medium mb-3 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Estimated Budget</label>
                                <div className="flex flex-wrap gap-3">
                                    {budgetRanges.map((range) => (
                                        <button
                                            key={range}
                                            type="button"
                                            onClick={() => setBudget(range)}
                                            className="px-4 py-2 rounded-full text-sm transition-all duration-300 border"
                                            style={{
                                                background: budget === range ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
                                                borderColor: budget === range ? 'var(--accent-warm)' : 'var(--border-subtle)',
                                                color: budget === range ? 'var(--accent-warm)' : 'var(--text-muted)'
                                            }}
                                        >
                                            {range}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden relative group"
                                style={{
                                    background: 'var(--accent-warm)',
                                    color: '#FFFFFF'
                                }}
                            >
                                <span className="relative z-10">Get Your Free Quote</span>
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: 'linear-gradient(45deg, var(--accent-warm), var(--accent-coral))' }}
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
