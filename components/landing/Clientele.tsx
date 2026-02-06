'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ClientLogo = {
    name: string;
    src: string;
    url?: string;
};

export default function Clientele() {
    const logos: ClientLogo[] = useMemo(
        () => [
            { name: 'Yess.ai', src: '/client_logos/yess.png', url: 'https://yess.ai' },
            { name: 'Insightology.ai', src: '/client_logos/insightology.png', url: 'https://insightology.ai' },
            { name: 'Topmate.io', src: '/client_logos/topmate.svg', url: 'https://topmate.io' },
        ],
        []
    );

    // Dense packing
    const track = useMemo(
        () => [...logos, ...logos, ...logos, ...logos, ...logos, ...logos],
        [logos]
    );

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="mx-auto max-w-6xl px-4 pb-10 pt-0">
                    {/* "Trusted by" pill like screenshot */}
                    <div className="flex justify-center">
                        <div className="bb-pill">Trusted By</div>
                    </div>
                </div>

                {/* Row 1 */}
                <MarqueeRow items={track} direction="left" />

                {/* Row 2 */}
                <div className="mt-6">
                    <MarqueeRow items={track} direction="right" />
                </div>
            </div>

            <style jsx>{`
        .bb-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          border-radius: 12px;
          background: transparent;
          color: #00bf63;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: -0.02em;
          border: 1px solid rgba(0, 191, 99, 0.28);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
        </section>
    );
}

/* ===============================
   Marquee Row
================================ */
function MarqueeRow({
    items,
    direction,
}: {
    items: ClientLogo[];
    direction: 'left' | 'right';
}) {
    return (
        <section
            className="relative mt-8 flex w-full items-center overflow-hidden"
            style={{
                maskImage:
                    'linear-gradient(to right, rgba(0,0,0,0) 0%, black 25%, black 75%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage:
                    'linear-gradient(to right, rgba(0,0,0,0) 0%, black 25%, black 75%, rgba(0,0,0,0) 100%)',
            }}
        >
            <ul
                className={`bb-marquee-track ${direction === 'right' ? 'bb-marquee-reverse' : ''
                    }`}
            >
                {items.map((logo, idx) => {
                    const logoNode = (
                        <div className="bb-logo">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={120}
                                height={36}
                                className="max-h-[30px] w-auto object-contain"
                                priority={idx < 6}
                            />
                        </div>
                    );

                    return (
                        <li
                            key={`${logo.name}-${idx}`}
                            className="bb-marquee-item"
                            aria-hidden={idx >= items.length / 2}
                        >
                            {logo.url ? (
                                <Link href={logo.url} target="_blank" rel="noopener noreferrer">
                                    {logoNode}
                                </Link>
                            ) : (
                                logoNode
                            )}
                        </li>
                    );
                })}
            </ul>

            <style jsx>{`
        .bb-marquee-track {
          display: flex;
          align-items: center;
          gap: 44px;
          list-style: none;
          padding: 0;
          margin: 0;
          width: max-content;
          will-change: transform;
          animation: marquee-left 26s linear infinite;
        }

        .bb-marquee-reverse {
          animation: marquee-right 28s linear infinite;
        }

        /* 🔑 KEY FIX: pause animation WITHOUT resetting */
        .bb-marquee-track:hover {
          animation-play-state: paused;
        }

        .bb-marquee-item {
          flex-shrink: 0;
        }

        .bb-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 8px;
          border-radius: 10px;
          transition: transform 0.2s ease, opacity 0.2s ease;
          cursor: pointer;
        }

        .bb-logo:hover {
          transform: scale(1.05);
          opacity: 0.9;
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

        @media (prefers-reduced-motion: reduce) {
          .bb-marquee-track {
            animation: none;
          }
        }
      `}</style>
        </section>
    );
}
