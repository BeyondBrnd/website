'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only run on client side and check for fine pointer to avoid touch devices
        if (typeof window === 'undefined') return;

        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (isTouchDevice) return;

        setIsVisible(true);

        const onMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                // Use translate3d for better performance
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check if element is interactive
            const isInteractive =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.closest('[role="button"]') !== null ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(isInteractive);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);

        // Add global style to hide default cursor deeply
        const style = document.createElement('style');
        style.innerHTML = `
            @media (pointer: fine) {
                * {
                    cursor: none !important;
                }
            }
        `;
        document.head.appendChild(style);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
            document.head.removeChild(style);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{
                // Initial off-screen position to prevent flash
                left: 0,
                top: 0,
            }}
        >
            <div
                className={`
                    rounded-full bg-[#00BF63]/80 backdrop-blur-sm
                    shadow-[0_0_20px_2px_rgba(0,191,99,0.4)]
                    transition-all duration-300 ease-out
                    ${isHovering ? 'h-12 w-12 opacity-50 bg-[#00BF63]/40' : 'h-5 w-5 opacity-90'}
                `}
            />
        </div>
    );
}
