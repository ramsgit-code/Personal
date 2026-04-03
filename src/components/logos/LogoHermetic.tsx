export function LogoHermetic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Hermetic"
    >
      {/* Hexagon icon */}
      <polygon
        points="14,2 24,7.5 24,18.5 14,24 4,18.5 4,7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line x1="14" y1="2" x2="14" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="4" y1="7.5" x2="24" y2="18.5" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="24" y1="7.5" x2="4" y2="18.5" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {/* Text */}
      <text x="34" y="17" fontFamily="Inter, system-ui, sans-serif" fontSize="14" fontWeight="700" fill="currentColor" letterSpacing="2">
        HERMETIC
      </text>
    </svg>
  );
}
