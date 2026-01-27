'use client'
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function SystemGrowth() {
    const systemBullets = useMemo(
        () => [
            "LinkedIn profile & positioning",
            "Content that builds trust and authority",
            "Targeted lead list building using Clay",
            "LinkedIn + email outreach campaigns",
            "A clear strategy to convert conversations into booked calls",
        ],
        []
    );

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 pb-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <Card className="rounded-3xl bb-shadow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Our system includes</CardTitle>
                            <CardDescription>
                                We don’t just help you “look good online.” We help you get real business growth.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {systemBullets.map((b) => (
                                    <li key={b} className="flex items-start gap-3">
                                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--bb-mint)]">
                                            <Check className="h-4 w-4 text-[var(--bb-forest)]" />
                                        </span>
                                        <span className="text-sm text-black/80">{b}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 rounded-2xl border bg-[linear-gradient(135deg,rgba(0,191,99,0.10),rgba(166,244,197,0.12))] p-5">
                                <div className="text-sm font-semibold">Bottom line</div>
                                <div className="mt-1 text-sm text-black/70">
                                    If you want a simple growth plan customized for your business, DM us “Business Growth” and we’ll share
                                    the next steps.
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* CTA block */}
                    <Card id="growth-plan" className="rounded-3xl bb-shadow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Get your Free Growth Plan</CardTitle>
                            <CardDescription>
                                Replace the button action with Calendly / Typeform / Google Form — this section intentionally avoids an
                                email field.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-3xl border bg-white p-5">
                                <div className="text-sm font-semibold">What happens next</div>
                                <div className="mt-1 text-sm text-black/70">
                                    We review your offer, ICP, current LinkedIn activity, and outreach — then send a clear plan to get more
                                    qualified conversations.
                                </div>
                                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                                    <Button
                                        className="rounded-full bg-[var(--bb-green)] text-black hover:bg-[var(--bb-mint)]"
                                        size="lg"
                                        onClick={() => alert("Connect this CTA to your booking link.")}
                                    >
                                        Get a Free Growth Plan
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="rounded-full border-black/20"
                                        onClick={() => navigator.clipboard?.writeText("Business Growth")}
                                    >
                                        Copy DM keyword
                                        <span className="ml-2 rounded-full bg-[var(--bb-mint)] px-2 py-0.5 text-xs font-semibold text-[var(--bb-forest)]">
                                            Business Growth
                                        </span>
                                    </Button>
                                </div>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    {["No fluff plan", "B2B focused", "Repeatable system", "High-intent leads"].map((x) => (
                                        <div key={x} className="flex items-center gap-2 rounded-2xl border bg-white px-4 py-3">
                                            <Check className="h-4 w-4 text-[var(--bb-deep)]" />
                                            <div className="text-sm text-black/75">{x}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
