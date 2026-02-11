type Props = { variant?: "elegant"; size?: number; className?: string };

export default function StylizedFLogo({}: Props) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="120" height="120" rx="24" fill="transparent" />

      <path
        d="M42 32 Q46 32 48 35 L72 32 Q76 32 77 36 Q76 40 72 40 L50 41 Q49 41 49 42 L49 56 Q49 57 50 57 L66 57 Q70 57 71 61 Q70 65 66 65 L50 66 Q49 66 49 67 L49 86 Q49 90 45 91 Q41 90 41 86 L41 35 Q41 32 42 32 Z"
        fill="url(#elegantMinGrad)"
      />

      <circle cx="80" cy="35" r="1.2" fill="#22d3ee" />
      <circle cx="74" cy="61" r="1" fill="#4ade80" opacity="0.8" />

      <line
        x1="50"
        y1="41"
        x2="72"
        y2="40"
        stroke="#22d3ee"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <line
        x1="50"
        y1="57"
        x2="66"
        y2="57"
        stroke="#4ade80"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <defs>
        <linearGradient id="elegantMinGrad" x1="41" y1="32" x2="77" y2="91">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>
    </svg>
  );
}
