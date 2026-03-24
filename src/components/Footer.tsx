import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { trackExternalLink } from "@/utils/analytics";
import { LOCATIONS } from "@/data/locations";
import { DEFAULT_SITE_MAP, googleMapsEmbedSrc } from "@/utils/mapEmbed";
import { useTrackingPhone } from "@/hooks/useTrackingPhone";

export type FooterProps = {
  /** Override default Kilmarnock-area map (use location hub coordinates). */
  mapLatitude?: string;
  mapLongitude?: string;
  /** Shown in iframe title and optional caption. */
  mapLabel?: string;
  mapZoom?: number;
};

const Footer = ({
  mapLatitude = DEFAULT_SITE_MAP.latitude,
  mapLongitude = DEFAULT_SITE_MAP.longitude,
  mapLabel = DEFAULT_SITE_MAP.label,
  mapZoom = 13,
}: FooterProps) => {
  const { display: phoneDisplay, telHref } = useTrackingPhone();
  const currentYear = new Date().getFullYear();
  const mapSrc = googleMapsEmbedSrc(mapLatitude, mapLongitude, mapZoom);

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-12 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="grid min-w-0 flex-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                RB Joinery
              </h3>
              <p className="text-white leading-relaxed">
                Trusted provider of joinery and building services in Ayrshire and Glasgow. 
                Our skilled team specializes in house extensions, loft conversions, garden rooms, kitchens, and home improvements, with every project completed to the highest standards.
              </p>
            </div>
            
            <div className="space-y-3">
              <a href={telHref} className="flex items-center gap-3 text-white transition-colors hover:text-gray-300">
                <Phone className="w-5 h-5 shrink-0 text-white" aria-hidden />
                <span>{phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white">Ryan@rbjoinery.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white">Ayrshire & Glasgow</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="/services/" className="hover:text-gray-300 transition-colors">
                  • All services
                </a>
              </li>
              <li>
                <a href="/house-extensions/" className="hover:text-gray-300 transition-colors">
                  • House Extensions
                </a>
              </li>
              <li>
                <a href="/loft-conversions/" className="hover:text-gray-300 transition-colors">
                  • Loft Conversions
                </a>
              </li>
              <li>
                <a href="/garden-rooms/" className="hover:text-gray-300 transition-colors">
                  • Garden Rooms
                </a>
              </li>
              <li>
                <a href="/kitchen-installation/" className="hover:text-gray-300 transition-colors">
                  • Kitchen Installation
                </a>
              </li>
              <li>
                <a href="/bathroom-fitting/" className="hover:text-gray-300 transition-colors">
                  • Bathroom Fitting
                </a>
              </li>
              <li>
                <a href="/door-fitting/" className="hover:text-gray-300 transition-colors">
                  • Door Fitting
                </a>
              </li>
              <li>
                <a href="/home-improvements/" className="hover:text-gray-300 transition-colors">
                  • Home Improvements
                </a>
              </li>
            </ul>
          </div>

          {/* Locations — hub + town links; hover panel on large screens */}
          <div className="relative group">
            <h4 className="font-display text-xl font-bold text-white mb-6 flex flex-wrap items-center gap-2">
              <a href="/locations/" className="hover:text-gray-300 transition-colors">
                Locations
              </a>
              <ChevronDown
                className="hidden lg:inline h-4 w-4 text-white/70 transition-transform group-hover:rotate-180"
                aria-hidden
              />
            </h4>
            <ul className="space-y-3 text-white lg:hidden">
              <li>
                <a href="/locations/" className="hover:text-gray-300 transition-colors">
                  • All locations
                </a>
              </li>
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <a
                    href={`/${loc.slug}/`}
                    className="hover:text-gray-300 transition-colors"
                  >
                    • {loc.name}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className="pointer-events-none absolute left-0 top-full z-20 -mt-px min-w-[220px] pt-2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 max-lg:hidden"
              role="menu"
              aria-label="Town pages"
            >
              <ul className="space-y-2 rounded-lg border border-white/10 bg-black py-3 px-4 shadow-lg">
                <li>
                  <a href="/locations/" className="block text-sm hover:text-gray-300 transition-colors" role="menuitem">
                    All locations
                  </a>
                </li>
                {LOCATIONS.map((loc) => (
                  <li key={loc.slug}>
                    <a
                      href={`/${loc.slug}/`}
                      className="block text-sm hover:text-gray-300 transition-colors"
                      role="menuitem"
                    >
                      {loc.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          </div>

          {/* Small square map — right on large screens, right-aligned on small */}
          <div className="flex shrink-0 flex-col items-end lg:pt-1">
            <h4 className="font-display mb-2 text-right text-lg font-bold text-white">
              Service area
            </h4>
            <p className="mb-2 max-w-[9rem] text-right text-xs leading-snug text-white/70">
              {mapLabel}
            </p>
            <div className="aspect-square w-28 overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-md sm:w-32">
              <iframe
                title={`Map: ${mapLabel}`}
                src={mapSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-sm">
              © {currentYear} RB Joinery. All rights reserved.
            </div>
            <div className="text-white/70 text-sm text-center">
              Professional joinery and building services in Ayrshire and Glasgow.
              <br />
              Website Design by{' '}
              <a 
                href="https://codapixel.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-gray-300 transition-colors"
                onClick={() => trackExternalLink('https://codapixel.com/', 'CodaPixel')}
              >
                CodaPixel
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;