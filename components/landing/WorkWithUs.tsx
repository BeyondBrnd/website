'use client'

import React, { useMemo } from 'react'
import {
    PhoneCall,
    Settings2,
    Layers3,
    MessagesSquare,
    Sparkles,
    Lock,
    Check,
} from 'lucide-react'
import CTAButton from '../CTAButton'

type Step = {
    phase: string
    title: string
    bullets: string[]
    isSecret?: boolean
}

export default function WorkWithUs() {
    const steps: Step[] = useMemo(
        () => [
            {
                phase: 'Step 1',
                title: 'Book a Clarity Call',
                bullets: [
                    'Understand your offer, ICP, and positioning',
                    'Define the conversion goal (calls / demos / pipeline)',
                    'Align on timeline, expectations, and execution cadence',
                ],
            },
            {
                phase: 'Step 2',
                title: 'System Setup',
                bullets: [
                    'Profile optimization for inbound credibility',
                    'Content direction aligned to ICP pain + intent',
                    'Outreach targeting framework + operating rhythm',
                ],
            },
            {
                phase: 'Step 3',
                title: 'Clay Setup & Integration',
                bullets: [
                    'Build and enrich lead lists for LinkedIn + email',
                    'Hypertargeting by role, signal, and intent',
                    'Personalization at scale with clean data',
                ],
            },
            {
                phase: 'Step 4',
                title: 'Leads & Conversations',
                bullets: [
                    'Consistent high-intent conversations in your DMs',
                    'Qualify responses and iterate messaging',
                    'Book calls from a repeatable pipeline',
                ],
            },
            {
                phase: 'Step 5',
                title: 'Secret Sauce',
                // bullets: [
                //     'Offer upgrades + conversion hooks',
                //     'Messaging loops that compound replies',
                //     'Targeting tweaks that unlock “why now” intent',
                // ],
                bullets: [
                    'O**** h**** u******** + c**** h****',
                    'M******** l**** t*** c******** r****',
                    'T******** t******** t*** u****** “w** n**” i****',
                ],
                isSecret: true,
            },
        ],
        []
    )

    return (
        <section className="bb-workwithus">
            <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                    <div className="lg:col-span-5">
                        <div className="bb-left-sticky">
                            <div className="bb-pill">OUR PROCESS</div>

                            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-black sm:text-5xl">
                                Work With Us:
                                <br />
                                <span className="text-[var(--bb-green)]">From Call to Pipeline</span>
                            </h2>

                            {/* <p className="mt-4 max-w-md text-sm leading-6 text-black/65 sm:text-[15px]">
                                This stays pinned while you scroll the steps—just like the “90 Days”
                                timeline UX. Each card is a phase in the system.
                            </p> */}

                            <div className="mt-8">
                                <CTAButton />
                            </div>

                            <div className="mt-6 flex items-center gap-3 text-xs text-black/55">
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/5">
                                    <Check className="h-4 w-4 text-[var(--bb-green)]" />
                                </span>
                                <span>Execution-led. No fluff. Built for B2B founders & experts.</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="space-y-6 sm:space-y-8">
                            {steps.map((s, idx) => (
                                <PhaseCard key={s.title} step={s} index={idx} />
                            ))}
                        </div>

                        <div className="h-12 sm:h-16" />
                    </div>
                </div>
            </div>

            <style jsx>{`
        .bb-workwithus {
          background: radial-gradient(
              900px 500px at 50% 0%,
              rgba(16, 185, 129, 0.18),
              rgba(255, 255, 255, 0) 65%
            ),
            linear-gradient(
              180deg,
              rgba(16, 185, 129, 0.1) 0%,
              rgba(255, 255, 255, 1) 42%
            );
        }

        .bb-left-sticky {
          position: static;
        }
        @media (min-width: 1024px) {
          .bb-left-sticky {
            position: sticky;
            top: 110px;
            padding-bottom: 24px;
          }
        }

        .bb-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 11px;
          letter-spacing: 0.08em;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(0, 191, 99, 0.22);
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
        </section>
    )
}

function PhaseCard({ step, index }: { step: Step; index: number }) {
    const Icon =
        index === 0
            ? PhoneCall
            : index === 1
                ? Settings2
                : index === 2
                    ? Layers3
                    : index === 3
                        ? MessagesSquare
                        : Sparkles

    const SECRET_LINK = 'https://www.linkedin.com/in/bhartichilkoti/'

    return (
        <div className="bb-phase-card">
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <div className="bb-phase-pill">{step.phase}</div>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-black sm:text-2xl">
                        {step.title}
                    </h3>
                </div>

                <div className="bb-icon">
                    {step.isSecret ? (
                        <a
                            href={SECRET_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bb-lock-wrapper"
                        >
                            <Lock className="h-5 w-5" />
                            <span className="bb-tooltip">Book a free call</span>
                        </a>
                    ) : (
                        <Icon className="h-5 w-5" />
                    )}
                </div>
            </div>

            <ul className="mt-4 space-y-3">
                {step.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="mt-[7px] h-2 w-2 rounded-[3px] bg-[var(--bb-green)]" />
                        <span className={step.isSecret ? 'bb-secret' : 'bb-text'}>
                            {b}
                        </span>
                    </li>
                ))}
            </ul>

            {step.isSecret && (
                <div className="mt-5 bb-secret-note">
                    Details are revealed after the clarity call.
                </div>
            )}

            <style jsx>{`
        .bb-phase-card {
          border-radius: 18px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: rgba(255, 255, 255, 0.78);
          box-shadow: 0 18px 46px rgba(0, 0, 0, 0.08);
          padding: 22px 22px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: transform 180ms ease, box-shadow 180ms ease,
            border-color 180ms ease;
        }

        .bb-phase-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.12);
          border-color: rgba(0, 191, 99, 0.25);
        }

        .bb-phase-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 11px;
          letter-spacing: 0.06em;
          font-weight: 800;
          color: rgba(0, 0, 0, 0.65);
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .bb-icon {
          height: 42px;
          width: 42px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 191, 99, 0.12);
          border: 1px solid rgba(0, 191, 99, 0.18);
          color: rgba(0, 0, 0, 0.72);
          flex-shrink: 0;
          position: relative;
        }

        .bb-lock-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }

        .bb-tooltip {
          position: absolute;
          bottom: 115%;
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: black;
          color: white;
          font-size: 11px;
          padding: 6px 8px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 150ms ease, transform 150ms ease;
        }

        .bb-lock-wrapper:hover .bb-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .bb-text {
          color: rgba(0, 0, 0, 0.62);
          font-size: 13px;
          line-height: 1.6;
        }

        .bb-secret {
          color: rgba(0, 0, 0, 0.55);
          font-size: 13px;
          line-height: 1.6;
          filter: blur(4px);
          user-select: none;
        }

        .bb-secret-note {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.6);
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
      `}</style>
        </div>
    )
}
