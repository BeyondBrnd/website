'use client'
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function WorkWithUs() {
    const steps = useMemo(
        () => [
            {
                title: "Book a Clarity Call",
                desc: "We understand your requirements, offer, ICP, positioning, and conversion goal.",
            },
            {
                title: "System Setup",
                desc: "We discuss content plan + profile optimization + outreach targeting using Clay that brings qualified leads.",
            },
            {
                title: "Clay Setup & Integration",
                desc: "We set up Clay to build and enrich targeted lead lists for LinkedIn and email outreach — hypertargeted and personalized.",
            },
            {
                title: "Leads & Conversations",
                desc: "You get a steady stream of high-intent conversations in your DMs.",
            },
        ],
        []
    );

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="flex flex-col gap-2">
                    <div className="text-sm font-medium text-black/60">Work with us</div>
                    <h2 className="text-3xl font-semibold tracking-tight">A simple 4-step engagement</h2>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {steps.map((s, idx) => (
                        <Card key={s.title} className="rounded-3xl bb-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--bb-mint)] text-sm font-semibold text-[var(--bb-forest)]">
                                        {idx + 1}
                                    </span>
                                    {s.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-black/70">{s.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
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
