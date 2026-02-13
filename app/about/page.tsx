"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function About() {
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const team = [
        { name: 'Ahmed Khan', role: 'Founder & CEO', image: '👨‍💼' },
        { name: 'Sara Ali', role: 'Creative Director', image: '👩‍🎨' },
        { name: 'Bilal Hassan', role: 'Lead Developer', image: '👨‍💻' },
        { name: 'Fatima Zahra', role: 'Marketing Head', image: '👩‍💼' },
    ];

    const values = [
        { title: 'Innovation', description: 'We stay ahead of trends to deliver cutting-edge solutions.', icon: '💡' },
        { title: 'Quality', description: 'Excellence is our standard in every project we undertake.', icon: '⭐' },
        { title: 'Transparency', description: 'Open communication and honest reporting at all times.', icon: '🔍' },
        { title: 'Results', description: 'Your success is our success. We focus on measurable outcomes.', icon: '📈' },
    ];

    return (
        <div className="grain-overlay">


            {/* Navbar - Removed (Moved to Layout) */}
            <div className={`transition-all duration-500 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-ambient)' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <div className={`max-w-3xl ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12" style={{ background: 'var(--accent-warm)' }} />
                            <span className="text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-warm)' }}>
                                About Us
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                            We're a Team of <span style={{ color: 'var(--accent-warm)' }}>Digital Experts</span>
                        </h1>

                        <p className="text-lg lg:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            Based in the heart of Lahore, we've been helping businesses transform their digital presence
                            and achieve remarkable growth since 2020.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20" style={{ background: 'var(--bg-secondary)' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                Our Story
                            </h2>
                            <div className="space-y-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                <p>
                                    AdzoMarketing was founded with a simple mission: to help local businesses in Pakistan compete
                                    in the digital age. We saw too many talented entrepreneurs struggling to reach their
                                    audience online.
                                </p>
                                <p>
                                    What started as a small team of passionate marketers has grown into a full-service
                                    digital agency serving clients across Lahore, Karachi, Islamabad, and beyond.
                                </p>
                                <p>
                                    Today, we've helped over <span style={{ color: 'var(--accent-warm)', fontWeight: 600 }}>150+ businesses</span> achieve
                                    their digital goals, from startups to established enterprises.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { number: '150+', label: 'Projects Completed' },
                                { number: '50+', label: 'Happy Clients' },
                                { number: '5+', label: 'Years Experience' },
                                { number: '12', label: 'Team Members' },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="p-6 text-center"
                                    style={{ background: 'rgba(255, 255, 255, 0.7)', border: '1px solid var(--border-subtle)' }}
                                >
                                    <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-warm)' }}>
                                        {stat.number}
                                    </div>
                                    <div className="text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20" style={{ background: 'var(--bg-primary)' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                            Our Core Values
                        </h2>
                        <p style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}>
                            These principles guide everything we do and every decision we make.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <div
                                key={i}
                                className="p-8 text-center transition-all duration-300"
                                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                    {value.title}
                                </h3>
                                <p className="text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20" style={{ background: 'var(--bg-secondary)' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                            Meet Our Team
                        </h2>
                        <p style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}>
                            The talented individuals who make the magic happen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <div
                                key={i}
                                className="text-center p-8 transition-all duration-300"
                                style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid var(--border-subtle)' }}
                            >
                                <div
                                    className="w-24 h-24 mx-auto mb-4 flex items-center justify-center text-5xl rounded-full"
                                    style={{ background: 'var(--bg-secondary)' }}
                                >
                                    {member.image}
                                </div>
                                <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                    {member.name}
                                </h3>
                                <p className="text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-warm)' }}>
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" style={{ background: 'var(--bg-dark)' }}>
                <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-light)' }}>
                        Ready to Work Together?
                    </h2>
                    <p className="text-lg mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-light-muted)' }}>
                        Let's discuss how we can help your business grow.
                    </p>
                    <Link href="/contact">
                        <button
                            className="px-10 py-5 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300"
                            style={{ fontFamily: 'var(--font-mono)', background: 'var(--accent-warm)', color: '#FFFFFF' }}
                        >
                            Contact Us Today
                        </button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8" style={{ background: 'var(--bg-darker)' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-light-muted)' }}>
                            © {new Date().getFullYear()} AdzoMarketing. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            {['Privacy Policy', 'Terms of Service'].map((item) => (
                                <a key={item} href="#" className="text-sm transition-all duration-300" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-light-muted)' }}>
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
