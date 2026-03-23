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
    splitSecondaryImage:
      "/gallery/imgi_52_541425463_122124483296932776_821082229721008959_n.jpg",
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
    splitSecondaryImage:
      "/gallery/imgi_6_513540452_122093898356932776_717539460719561833_n.jpg",
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
    splitSecondaryImage:
      "/gallery/imgi_70_531882235_122119545026932776_7092298327067455591_n.jpg",
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
    splitSecondaryImage:
      "/gallery/imgi_74_530512795_122119544852932776_6508393302475343238_n.jpg",
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
    splitSecondaryImage:
      "/gallery/imgi_42_540938429_122124484052932776_3952873525751063385_n.jpg",
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
    image: "/Services/home improv.jpg",
    splitSecondaryImage:
      "/gallery/imgi_84_527224925_122117141390932776_4700848699766695002_n.jpg",
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
    image: "/Services/Kitchen installation..jpg",
    splitSecondaryImage:
      "/gallery/imgi_103_516941672_122100986204932776_7040050199649825090_n.jpg",
    href: "/bathroom-fitting",
  },
];
