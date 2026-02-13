"use client";

export default function Services() {
    return (
        <section
            id="services"
            className="relative py-24 lg:py-32 overflow-hidden"
            style={{ background: 'var(--bg-secondary)' }}
        >
            {/* Background Decoration */}
            <div
                className="absolute top-0 right-0 w-1/2 h-full opacity-30"
                style={{
                    background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 80px,
            rgba(212, 132, 26, 0.03) 80px,
            rgba(212, 132, 26, 0.03) 81px
          )`
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

                {/* Section Header */}
                <div className="max-w-3xl mb-12 lg:mb-20">
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
                            What We Do
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6"
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--text-primary)'
                        }}
                    >
                        Our 360° Marketing{' '}
                        <span style={{ color: 'var(--accent-warm)' }}>Services</span>
                    </h2>

                    <p
                        className="text-base md:text-lg lg:text-xl leading-relaxed"
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--text-muted)',
                            lineHeight: '1.8'
                        }}
                    >
                        We're a local team of digital marketing experts right here in Lahore. We deliver creative,
                        high-quality, and affordable marketing solutions that focus on one thing: getting you a
                        <span style={{ color: 'var(--accent-warm)', fontWeight: 600 }}> great return on your investment</span>.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                    {/* Website Development Card */}
                    <div
                        className="group relative p-8 lg:p-10 transition-all duration-500"
                        style={{
                            background: 'rgba(255, 255, 255, 0.7)',
                            border: '1px solid var(--border-subtle)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {/* Card Accent Line */}
                        <div
                            className="absolute top-0 left-0 w-full h-1 transition-all duration-500"
                            style={{ background: 'var(--accent-warm)' }}
                        />

                        {/* Icon */}
                        <div
                            className="w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300"
                            style={{
                                background: 'rgba(212, 132, 26, 0.1)',
                                borderRadius: '12px'
                            }}
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                style={{ color: 'var(--accent-warm)' }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>

                        {/* Badge */}
                        <span
                            className="inline-block px-3 py-1 text-xs tracking-widest uppercase mb-4"
                            style={{
                                fontFamily: 'var(--font-mono)',
                                background: 'rgba(212, 132, 26, 0.1)',
                                color: 'var(--accent-warm)'
                            }}
                        >
                            Website Development Agency in Lahore
                        </span>

                        <h3
                            className="text-2xl font-bold mb-4"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-primary)'
                            }}
                        >
                            Website Development
                        </h3>

                        <p
                            className="text-base leading-relaxed mb-8"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-muted)'
                            }}
                        >
                            We design professional, yet simple websites that are optimized for search engines and user-friendly.
                        </p>

                        {/* Services List */}
                        <ul className="space-y-3">
                            {['WordPress Website', 'Shopify Website', 'OnePage Website', 'WooCommerce Website', 'Website Maintenance'].map((service, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 text-sm"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        color: 'var(--text-muted)'
                                    }}
                                >
                                    <div
                                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                        style={{ background: 'var(--accent-warm)' }}
                                    />
                                    {service}
                                </li>
                            ))}
                        </ul>

                        {/* Arrow Link */}
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 mt-8 text-sm tracking-wider transition-all duration-300"
                            style={{
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--accent-warm)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
                            onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}
                        >
                            Learn More
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Digital Marketing Card */}
                    <div
                        className="group relative p-8 lg:p-10 transition-all duration-500"
                        style={{
                            background: 'rgba(255, 255, 255, 0.7)',
                            border: '1px solid var(--border-subtle)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {/* Card Accent Line */}
                        <div
                            className="absolute top-0 left-0 w-full h-1 transition-all duration-500"
                            style={{ background: 'var(--accent-coral)' }}
                        />

                        {/* Icon */}
                        <div
                            className="w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300"
                            style={{
                                background: 'rgba(232, 90, 79, 0.1)',
                                borderRadius: '12px'
                            }}
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                style={{ color: 'var(--accent-coral)' }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>

                        {/* Badge */}
                        <span
                            className="inline-block px-3 py-1 text-xs tracking-widest uppercase mb-4"
                            style={{
                                fontFamily: 'var(--font-mono)',
                                background: 'rgba(232, 90, 79, 0.1)',
                                color: 'var(--accent-coral)'
                            }}
                        >
                            Digital Marketing Agency in Lahore
                        </span>

                        <h3
                            className="text-2xl font-bold mb-4"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-primary)'
                            }}
                        >
                            Digital Marketing
                        </h3>

                        <p
                            className="text-base leading-relaxed mb-8"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-muted)'
                            }}
                        >
                            We craft professional converting digital marketing strategies that are highly engaging for users.
                        </p>

                        {/* Services List */}
                        <ul className="space-y-3">
                            {['Professional SEO Services', 'Local SEO Services', 'Social Media Marketing', 'PPC Management Service'].map((service, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 text-sm"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        color: 'var(--text-muted)'
                                    }}
                                >
                                    <div
                                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                        style={{ background: 'var(--accent-coral)' }}
                                    />
                                    {service}
                                </li>
                            ))}
                        </ul>

                        {/* Arrow Link */}
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 mt-8 text-sm tracking-wider transition-all duration-300"
                            style={{
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--accent-coral)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
                            onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}
                        >
                            Learn More
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Content Writing Card */}
                    <div
                        className="group relative p-8 lg:p-10 transition-all duration-500"
                        style={{
                            background: 'rgba(255, 255, 255, 0.7)',
                            border: '1px solid var(--border-subtle)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {/* Card Accent Line */}
                        <div
                            className="absolute top-0 left-0 w-full h-1 transition-all duration-500"
                            style={{ background: 'var(--accent-sage)' }}
                        />

                        {/* Icon */}
                        <div
                            className="w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300"
                            style={{
                                background: 'rgba(90, 125, 82, 0.1)',
                                borderRadius: '12px'
                            }}
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                style={{ color: 'var(--accent-sage)' }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>

                        {/* Badge */}
                        <span
                            className="inline-block px-3 py-1 text-xs tracking-widest uppercase mb-4"
                            style={{
                                fontFamily: 'var(--font-mono)',
                                background: 'rgba(90, 125, 82, 0.1)',
                                color: 'var(--accent-sage)'
                            }}
                        >
                            Content Writing Services in Lahore
                        </span>

                        <h3
                            className="text-2xl font-bold mb-4"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-primary)'
                            }}
                        >
                            Content Writing
                        </h3>

                        <p
                            className="text-base leading-relaxed mb-8"
                            style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-muted)'
                            }}
                        >
                            We offer professional content writing services, specializing in SEO-optimized blog posts and website content.
                        </p>

                        {/* Services List */}
                        <ul className="space-y-3">
                            {['Blog Writing', 'SEO Content', 'Website Copy', 'Article Writing'].map((service, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 text-sm"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        color: 'var(--text-muted)'
                                    }}
                                >
                                    <div
                                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                        style={{ background: 'var(--accent-sage)' }}
                                    />
                                    {service}
                                </li>
                            ))}
                        </ul>

                        {/* Arrow Link */}
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 mt-8 text-sm tracking-wider transition-all duration-300"
                            style={{
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--accent-sage)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
                            onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}
                        >
                            Learn More
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
