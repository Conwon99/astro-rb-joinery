/**
 * Local SEO location hubs. NAP/geo should match Google Business Profile when available.
 */

export type LocationDef = {
  slug: string;
  name: string;
  region: "Ayrshire" | "Glasgow";
  /** Short line for hero / intros */
  weatherNote: string;
  neighborhoods: string[];
  landmarks: string[];
  propertyTypes: string;
  /** Approximate city centre — update to match GBP */
  geo: { latitude: string; longitude: string };
  address: {
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  /** Unique angle for templates (one sentence) */
  localHook: string;
};

export const LOCATIONS: LocationDef[] = [
  {
    slug: "ayr",
    name: "Ayr",
    region: "Ayrshire",
    weatherNote: "Wet winters and coastal winds mean roofs, doors, and external timber need care.",
    neighborhoods: ["Alloway", "Holmston", "Forehill", "Castlehill"],
    landmarks: ["Ayr Racecourse", "Ayr Beach", "River Ayr"],
    propertyTypes: "Terraced homes, Victorian terraces, and new-build estates near the coast.",
    geo: { latitude: "55.4620", longitude: "-4.6290" },
    address: {
      addressLocality: "Ayr",
      addressRegion: "Ayrshire",
      postalCode: "KA7",
      addressCountry: "Scotland",
    },
    localHook: "Ayr’s mix of older sandstone and newer estates means every job needs a different approach.",
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    region: "Glasgow",
    weatherNote: "Driving rain and busy city streets mean leaks, damp, and wear show up fast.",
    neighborhoods: ["West End", "Southside", "East End", "City Centre"],
    landmarks: ["Clyde Arc", "Glasgow Green", "Kelvingrove"],
    propertyTypes: "Tenements, flats, and family homes from Victorian to modern.",
    geo: { latitude: "55.8642", longitude: "-4.2518" },
    address: {
      addressLocality: "Glasgow",
      addressRegion: "Glasgow",
      postalCode: "G1",
      addressCountry: "Scotland",
    },
    localHook: "Glasgow tenements and conversions often need clever joinery and building work in tight spaces.",
  },
  {
    slug: "kilmarnock",
    name: "Kilmarnock",
    region: "Ayrshire",
    weatherNote: "West of Scotland weather can stress gutters, roofs, and paintwork year round.",
    neighborhoods: ["Bellfield", "Shortlees", "Onthank", "Grange"],
    landmarks: ["Burns Monument Centre", "Palace Theatre"],
    propertyTypes: "Terraced homes, semis, and post-war estates.",
    geo: { latitude: "55.4586", longitude: "-4.6292" },
    address: {
      addressLocality: "Kilmarnock",
      addressRegion: "Ayrshire",
      postalCode: "KA1",
      addressCountry: "Scotland",
    },
    localHook: "Kilmarnock sits at the heart of Ayrshire — many of our projects start here.",
  },
  {
    slug: "irvine",
    name: "Irvine",
    region: "Ayrshire",
    weatherNote: "Coastal exposure and salt air can speed up rot on timber and fittings.",
    neighborhoods: ["Harbour", "Fullarton", "Woodlands", "Bourtreehill"],
    landmarks: ["Irvine Harbour", "Rivergate"],
    propertyTypes: "Harbour flats, family homes, and newer developments.",
    geo: { latitude: "55.6198", longitude: "-4.6551" },
    address: {
      addressLocality: "Irvine",
      addressRegion: "Ayrshire",
      postalCode: "KA12",
      addressCountry: "Scotland",
    },
    localHook: "Irvine’s harbour and new builds both need solid weatherproofing and neat joinery.",
  },
  {
    slug: "troon",
    name: "Troon",
    region: "Ayrshire",
    weatherNote: "Open sea winds and golf-season traffic mean homes take a bit of extra wear.",
    neighborhoods: ["Barassie", "Muirhead", "Loans", "Craigend"],
    landmarks: ["Royal Troon Golf Club", "Troon Beach"],
    propertyTypes: "Bungalows, villas, and coastal family homes.",
    geo: { latitude: "55.5399", longitude: "-4.6548" },
    address: {
      addressLocality: "Troon",
      addressRegion: "Ayrshire",
      postalCode: "KA10",
      addressCountry: "Scotland",
    },
    localHook: "Troon’s coastal homes often need extensions and loft space that work with sea air.",
  },
  {
    slug: "prestwick",
    name: "Prestwick",
    region: "Ayrshire",
    weatherNote: "Airport noise and coastal weather mean good insulation and solid doors matter.",
    neighborhoods: ["Adamton", "New Prestwick", "Heathfield"],
    landmarks: ["Prestwick Airport", "Golf courses"],
    propertyTypes: "Detached homes, bungalows, and inter-war housing.",
    geo: { latitude: "55.4956", longitude: "-4.6142" },
    address: {
      addressLocality: "Prestwick",
      addressRegion: "Ayrshire",
      postalCode: "KA9",
      addressCountry: "Scotland",
    },
    localHook: "Prestwick families often want kitchens and extensions that suit busy family life.",
  },
  {
    slug: "ardrossan",
    name: "Ardrossan",
    region: "Ayrshire",
    weatherNote: "Ferry and harbour exposure means salt spray and damp can hit timber hard.",
    neighborhoods: ["Ardrossan Harbour", "Whitlees", "Chapelhill"],
    landmarks: ["Ardrossan Ferry Terminal", "Ardrossan Castle"],
    propertyTypes: "Terraced streets, semis, and older stone homes.",
    geo: { latitude: "55.6420", longitude: "-4.8087" },
    address: {
      addressLocality: "Ardrossan",
      addressRegion: "Ayrshire",
      postalCode: "KA22",
      addressCountry: "Scotland",
    },
    localHook: "Ardrossan homes near the harbour need repairs that stand up to coastal conditions.",
  },
  {
    slug: "saltcoats",
    name: "Saltcoats",
    region: "Ayrshire",
    weatherNote: "Seafront weather tests windows, doors, and rooflines every winter.",
    neighborhoods: ["South Beach", "New England", "Raise"],
    landmarks: ["Saltcoats Beach", "Ardrossan–Saltcoats rail"],
    propertyTypes: "Terraced housing and flats near the coast.",
    geo: { latitude: "55.6362", longitude: "-4.7859" },
    address: {
      addressLocality: "Saltcoats",
      addressRegion: "Ayrshire",
      postalCode: "KA21",
      addressCountry: "Scotland",
    },
    localHook: "Saltcoats residents often call us for draughts, rot, and room upgrades.",
  },
  {
    slug: "largs",
    name: "Largs",
    region: "Ayrshire",
    weatherNote: "Tourist season and sea air mean holiday lets and family homes need upkeep.",
    neighborhoods: ["Noddsdale", "Haylie", "Fairlie"],
    landmarks: ["Largs Pencil", "Vikingar", "Largs seafront"],
    propertyTypes: "Stone villas, tenements, and holiday flats.",
    geo: { latitude: "55.7542", longitude: "-4.9261" },
    address: {
      addressLocality: "Largs",
      addressRegion: "Ayrshire",
      postalCode: "KA30",
      addressCountry: "Scotland",
    },
    localHook: "Largs’s older homes and seafront properties need joinery that fits the character.",
  },
  {
    slug: "girvan",
    name: "Girvan",
    region: "Ayrshire",
    weatherNote: "South Ayrshire coast gets strong winds — roofs and garden rooms need planning.",
    neighborhoods: ["Invergordon", "Ailsa", "Glendoune"],
    landmarks: ["Girvan Harbour", "Ailsa Craig views"],
    propertyTypes: "Traditional cottages, semis, and rural-edge homes.",
    geo: { latitude: "55.2402", longitude: "-4.8555" },
    address: {
      addressLocality: "Girvan",
      addressRegion: "Ayrshire",
      postalCode: "KA26",
      addressCountry: "Scotland",
    },
    localHook: "Girvan’s quieter streets still need the same quality when you extend or renovate.",
  },
];

export function getLocationBySlug(slug: string): LocationDef | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
