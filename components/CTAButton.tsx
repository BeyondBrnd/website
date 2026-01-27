'use client';

export default function CTAButton() {
  return (
    <button
      onClick={() => alert('CTA clicked')}
      className="
      bg-[#00bf63]
      hover:bg-[#00a857]
      text-black
      w-[200px] h-[34px]
      rounded-[6px]
      font-bold
      text-[12px]
      flex items-center justify-center
      transition-all
      duration-200
      hover:scale-[1.02]
      cursor-pointer
    ">
      Get a FREE Growth Plan
    </button>
  );
}