'use client'

import React from 'react'

export default function AnimatedWavesBg() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1200 700"
                preserveAspectRatio="none"
            >
                <defs>
                    {/* Brand-ish gradient stroke */}
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="rgba(166,244,197,0.85)" />
                        <stop offset="0.35" stopColor="rgba(0,191,99,0.85)" />
                        <stop offset="1" stopColor="rgba(255,255,255,0.35)" />
                    </linearGradient>

                    {/* Soft highlight for “3D” feel */}
                    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="1.2" result="b" />
                        <feColorMatrix
                            in="b"
                            type="matrix"
                            values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.45 0"
                            result="g"
                        />
                        <feMerge>
                            <feMergeNode in="g" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* The key: noisy distortion to make lines “curly/wavy” */}
                    <filter id="wobble" x="-20%" y="-30%" width="140%" height="160%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.010"
                            numOctaves="2"
                            seed="2"
                            result="noise"
                        >
                            {/* Animate the noise field so waves move organically */}
                            <animate
                                attributeName="baseFrequency"
                                dur="9s"
                                values="0.010;0.014;0.010"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="seed"
                                dur="7s"
                                values="1;3;2;4;1"
                                repeatCount="indefinite"
                            />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G" />
                    </filter>

                    {/* Fade edges (so it doesn’t look tiled) */}
                    <mask id="fadeMask">
                        <rect width="1200" height="700" fill="white" />
                        <rect
                            width="1200"
                            height="700"
                            fill="black"
                            opacity="1"
                            style={{
                                maskImage:
                                    'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 68%)',
                            }}
                        />
                    </mask>
                </defs>

                {/* Background tint blobs (optional) */}
                <g opacity="0.35">
                    <circle cx="250" cy="210" r="260" fill="rgba(0,191,99,0.12)" />
                    <circle cx="950" cy="520" r="320" fill="rgba(166,244,197,0.10)" />
                </g>

                {/* Lines group: rotate + translate to resemble your reference corner flow */}
                <g mask="url(#fadeMask)" transform="rotate(-12 600 350)">
                    {/* Layer 1 (slower, thicker = depth) */}
                    <g className="flow flow-slow" filter="url(#wobble)" opacity="0.85">
                        {Array.from({ length: 22 }).map((_, i) => {
                            const y = 120 + i * 18
                            const amp = 70 + i * 0.6
                            return (
                                <path
                                    key={`a-${i}`}
                                    d={`M -200 ${y}
                      C 150 ${y - amp}, 420 ${y + amp}, 720 ${y}
                      S 1150 ${y - amp}, 1400 ${y}`}
                                    fill="none"
                                    stroke="url(#lineGrad)"
                                    strokeWidth={i % 6 === 0 ? 2.1 : 1.2}
                                    strokeOpacity={0.24 + i * 0.012}
                                    filter="url(#softGlow)"
                                />
                            )
                        })}
                    </g>

                    {/* Layer 2 (faster, thinner highlight for 3D shimmer) */}
                    <g className="flow flow-fast" filter="url(#wobble)" opacity="0.75">
                        {Array.from({ length: 18 }).map((_, i) => {
                            const y = 150 + i * 22
                            const amp = 55 + i * 0.7
                            return (
                                <path
                                    key={`b-${i}`}
                                    d={`M -220 ${y}
                      C 120 ${y - amp}, 430 ${y + amp}, 740 ${y}
                      S 1180 ${y - amp}, 1450 ${y}`}
                                    fill="none"
                                    stroke="rgba(255,255,255,0.55)"
                                    strokeWidth={0.9}
                                    strokeOpacity={0.08 + i * 0.006}
                                />
                            )
                        })}
                    </g>
                </g>

                {/* Animation */}
                <style>
                    {`
            @keyframes driftSlow { 
              from { transform: translateX(0px); } 
              to { transform: translateX(-280px); } 
            }
            @keyframes driftFast { 
              from { transform: translateX(0px); } 
              to { transform: translateX(-520px); } 
            }
            .flow { transform-box: fill-box; transform-origin: center; }
            .flow-slow { animation: driftSlow 22s linear infinite; }
            .flow-fast { animation: driftFast 16s linear infinite; }
          `}
                </style>
            </svg>
        </div>
    )
}