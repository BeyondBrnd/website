'use client'
import React from "react";
import CTAButton from "@/components/CTAButton";

const Logo = () => (
    <div className="flex items-center gap-3">
        <img
            src="/beyondbrnd-white-bg-logo.png"
            alt="beyondbrnd"
            className="h-12 w-auto"
            loading="eager"
        />
    </div>
);

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Logo />
                <CTAButton />
            </div>
        </header>
    );
}
