"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoaded(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/#services' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
            style={{
                background: isScrolled ? 'rgba(253, 252, 250, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
                animationDelay: '0.1s'
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center transition-all duration-300"
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                        <img
                            src="/logo.png"
                            alt="Adzzly Logo"
                            className="h-25 md:h-30 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navItems.filter(item => item.name !== 'Services' || pathname === '/').map((item) => {
                            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href) && item.href !== '/#services');

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-base font-medium transition-all duration-300"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        color: isActive ? 'var(--accent-warm)' : 'var(--text-muted)'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) e.currentTarget.style.color = 'var(--accent-warm)';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                                    }}
                                >
                                    {item.name}
                                    {isActive && (
                                        <span
                                            className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                                            style={{ background: 'var(--accent-warm)' }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link target="_blank" href="https://wa.me/+923244663916">
                            <button
                                className="px-6 py-3 text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300"
                                style={{ fontFamily: 'var(--font-mono)', background: 'var(--accent-warm)', color: '#FFFFFF' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--accent-coral)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--accent-warm)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                Contact
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{ color: 'var(--text-primary)' }}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-6 border-t" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-primary)' }}>
                        <div className="flex flex-col gap-4">
                            {navItems.filter(item => item.name !== 'Services' || pathname === '/').map((item) => {
                                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href) && item.href !== '/#services');

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-sm tracking-wider uppercase py-2 transition-all duration-300"
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            color: isActive ? 'var(--accent-warm)' : 'var(--text-muted)'
                                        }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <button
                                    className="mt-4 px-6 py-3 text-xs tracking-[0.15em] uppercase font-semibold w-full transition-all duration-300"
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        background: 'var(--accent-warm)',
                                        color: '#FFFFFF',
                                    }}
                                >
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
