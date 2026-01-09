"use client";

import React from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import AboutUsSection from "@/components/ui/about-us-section";
import { Navbar } from "@/components/ui/navbar";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <main className="w-full bg-[#030303]">
      <Navbar />
      <HeroGeometric
        badge="Pure Organic Growth"
        title1="Organic"
        title2="Growth Mastery"
      />
      <AboutUsSection />
      <WhatsAppButton />
    </main>
  );
}
