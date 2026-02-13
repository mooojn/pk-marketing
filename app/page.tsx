"use client";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import DetailedServices from "./components/DetailedServices";
import BrandSlider from "./components/BrandSlider";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="grain-overlay">
      <Hero />
      <BrandSlider />
      <Services />
      <DetailedServices />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}
