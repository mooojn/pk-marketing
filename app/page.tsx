"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Pricing from "./components/Pricing";
import DetailedServices from "./components/DetailedServices";
import BrandSlider from "./components/BrandSlider";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="grain-overlay">


      {/* Navbar - Removed (Moved to Layout) */}
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

      {/* Brand Slider */}
      <BrandSlider />

      {/* Services Section */}
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

      <DetailedServices />

      <Pricing />

      {/* Footer */}
      <footer
        className="relative pt-20 pb-8 overflow-hidden"
        style={{ background: 'var(--bg-dark)' }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(212, 132, 26, 0.1) 100px,
              rgba(212, 132, 26, 0.1) 101px
            )`
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <a href="#" className="inline-flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg"
                  style={{
                    border: '2px solid var(--accent-warm)',
                    color: 'var(--accent-warm)'
                  }}
                >
                  <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>A</span>
                </div>
                <span
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-light)'
                  }}
                >
                  Adzzly
                </span>
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
    </div>
  );
}
