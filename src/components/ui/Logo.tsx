import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * The Equal Research brand logo (public/main-logo.png, intrinsic 211×100).
 * Height is controlled via the `className` (e.g. "h-11 w-auto"); width scales
 * to preserve the aspect ratio.
 */
export function Logo({
  className,
  priority = false,
  alt = "",
}: {
  className?: string;
  priority?: boolean;
  /** Accessible name. Defaults to "" (decorative) — the containing link/section
   *  already provides the accessible name, so the logo image is marked
   *  decorative to avoid a redundant announcement. */
  alt?: string;
}) {
  return (
    <Image
      src="/main-logo.png"
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      width={211}
      height={100}
      priority={priority}
      className={cn("w-auto", className)}
    />
  );
}
