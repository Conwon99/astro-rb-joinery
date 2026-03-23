import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackServiceClick } from "@/utils/analytics";
import { SERVICES } from "@/data/services";

type ServicesGridProps = {
  /** Location hub: links go to `/{slug}/house-extensions` etc. */
  locationSlug?: string;
  /** Override the intro line under OUR SERVICES */
  leadText?: string;
};

const DEFAULT_LEAD =
  "Professional services across Ayrshire and Glasgow: house extensions, loft conversions, garden rooms, kitchens, and home improvements.";

const ServicesGrid = ({ locationSlug, leadText = DEFAULT_LEAD }: ServicesGridProps) => {
  const hrefFor = (href: string) =>
    locationSlug ? `/${locationSlug}${href}` : href;

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-16">
          <div className="flex items-center mb-6">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mr-6">
              OUR SERVICES
            </h2>
            <div className="flex-1 h-px bg-[hsl(var(--asphalt-grey))]"></div>
          </div>
          <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl">
            {leadText}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden flex flex-col rounded-3xl bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:scale-[1.02] h-full"
            >
              {/* Image (ANGE style: aspect wrapper, object-cover, centered) */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} service image`}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[hsl(var(--asphalt-grey))]">
                        <div className="w-1.5 h-1.5 bg-[hsl(var(--primary-green))] rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold rounded-full"
                  >
                    <a
                      href={hrefFor(service.href)}
                      onClick={() => trackServiceClick(service.title, "services_grid")}
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
