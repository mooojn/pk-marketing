"use client";

import React from 'react';

const BrandSlider = () => {
    // Client logos/brands
    const brands = [
        { name: "Tide Immigration", color: "#0EA5E9" },      // Sky Blue
        { name: "Pure Spark Cleaners", color: "#2DD4BF" },   // Teal
        { name: "Everskill Education", color: "#4F46E5" },   // Indigo
        { name: "Euro Sports Kit", color: "#F43F5E" },       // Rose
        { name: "Digital Bazzar", color: "#10B981" },        // Emerald
        { name: "Smart Move Immigrations", color: "#1E293B" }, // Navy
        { name: "AMW-FM", color: "#EF4444" },                // Red
        { name: "Fasha Cosmetics", color: "#EC4899" },       // Pink
        { name: "TinyTots", color: "#F59E0B" },              // Amber
    ];

    // Duplicate the array to ensure seamless looping
    const duplicatedBrands = [...brands, ...brands, ...brands];

    return (
        <section className="relative w-full overflow-hidden bg-white py-6 border-y border-[var(--border-subtle)]">
            <div className="relative z-20 px-6 md:px-10 pb-4">
                <div className="flex items-center gap-4">
                    <span className="h-px flex-1 bg-[var(--border-subtle)]" />
                    <h3
                        className="text-sm md:text-[15px] font-semibold tracking-[0.08em] uppercase"
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--text-secondary)'
                        }}
                    >
                        Our Clients
                    </h3>
                    <span className="h-px flex-1 bg-[var(--border-subtle)]" />
                </div>
            </div>

            {/* Gradient Masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent" />

            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                {duplicatedBrands.map((brand, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center mx-8 md:mx-12 group transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                        {/* Logo Placeholder */}
                        <div className="flex items-center gap-3 opacity-95 transition-all duration-500 group-hover:opacity-100">
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold shadow-sm saturate-150"
                                style={{ backgroundColor: brand.color }}
                            >
                                {brand.name.charAt(0)}
                            </div>
                            <span
                                className="text-lg font-bold tracking-tight"
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                {brand.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandSlider;
