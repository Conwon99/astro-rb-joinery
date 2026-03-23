import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useTrackingPhone } from "@/hooks/useTrackingPhone";
import { cn } from "@/lib/utils";

type TrackedPhoneLinkProps = ComponentPropsWithoutRef<"a"> & {
  /** If set, overrides the default formatted number as link text. */
  children?: ReactNode;
};

/**
 * Renders a `tel:` link: canonical in SSR/first paint, tracking after mount.
 */
export default function TrackedPhoneLink({ className, children, ...rest }: TrackedPhoneLinkProps) {
  const { display, telHref } = useTrackingPhone();

  return (
    <a href={telHref} className={cn(className)} {...rest}>
      {children ?? display}
    </a>
  );
}
