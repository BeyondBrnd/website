'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,191,99,0.15),transparent_70%)]" />

            <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center px-4 text-center">
                <h1 className="text-5xl font-bold tracking-tight text-black md:text-7xl">
                    <span className="text-[var(--bb-deep)]">Beyond Branding.</span> <br className="hidden md:block" /> Real Business Growth.
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-black/60 md:text-xl">
                    We help <span className="font-semibold text-black">B2B founders & experts</span> generate <span className="font-semibold text-black">qualified, high-intent leads</span> through a repeatable <span className="font-semibold text-black">LinkedIn Content + DM Outreach system</span>.
                </p>

                <div className="mt-10 w-full max-w-md">
                    <Button
                        className="w-full rounded-full bg-[var(--bb-green)] py-7 text-lg text-black hover:bg-[var(--bb-mint)]"
                        onClick={() => document.getElementById("growth-plan")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Get a Free Growth Plan
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="mt-4 text-xs text-black/40">
                        Stop posting and hoping. Start building a lead engine.
                    </p>
                </div>
            </div>
        </section>
    );
}
