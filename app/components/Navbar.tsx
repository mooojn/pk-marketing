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
        { name: 'Services', href: '/#services' },
        { name: 'About', href: '/about' },
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
                            className="h-15 md:h-20 w-auto object-contain"
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
                        <Link target="_blank" href="https://wa.me/+923706037115">
                            <button
                                className="px-6 py-3 text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300"
                                style={{ fontFamily: 'var(--font-mono)', background: 'var(--accent-warm)', color: '#FFFFFF' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'black';
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
                        className="md:hidden relative w-11 h-11 rounded-xl border transition-all duration-300 flex items-center justify-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            color: 'var(--text-primary)',
                            borderColor: isMobileMenuOpen ? 'var(--accent-warm)' : 'var(--border-subtle)',
                            background: isMobileMenuOpen ? 'rgba(212, 132, 26, 0.08)' : 'rgba(255, 255, 255, 0.75)',
                            backdropFilter: 'blur(10px)'
                        }}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Open navigation menu</span>
                        <span className="relative block w-5 h-4">
                            <span
                                className={`absolute left-0 h-0.5 w-5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'top-1.5 rotate-45' : 'top-0'}`}
                                style={{ background: 'currentColor' }}
                            />
                            <span
                                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                                style={{ background: 'currentColor' }}
                            />
                            <span
                                className={`absolute left-0 h-0.5 w-5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'}`}
                                style={{ background: 'currentColor' }}
                            />
                        </span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pb-4">
                        <div
                            className="mt-2 p-4 rounded-2xl border shadow-xl"
                            style={{
                                borderColor: 'var(--border-subtle)',
                                background: 'rgba(255, 255, 255, 0.96)',
                                backdropFilter: 'blur(16px)',
                                boxShadow: '0 24px 45px -24px rgba(15, 23, 42, 0.45)'
                            }}
                        >
                            <div className="flex flex-col gap-2">
                            {navItems.filter(item => item.name !== 'Services' || pathname === '/').map((item) => {
                                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href) && item.href !== '/#services');

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-sm tracking-wider uppercase px-4 py-3 rounded-xl transition-all duration-300"
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            color: isActive ? 'var(--accent-warm)' : 'var(--text-muted)',
                                            background: isActive ? 'rgba(212, 132, 26, 0.1)' : 'transparent'
                                        }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <button
                                    className="mt-3 px-6 py-3 text-xs tracking-[0.15em] uppercase font-semibold w-full transition-all duration-300 rounded-xl"
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        background: 'linear-gradient(135deg, var(--accent-warm), #f59e0b)',
                                        color: '#FFFFFF',
                                    }}
                                >
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
