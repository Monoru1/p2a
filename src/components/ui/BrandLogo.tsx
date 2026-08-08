import { brandMedia } from '../../content/media';

type BrandLogoProps = {
  className?: string;
  decorative?: boolean;
};

export function BrandLogo({ className = '', decorative = false }: BrandLogoProps) {
  return (
    <img
      src={brandMedia.logo.src}
      alt={decorative ? '' : brandMedia.logo.alt}
      aria-hidden={decorative || undefined}
      className={`object-contain ${className}`}
      width={brandMedia.logo.width}
      height={brandMedia.logo.height}
      decoding="async"
    />
  );
}
