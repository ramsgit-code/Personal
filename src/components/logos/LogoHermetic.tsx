// Logo fiel a Lederle Hermetic: engranaje + LEDERLE pequeño + Hermetic grande
export function LogoHermetic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lederle Hermetic"
    >
      {/* Engranaje / gear icon */}
      <g transform="translate(2, 4)">
        {/* Circulo exterior del engranaje */}
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Circulo interior */}
        <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Dientes del engranaje — 8 dientes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 20 + 14 * Math.cos(rad);
          const y1 = 20 + 14 * Math.sin(rad);
          const x2 = 20 + 18 * Math.cos(rad);
          const y2 = 20 + 18 * Math.sin(rad);
          return (
            <line
              key={angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          );
        })}
      </g>
      {/* Texto LEDERLE pequeno */}
      <text
        x="50"
        y="20"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="9"
        fontWeight="600"
        fill="currentColor"
        letterSpacing="2.5"
        opacity="0.75"
      >
        LEDERLE
      </text>
      {/* Texto Hermetic grande */}
      <text
        x="48"
        y="40"
        fontFamily="Georgia, serif"
        fontSize="21"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.3"
      >
        Hermetic
      </text>
    </svg>
  );
}
