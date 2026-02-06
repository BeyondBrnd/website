'use client';

import React from 'react';

type CTAButtonProps = {
  onClick?: () => void;
  className?: string;
  label?: string;
};

export default function CTAButton({
  onClick,
  className = '',
  label = 'Get a FREE Growth Plan',
}: CTAButtonProps) {
  return (
    <button
      onClick={onClick ?? (() => alert('CTA clicked'))}
      className={[
        // Base
        'inline-flex items-center justify-center',
        'select-none cursor-pointer',
        'rounded-[12px]',
        'font-bold tracking-tight',
        // Size (bigger)
        'h-[44px] px-6 text-[14px]',
        // Look
        'bg-[#00bf63] text-black',
        'shadow-[0_10px_25px_rgba(0,0,0,0.12)]',
        'ring-1 ring-black/10',
        // Hover/active (more “button-like”)
        'transition-all duration-200 ease-out',
        'hover:bg-[#00a857] hover:shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:-translate-y-[1px]',
        'active:translate-y-[0px] active:shadow-[0_8px_18px_rgba(0,0,0,0.12)]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2',
        className,
      ].join(' ')}
      aria-label={label}
      type="button"
    >
      {label}
    </button>
  );
}
