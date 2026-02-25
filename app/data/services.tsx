import { Figma, SearchCheck } from "lucide-react";
import { FaMeta } from "react-icons/fa6";

export const services = [
    {
        title: "Meta Ads Management",
        description: "Data-driven ad campaigns on Facebook and Instagram to scale ROI.",
        icon: (
            <FaMeta className="w-6 h-6" />
        ),
        accent: "var(--accent-purple)",
        bgAccent: "rgba(24, 119, 242, 0.1)"
    },
    {
        title: "Google Ads",
        description: "Strategic Google Search, Display, and YouTube campaigns that convert.",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
        ),
        accent: "#4285F4",
        bgAccent: "rgba(66, 133, 244, 0.1)"
    },
    {
        title: "Web Development",
        description: "Custom websites, Shopify stores, and high-performance web apps.",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        accent: "var(--accent-sage)",
        bgAccent: "rgba(16, 185, 129, 0.1)"
    },
    {
        title: "Graphic Designing",
        description: "Complete visual identity systems, logos, and stunning brand collateral.",
        icon: (
            <Figma className="w-6 h-6" strokeWidth={1.8} />
        ),
        accent: "var(--accent-gold)",
        bgAccent: "rgba(245, 158, 11, 0.1)"
    },
    {
        title: "Video Editing",
        description: "Professional video production, motion graphics, and social media content.",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        accent: "var(--accent-coral)",
        bgAccent: "rgba(244, 63, 94, 0.1)"
    },
    {
        title: "SEO (On-Site & Off-Site)",
        description: "Full-spectrum SEO strategies to dominate search rankings and drive organic traffic.",
        icon: (
            <SearchCheck className="w-6 h-6" strokeWidth={1.8} />
        ),
        accent: "var(--accent-teal)",
        bgAccent: "rgba(13, 148, 136, 0.1)"
    },
    {
        title: "CRM Automation + AI",
        description: "Intelligent automation workflows, AI chatbots, and custom CRM integrations.",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        accent: "var(--accent-warm)",
        bgAccent: "rgba(79, 70, 229, 0.1)"
    },
    {
        title: "App Development",
        description: "Native and cross-platform iOS & Android apps built with React Native.",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        accent: "var(--accent-navy-light)",
        bgAccent: "rgba(51, 65, 85, 0.1)"
    }
];
