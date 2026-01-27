'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function VSL() {
    return (
        <section id="vsl" className="bg-white">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-semibold tracking-tight">Hey, welcome to beyondbrnd.</h2>
                    <p className="mt-4 text-black/70">
                        If you’re a B2B founder or expert and you’re active on LinkedIn… but still not getting consistent qualified
                        leads, this is for you.
                    </p>
                    <div className="mt-5 rounded-2xl border bg-[var(--bb-mint)]/30 p-5">
                        <div className="text-sm font-semibold">Most people either:</div>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-black/70">
                            <li>post content every day and hope leads come in, or</li>
                            <li>run random outreach with no real system.</li>
                        </ul>
                    </div>
                    <p className="mt-5 text-black/70">
                        At beyondbrnd, we build a repeatable lead generation system using LinkedIn content, targeted outreach on
                        LinkedIn + email, and smart tools like Clay to build and enrich high-quality lead lists.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Button
                            className="rounded-full bg-[var(--bb-green)] text-black hover:bg-[var(--bb-mint)]"
                            size="lg"
                            onClick={() => document.getElementById("growth-plan")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Get a Free Growth Plan
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full border-black/20"
                            onClick={() => alert("Replace this with your video link (YouTube/Vimeo).")}
                        >
                            Open the VSL
                            <Play className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Video placeholder (swap with embed) */}
                <div className="relative">
                    <div className="bb-shadow rounded-3xl border bg-white p-4">
                        <div className="relative overflow-hidden rounded-2xl bg-black">
                            <div className="aspect-video w-full opacity-80" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    type="button"
                                    className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
                                    onClick={() => alert("Replace this with your video embed/modal.")}
                                >
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bb-mint)]">
                                        <Play className="h-5 w-5 text-[var(--bb-forest)]" />
                                    </span>
                                    Watch: How we book meetings for B2B companies
                                    <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 rounded-2xl border bg-white p-4">
                            <div className="text-sm font-semibold">What you’ll get</div>
                            <div className="mt-1 text-sm text-black/70">
                                A clear, repeatable system that targets the right decision-makers with the right message — consistently.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
