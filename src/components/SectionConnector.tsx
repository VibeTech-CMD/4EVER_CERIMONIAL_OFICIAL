interface SectionConnectorProps {
  className?: string;
  bgClassName?: string;
}

export function SectionConnector({
  className = 'py-5',
  bgClassName = 'bg-warm-white',
}: SectionConnectorProps) {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center ${bgClassName} ${className}`}
      aria-hidden="true"
    >
      <div className="w-px h-14 bg-gradient-to-b from-champagne/20 via-champagne/70 to-champagne" />
      <div className="w-2 h-2 rounded-full bg-champagne mt-1" />
    </div>
  );
}
