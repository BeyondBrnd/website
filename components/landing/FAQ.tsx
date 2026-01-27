'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="grid gap-10 md:grid-cols-2">
                    <div>
                        <div className="text-sm font-medium text-black/60">FAQs</div>
                        <h2 className="mt-1 text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
                        <p className="mt-3 text-sm text-black/70">
                            Straight answers. The goal is a consistent pipeline — not vanity metrics.
                        </p>
                        <div className="mt-6 rounded-3xl border bg-[var(--bb-mint)]/30 p-6">
                            <div className="text-sm font-semibold">Still have questions?</div>
                            <div className="mt-1 text-sm text-black/70">Get in touch and we’ll point you in the right direction.</div>
                            <Button
                                className="mt-5 rounded-full bg-[var(--bb-green)] text-black hover:bg-[var(--bb-mint)]"
                                onClick={() => document.getElementById("growth-plan")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Get a Free Growth Plan
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="bb-shadow rounded-3xl border bg-white p-2">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="a1">
                                <AccordionTrigger>How fast can I expect leads?</AccordionTrigger>
                                <AccordionContent>
                                    Most clients start seeing conversations in the first few weeks, depending on offer, niche, and
                                    targeting.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="a2">
                                <AccordionTrigger>Do you guarantee results?</AccordionTrigger>
                                <AccordionContent>
                                    We focus on building a system that generates qualified leads consistently — results depend on
                                    offer-market fit, pricing, and response handling.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="a3">
                                <AccordionTrigger>Do you only work with B2B?</AccordionTrigger>
                                <AccordionContent>Yes. We specialise in B2B founders and experts.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
