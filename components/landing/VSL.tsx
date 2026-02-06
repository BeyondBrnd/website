'use client'

import React from 'react'
import CTAButton from '../CTAButton'

export default function VSL() {
    return (
        <section id="vsl" className="relative overflow-hidden bg-white">
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
