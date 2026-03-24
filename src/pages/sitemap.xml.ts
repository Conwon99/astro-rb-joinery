import type { APIRoute } from "astro";
import { LOCATIONS } from "@/data/locations";
import { SERVICES } from "@/data/services";
import { SITE_ORIGIN as SITE } from "@/constants/site";

const STATIC_PATHS = [
  "/",
  "/services/",
  "/locations/",
  "/contact/",
  ...SERVICES.map((service) => service.href),
  ...LOCATIONS.map((location) => `/${location.slug}/`),
  ...LOCATIONS.flatMap((location) =>
    SERVICES.map((service) => `/${location.slug}${service.href}`),
  ),
];

function toAbsoluteUrl(path: string) {
  return new URL(path, SITE).toString();
}

export const GET: APIRoute = () => {
  const urls = [...new Set(STATIC_PATHS)].map(
    (path) => `  <url>\n    <loc>${toAbsoluteUrl(path)}</loc>\n  </url>`,
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
