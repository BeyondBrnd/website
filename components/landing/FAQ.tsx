'use client'

import React from 'react'
import { Plus, Minus } from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
    {
        q: 'How fast can I expect leads?',
        a: 'Most clients start seeing conversations in the first few weeks, depending on offer, niche, and targeting.',
    },
    {
        q: 'Do you guarantee results?',
        a: 'We don’t guarantee outcomes. We guarantee the process: consistent targeting, messaging, and execution. Results depend on offer-market fit, pricing, and response handling.',
    },
    {
        q: 'Do you only work with B2B?',
        a: 'Yes. We work specifically with B2B founders and experts where LinkedIn + targeted outreach is the fastest path to qualified conversations.',
    },
    {
        q: 'What do you need from me to start?',
        a: 'Your offer details, target customer examples, access to your LinkedIn profile, and any existing proof like case studies or testimonials.',
    },
]

export default function FAQ() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                    {/* Left */}
                    <div>
                        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                            <span className="text-[var(--bb-green)]">Frequently</span> Asked
                            <br />
                            Questions
                        </h2>

                        <div className="mt-16 flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bb-green)] text-black">
                                <span className="text-lg font-bold">?</span>
                            </div>
                            <div>
                                <div className="text-base font-semibold">
                                    Still have questions?
                                </div>
                                <div className="mt-2 max-w-sm text-sm leading-6 text-black/70">
                                    Can’t find the answer you’re looking for?
                                    <br />
                                    Please chat with our friendly team.
                                </div>

                                <button
                                    type="button"
                                    className="mt-3 text-sm font-medium text-[var(--bb-green)] underline underline-offset-4"
                                    onClick={() =>
                                        document
                                            .getElementById('growth-plan')
                                            ?.scrollIntoView({ behavior: 'smooth' })
                                    }
                                >
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="pt-2">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                        >
                            {faqs.map((item, idx) => {
                                const val = `faq-${idx}`
                                return (
                                    <AccordionItem
                                        key={val}
                                        value={val}
                                        className="border-none"
                                    >
                                        <div className="faq-row">
                                            <AccordionTrigger className="faq-trigger flex w-full items-center justify-between gap-6 px-0 py-0 text-left hover:no-underline">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-2xl font-bold text-[var(--bb-green)]">
                                                        ?
                                                    </span>
                                                    <span className="text-xl font-semibold leading-snug">
                                                        {item.q}
                                                    </span>
                                                </div>

                                                <span className="faq-icon inline-flex h-10 w-10 items-center justify-center">
                                                    <Plus className="faq-plus h-6 w-6 text-black/70" />
                                                    <Minus className="faq-minus h-6 w-6 text-[var(--bb-green)]" />
                                                </span>
                                            </AccordionTrigger>

                                            <AccordionContent className="faq-content pt-4 text-sm leading-6 text-black/70">
                                                {item.a}
                                            </AccordionContent>
                                        </div>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>

            {/* Global styles */}
            <style jsx global>{`
        /* Hide shadcn chevron */
        .faq-trigger > svg {
          display: none !important;
        }

        /* Base row (closed) */
        .faq-row {
          border-bottom: 1px solid rgba(0, 0, 0, 0.15);
          padding: 18px 0;
        }

        /* Open row card */
        .faq-row:has([data-state='open'].faq-trigger) {
          border: 1px solid var(--bb-green);
          border-radius: 24px;
          padding: 18px 20px;
          background: white;
          margin: 12px 0; /* ✅ requested spacing */
        }

        /* Question text turns green when open */
        .faq-trigger[data-state='open'] span.text-xl {
          color: var(--bb-green);
        }

        /* Plus / minus toggle */
        .faq-minus {
          display: none;
        }
        .faq-trigger[data-state='open'] .faq-plus {
          display: none;
        }
        .faq-trigger[data-state='open'] .faq-minus {
          display: inline-block;
        }

        /* Remove divider when open */
        .faq-row:has([data-state='open'].faq-trigger) {
          border-bottom: none;
        }

        /* Prevent animation spacing bugs */
        .faq-content[data-state='closed'] {
          display: none;
        }
      `}</style>
        </section>
    )
}
