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
import AboutUsSection from "@/components/ui/about-us-section";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { Logos3 } from "@/components/ui/logos3";

const testimonials = [
  {
    author: {
      name: "Rohit Sharma",
      handle: "@rohit_media",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    text: "Calistic Media transformed our brand's organic reach. Their 50k+ creator network is a game changer for the Indian market."
  },
  {
    author: {
      name: "Ananya Iyer",
      handle: "@ananya_creates",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    text: "The high-fidelity content they produced for our last campaign went viral within 48 hours. pure organic magic!"
  },
  {
    author: {
      name: "Vikram Bose",
      handle: "@vikram_entrepreneur",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    text: "Finally an agency that doesn't just push ads but builds actual brand legacy. Their R&D team really knows their numbers."
  },
  {
    author: {
      name: "Priya Das",
      handle: "@priya_lifestyle",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
    },
    text: "Collaborating with Calistic as a creator has been seamless. They bridge the gap between brands and creators like no one else."
  }
]

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
    { name: "Home", url: "#", icon: HomeIcon },
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

      <TestimonialsSection
        title="Trusted by India's biggest brands and creators"
        description="Join the 50,000+ creators and hundreds of brands building high-fidelity organic growth with Calistic Media."
        testimonials={testimonials}
      />

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
