interface ManagoLogoProps {
  className?: string;
  size?: number;
}

export function ManagoLogo({ className = "", size = 24 }: ManagoLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Abstract "M" mark with layered bars */}
      <rect x="3" y="8" width="5" height="18" rx="2.5" fill="currentColor" opacity="0.9" />
      <rect x="11" y="4" width="5" height="22" rx="2.5" fill="currentColor" />
      <rect x="19" y="10" width="5" height="16" rx="2.5" fill="currentColor" opacity="0.75" />
      <rect x="27" y="6" width="5" height="20" rx="2.5" fill="currentColor" opacity="0.55" />
    </svg>
  );
}
