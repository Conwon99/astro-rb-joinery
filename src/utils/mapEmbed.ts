/**
 * Classic Google Maps iframe embed (no API key).
 * Coordinates should match `LocationDef.geo` or your primary business area.
 */
export function googleMapsEmbedSrc(latitude: string, longitude: string, zoom = 13): string {
  const lat = latitude.trim();
  const lng = longitude.trim();
  const z = Math.min(18, Math.max(1, Math.round(zoom)));
  return `https://maps.google.com/maps?q=${encodeURIComponent(`${lat},${lng}`)}&z=${z}&output=embed`;
}

/** Primary service base — Kilmarnock (matches site LocalBusiness schema). */
export const DEFAULT_SITE_MAP = {
  latitude: "55.4586",
  longitude: "-4.6292",
  label: "RB Joinery — Kilmarnock & Ayrshire",
} as const;
