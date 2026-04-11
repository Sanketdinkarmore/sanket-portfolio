
export default function DecorativeShapes() {
  return (
    <div className="pointer-events-none fixed min-h-screen inset-0 bg-[#1d1e24] overflow-hidden z-0">

      <svg
        viewBox="0 0 500 500"
        className="absolute -top-10 -left-10 w-[380px] md:w-[520px] opacity-100"
      >
        <defs>
          <linearGradient id="tl1" x1="0" x2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <polygon
          points="80,40 240,160 120,300 -40,180"
          fill="url(#tl1)"
          opacity="0.35"
        />

        <rect x="150" y="90" width="120" height="70" rx="14" fill="#06b6d4" />
        <rect x="280" y="130" width="120" height="70" rx="14" fill="#3b82f6" />

        <circle cx="260" cy="240" r="16" fill="#10b981" />
      </svg>

      <svg
        viewBox="0 0 500 500"
        className="absolute -bottom-14 -right-14 w-[380px] md:w-[520px] opacity-100"
      >
        <defs>
          <linearGradient id="br1" x1="0" x2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        <path
          d="M520 180 C420 260 260 320 80 320 L520 520 Z"
          fill="url(#br1)"
          opacity="0.35"
        />

        <rect x="120" y="240" width="120" height="70" rx="14" fill="#fbbf24" />
        <rect x="260" y="280" width="120" height="70" rx="14" fill="#10b981" />

        <polygon points="360,120 440,180 360,240" fill="#f97316" />
      </svg>
    </div>
  );
}
