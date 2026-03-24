export type Service = {
  title: string;
  description: string;
  features: string[];
  image: string;
  /** Smaller overlapping image on service page split intro (optional) */
  splitSecondaryImage?: string;
  href: string;
};

export const SERVICES: Service[] = [
  {
    title: "House Extensions",
    description:
      "Professional house extensions including single and two-storey additions",
    features: [
      "Single storey extensions",
      "Two storey extensions",
      "Planning permission",
      "Design consultation",
    ],
    image: "/Services/House extension..jpg",
    splitSecondaryImage: "/van.jpg",
    href: "/house-extensions",
  },
  {
    title: "Loft Conversions",
    description: "Transform your loft space into beautiful, functional rooms",
    features: [
      "Dormer conversions",
      "Velux conversions",
      "Bespoke designs",
      "Planning support",
    ],
    image: "/Services/Loft..jpg",
    splitSecondaryImage: "/van.jpg",
    href: "/loft-conversions",
  },
  {
    title: "Garden Rooms",
    description:
      "Create the perfect outdoor living space with bespoke garden rooms",
    features: [
      "Home offices",
      "Garden studios",
      "Garden gyms",
      "Entertainment spaces",
    ],
    image: "/Services/garden room.webp",
    splitSecondaryImage: "/van.jpg",
    href: "/garden-rooms",
  },
  {
    title: "Kitchen Installation",
    description:
      "Professional kitchen design, supply, and installation services",
    features: [
      "Kitchen design",
      "Supply & fitting",
      "Bespoke kitchens",
      "Renovation services",
    ],
    image: "/Services/Kitchen installation..jpg",
    splitSecondaryImage: "/van.jpg",
    href: "/kitchen-installation",
  },
  {
    title: "Home Improvements",
    description: "Complete home improvement and renovation services",
    features: [
      "Complete renovations",
      "Structural work",
      "Interior upgrades",
      "Property maintenance",
    ],
    image: "/Services/home improv.jpg",
    splitSecondaryImage: "/van.jpg",
    href: "/home-improvements",
  },
  {
    title: "Door Fitting",
    description: "Professional internal and external door fitting services",
    features: [
      "Internal door fitting",
      "External door fitting",
      "Frame and hinge adjustments",
      "Locks and handles",
    ],
    image: "/door fitting.jpg",
    splitSecondaryImage: "/van.jpg",
    href: "/door-fitting",
  },
  {
    title: "Bathroom Fitting",
    description: "Complete bathroom fitting, upgrades, and refurbishment",
    features: [
      "Bathroom refurbishments",
      "Joinery and finishing",
      "Tiling and trims",
      "Fixture installation support",
    ],
    image: "/bath fitting.jpg",
    splitSecondaryImage: "/van.jpg",
    href: "/bathroom-fitting",
  },
];
