import { useEffect, useState } from "react";
import {
  CANONICAL_PHONE_DISPLAY_UK,
  CANONICAL_PHONE_E164,
  TRACKING_PHONE_DISPLAY_UK,
  TRACKING_PHONE_E164,
} from "@/constants/phone";

/**
 * Search engines see canonical `tel:` + display in the first HTML paint;
 * after hydration, UI and `tel:` links switch to the tracking number.
 */
export function useTrackingPhone() {
  const [display, setDisplay] = useState(CANONICAL_PHONE_DISPLAY_UK);
  const [telHref, setTelHref] = useState(`tel:${CANONICAL_PHONE_E164}`);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setDisplay(TRACKING_PHONE_DISPLAY_UK);
    setTelHref(`tel:${TRACKING_PHONE_E164}`);
  }, []);

  return { display, telHref };
}
