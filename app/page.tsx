'use client'
import React from "react";
import AnimatedWavesBg from '../components/AnimatedWavesBg';
import CounselLikeCanvasBg from '@/components/CounselLikeCanvasBg'
import LandingStyles from "@/components/landing/LandingStyles";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Clientele from "@/components/landing/Clientele";
import VSL from "@/components/landing/VSL";
import SystemGrowth from "@/components/landing/SystemGrowth";
import WorkWithUs from "@/components/landing/WorkWithUs";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

/**
 * beyondbrnd — Single-page landing
 *
 * Replace the logo path with your preferred asset (SVG/PNG) and wire the CTA to Calendly / Typeform.
 */
export default function BeyondbrndLanding() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Brand tokens and styles */}
      <LandingStyles />

      {/* NAV */}
      <Header />

      <CounselLikeCanvasBg />

      {/* HERO */}
      <Hero />

      {/* CLIENTELE (moving titles) */}
      <Clientele />

      {/* VSL */}
      <VSL />

      {/* SYSTEM */}
      {/* <SystemGrowth /> */}

      {/* WORK WITH US */}
      <WorkWithUs />

      {/* TESTIMONIALS (horizontal moving) */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
