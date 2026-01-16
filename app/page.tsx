"use client";

import React, { useState, useEffect } from "react";
import { Home, Sparkles, Layout, MessageSquare } from "lucide-react";
import HeroGeometric from "@/components/ui/shape-landing-hero";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { FeaturesSectionWithCardGradient } from "@/components/ui/feature-section-with-card-gradient";
import FooterSection from "@/components/ui/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { GooeyLoader } from "@/components/ui/loader-10";
import { SignUpPopup } from "@/components/ui/sign-up-popup";
import AboutUsSection from "@/components/ui/about-us-section";
import { PremiumTestimonials } from "@/components/ui/premium-testimonials";
import { Logos3 } from "@/components/ui/logos3";
import { InstagramReels } from "@/components/ui/instagram-reels";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
      // Trigger popup 2 seconds after loading finishes
      const popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 10000);
      return () => clearTimeout(popupTimer);
    }, 2000);
    return () => clearTimeout(loaderTimer);
  }, []);

  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "Services", url: "/services", icon: Layout },
    { name: "Features", url: "/features", icon: Sparkles },
    { name: "Contact", url: "/contact", icon: MessageSquare }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030303]">
        <GooeyLoader />
      </div>
    );
  }

  return (
    <main className="w-full bg-[#030303] overflow-x-hidden scroll-smooth">
      <NavBar items={navItems} onSignupClick={() => setShowPopup(true)} />

      <HeroGeometric
        badge="Pure Organic Growth"
        title1="Calistic"
        title2="Media"
      />

      <section id="features">
        <FeaturesSectionWithCardGradient />
      </section>

      <AboutUsSection />

      <Logos3 />

      <InstagramReels />

      <PremiumTestimonials />

      <WhatsAppButton />
      <SignUpPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <FooterSection />
    </main>
  );
}
