/**
 * Approximate service coverage polygon (Ayrshire + Glasgow) for OpenStreetMap display.
 * Coordinates are [latitude, longitude] in WGS84 (Leaflet order).
 *
 * Broad hull matching “Ayrshire & Glasgow” marketing copy: west coast through
 * Troon/Ayr/Girvan, inland East Ayrshire / Kilmarnock, and Greater Glasgow.
 */
export const AYRSHIRE_GLASGOW_POLYGON: [number, number][] = [
  [55.98, -4.92], // NW — Upper Clyde / Helensburgh belt
  [55.9, -5.05], // W — Firth / Cowal-facing (wider western reach)
  [55.78, -4.92], // W — North Ayrshire coast
  [55.64, -4.82], // Ardrossan / Saltcoats / Irvine coast
  [55.5, -4.65], // Troon / Prestwick
  [55.42, -4.58], // Ayr
  [55.28, -4.72], // South Ayrshire toward coast
  [55.22, -4.78], // Girvan / south-west
  [55.24, -4.45], // South inland
  [55.42, -4.22], // East Ayrshire
  [55.58, -4.08], // Kilmarnock / central belt
  [55.78, -3.98], // Glasgow south / Rutherglen approach
  [55.92, -4.02], // Glasgow north / Bishopbriggs belt
  [55.96, -4.22], // NE Glasgow
  [55.95, -4.55], // NW Glasgow / Clydebank / Paisley return
];

/** Padded bounds so the map frames the polygon with margin */
export const AYRSHIRE_GLASGOW_MAP_BOUNDS: [[number, number], [number, number]] = [
  [55.16, -5.15],
  [56.02, -3.88],
];
