'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import CTAButton from '../CTAButton'

export default function VSL() {
    return (
        <section
            id="vsl"
            className="bg-white"
        // style={{
        //     background:
        //         'radial-gradient(900px 500px at 0% 0%, rgba(16,185,129,0.18), rgba(255,255,255,0) 65%), linear-gradient(180deg, rgba(16,185,129,0.10) 0%, rgba(255,255,255,1) 55%)',
        // }}
        >
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                {/* Centered player */}
                <div className="mx-auto w-full md:w-[80%]">
                    <div className="bb-shadow overflow-hidden rounded-3xl bg-black">
                        <div className="aspect-video w-full">
                            {/* Dummy MKBHD video (public mp4). Replace with your own file later. */}
                            <video
                                className="h-full w-full"
                                controls
                                preload="metadata"
                                playsInline
                            >
                                {/* This is a placeholder URL; swap to your hosted MP4 for production */}
                                <source
                                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* CTA below video */}
                    <div className="mt-8 flex justify-center">
                        <CTAButton />
                    </div>
                </div>
            </div>
        </section>
    )
}
