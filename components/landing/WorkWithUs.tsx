'use client'

import React, { useMemo } from 'react'

type Step = {
    step: string
    title: string
    desc: string
}

export default function WorkWithUs() {
    const steps: Step[] = useMemo(
        () => [
            {
                step: 'Step 1',
                title: 'Book a Clarity Call',
                desc: 'We understand your requirements, offer, ICP, positioning, and conversion goal.',
            },
            {
                step: 'Step 2',
                title: 'System Setup',
                desc: 'We discuss Content plan + profile optimization + outreach targeting using Clay that brings qualified leads.',
            },
            {
                step: 'Step 3',
                title: 'Clay Setup & Integration',
                desc: 'We set up Clay to build and enrich targeted lead lists for LinkedIn and email outreach — hypertargeted and personalized.',
            },
            {
                step: 'Step 4',
                title: 'Leads & Conversations',
                desc: 'You get a steady stream of high-intent conversations in your DMs.',
            },
        ],
        []
    )

    return (
        <section
            className="bg-white"
            style={{
                background:
                    'radial-gradient(900px 500px at 50% 0%, rgba(16,185,129,0.20), rgba(255,255,255,0) 65%), linear-gradient(180deg, rgba(16,185,129,0.10) 0%, rgba(255,255,255,1) 42%)',
            }}
        >
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
                {/* Title */}
                <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
                    Work With Us
                </h2>

                {/* Steps */}
                <div className="mt-12 space-y-14 md:mt-16 md:space-y-20">
                    {steps.map((s, idx) => {
                        const isEven = idx % 2 === 1 // Step 2, 4 on the right in screenshot
                        return (
                            <div
                                key={s.title}
                                className="grid items-center gap-10 md:grid-cols-2 md:gap-14"
                            >
                                {/* Text block */}
                                <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                                    <div className="inline-flex rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm">
                                        {s.step}
                                    </div>

                                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-black md:text-3xl">
                                        {s.title}
                                    </h3>

                                    <p className="mt-3 max-w-md text-sm leading-6 text-black/70 md:text-[15px]">
                                        {s.desc}
                                    </p>
                                </div>

                                {/* Image/placeholder block */}
                                <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                                    <div className="h-[220px] w-full rounded-3xl bg-neutral-200 md:h-[240px]" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
