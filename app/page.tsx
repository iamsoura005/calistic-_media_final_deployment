"use client";

import React, { useState, useEffect } from "react";
import { Home as HomeIcon, Sparkles, Layout, MessageSquare, MapPin } from "lucide-react";
import HeroGeometric from "@/components/ui/shape-landing-hero";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { FeaturesSectionWithCardGradient } from "@/components/ui/feature-section-with-card-gradient";
import { LocationMap } from "@/components/ui/expand-map";
import FooterSection from "@/components/ui/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { GooeyLoader } from "@/components/ui/loader-10";
import { SignUpPopup } from "@/components/ui/sign-up-popup";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
      // Trigger popup 2 seconds after loading finishes
      const popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);
      return () => clearTimeout(popupTimer);
    }, 3000);
    return () => clearTimeout(loaderTimer);
  }, []);

  const navItems = [
    { name: "Home", url: "#", icon: HomeIcon },
    { name: "Services", url: "/services", icon: Layout },
    { name: "Features", url: "#features", icon: Sparkles },
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
      <NavBar items={navItems} />

      <HeroGeometric
        badge="Pure Organic Growth"
        title1="Calistic"
        title2="Media"
      />

      <section id="features">
        <FeaturesSectionWithCardGradient />
      </section>

      <section className="py-24 bg-[#030303] flex justify-center px-6">
        <div className="flex flex-col items-center gap-8">
          <span className="text-yellow-500/40 text-[10px] uppercase tracking-[0.4em] font-medium">Global Network</span>
          <LocationMap location="India Network" coordinates="20.5937° N, 78.9629° E" />
        </div>
      </section>

      <WhatsAppButton />
      <SignUpPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <FooterSection />
    </main>
  );
}
