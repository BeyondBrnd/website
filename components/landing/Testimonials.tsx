'use client'

import React, { useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

type Testimonial = {
    rating: string
    name: string
    date: string
    text: string
}

export default function Testimonials() {
    const rowOne: Testimonial[] = useMemo(
        () => [
            {
                rating: '5/5',
                name: 'Nithin Mohan',
                date: '26th Jun, 2024',
                text:
                    "I had a great time chatting with Bharti. She cleared a lot of ‘fake beliefs’ I had about outreach and content. Most people give generic advice — she actually understood my business and gave a clear action plan.",
            },
            {
                rating: '5/5',
                name: 'Ankit Verma',
                date: '12th May, 2024',
                text:
                    'Very practical session. The clarity around ICP, messaging, and positioning was spot on. I walked away knowing exactly what to fix and what to double down on.',
            },
            {
                rating: '5/5',
                name: 'Rohit Bansal',
                date: '3rd Apr, 2024',
                text:
                    'No fluff. Just solid thinking and honest feedback. Helped me realise where my outreach was breaking and how to make it sharper.',
            },
        ],
        []
    )

    const rowTwo: Testimonial[] = useMemo(
        () => [
            {
                rating: '5/5',
                name: 'Sneha Kulkarni',
                date: '18th Jun, 2024',
                text:
                    'This call saved me months of trial and error. Bharti connected the dots between content, offers, and conversations really well.',
            },
            {
                rating: '5/5',
                name: 'Aditya Rao',
                date: '7th May, 2024',
                text:
                    'Loved how structured the thinking was. Clear takeaways, no vague motivation talk. Exactly what I needed at this stage.',
            },
            {
                rating: '5/5',
                name: 'Kunal Shah',
                date: '22nd Mar, 2024',
                text:
                    'One of the most valuable strategy calls I’ve had. Helped me refine my positioning and stop chasing the wrong leads.',
            },
        ],
        []
    )

    return (
        <section
            className="border-y bg-white"
            style={{
                background:
                    'radial-gradient(900px 500px at 50% 0%, rgba(16,185,129,0.18), rgba(255,255,255,0) 65%)',
            }}
        >
            <div className="mx-auto max-w-6xl px-4 py-16">
                {/* Header */}
                <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
                    Testimonials
                </h2>

                {/* Marquee rows */}
                <div className="mt-12 space-y-8 overflow-hidden">
                    {/* Row 1 → */}
                    <div className="relative">
                        <div className="marquee marquee-forward">
                            {[...rowOne, ...rowOne].map((t, i) => (
                                <TestimonialCard key={`r1-${i}`} {...t} />
                            ))}
                        </div>
                    </div>

                    {/* Row 2 ← */}
                    <div className="relative">
                        <div className="marquee marquee-reverse">
                            {[...rowTwo, ...rowTwo].map((t, i) => (
                                <TestimonialCard key={`r2-${i}`} {...t} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center">
                    <Button
                        size="lg"
                        className="rounded-full bg-[var(--bb-green)] text-black hover:bg-[var(--bb-mint)]"
                        onClick={() =>
                            document
                                .getElementById('growth-plan')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                    >
                        Get a Free Growth Plan
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Marquee styles */}
            <style jsx>{`
        .marquee {
          display: flex;
          gap: 24px;
          width: max-content;
        }

        .marquee-forward {
          animation: marquee-left 35s linear infinite;
        }

        .marquee-reverse {
          animation: marquee-right 40s linear infinite;
        }

        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
        </section>
    )
}

/* ---------------- Card ---------------- */

function TestimonialCard({
    rating,
    name,
    date,
    text,
}: Testimonial) {
    return (
        <div className="min-w-[340px] max-w-[360px] rounded-3xl bg-[#faf8f5] p-6 shadow-sm">
            <div className="text-xs font-semibold text-black">★ {rating}</div>

            <p className="mt-3 text-sm leading-6 text-black/80">{text}</p>

            <div className="mt-5 text-sm font-semibold">{name}</div>
            <div className="text-xs text-black/50">{date}</div>

            <div className="mt-4 flex justify-end">
                <span className="rounded-full bg-[var(--bb-green)] px-4 py-1 text-xs font-medium text-black">
                    Share ↗
                </span>
            </div>
        </div>
    )
}
