'use client'
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Testimonials() {
    const testimonials = useMemo(
        () => [
            {
                rating: "5/5",
                name: "Harjot",
                text: "I had a great time chatting with Bharti. She cleared a lot of ‘fake beliefs’ I had on outreach and content...",
            },
            {
                rating: "5/5",
                name: "Nithin Mohan",
                text: "I just finished my call with Bharti. I couldn't believe the information I got from her...",
            },
            {
                rating: "5/5",
                name: "Ganesh",
                text: "The session with Bharti was value-packed. Not only did she answer each query...",
            },
            {
                rating: "4/5",
                name: "Alisha",
                text: "Nothing fancy, but just a plain thank you for being all ears...",
            },
            {
                rating: "5/5",
                name: "Shamim Khan",
                text: "She is an incredible listener and an amazing great trainer...",
            },
            {
                rating: "5/5",
                name: "Jatin",
                text: "Thank you so much, Bharti, for this amazing session. It adds so much value to my LinkedIn...",
            },
            {
                rating: "5/5",
                name: "Shashank Nigam",
                text: "This 1:1 call with Bharti was very insightful and in a detailed manner...",
            },
        ],
        []
    );

    return (
        <section className="border-y bg-white">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <div className="text-sm font-medium text-black/60">Testimonials</div>
                        <h2 className="mt-1 text-3xl font-semibold tracking-tight">What clients say</h2>
                    </div>
                    <div className="hidden text-sm text-black/60 md:block">(auto-scrolling)</div>
                </div>

                <div className="mt-8 overflow-hidden rounded-3xl border bg-white bb-shadow">
                    <div className="flex gap-6 px-6 py-6">
                        <div className="tmarquee gap-6 pr-6">
                            {[...testimonials, ...testimonials].map((t, i) => (
                                <div
                                    key={`${t.name}-${i}`}
                                    className="min-w-[320px] max-w-[360px] rounded-3xl border bg-[linear-gradient(135deg,rgba(166,244,197,0.22),rgba(0,0,0,0.02))] p-5"
                                >
                                    <div className="text-xs font-semibold text-black/70">★ {t.rating}</div>
                                    <div className="mt-2 text-sm text-black/75">{t.text}</div>
                                    <div className="mt-4 text-sm font-semibold">{t.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <Button
                        className="rounded-full bg-[var(--bb-green)] text-black hover:bg-[var(--bb-mint)]"
                        size="lg"
                        onClick={() => document.getElementById("growth-plan")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Get a Free Growth Plan
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
