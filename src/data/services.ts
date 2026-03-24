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
    image: "/Services/House%20extension..webp",
    splitSecondaryImage:
      "/gallery/imgi_52_541425463_122124483296932776_821082229721008959_n.webp",
    href: "/house-extensions/",
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
    image: "/Services/Loft..webp",
    splitSecondaryImage:
      "/gallery/imgi_6_513540452_122093898356932776_717539460719561833_n.webp",
    href: "/loft-conversions/",
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
    image: "/Services/garden%20room.webp",
    splitSecondaryImage:
      "/gallery/imgi_70_531882235_122119545026932776_7092298327067455591_n.webp",
    href: "/garden-rooms/",
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
    image: "/imgs/kitchen-fit1.webp",
    splitSecondaryImage: "/imgs/kitchen-fit1.webp",
    href: "/kitchen-installation/",
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
    image: "/Services/home%20improv.webp",
    splitSecondaryImage: "/gallery/imgi_84_527224925_122117141390932776_4700848699766695002_n.webp",
    href: "/home-improvements/",
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
    image: "/imgs/door-fitting.webp",
    splitSecondaryImage: "/imgs/door-fitting.webp",
    href: "/door-fitting/",
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
    image: "/imgs/bath-fitting.webp",
    splitSecondaryImage: "/imgs/bath-fitting.webp",
    href: "/bathroom-fitting/",
  },
];
