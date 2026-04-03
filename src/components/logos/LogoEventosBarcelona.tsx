export function LogoEventosBarcelona({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Eventos Barcelona"
    >
      {/* Diamond / event icon */}
      <polygon points="12,4 22,20 12,36 2,20" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="12,10 18,20 12,30 6,20" fill="currentColor" opacity="0.4" />
      {/* Text */}
      <text x="30" y="18" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="700" fill="currentColor" letterSpacing="1.5">
        EVENTOS
      </text>
      <text x="30" y="32" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="300" fill="currentColor" letterSpacing="1.5">
        BARCELONA
      </text>
    </svg>
  );
}
