'use client'
import React from 'react'

export default function LandingStyles() {
  return (
    <style jsx global>{`
      :root{
        --bb-green: #00bf63;
        --bb-deep:  #007a3d;
        --bb-forest:#1b5e20;
        --bb-mint:  #a6f4c5;
        --bb-black: #000000;
      }
      .bb-shadow{ box-shadow: 0 18px 50px rgba(0,0,0,.10); }
      .bb-ring{ box-shadow: 0 0 0 6px rgba(0,191,99,.12); }
      @keyframes marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      .marquee {
        display:flex;
        width: max-content;
        animation: marquee 18s linear infinite;
      }
      .marquee:hover{ animation-play-state: paused; }
      @keyframes marquee-reverse {
        from { transform: translateX(-50%); }
        to   { transform: translateX(0); }
      }
      .marquee-reverse {
        display:flex;
        width: max-content;
        animation: marquee-reverse 18s linear infinite;
      }
      .marquee-reverse:hover{ animation-play-state: paused; }
      @keyframes tmarquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      .tmarquee {
        display:flex;
        width: max-content;
        animation: tmarquee 26s linear infinite;
      }
      .tmarquee:hover{ animation-play-state: paused; }
    `}</style>
  )
}
