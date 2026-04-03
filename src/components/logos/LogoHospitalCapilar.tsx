export function LogoHospitalCapilar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Hospital Capilar"
    >
      {/* Cross / medical icon */}
      <rect x="2" y="12" width="6" height="16" rx="1" fill="currentColor" />
      <rect x="-4" y="18" width="18" height="6" rx="1" fill="currentColor" />
      {/* Text */}
      <text x="24" y="26" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="600" fill="currentColor" letterSpacing="-0.3">
        Hospital Capilar
      </text>
    </svg>
  );
}
