import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackQuoteRequest, trackServiceClick } from "@/utils/analytics";

type ServiceCard = {
  title: string;
  description: string;
  features: string[];
  image: string;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "House Extensions",
    description: "Professional house extensions including single and two-storey additions",
    features: ["Single storey extensions", "Two storey extensions", "Planning permission", "Design consultation"],
    image: "/Services/House extension..jpg",
  },
  {
    title: "Loft Conversions",
    description: "Transform your loft space into beautiful, functional rooms",
    features: ["Dormer conversions", "Velux conversions", "Bespoke designs", "Planning support"],
    image: "/Services/Loft..jpg",
  },
  {
    title: "Garden Rooms",
    description: "Create the perfect outdoor living space with bespoke garden rooms",
    features: ["Home offices", "Garden studios", "Garden gyms", "Entertainment spaces"],
    image: "/Services/garden room.webp",
  },
  {
    title: "Kitchen Installation",
    description: "Professional kitchen design, supply, and installation services",
    features: ["Kitchen design", "Supply & fitting", "Bespoke kitchens", "Renovation services"],
    image: "/Services/Kitchen installation..jpg",
  },
  {
    title: "Home Improvements",
    description: "Complete home improvement and renovation services",
    features: ["Complete renovations", "Structural work", "Interior upgrades", "Property maintenance"],
    image: "/Services/home improv.jpg",
  },
];

const ServicesGrid = () => {
  const handleQuoteClick = (serviceTitle: string) => {
    trackQuoteRequest('services_grid_quote_button', [serviceTitle]);
    trackServiceClick(serviceTitle, 'services_grid');
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

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
            Professional services across Ayrshire and Glasgow: house extensions, loft conversions, garden rooms, kitchens, and home improvements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_CARDS.map((service) => (
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
                  <Button onClick={() => handleQuoteClick(service.title)} className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold rounded-full">
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
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


