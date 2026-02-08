"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Contact() {
    const [isLoaded, setIsLoaded] = useState(false);

    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
    };

    const contactInfo = [
        { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z', title: 'Visit Us', details: ['Office 123, Tech Plaza', 'Gulberg III, Lahore', 'Pakistan'] },
        { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Email Us', details: ['hello@adzzly.com', 'support@adzzly.com'] },
        { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', title: 'Call Us', details: ['+92 300 1234567', '+92 42 35761234'] },
        { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Working Hours', details: ['Mon - Fri: 9AM - 6PM', 'Sat: 10AM - 4PM', 'Sun: Closed'] },
    ];

    return (
        <div className="grain-overlay">


            {/* Navbar - Removed (Moved to Layout) */}
            <div className={`transition-all duration-500 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-ambient)' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <div className={`max-w-3xl ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12" style={{ background: 'var(--accent-warm)' }} />
                            <span className="text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-warm)' }}>
                                Contact Us
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                            Let's Start a <span style={{ color: 'var(--accent-warm)' }}>Conversation</span>
                        </h1>

                        <p className="text-lg lg:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            Have a project in mind? We'd love to hear about it. Get in touch with us and let's create something amazing together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12" style={{ background: 'var(--bg-secondary)' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, i) => (
                            <div
                                key={i}
                                className="p-6 transition-all duration-300"
                                style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid var(--border-subtle)' }}
                            >
                                <div
                                    className="w-12 h-12 flex items-center justify-center rounded-lg mb-4"
                                    style={{ background: 'rgba(212, 132, 26, 0.1)' }}
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent-warm)' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={info.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                    {info.title}
                                </h3>
                                {info.details.map((detail, j) => (
                                    <p key={j} className="text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}>
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section className="py-20" style={{ background: 'var(--bg-primary)' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                Send Us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 outline-none transition-all duration-300"
                                            style={{
                                                fontFamily: 'var(--font-display)',
                                                background: 'var(--bg-secondary)',
                                                border: '1px solid var(--border-subtle)',
                                                color: 'var(--text-primary)'
                                            }}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 outline-none transition-all duration-300"
                                            style={{
                                                fontFamily: 'var(--font-display)',
                                                background: 'var(--bg-secondary)',
                                                border: '1px solid var(--border-subtle)',
                                                color: 'var(--text-primary)'
                                            }}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 outline-none transition-all duration-300"
                                            style={{
                                                fontFamily: 'var(--font-display)',
                                                background: 'var(--bg-secondary)',
                                                border: '1px solid var(--border-subtle)',
                                                color: 'var(--text-primary)'
                                            }}
                                            placeholder="+92 300 1234567"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                            Service Interested In
                                        </label>
                                        <select
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className="w-full px-4 py-3 outline-none transition-all duration-300"
                                            style={{
                                                fontFamily: 'var(--font-display)',
                                                background: 'var(--bg-secondary)',
                                                border: '1px solid var(--border-subtle)',
                                                color: 'var(--text-primary)'
                                            }}
                                        >
                                            <option value="">Select a service</option>
                                            <option value="web">Website Development</option>
                                            <option value="marketing">Digital Marketing</option>
                                            <option value="seo">SEO Services</option>
                                            <option value="content">Content Writing</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                        Your Message *
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 outline-none transition-all duration-300 resize-none"
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            background: 'var(--bg-secondary)',
                                            border: '1px solid var(--border-subtle)',
                                            color: 'var(--text-primary)'
                                        }}
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-10 py-4 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300"
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        background: 'var(--accent-warm)',
                                        color: '#FFFFFF'
                                    }}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Map Placeholder */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                Our Location
                            </h2>

                            <div
                                className="w-full h-80 lg:h-full min-h-[400px] flex items-center justify-center"
                                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}
                            >
                                <div className="text-center p-8">
                                    <div className="text-6xl mb-4">📍</div>
                                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                        Gulberg III, Lahore
                                    </h3>
                                    <p style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}>
                                        Office 123, Tech Plaza<br />
                                        Main Boulevard, Gulberg III<br />
                                        Lahore, Pakistan
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=Gulberg+III+Lahore"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-4 text-sm font-medium transition-all duration-300"
                                        style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-warm)' }}
                                    >
                                        Open in Google Maps
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20" style={{ background: 'var(--bg-secondary)' }}>
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {[
                            { q: 'What is your typical project timeline?', a: 'Most projects take 2-8 weeks depending on complexity. We\'ll provide a detailed timeline after understanding your requirements.' },
                            { q: 'Do you offer ongoing support?', a: 'Yes! We offer maintenance packages and ongoing support for all our web development and marketing clients.' },
                            { q: 'What are your payment terms?', a: 'We typically work with 50% upfront and 50% on completion. Custom payment plans are available for larger projects.' },
                            { q: 'Can you work with clients outside Lahore?', a: 'Absolutely! We work with clients across Pakistan and internationally. All our services can be delivered remotely.' },
                        ].map((faq, i) => (
                            <div
                                key={i}
                                className="p-6"
                                style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid var(--border-subtle)' }}
                            >
                                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                                    {faq.q}
                                </h3>
                                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8" style={{ background: 'var(--bg-dark)' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-light-muted)' }}>
                            © {new Date().getFullYear()} Adzzly. All rights reserved.
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
