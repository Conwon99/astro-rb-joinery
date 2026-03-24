import type { LocationDef } from "@/data/locations";
import type { Service } from "@/data/services";
import {
  homepageSections,
  faqItems,
  type ContentSection,
  type FaqItem,
} from "@/content/site";
import { CANONICAL_PHONE_DISPLAY_UK, CANONICAL_PHONE_E164 } from "@/constants/phone";
import { SITE_ORIGIN as SITE } from "@/constants/site";

export const locationsHubMeta = {
  title: "Locations We Serve | RB Joinery",
  description:
    "RB Joinery serves Ayr, Glasgow, Kilmarnock, Irvine, Troon, Prestwick, Ardrossan, Saltcoats, Largs, and Girvan for joinery, extensions, lofts, kitchens, and home improvements.",
};

export function getLocationLandingMeta(loc: LocationDef): { title: string; description: string } {
  return {
    title: `Joinery ${loc.name} | Building Services & Extensions | RB Joinery`,
    description: `Joinery and building services in ${loc.name}. House extensions, lofts, garden rooms, kitchens, and home improvements. Free quotes — RB Joinery.`,
  };
}

export function getLocationLandingCopy(loc: LocationDef) {
  const nb = loc.neighborhoods.slice(0, 3).join(", ");
  return {
    heroH1: `Joinery & Building Services in ${loc.name}`,
    heroLead: `${loc.localHook} ${loc.weatherNote} We work across ${nb} and nearby streets.`,
    serviceIntro: `Whether you live near ${loc.landmarks[0] || loc.name} or further out, we bring the same care to kitchens, extensions, and repairs. ${loc.propertyTypes}`,
    contentSections: [
      {
        h2: `Why ${loc.name} homeowners call RB Joinery`,
        paragraphs: [
          `People in ${loc.name} ask who does honest joinery nearby — not a firm that ghosts you after the first visit. We answer the phone, show up, and explain what the job needs.`,
          `Local weather matters here: ${loc.weatherNote.toLowerCase()} That is why we detail roofs, doors, and outdoor work properly, not just for show.`,
        ],
      },
      {
        h2: "House Extensions",
        paragraphs: [
          `Need more space in ${loc.name}? Extensions are popular when moving costs too much. We talk through single-storey and two-storey options and what your plot might allow.`,
        ],
      },
      {
        h2: "Loft Conversions",
        paragraphs: [
          `Loft space in ${loc.name} often hides extra bedrooms or offices. We check head height and structure before we promise a layout.`,
        ],
      },
      {
        h2: "Garden Rooms",
        paragraphs: [
          `Garden rooms work well for home offices and gyms — especially when ${loc.name} weather keeps you indoors. We build insulated shells and finish the joinery inside.`,
        ],
      },
      {
        h2: "Kitchen Installation",
        paragraphs: [
          `New kitchens need level units and neat cuts around pipes. In ${loc.name} we fit kitchens in everything from flats to family houses.`,
        ],
      },
      {
        h2: "Home Improvements",
        paragraphs: [
          `Smaller jobs matter too: doors, stairs, skirting, and repairs after damp or wear. We take on home improvements across ${loc.name} and surrounding areas.`,
        ],
      },
      {
        h2: `Local knowledge in ${loc.name}`,
        paragraphs: [
          `We know ${loc.name} housing — ${loc.propertyTypes} Areas like ${nb} are within our usual routes. Trains and roads from ${loc.name} link to the rest of Ayrshire and Glasgow, so we plan travel time fairly in your quote.`,
        ],
      },
    ],
  };
}

function serviceSlugFromHref(href: string): string {
  return href.replace(/^\/|\/$/g, "");
}

export type LocationServiceCopy = {
  metaTitle: string;
  metaDescription: string;
  heroH1: string;
  heroLead: string;
  sections: { h3: string; html: string }[];
};

export function getLocationServiceCopy(loc: LocationDef, service: Service): LocationServiceCopy {
  const slug = serviceSlugFromHref(service.href);
  const metaTitle = `${service.title} ${loc.name} | RB Joinery`;
  const metaDescription = `Need ${service.title.toLowerCase()} in ${loc.name}? RB Joinery works across ${loc.region} with clear quotes, tidy workmanship, and reliable local service. Call ${CANONICAL_PHONE_DISPLAY_UK}.`;

  const problemOpen = pickProblemLine(slug, loc);
  const heroLead = `${problemOpen} Here is how we help in ${loc.name}. We regularly work across ${
    loc.neighborhoods[0] || loc.name
  }, ${loc.neighborhoods[1] || loc.name}, and surrounding streets, with clear advice, tidy workmanship, and straightforward quotes before any work begins.`;

  const sections = buildServiceSections(slug, loc, service);

  return {
    metaTitle,
    metaDescription,
    heroH1: `${service.title} in ${loc.name}`,
    heroLead,
    sections,
  };
}

function pickProblemLine(serviceSlug: string, loc: LocationDef): string {
  const w = loc.weatherNote;
  switch (serviceSlug) {
    case "house-extensions":
      return `Running out of space in ${loc.name}? ${loc.localHook}`;
    case "loft-conversions":
      return `Wondering if your loft in ${loc.name} is tall enough for a proper room?`;
    case "garden-rooms":
      return `Need a quiet office or gym away from the main house in ${loc.name}? ${w}`;
    case "kitchen-installation":
      return `Tired of a cramped or dated kitchen in ${loc.name}?`;
    case "home-improvements":
      return `Small repairs piling up in ${loc.name}? ${w}`;
    case "door-fitting":
      return `Need door fitting help in ${loc.name}?`;
    case "bathroom-fitting":
      return `Planning a bathroom fitting project in ${loc.name}?`;
    default:
      return `Need ${serviceSlug.replace(/-/g, " ")} help in ${loc.name}?`;
  }
}

function buildServiceSections(
  serviceSlug: string,
  loc: LocationDef,
  service: Service
): { h3: string; html: string }[] {
  const contact = `<a href="/contact/" class="text-green-600 hover:underline">contact us</a>`;

  let story = "";
  switch (serviceSlug) {
    case "house-extensions":
      story = `<p class="mb-4">Extensions in ${loc.name} must suit your street and local rules. We help you see what is realistic before you spend money on drawings.</p>`;
      break;
    case "loft-conversions":
      story = `<p class="mb-4">Loft jobs in ${loc.name} depend on roof height and stairs. We tell you straight if a dormer or Velux layout fits.</p>`;
      break;
    case "garden-rooms":
      story = `<p class="mb-4">Garden rooms near ${loc.name} need solid bases and insulation. ${loc.weatherNote}</p>`;
      break;
    case "kitchen-installation":
      story = `<p class="mb-4">Kitchens in ${loc.name} range from compact flats to big family rooms. We fit units square and finish trims neat.</p>`;
      break;
    case "home-improvements":
      story = `<p class="mb-4">From sticky doors to full room refreshes, we handle joinery-led home improvements across ${loc.name}.</p>`;
      break;
    default:
      story = `<p class="mb-4">${service.description}</p>`;
  }

  const localBlock = `<p class="mb-4">We work in ${loc.name} and nearby areas such as ${loc.neighborhoods.slice(0, 4).join(", ")}. ${loc.localHook}</p><p class="mb-4">Landmarks locals know — ${loc.landmarks.join(", ")} — help us find you. ${loc.propertyTypes}</p>`;
  const serviceTypesTitle = `Types of ${service.title.toLowerCase()}`;
  const serviceTypesHtml = buildServiceTypesHtml(serviceSlug, loc.name);

  return [
    { h3: `Why ${service.title} in ${loc.name}?`, html: story },
    {
      h3: "You call us",
      html: `<p class="mb-4">Ring <strong>${CANONICAL_PHONE_DISPLAY_UK}</strong> or use our ${contact} form. Tell us your postcode in ${loc.name}, what the issue is, and the outcome you want.</p><p class="mb-4">If you have photos, sizes, or rough plans, share them at this stage. It helps us give practical guidance straight away and plan the right visit for your property.</p>`,
    },
    {
      h3: serviceTypesTitle,
      html: serviceTypesHtml,
    },
    {
      h3: "We book a time",
      html: `<p class="mb-4">We arrange a visit that suits you. We measure, look at access, and listen to how you use the space.</p>`,
    },
    {
      h3: "You get a clear quote",
      html: `<p class="mb-4">You receive a written quote with no hidden extras. You decide if you want to go ahead.</p>`,
    },
    {
      h3: "We do the work",
      html: `<p class="mb-4">We keep the site tidy, protect your home, and finish to a standard we would want in our own houses.</p>`,
    },
    { h3: `${loc.name} and nearby`, html: localBlock },
    {
      h3: "More services",
      html: `<p class="mb-4">See all <a href="${SITE}/services/" class="text-green-600 hover:underline">joinery services</a> or our main <a href="${service.href.endsWith("/") ? service.href : `${service.href}/`}" class="text-green-600 hover:underline">${service.title}</a> page for ${loc.region === "Glasgow" ? "Glasgow" : "Ayrshire"} and beyond.</p>`,
    },
  ];
}

function buildServiceTypesHtml(serviceSlug: string, locationName: string): string {
  switch (serviceSlug) {
    case "door-fitting":
      return `<p class="mb-4">In ${locationName}, we handle internal door fitting, external door fitting, replacement doors, and frame/hinge adjustments.</p><p class="mb-4">We also fit locks, latches, and handles so doors close properly, seal well, and feel solid in daily use.</p>`;
    case "bathroom-fitting":
      return `<p class="mb-4">Our bathroom fitting in ${locationName} includes full refurbishments, fixture fitting, vanity/furniture installation, and finish joinery.</p><p class="mb-4">We can also handle practical upgrades such as better storage layouts, trim work, and tidy boxing around services.</p>`;
    case "kitchen-installation":
      return `<p class="mb-4">Kitchen services in ${locationName} include full kitchen fitting, replacement unit installs, layout-led upgrades, and finishing carpentry.</p><p class="mb-4">We fit supplied kitchens or support design-led installs, with careful leveling, trimming, and neat final detailing.</p>`;
    case "house-extensions":
      return `<p class="mb-4">Extension options in ${locationName} include single-storey rear extensions, side returns, and larger two-storey builds where suitable.</p><p class="mb-4">We also help with extension-related structural work and phased projects when homeowners want to improve in stages.</p>`;
    case "loft-conversions":
      return `<p class="mb-4">Loft conversion work in ${locationName} can include dormer conversions, Velux-style conversions, and loft room upgrades.</p><p class="mb-4">We advise on access, stairs, and practical room use so the space works day to day, not just on paper.</p>`;
    case "garden-rooms":
      return `<p class="mb-4">Garden room services in ${locationName} include home office builds, gym/studio rooms, and insulated multipurpose spaces.</p><p class="mb-4">We also cover layout-led fit-outs, including storage-friendly joinery and finishing details for year-round use.</p>`;
    case "home-improvements":
      return `<p class="mb-4">Home improvements in ${locationName} include joinery repairs, room refreshes, interior upgrades, and practical maintenance work.</p><p class="mb-4">Typical jobs include doors, trims, stair updates, and staged improvement projects tailored to your home and budget.</p>`;
    default:
      return `<p class="mb-4">We provide a range of ${serviceSlug.replace(/-/g, " ")} options in ${locationName}, tailored to your property and goals.</p>`;
  }
}

export function buildCanonical(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  const withSlash = p.endsWith("/") ? p : `${p}/`;
  return `${SITE}${withSlash}`;
}

/** Location-flavoured LocalBusiness JSON-LD for hub and location service pages */
export function buildLocationLocalBusinessJson(loc: LocationDef, pageUrl: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
    name: `RB Joinery — ${loc.name}`,
    description: `Joinery and building services in ${loc.name}, ${loc.region}. House extensions, lofts, garden rooms, kitchens, and home improvements.`,
    url: pageUrl,
    telephone: CANONICAL_PHONE_E164,
    email: "Ryan@rbjoinery.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.address.addressLocality,
      addressRegion: loc.address.addressRegion,
      postalCode: loc.address.postalCode ?? "",
      addressCountry: loc.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.geo.latitude,
      longitude: loc.geo.longitude,
    },
    areaServed: { "@type": "City", name: loc.name },
    serviceType: [
      "House Extensions",
      "Loft Conversions",
      "Garden Rooms",
      "Kitchen Installation",
      "Home Improvements",
      "Door Fitting",
      "Bathroom Fitting",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "15",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/** Breadcrumb helpers */
export function breadcrumbsLocation(loc: LocationDef) {
  return [
    { name: "Home", url: `${SITE}/` },
    { name: "Locations", url: `${SITE}/locations/` },
    { name: loc.name, url: `${SITE}/${loc.slug}/` },
  ];
}

export function breadcrumbsLocationService(loc: LocationDef, service: Service) {
  const slug = serviceSlugFromHref(service.href);
  return [
    { name: "Home", url: `${SITE}/` },
    { name: "Locations", url: `${SITE}/locations/` },
    { name: loc.name, url: `${SITE}/${loc.slug}/` },
    { name: service.title, url: `${SITE}/${loc.slug}/${slug}/` },
  ];
}

/** Same section structure as the homepage long-form block, with copy localized to the hub. */
function localizeHomepageParagraph(text: string, loc: LocationDef): string {
  const wider =
    loc.region === "Glasgow"
      ? `${loc.name} and surrounding Glasgow areas`
      : `${loc.name} and nearby Ayrshire`;

  return text
    .replace(
      /Running out of space in Kilmarnock or the south side of Glasgow\?/g,
      `Running out of space in ${loc.name}?`
    )
    .replace(
      /We work with homeowners across Ayrshire — from Ayr and Troon to Irvine and Prestwick — and across Glasgow\./g,
      `We work with homeowners in and around ${loc.name}.`
    )
    .replace(
      /A loft conversion is often the cheapest way to add a bedroom or office in towns like Prestwick or Largs where roof space goes unused\./g,
      `A loft conversion is often the cheapest way to add a bedroom or office in ${loc.name}, where roof space often goes unused.`
    )
    .replace(/\bin Ayrshire and Glasgow\b/gi, `in ${wider}`)
    .replace(/\bacross Ayrshire and Glasgow\b/gi, `across ${wider}`)
    .replace(
      /Shops, offices, and small commercial sites in Ayrshire and Glasgow/g,
      `Shops, offices, and small commercial sites in ${loc.name} and nearby`
    );
}

function localizeContentSection(section: ContentSection, loc: LocationDef): ContentSection {
  return {
    ...section,
    h2: localizeHomepageParagraph(section.h2, loc),
    paragraphs: section.paragraphs.map((p) => localizeHomepageParagraph(p, loc)),
    bullets: section.bullets?.map((p) => localizeHomepageParagraph(p, loc)),
    subsections: section.subsections?.map((sub) => ({
      ...sub,
      h3: localizeHomepageParagraph(sub.h3, loc),
      paragraphs: sub.paragraphs.map((p) => localizeHomepageParagraph(p, loc)),
    })),
  };
}

export function getLocationHomepageSections(loc: LocationDef): ContentSection[] {
  return homepageSections.map((s) => localizeContentSection(s, loc));
}

export function getLocationFaqItems(loc: LocationDef): FaqItem[] {
  return faqItems.map((item) => {
    if (item.question === "What areas do you cover?") {
      return {
        ...item,
        answer: `We work in ${loc.name} and across ${loc.region}, and throughout our usual towns across Ayrshire and Glasgow. Message us with your postcode or call ${CANONICAL_PHONE_DISPLAY_UK} to check your area.`,
      };
    }
    const answer = item.answer.replace(
      /\bAyrshire and Glasgow\b/g,
      `${loc.name} (${loc.region}) and our wider service area`
    );
    return { ...item, answer };
  });
}

export function getLocationServicesGridLead(loc: LocationDef): string {
  return `Professional joinery and building services in ${loc.name} and across ${loc.region}: house extensions, loft conversions, garden rooms, kitchens, and home improvements.`;
}

export function getLocationGalleryLead(loc: LocationDef): string {
  return `Take a look at some of our recent joinery and building projects — including work in ${loc.name} and across Ayrshire & Glasgow.`;
}

export function getLocationServiceAreasIntro(loc: LocationDef): string {
  return `We're based around ${loc.name} and work across the wider Ayrshire & Glasgow area. Contact us to confirm coverage for your postcode.`;
}

export function getLocationFaqIntro(loc: LocationDef): string {
  return `Common questions about our joinery, building services, house extensions, loft conversions, garden rooms, and home improvements — for homeowners in ${loc.name} and nearby.`;
}
