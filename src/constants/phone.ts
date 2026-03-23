/**
 * Phone numbers for SEO vs call tracking.
 *
 * - Canonical: use in initial HTML/SSR, JSON-LD, meta, and as the *initial* React state
 *   before `useEffect` runs (so crawlers see the real business number).
 * - Tracking: client-only after mount — do not use in Astro static output or structured data.
 */

export const CANONICAL_PHONE_E164 = "+447927726622";

/** UK national format for display (matches existing site copy). */
export const CANONICAL_PHONE_DISPLAY_UK = "07927 726622";

export const TRACKING_PHONE_E164 = "+447446992853";

export const TRACKING_PHONE_DISPLAY_UK = "07446 992853";
