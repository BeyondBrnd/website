'use client';

import React, { useMemo, useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Founder = {
  name: string;
  linkedinUrl: string;
  avatarSrc?: string; // from /public/linkedin_profiles
};

type ClientLogo = {
  name: string;
  src: string;
  url?: string; // company site
  founders?: Founder[];
};

type HoverCardState =
  | {
    founders: Founder[];
    anchorRect: DOMRect;
  }
  | null;

function toAvatarSrc(firstNameOrFullName: string) {
  // /public/linkedin_profiles/<name>.jpeg (ankit.jpeg, melvin.jpeg, etc.)
  const first = firstNameOrFullName.trim().split(/\s+/)[0]?.toLowerCase() || '';
  return first ? `/linkedin_profiles/${first}.jpeg` : '';
}

export default function Clientele() {
  const logos: ClientLogo[] = useMemo(
    () => [
      {
        name: 'Yess.ai',
        src: '/client_logos/yess.png',
        url: 'https://yess.ai',
        founders: [
          {
            name: 'David Feldstein',
            linkedinUrl: 'https://www.linkedin.com/in/davidfeldi/',
            avatarSrc: toAvatarSrc('david'),
          },
        ],
      },
      {
        name: 'Insightology.ai',
        src: '/client_logos/insightology.png',
        url: 'https://insightology.ai',
        founders: [
          {
            name: 'Melvin Jay',
            linkedinUrl: 'https://www.linkedin.com/in/melvin-jay-96b617/',
            avatarSrc: toAvatarSrc('melvin'),
          },
          {
            name: 'Rick Keen',
            linkedinUrl: 'https://www.linkedin.com/in/rick-keen-0792113/',
            avatarSrc: toAvatarSrc('rick'),
          },
        ],
      },
      {
        name: 'Topmate.io',
        src: '/client_logos/topmate.svg',
        url: 'https://topmate.io',
        founders: [
          {
            name: 'Ankit Agarwal',
            linkedinUrl: 'https://www.linkedin.com/in/ankitagarwal6/',
            avatarSrc: toAvatarSrc('ankit'),
          },
        ],
      },
    ],
    []
  );

  const track = useMemo(
    () => [...logos, ...logos, ...logos, ...logos, ...logos, ...logos],
    [logos]
  );

  return (
    <section className="relative bg-white -mt-20 z-20">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-0">
          <div className="flex justify-center">
            <div className="bb-pill">Trusted By</div>
          </div>
        </div>

        <MarqueeRow items={track} direction="left" />

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
  const [hoverCard, setHoverCard] = useState<HoverCardState>(null);
  const [isOverPopup, setIsOverPopup] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setHoverCard(null);
    }, 120);
  }, []);

  const openHover = useCallback((logo: ClientLogo, el: HTMLElement | null) => {
    if (!logo.founders || logo.founders.length === 0) return;
    if (!el) return;

    clearCloseTimer();

    const rect = el.getBoundingClientRect();

    setHoverCard({
      founders: logo.founders,
      anchorRect: rect,
    });
  }, []);

  useEffect(() => {
    if (!hoverCard) return;

    const onResize = () => setHoverCard(null);

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize, true);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize, true);
    };
  }, [hoverCard]);

  return (
    <>
      <section
        className="relative mt-8 flex w-full items-center overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, rgba(0,0,0,0) 0%, black 25%, black 75%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0,0,0,0) 0%, black 25%, black 75%, rgba(0,0,0,0) 100%)',
        }}
        onMouseLeave={() => {
          if (!isOverPopup) scheduleClose();
        }}
      >
        <ul className={`bb-marquee-track ${direction === 'right' ? 'bb-marquee-reverse' : ''}`}>
          {items.map((logo, idx) => {
            const logoNode = (
              <div
                className="bb-logo"
                onMouseEnter={(e) => openHover(logo, e.currentTarget)}
                onMouseLeave={scheduleClose}
              >
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

      {hoverCard && (
        <HoverCard
          founders={hoverCard.founders}
          anchorRect={hoverCard.anchorRect}
          onEnter={() => {
            clearCloseTimer();
            setIsOverPopup(true);
          }}
          onLeave={() => {
            setIsOverPopup(false);
            scheduleClose();
          }}
        />
      )}
    </>
  );
}

function HoverCard({
  founders,
  anchorRect,
  onEnter,
  onLeave,
}: {
  founders: Founder[];
  anchorRect: DOMRect;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const desiredLeft = anchorRect.left + anchorRect.width / 2;
  const desiredTop = anchorRect.bottom + 12;

  const CARD_MAX_WIDTH = 340;
  const padding = 12;
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

  const minLeft = padding + CARD_MAX_WIDTH / 2;
  const maxLeft = viewportWidth - padding - CARD_MAX_WIDTH / 2;
  const clampedLeft = Math.min(Math.max(desiredLeft, minLeft), maxLeft);

  return (
    <div
      className="bb-hovercard"
      style={{
        left: clampedLeft,
        top: desiredTop,
        transform: 'translateX(-50%)',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="bb-hovercard-row">
        {founders.map((f) => (
          <a
            key={f.linkedinUrl}
            href={f.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bb-founder"
            title={`Open ${f.name} on LinkedIn`}
          >
            <Avatar name={f.name} src={f.avatarSrc} />
            <div className="bb-founder-name">{f.name}</div>
          </a>
        ))}
      </div>

      <div className="bb-hovercard-tip">Click an avatar to open LinkedIn.</div>

      <style jsx>{`
        .bb-hovercard {
          position: fixed;
          z-index: 9999;
          min-width: 220px;
          max-width: 340px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0, 191, 99, 0.22);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
          border-radius: 14px;
          padding: 12px 12px 10px 12px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          pointer-events: auto;
        }

        .bb-hovercard-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .bb-founder {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 12px;
          background: rgba(0, 191, 99, 0.06);
          border: 1px solid rgba(0, 191, 99, 0.14);
          text-decoration: none;
          transition: transform 0.15s ease, background 0.15s ease, border 0.15s ease;
        }

        .bb-founder:hover {
          transform: translateY(-1px);
          background: rgba(0, 191, 99, 0.1);
          border: 1px solid rgba(0, 191, 99, 0.22);
        }

        .bb-founder-name {
          font-size: 12px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.75);
          white-space: nowrap;
        }

        .bb-hovercard-tip {
          margin-top: 10px;
          font-size: 11px;
          color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}

function Avatar({ name, src }: { name: string; src?: string }) {
  const [imgOk, setImgOk] = useState(true);

  useEffect(() => {
    setImgOk(true);
  }, [src]);

  const showImage = Boolean(src) && imgOk;

  return (
    <div className="bb-avatar">
      {showImage ? (
        <Image
          src={src as string}
          alt={name}
          width={28}
          height={28}
          className="bb-avatar-img"
          onError={() => setImgOk(false)} // missing file -> initials
        />
      ) : (
        <span className="bb-avatar-initials">{getInitials(name)}</span>
      )}

      <style jsx>{`
        .bb-avatar {
          width: 28px;
          height: 28px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 191, 99, 0.14);
          color: #00bf63;
          font-weight: 800;
          font-size: 12px;
          flex-shrink: 0;
          overflow: hidden;
        }

        .bb-avatar-img {
          width: 28px;
          height: 28px;
          object-fit: cover;
          border-radius: 9999px;
        }

        .bb-avatar-initials {
          line-height: 1;
          user-select: none;
        }
      `}</style>
    </div>
  );
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? '?';
  return `${parts[0][0] ?? ''}${parts[1][0] ?? ''}`.toUpperCase();
}