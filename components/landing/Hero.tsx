// // components/landing/Hero.tsx
// 'use client';

// import React from 'react';
// import CTAButton from '@/components/CTAButton';
// import BackgroundMeteors from '@/components/ui/backgroundmeteors';
// import Typeanimation from '@/components/ui/typeanimation';

// export default function Hero() {
//     return (
//         <section className="relative overflow-hidden">
//             <BackgroundMeteors>
//                 {/* Reduced height hero */}
//                 <div className="relative mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-4 py-16 md:py-20">
//                     <div className="w-full max-w-4xl text-center">
//                         {/* Headline */}
//                         <div className="space-y-3">
//                             <div className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
//                                 Tired of
//                             </div>

//                             {/* Type Animation */}
//                             <div className="flex justify-center">
//                                 <Typeanimation
//                                     words={[
//                                         'No LinkedIn Presence',
//                                         'Random outreach',
//                                         'No Clear ICP',
//                                         'No list building strategy',
//                                         'No targeted outreach',
//                                         'No perfect message',
//                                         'No leads in the pipeline',
//                                     ]}
//                                     typingSpeed="slow"
//                                     deletingSpeed="slow"
//                                     pauseDuration={1400}
//                                     className="text-2xl font-extrabold tracking-tight text-[#00BF63] md:text-5xl"
//                                 />
//                             </div>
//                         </div>

//                         {/* Big supporting line */}
//                         <p className="mx-auto mt-8 max-w-3xl text-2xl font-extrabold leading-tight text-white md:text-4xl">
//                             We have a repeatable LinkedIn Content + DM Outreach system for you.
//                         </p>

//                         {/* Subline */}
//                         <p className="mx-auto mt-4 max-w-2xl text-base italic leading-7 text-white/75 md:text-lg">
//                             Stop posting and hoping. Start building a lead engine.
//                         </p>

//                         {/* CTA */}
//                         <div className="mt-8 flex flex-col items-center">
//                             <CTAButton />
//                         </div>
//                     </div>
//                 </div>
//             </BackgroundMeteors>
//         </section>
//     );
// }

// Use this when background is white:
// components/landing/Hero.tsx
'use client';

import React from 'react';
import CTAButton from '@/components/CTAButton';
import BackgroundMeteors from '@/components/ui/backgroundmeteors';
import Typeanimation from '@/components/ui/typeanimation';

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <BackgroundMeteors>
                <div className="relative mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-4 py-16 md:py-20">
                    <div className="w-full max-w-4xl text-center">
                        {/* Headline */}
                        <div className="space-y-3">
                            <div className="text-5xl font-extrabold tracking-tight text-black md:text-7xl">
                                Tired of
                            </div>

                            {/* Type Animation */}
                            <div className="flex justify-center">
                                <Typeanimation
                                    words={[
                                        'No LinkedIn Presence',
                                        'Random Outreach on dev',
                                        'No Clear ICP',
                                        'No list building strategy',
                                        'No targeted outreach',
                                        'No perfect message',
                                        'No leads in the pipeline',
                                    ]}
                                    typingSpeed="slow"
                                    deletingSpeed="slow"
                                    pauseDuration={1400}
                                    className="text-2xl font-extrabold tracking-tight text-[#00BF63] md:text-5xl"
                                />
                            </div>
                        </div>

                        {/* Big supporting line */}
                        <p className="mx-auto mt-8 max-w-3xl text-2xl font-extrabold leading-tight text-black md:text-4xl">
                            We have a repeatable LinkedIn Content + DM Outreach system for you.
                        </p>

                        {/* Subline */}
                        <p className="mx-auto mt-4 max-w-2xl text-base italic leading-7 text-black/70 md:text-lg">
                            Stop posting and hoping. Start building a lead engine.
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex flex-col items-center">
                            <CTAButton />
                        </div>
                    </div>
                </div>
            </BackgroundMeteors>
        </section>
    );
}
