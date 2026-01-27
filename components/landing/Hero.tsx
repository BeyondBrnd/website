'use client'
import React from "react";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-4 text-center">
                <h1 className="flex flex-col items-center gap-[19px] text-5xl font-bold tracking-tight text-black md:text-7xl font-sans">
                    <span className="bg-gradient-to-b from-[#00BF63] to-[#1B5E20] bg-clip-text pb-2 text-transparent">Beyond Branding.</span>
                    <span>Real Business Growth.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base text-black/60 font-sans">
                    We help <span className="font-semibold text-black">B2B founders & experts</span> generate <span className="font-semibold text-black">qualified, high-intent leads</span> through a repeatable <span className="font-semibold text-black">LinkedIn Content + DM Outreach system</span>.
                </p>

                <div className="mt-10 w-full max-w-md flex flex-col items-center">
                    <CTAButton />
                    <p className="mt-4 text-xs text-black/40">
                        Stop posting and hoping. Start building a lead engine.
                    </p>
                </div>
            </div>
        </section>
    );
}
