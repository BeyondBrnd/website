'use client'

import React, { useMemo, useState } from 'react'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CTAButton from '../CTAButton'

type Testimonial = {
    name: string
    date: string
    rating: number
    text: string
}

export default function Testimonials() {
    const testimonials: Testimonial[] = useMemo(
        () => [
            {
                name: 'Harjot',
                date: '—',
                rating: 5,
                text:
                    "I had a great time chatting with Bharti. She cleared a lot of 'fake beliefs' I had on outreach and content. Most people give copy-paste advice to everyone, but I liked how she understood my business, offers, and goals and gave specific advice and an action plan to move forward with content and outreach. Appreciate it very much!",
            },
            {
                name: 'Nithin Mohan',
                date: '26th Jun, 2024',
                rating: 5,
                text:
                    "I just finished my call with Bharti. I couldn't believe the information I got from her. She was able to identify the mistakes I was making with my business and guide me thoroughly. At the end, I asked if it was too much for a free session and if there was any way I could give back. I am very confident about the next steps to take for my agency 💯.",
            },
            {
                name: 'Ganesh',
                date: '24th Jul, 2023',
                rating: 5,
                text:
                    'The session with Bharti was value-packed. Not only did she answer each query in a detailed manner, but she also managed to provide numerous insights in such a short time. It was truly impressive! I highly recommend booking a 1:1 call with Bharti. Her expertise and guidance will undoubtedly be invaluable to your professional journey.',
            },
            {
                name: 'Alisha',
                date: '22nd Jul, 2023',
                rating: 4,
                text:
                    'Nothing fancy, but just a plain thank you for being all ears. She is a patient person and read me between the lines. Consequently, delivered what I was looking for. In short, she is your go-to mentor.',
            },
            {
                name: 'Shamim Khan',
                date: '20th Jul, 2023',
                rating: 5,
                text:
                    'She is an incredible listener and an amazing trainer. Learned a lot from her. If you are joining for any membership or as a client, she will blow your mind. Just give it a try with her.',
            },
            {
                name: 'Jatin',
                date: '18th Jul, 2023',
                rating: 5,
                text:
                    'Thank you so much, Bharti, for this amazing session. It adds so much value to my LinkedIn. I will also recommend your services to my friends and colleagues in the industry. I believe this session will help me grow professionally. Thanks again, Bharti!',
            },
            {
                name: 'Shashank Nigam',
                date: '17th Jul, 2023',
                rating: 5,
                text:
                    'This 1:1 call with Bharti was very insightful and handled in a detailed manner. She answered all my questions on the call in a very humble way. It is very nice to have a mentor like her.',
            },
        ],
        []
    )

    return (
        <section className="bg-[#F8F8F8] py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold sm:text-4xl">
                        What Our Clients Say
                    </h2>
                    <p className="mt-3 text-sm text-black/60">
                        Real feedback from founders and experts we’ve worked with.
                    </p>
                </div>

                <div className="mt-12">
                    <KineticTestimonials testimonials={testimonials} />
                </div>

                <div className="mt-14 flex justify-center">
                    <CTAButton />
                </div>
            </div>
        </section>
    )
}

/* ===============================
   Vertical kinetic testimonials
   – seamless pause/resume per column
================================ */

function KineticTestimonials({
    testimonials,
}: {
    testimonials: Testimonial[]
}) {
    const [pausedCol, setPausedCol] = useState<number | null>(null)

    const columns = useMemo(() => {
        const arr: Testimonial[][] = [[], [], []]
        testimonials.forEach((t, i) => arr[i % 3].push(t))
        return arr.map((c) => [...c, ...c])
    }, [testimonials])

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {columns.map((col, idx) => {
                const reverse = idx % 2 === 1
                const isPaused = pausedCol === idx

                return (
                    <div
                        key={idx}
                        className="relative h-[620px] overflow-hidden rounded-2xl"
                        onMouseEnter={() => setPausedCol(idx)}
                        onMouseLeave={() => setPausedCol(null)}
                    >
                        <div
                            className={`bb-track ${reverse ? 'bb-down' : 'bb-up'}`}
                            style={{
                                animationPlayState: isPaused ? 'paused' : 'running',
                            }}
                        >
                            {col.map((t, i) => (
                                <div key={i} className="py-3">
                                    <TestimonialCard t={t} />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}

            <style jsx>{`
        .bb-track {
          display: flex;
          flex-direction: column;
          will-change: transform;
          animation-duration: 28s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .bb-up {
          animation-name: scroll-up;
        }

        .bb-down {
          animation-name: scroll-down;
        }

        @keyframes scroll-up {
          from {
            transform: translateY(0%);
          }
          to {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0%);
          }
        }
      `}</style>
        </div>
    )
}

/* ---------------- Card ---------------- */

function TestimonialCard({ t }: { t: Testimonial }) {
    const initials = t.name.charAt(0)

    return (
        <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <Quote className="mb-3 h-6 w-6 text-[var(--bb-green)] opacity-30" />

            <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                        key={i}
                        className="h-4 w-4 fill-[var(--bb-green)] text-[var(--bb-green)]"
                    />
                ))}
                <span className="ml-2 text-sm font-semibold">{t.rating}/5</span>
            </div>

            <p className="text-sm leading-7 text-gray-700">“{t.text}”</p>

            <div className="mt-5 flex items-center gap-3 border-t pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--bb-green)] text-white">
                    {initials}
                </div>
                <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.date}</div>
                </div>
            </div>
        </div>
    )
}
