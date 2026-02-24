interface FlorenceEgiLogoProps {
  className?: string;
}

export const FlorenceEgiLogo = ({ className = 'h-8 w-8' }: FlorenceEgiLogoProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);
