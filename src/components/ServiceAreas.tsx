import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { AYRSHIRE_GLASGOW_MAP_BOUNDS, AYRSHIRE_GLASGOW_POLYGON } from "@/data/serviceAreaMap";
import { trackPhoneCall } from "@/utils/analytics";
import { useTrackingPhone } from "@/hooks/useTrackingPhone";

const serviceAreas = [
  "Ayr",
  "Glasgow",
  "Kilmarnock",
  "Irvine",
  "Troon",
  "Prestwick",
  "Ardrossan",
  "Saltcoats",
  "Largs",
  "Girvan",
];

type ReactLeafletMap = Pick<
  typeof import("react-leaflet"),
  "MapContainer" | "TileLayer" | "Polygon"
>;

/**
 * Loads Leaflet + react-leaflet only in the browser so Astro SSR never touches `window`.
 */
function ServiceAreasOpenStreetMap({ mapAriaLabel }: { mapAriaLabel: string }) {
  const [mapLib, setMapLib] = useState<ReactLeafletMap | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      await import("leaflet/dist/leaflet.css");
      const rl = await import("react-leaflet");
      if (!cancelled) {
        setMapLib({
          MapContainer: rl.MapContainer,
          TileLayer: rl.TileLayer,
          Polygon: rl.Polygon,
        });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!mapLib) {
    return (
      <div
        className="flex h-full min-h-[320px] w-full items-center justify-center rounded-xl bg-muted/80 text-sm text-muted-foreground"
        aria-busy="true"
        aria-live="polite"
      >
        Loading map…
      </div>
    );
  }

  const { MapContainer, TileLayer, Polygon } = mapLib;

  return (
    <div
      className="h-full min-h-[320px] w-full overflow-hidden rounded-xl"
      role="img"
      aria-label={mapAriaLabel}
    >
      <MapContainer
        bounds={AYRSHIRE_GLASGOW_MAP_BOUNDS}
        className="service-areas-map z-0 h-full w-full"
        scrollWheelZoom={false}
        attributionControl
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon
          positions={AYRSHIRE_GLASGOW_POLYGON}
          pathOptions={{
            color: "hsl(var(--dark-green))",
            fillColor: "hsl(var(--primary-green))",
            fillOpacity: 0.22,
            weight: 2,
          }}
        />
      </MapContainer>
    </div>
  );
}

const DEFAULT_INTRO =
  "We proudly serve Ayrshire and Glasgow with expert joinery and building work. Contact us to confirm coverage for your specific location.";

type ServiceAreasProps = {
  introLead?: string;
  mapAriaLabel?: string;
  coverageTitle?: string;
};

const ServiceAreas = ({
  introLead = DEFAULT_INTRO,
  mapAriaLabel = "OpenStreetMap of west central Scotland with our Ayrshire and Glasgow service area highlighted.",
  coverageTitle = "Ayrshire & Glasgow Coverage",
}: ServiceAreasProps) => {
  const { display: phoneDisplay, telHref } = useTrackingPhone();

  return (
    <section id="service-areas" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))] overflow-x-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-16">
          <div className="flex items-center mb-4">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mr-6">
              SERVICE AREAS
            </h2>
            <div className="flex-1 h-px bg-[hsl(var(--asphalt-grey))]"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {introLead}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* OpenStreetMap coverage */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 border-2 border-primary/20">
              <div className="aspect-square min-h-[280px] rounded-xl shadow-lg [&_.leaflet-control-container]:text-xs">
                <ServiceAreasOpenStreetMap mapAriaLabel={mapAriaLabel} />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-display font-bold text-xl text-primary mb-2">
                  {coverageTitle}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Map data &copy; OpenStreetMap contributors — area shown is our typical service region.
                </p>
              </div>
            </div>
          </div>

          {/* Service areas list */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
              <h4 className="font-display font-bold text-xl text-foreground mb-3">
                Need Service Outside These Areas?
              </h4>
              <p className="text-muted-foreground mb-4">
                We may be able to help with services outside our main coverage area.
                Contact us to discuss your specific needs and we'll do our best to accommodate you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={telHref}
                  onClick={() => trackPhoneCall("service_areas_call_button")}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  Call {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
