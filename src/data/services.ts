export type Service = {
  title: string;
  description: string;
  features: string[];
  image: string;
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
    href: "/home-improvements",
  },
];
