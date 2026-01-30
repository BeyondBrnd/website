'use client'
import { useEffect, useRef } from 'react'

export default function BackgroundWaves() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let width = 0
        let height = 0
        let increment = 0

        // Generate waves with relative Y positions (0.0 to 1.0)
        // Using green brand colors 
        const waves = Array.from({ length: 20 }, () => ({
            yRatio: 0.3 + Math.random() * 0.5,
            length: 0.001 + Math.random() * 0.003,
            amplitude: 20 + Math.random() * 40,
            speed: 0.01 + Math.random() * 0.03,
            color: Math.random() > 0.5
                ? 'rgba(0, 191, 99, 0.15)'   // Brand Green
                : 'rgba(27, 94, 32, 0.15)'   // Darker Green
        }))

        const resize = () => {
            // Get the display size controlled by CSS (e.g. 150vw)
            const rect = canvas.getBoundingClientRect()
            width = rect.width
            height = rect.height

            const dpr = window.devicePixelRatio || 1
            canvas.width = width * dpr
            canvas.height = height * dpr

            ctx.scale(dpr, dpr)
        }

        // Initial resize
        resize()
        window.addEventListener('resize', resize)

        const draw = () => {
            ctx.clearRect(0, 0, width, height)
            increment += 0.01

            waves.forEach((wave) => {
                ctx.beginPath()
                // continually calculate Y based on current height so waves stay relative
                const y = wave.yRatio * height

                ctx.moveTo(0, y)

                for (let i = 0; i < width; i++) {
                    const sinVal = Math.sin(i * wave.length + increment * (wave.speed * 100))
                    const cosVal = Math.cos(i * wave.length * 0.5 + increment * (wave.speed * 50))

                    ctx.lineTo(
                        i,
                        y + sinVal * wave.amplitude + cosVal * (wave.amplitude * 0.5)
                    )
                }

                ctx.strokeStyle = wave.color
                ctx.lineWidth = 1.5
                ctx.stroke()
            })

            animationFrameId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            id="cv"
            ref={canvasRef}
            className="hero-bg-animation alt"
            width={3100}
            height={3400}
        />
    )
}
