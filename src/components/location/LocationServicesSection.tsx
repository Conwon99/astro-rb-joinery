import type { LocationDef } from "@/data/locations";
import { SERVICES } from "@/data/services";
import { ArrowRight } from "lucide-react";

function slugFromHref(href: string): string {
  return href.replace(/^\//, "");
}

type Props = {
  location: LocationDef;
  intro?: string;
};

const LocationServicesSection = ({ location, intro }: Props) => {
  return (
    <section className="bg-gradient-to-b from-background to-[hsl(var(--muted))] px-4 py-16">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-display mb-4 text-3xl font-bold text-[hsl(var(--asphalt-grey))] lg:text-4xl">
          Services in {location.name}
        </h2>
        {intro && <p className="mb-10 max-w-3xl text-lg text-[hsl(var(--asphalt-grey))]/90">{intro}</p>}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const s = slugFromHref(service.href);
            return (
              <a
                key={service.href}
                href={`/${location.slug}/${s}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] transition-[var(--transition-smooth)] hover:scale-[1.02] hover:shadow-[var(--shadow-soft)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt=""
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <h3 className="font-display mb-2 text-2xl font-bold text-[hsl(var(--asphalt-grey))]">{service.title}</h3>
                  <p className="mb-4 flex-grow text-[hsl(var(--asphalt-grey))]/80">{service.description}</p>
                  <span className="inline-flex items-center font-semibold text-green-600 group-hover:underline">
                    View {location.name} page
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationServicesSection;
