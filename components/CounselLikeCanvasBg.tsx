'use client'

import { useEffect, useRef } from 'react'

export default function CounselLikeCanvasBg({
    debug = false,
}: {
    debug?: boolean
}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const rafRef = useRef<number | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const dpr = Math.min(window.devicePixelRatio || 1, 2)

        const resizeToParent = () => {
            const parent = canvas.parentElement
            if (!parent) return

            const rect = parent.getBoundingClientRect()
            const w = Math.max(1, Math.floor(rect.width))
            const h = Math.max(1, Math.floor(rect.height))

            // IMPORTANT: if parent has 0 height, you will never see anything
            canvas.width = Math.floor(w * dpr)
            canvas.height = Math.floor(h * dpr)

            canvas.style.width = `${w}px`
            canvas.style.height = `${h}px`

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }

        resizeToParent()

        const ro = new ResizeObserver(() => resizeToParent())
        if (canvas.parentElement) ro.observe(canvas.parentElement)

        // ---- animation ----
        const LINE_COUNT = 28
        const POINTS = 160
        let t = 0

        const noise = (x: number, y: number) =>
            Math.sin(x * 0.018 + y * 0.012 + t) * 0.6 +
            Math.cos(y * 0.020 - t * 0.9) * 0.4

        const draw = () => {
            const w = canvas.width / dpr
            const h = canvas.height / dpr

            // If parent is 0-height, bail
            if (h <= 2 || w <= 2) {
                rafRef.current = requestAnimationFrame(draw)
                return
            }

            ctx.clearRect(0, 0, w, h)

            // Optional: visible debug so you know canvas exists
            if (debug) {
                ctx.save()
                ctx.strokeStyle = 'rgba(255,0,0,0.6)'
                ctx.lineWidth = 2
                ctx.strokeRect(0, 0, w, h)
                ctx.restore()
            }

            // Subtle background tint to reveal the animation even on white pages
            // Remove this block once confirmed working.
            ctx.save()
            ctx.fillStyle = 'rgba(0, 191, 99, 0.03)'
            ctx.fillRect(0, 0, w, h)
            ctx.restore()

            ctx.globalCompositeOperation = 'lighter'
            ctx.lineCap = 'round'
            ctx.lineJoin = 'round'

            // Rotate a bit to match your reference corner flow
            ctx.save()
            ctx.translate(w * 0.5, h * 0.5)
            ctx.rotate(-0.22)
            ctx.translate(-w * 0.5, -h * 0.5)

            for (let i = 0; i < LINE_COUNT; i++) {
                const baseY = h * 0.12 + i * (h * 0.76 / LINE_COUNT)
                const amp = 70 + i * 2.2
                const phase = t * (0.7 + i * 0.015)

                ctx.beginPath()

                for (let p = 0; p <= POINTS; p++) {
                    const x = (p / POINTS) * (w + 240) - 120
                    const n = noise(p * 14, i * 17)

                    const y =
                        baseY +
                        Math.sin(p * 0.09 + phase) * amp * n +
                        Math.cos(p * 0.035 - phase * 0.65) * amp * 0.45

                    if (p === 0) ctx.moveTo(x, y)
                    else ctx.lineTo(x, y)
                }

                // Higher opacity so you SEE it (tune down later)
                const alpha = 0.12 - i * 0.0025 // starts visible, fades
                const clamped = Math.max(0.015, alpha)

                // “3D-ish” layering: mint base + white highlight
                ctx.strokeStyle = `rgba(166, 244, 197, ${clamped})`
                ctx.lineWidth = i % 6 === 0 ? 1.6 : 1.05
                ctx.stroke()

                ctx.strokeStyle = `rgba(255, 255, 255, ${clamped * 0.35})`
                ctx.lineWidth = 0.7
                ctx.stroke()
            }

            ctx.restore()
            ctx.globalCompositeOperation = 'source-over'

            t += 0.01
            rafRef.current = requestAnimationFrame(draw)
        }

        rafRef.current = requestAnimationFrame(draw)

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            ro.disconnect()
        }
    }, [debug])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{
                // keep it behind content; parent should be relative
                zIndex: 0,
            }}
        />
    )
}
