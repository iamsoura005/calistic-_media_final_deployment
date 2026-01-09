"use client";

import React, { useState, useEffect } from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import AboutUsSection from "@/components/ui/about-us-section";
import { Navbar } from "@/components/ui/navbar";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { GooeyLoader } from "@/components/ui/loader-10";
import { SignUpPopup } from "@/components/ui/sign-up-popup";

export default function Home() {
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

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030303]">
        <GooeyLoader color="#facc15" />
      </div>
    );
  }

  return (
    <main className="w-full bg-[#030303] overflow-x-hidden">
      <Navbar />
      <HeroGeometric
        badge="Pure Organic Growth"
        title1="Calistic"
        title2="Media"
      />
      <AboutUsSection />
      <WhatsAppButton />
      <SignUpPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </main>
  );
}
