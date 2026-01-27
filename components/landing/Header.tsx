'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    {/* Replace with your final logo asset (ideally SVG) */}
                    <img
                        src="/beyondbrnd-white-bg-logo.png"
                        alt="beyondbrnd"
                        className="h-15 w-auto"
                        loading="eager"
                    />
                </div>
                <Button
                    className="rounded-full bg-[var(--bb-green)] text-black hover:bg-[var(--bb-mint)]"
                    onClick={() => document.getElementById("growth-plan")?.scrollIntoView({ behavior: "smooth" })}
                >
                    Get a FREE Growth Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </header>
    );
}
