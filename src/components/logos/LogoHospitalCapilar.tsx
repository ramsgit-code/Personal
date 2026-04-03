// Logo fiel a Hospital Capilar: tres circulos (2 outline + 1 relleno) + texto
export function LogoHospitalCapilar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Hospital Capilar"
    >
      {/* Circulo 1 — outline */}
      <circle cx="16" cy="20" r="13" stroke="currentColor" strokeWidth="2.2" fill="none" />
      {/* Circulo 2 — outline */}
      <circle cx="44" cy="20" r="13" stroke="currentColor" strokeWidth="2.2" fill="none" />
      {/* Circulo 3 — relleno */}
      <circle cx="72" cy="20" r="13" fill="currentColor" />
      {/* Texto HOSPITAL */}
      <text
        x="0"
        y="50"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="10.5"
        fontWeight="600"
        fill="currentColor"
        letterSpacing="3"
      >
        HOSPITAL
      </text>
      {/* Texto CAPILAR */}
      <text
        x="83"
        y="50"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="10.5"
        fontWeight="300"
        fill="currentColor"
        letterSpacing="3"
      >
        CAPILAR
      </text>
    </svg>
  );
}
