'use client'
import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Clientele() {
    const clientele = useMemo(
        () => [
            { name: "Yess.ai", src: "/client_logos/yess.png", url: "https://yess.ai" },
            { name: "Insightology.ai", src: "/client_logos/insightology.png", url: "https://insightology.ai" },
            { name: "Topmate.io", src: "/client_logos/topmate.svg", url: "https://topmate.io" },
        ],
        []
    );

    return (
        <section className="border-y bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="flex items-center justify-center gap-6">
                    <div>
                        <div className="mt-1 text-xl font-semibold">Trusted by</div>
                    </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-3xl border bg-white bb-shadow">
                    <div className="flex w-full gap-10 px-6 py-6">
                        <div className="marquee gap-10 pr-10">
                            {[...clientele, ...clientele, ...clientele, ...clientele].map((client, i) => (
                                <Link
                                    href={client.url}
                                    key={`${client.name}-${i}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative flex min-w-[180px] h-20 items-center justify-center rounded-2xl border bg-gray-50 px-6 py-4 grayscale transition-all duration-300 hover:grayscale-0 hover:bg-white"
                                >
                                    <div className="relative h-full w-full">
                                        <Image
                                            src={client.src}
                                            alt={client.name}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
