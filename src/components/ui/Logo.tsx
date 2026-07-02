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
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/main-logo.png"
      alt="The Equal Research — Investment Advisor"
      width={211}
      height={100}
      priority={priority}
      className={cn("w-auto", className)}
    />
  );
}
