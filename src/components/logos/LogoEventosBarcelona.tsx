// Logo fiel a EB Eventos Barcelona: cuadrado rojo con "EB", texto eventos + BARCELONA
export function LogoEventosBarcelona({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="EB Eventos Barcelona"
    >
      {/* Cuadrado rojo con bordes redondeados */}
      <rect x="0" y="4" width="44" height="44" rx="4" fill="#C0392B" />
      {/* Letras EB en blanco */}
      <text
        x="8"
        y="33"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="18"
        fontWeight="800"
        fill="white"
        letterSpacing="-1"
      >
        EB
      </text>
      {/* Texto "eventos" grande */}
      <text
        x="52"
        y="34"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        eventos
      </text>
      {/* Texto "BARCELONA" pequeño debajo */}
      <text
        x="53"
        y="48"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="8.5"
        fontWeight="400"
        fill="currentColor"
        letterSpacing="3"
        opacity="0.7"
      >
        BARCELONA
      </text>
    </svg>
  );
}
