"use client";

import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import DetailedServices from "./components/DetailedServices";
import BrandSlider from "./components/BrandSlider";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import CaseStudies from "./components/CaseStudies";
import MarqueeBanner from "./components/MarqueeBanner";

export default function Home() {
  return (
    <div className="grain-overlay">
      <Hero />
      <BrandSlider />
      <Testimonials />
      <DetailedServices />
      <Pricing />
      <CaseStudies />
      <MarqueeBanner />
      <ContactForm />
      <Footer />
    </div>
  );
}
