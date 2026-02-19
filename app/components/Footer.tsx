"use client";

export default function Footer() {
    return (
        <footer
            className="relative pt-20 pb-8 overflow-hidden"
            style={{ background: 'var(--bg-dark)' }}
        >
        

            

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        {/* Logo */}
                        <a href="#" className="inline-flex items-center mb-6">
                            <img
                                src="/bg-logo.jpeg"
                                alt="Adzzly Logo"
                                className="h-28 w-auto object-contain"
                            />
                        </a>

                        <p
                            className="text-base leading-relaxed mb-6"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-light-muted)',
                                lineHeight: '1.7'
                            }}
                        >
                            Your trusted digital marketing partner in Lahore. We help businesses grow with creative,
                            result-driven marketing solutions.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {[
                                { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                                { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                                { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z' },
                                { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300"
                                    style={{
                                        background: 'var(--border-light)',
                                        color: 'var(--text-light-muted)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--accent-warm)';
                                        e.currentTarget.style.color = '#FFFFFF';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'var(--border-light)';
                                        e.currentTarget.style.color = 'var(--text-light-muted)';
                                    }}
                                    aria-label={social.name}
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4
                            className="text-lg font-bold mb-6"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-light)'
                            }}
                        >
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {[
                                'Website Development',
                                'Digital Marketing',
                                'SEO Services',
                                'Content Writing',
                                'Social Media Marketing',
                                'PPC Management'
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-base transition-all duration-300 inline-flex items-center gap-2"
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            color: 'var(--text-light-muted)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--accent-warm)';
                                            e.currentTarget.style.paddingLeft = '8px';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--text-light-muted)';
                                            e.currentTarget.style.paddingLeft = '0';
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            className="text-lg font-bold mb-6"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-light)'
                            }}
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                'About Us',
                                'Our Work',
                                'Case Studies',
                                'Blog',
                                'Careers',
                                'Contact'
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-base transition-all duration-300"
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            color: 'var(--text-light-muted)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--accent-warm)';
                                            e.currentTarget.style.paddingLeft = '8px';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--text-light-muted)';
                                            e.currentTarget.style.paddingLeft = '0';
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4
                            className="text-lg font-bold mb-6"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-light)'
                            }}
                        >
                            Get In Touch
                        </h4>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent-warm)' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span style={{ fontFamily: 'var(--font-display)', color: 'var(--text-light-muted)' }}>
                                    Lahore, Pakistan
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent-warm)' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span style={{ fontFamily: 'var(--font-display)', color: 'var(--text-light-muted)' }}>
                                    hello@adzzly.com
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent-warm)' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span style={{ fontFamily: 'var(--font-display)', color: 'var(--text-light-muted)' }}>
                                    +92 300 1234567
                                </span>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <h5
                            className="text-sm font-semibold mb-3"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-light)'
                            }}
                        >
                            Subscribe to Newsletter
                        </h5>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-3 text-sm outline-none transition-all duration-300"
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    background: 'var(--border-light)',
                                    color: 'var(--text-light)',
                                    border: '1px solid transparent'
                                }}
                                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent-warm)'}
                                onBlur={(e) => e.currentTarget.style.borderColor = 'transparent'}
                            />
                            <button
                                className="px-4 py-3 transition-all duration-300"
                                style={{
                                    background: 'var(--accent-warm)',
                                    color: '#FFFFFF'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-coral)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent-warm)'}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="h-px w-full mb-8"
                    style={{ background: 'var(--border-light)' }}
                />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p
                        className="text-sm"
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--text-light-muted)'
                        }}
                    >
                        © {new Date().getFullYear()} Adzzly. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm transition-all duration-300"
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    color: 'var(--text-light-muted)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-warm)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-light-muted)'}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
