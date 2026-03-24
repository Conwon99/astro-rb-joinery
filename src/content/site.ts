/**
 * Central SEO and marketing copy for RB Joinery.
 * Edit here; components import these strings.
 */

import { CANONICAL_PHONE_DISPLAY_UK } from "@/constants/phone";

export type ContentSubsection = {
  h3: string;
  paragraphs: string[];
};

export type ContentSection = {
  h2: string;
  paragraphs: string[];
  subsections?: ContentSubsection[];
  /** Sam's-style bullet list (optional) */
  bullets?: string[];
  /** Two-up image row under copy (optional) */
  imageRow?: { src: string; alt: string }[];
};

export const homepageMeta = {
  title:
    "Joinery Ayrshire & Glasgow | RB Joinery — Building Services & Extensions",
  description: `Joinery services and building work across Ayrshire and Glasgow. House extensions, loft conversions, garden rooms, kitchens, and home improvements. Free quotes — call ${CANONICAL_PHONE_DISPLAY_UK}.`,
};

/** Homepage hero copy; `titleStyle="home"` renders trailing “Ayrshire & Glasgow” in green. */
export const homepageHero = {
  backgroundImage: "/RB joinery back2.jpg",
  heroH1: "Joinery & Building Services Ayrshire & Glasgow",
  heroLead:
    "Expert joinery and building specialists serving Ayrshire and Glasgow. Professional house extensions, loft conversions, garden rooms, kitchens, and home improvements.",
} as const;

/** Long-form homepage sections (→ ServicesGrid) */
export const homepageSections: ContentSection[] = [
  {
    h2: "House Extensions",
    paragraphs: [
      "Running out of space in Kilmarnock or the south side of Glasgow? A house extension can give you the extra bedroom or bigger kitchen without the stress of moving. We talk you through single-storey and two-storey options, plus what paperwork and building rules might apply in your area.",
      "We work with homeowners across Ayrshire — from Ayr and Troon to Irvine and Prestwick — and across Glasgow. You get clear plans, fair pricing, and builders who respect your home.",
    ],
    subsections: [
      {
        h3: "Structural Work",
        paragraphs: [
          "Steel work, openings, and load-bearing walls need care. We plan the work so your home stays safe while we add space.",
        ],
      },
    ],
  },
  {
    h2: "Loft Conversions",
    paragraphs: [
      "A loft conversion is often the cheapest way to add a bedroom or office in towns like Prestwick or Largs where roof space goes unused. We handle dormer and Velux-style jobs and help you decide what fits your roof and budget.",
    ],
    subsections: [
      {
        h3: "Renovations",
        paragraphs: [
          "If your loft project is part of a wider fix-up, we can line up joinery with other room upgrades so the finish matches.",
        ],
      },
    ],
  },
  {
    h2: "Garden Rooms",
    paragraphs: [
      "Garden rooms are popular for home offices and gyms in Ayrshire and Glasgow — especially after more people work from home. We build insulated, usable spaces that sit outside your main house without losing quality.",
    ],
  },
  {
    h2: "Kitchen Installation",
    paragraphs: [
      "New kitchen units need level floors, true walls, and neat cuts around pipes and cables. Our kitchen installation covers design help, supply where needed, and fitting that looks right in the long run.",
    ],
    subsections: [
      {
        h3: "Fitted Furniture",
        paragraphs: [
          "Built-in cupboards and units use the same eye for detail: tight joints, smooth runners, and handles that line up.",
        ],
      },
    ],
  },
  {
    h2: "Home Improvements",
    paragraphs: [
      "Not every job needs a full extension. Sometimes you need new doors, a staircase fix, or repairs after damp or wear. We take on smaller home improvements and joinery repairs across Ayrshire and Glasgow.",
    ],
    subsections: [
      {
        h3: "Maintenance and Repairs",
        paragraphs: [
          "Rotten sills, loose doors, and creaky stairs are easy to put off. Fixing them early saves money and keeps your home safe.",
        ],
      },
    ],
  },
  {
    h2: "Joinery Services",
    paragraphs: [
      "Day-to-day joinery covers skirting, architrave, boxing, and finishing work. If it is wood in your home, we can usually help or point you in the right direction.",
    ],
    subsections: [
      {
        h3: "Carpentry",
        paragraphs: [
          "Rough and finish carpentry for projects big and small — from framing to final trims.",
        ],
      },
      {
        h3: "Staircases",
        paragraphs: [
          "Repairs, new treads, handrails, and spindles — we keep stairs safe and solid.",
        ],
      },
      {
        h3: "Doors and Windows",
        paragraphs: [
          "Hanging doors, easing sticky frames, and fitting timber windows where repair matters more than a quick fix.",
        ],
      },
      {
        h3: "Custom Built-ins",
        paragraphs: [
          "Alcove cupboards, shelving, and media walls built to match your room.",
        ],
      },
    ],
  },
  {
    h2: "Building Services",
    paragraphs: [
      "Larger jobs tie together structure, insulation, and joinery. Our building services work alongside your plans and local rules so the shell and the finish both hold up.",
    ],
    subsections: [
      {
        h3: "Commercial Joinery",
        paragraphs: [
          "Shops, offices, and small commercial sites in Ayrshire and Glasgow — we fit doors, screens, and timber work to match your brand and schedule.",
        ],
      },
    ],
  },
  {
    h2: "Bespoke Joinery",
    paragraphs: [
      "Off-the-shelf does not fit every corner. Bespoke joinery means pieces cut and built for your space — odd angles, period details, or a specific look you cannot buy in a catalogue.",
    ],
    subsections: [
      {
        h3: "Interior Design",
        paragraphs: [
          "We work with your ideas and your designer’s drawings. Our job is to make the timber side work in real life.",
        ],
      },
    ],
  },
];

export const aboutUs = {
  title: "ABOUT US",
  paragraphs: [
    "RB Joinery is a local team across Ayrshire and Glasgow — we answer the phone, turn up, and take pride in the woodwork. From the Ayrshire coast to the city and suburbs, we offer honest quotes, tidy sites, and work built to live with every day.",
  ],
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What services does RB Joinery provide?",
    answer:
      "We offer joinery and building services across Ayrshire and Glasgow: house extensions, loft conversions, garden rooms, kitchen installation, and home improvements. We also handle carpentry, bespoke joinery, stairs, doors, fitted furniture, and building work for homes and small commercial sites.",
  },
  {
    question: "What areas do you cover?",
    answer:
      `We work in Ayrshire — including Ayr, Kilmarnock, Irvine, Troon, Prestwick, Ardrossan, Saltcoats, Largs, and Girvan — and across Glasgow. Message us with your postcode or call ${CANONICAL_PHONE_DISPLAY_UK} to check your area.`,
  },
  {
    question: "Do you offer house extensions?",
    answer:
      "Yes. We build single-storey and two-storey house extensions, help with planning questions where you need it, and carry the build through to the finishing trades. Work follows building rules that apply in your council area.",
  },
  {
    question: "What building services do you offer?",
    answer:
      "Our building services cover extensions, loft conversions, garden rooms, kitchens, and general home improvements. We work on residential jobs and selected commercial joinery work, with quality and safety in mind.",
  },
  {
    question: "Do you provide loft conversions?",
    answer:
      "Yes. We build dormer and Velux-style loft conversions and turn unused roof space into bedrooms, offices, or playrooms. We help you see what fits your roof and budget before work starts.",
  },
  {
    question: "Do you build garden rooms?",
    answer:
      "Yes. We build garden rooms for offices, gyms, studios, and family spaces — insulated and ready to use. We can match materials and style to your garden and home.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Small jobs may take a few days. Extensions and loft conversions often run several weeks or more depending on size and weather. We give you a realistic timescale at quote stage and keep you posted as work moves on.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      `Yes. Quotes are free and no obligation. Call ${CANONICAL_PHONE_DISPLAY_UK}, email ryan@rbjoinery.com, or use the contact form. We explain what is included so you are not hit with hidden costs later.`,
  },
];

export const serviceFaqIntroBySlug: Record<string, string> = {
  "house-extensions":
    "Common questions about house extensions in Ayrshire and Glasgow, including planning, timings, and build process.",
  "loft-conversions":
    "Common questions about loft conversions in Ayrshire and Glasgow, including dormer/Velux options, rules, and costs.",
  "garden-rooms":
    "Common questions about garden room builds in Ayrshire and Glasgow, including insulation, power, and planning.",
  "kitchen-installation":
    "Common questions about kitchen fitting and installation in Ayrshire and Glasgow, including layout, fitting stages, and timescales.",
  "home-improvements":
    "Common questions about home improvements and joinery upgrades in Ayrshire and Glasgow.",
  "door-fitting":
    "Common questions about internal and external door fitting in Ayrshire and Glasgow, including repairs and replacements.",
  "bathroom-fitting":
    "Common questions about bathroom fitting and refurbishment in Ayrshire and Glasgow.",
};

export const serviceFaqBySlug: Record<string, FaqItem[]> = {
  "house-extensions": [
    {
      question: "Do I need planning permission for a house extension?",
      answer:
        "Some extensions need planning permission while others may be covered by permitted development. It depends on your property, size, and location. We help you understand what applies before work starts.",
    },
    {
      question: "How long does a typical house extension take?",
      answer:
        "Timescales vary by size and complexity, but most extensions run over several weeks to a few months. Weather, structural work, and approvals can affect programme length.",
    },
    {
      question: "Can you manage the build from structure to finish?",
      answer:
        "Yes. We coordinate the key stages from structural shell and joinery through finishing details so the project stays organised and consistent.",
    },
  ],
  "loft-conversions": [
    {
      question: "Is my loft suitable for conversion?",
      answer:
        "Suitability depends on head height, roof structure, and access for stairs. We assess these early and advise what conversion type is realistic for your home.",
    },
    {
      question: "What is the difference between dormer and Velux loft conversions?",
      answer:
        "Dormer conversions add usable floor area and headroom, while Velux conversions keep the roofline and are often simpler where existing height is sufficient.",
    },
    {
      question: "Do loft conversions need building standards approval?",
      answer:
        "Yes, loft conversions must meet relevant building standards for structure, insulation, and fire safety. We build with compliance in mind.",
    },
  ],
  "garden-rooms": [
    {
      question: "Are garden rooms usable all year?",
      answer:
        "Yes, when properly insulated and detailed. We build garden rooms for year-round comfort, not just summer use.",
    },
    {
      question: "Can you add electrics and data points in a garden room?",
      answer:
        "Yes. We plan practical layouts for lighting, sockets, and data requirements as part of the overall project setup.",
    },
    {
      question: "Do garden rooms require planning permission?",
      answer:
        "Some do and some do not, depending on size, height, and placement. We help you check local requirements before installation.",
    },
  ],
  "kitchen-installation": [
    {
      question: "Do you fit kitchens supplied by Howdens, Wickes, or other retailers?",
      answer:
        "Yes. We can fit supplied kitchens and coordinate the fitting stages so units, worktops, and finishing details are installed cleanly.",
    },
    {
      question: "How long does kitchen installation usually take?",
      answer:
        "Most kitchen fits run from several days to a couple of weeks depending on prep work, layout changes, and additional trades.",
    },
    {
      question: "Can you handle kitchen renovations as well as fitting?",
      answer:
        "Yes. We support renovation work alongside installation where walls, floors, and joinery need updating before final fit-out.",
    },
  ],
  "home-improvements": [
    {
      question: "What types of home improvements do you take on?",
      answer:
        "We handle practical upgrades including joinery repairs, interior improvements, structural alterations, and general refurbishment work.",
    },
    {
      question: "Can you combine several smaller jobs into one project?",
      answer:
        "Yes. Grouping related improvements often saves time and helps keep finishes consistent across the home.",
    },
    {
      question: "Do you provide free quotes for home improvement work?",
      answer:
        "Yes. We provide free, no-obligation quotes and explain scope clearly before work is booked.",
    },
  ],
  "door-fitting": [
    {
      question: "Do you fit both internal and external doors?",
      answer:
        "Yes. We fit and adjust internal and external doors, including alignment, hardware fitting, and finish details.",
    },
    {
      question: "Can you fix doors that stick, drop, or do not close properly?",
      answer:
        "Yes. Many issues can be resolved with proper adjustment and re-fitting rather than full replacement.",
    },
    {
      question: "Do you install locks, handles, and hinges as part of door fitting?",
      answer:
        "Yes. We fit and align hinges, latches, locks, and handles so doors operate smoothly and securely.",
    },
  ],
  "bathroom-fitting": [
    {
      question: "Do you do full bathroom refurbishments or only fitting?",
      answer:
        "We can do both. From fixture fitting to full bathroom refurbishments, we focus on practical layout and a high-quality finish.",
    },
    {
      question: "Can you fit bathroom furniture and storage neatly around pipework?",
      answer:
        "Yes. We include joinery and finishing details such as boxing, trims, and storage solutions for a clean final look.",
    },
    {
      question: "How disruptive is a bathroom fitting project?",
      answer:
        "Bathroom work is staged to reduce disruption where possible. We keep work areas tidy and communicate timings throughout.",
    },
  ],
};

export type ServicePageDarkChecklistSection = {
  heading: string;
  paragraphs: string[];
  bullets: string[];
  primaryImage?: string;
  primaryImageAlt?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
};

export type ServicePageContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroH1: string;
  heroLead: string;
  /** First block below hero: image left, copy + CTA right */
  splitIntro: {
    heading: string;
    body: string;
  };
  /** Dark band: copy + blue checklist left, overlapping images right (below split intro) */
  darkChecklistSection?: ServicePageDarkChecklistSection;
  sections: ContentSection[];
};

/** Services index (/services) hub */
export const servicesHub = {
  metaTitle:
    "Joinery Services Ayrshire & Glasgow | Extensions, Lofts & Kitchens | RB Joinery",
  metaDescription:
    "Joinery services across Ayrshire and Glasgow: house extensions, loft conversions, garden rooms, kitchen installation, door fitting, bathroom fitting, and home improvements. RB Joinery — free quotes.",
  h1: "Joinery Services in Ayrshire & Glasgow",
  lead:
    "Whether you need a new kitchen, loft conversion, full house extension, door fitting, or bathroom fitting, we bring joinery and building skills to homes across Ayrshire and Glasgow. Pick a service below to read more, or get in touch for a free quote.",
};

/** Dark band on service pages: overlapping images left, “why us” copy right */
export const servicePageWhyChoose = {
  heading: "Why choose RB Joinery?",
  paragraphs: [
    "RB Joinery started from a simple idea: people in Ayrshire and Glasgow deserve tradespeople who answer the phone, turn up, and take pride in the woodwork. We are not a faceless company — we are a local team that lives and works in the same weather and the same housing stock as you.",
    "Whether you need joinery services for a flat in Glasgow, a loft conversion in Ayr, or a garden room in Saltcoats, we treat your home like our own. That means honest quotes, tidy sites, and work that passes the test when you live with it every day.",
  ],
} as const;

export const servicePages: Record<string, ServicePageContent> = {
  "house-extensions": {
    slug: "house-extensions",
    metaTitle:
      "House Extensions Ayrshire & Glasgow | Single & Two Storey | RB Joinery",
    metaDescription:
      "House extensions in Ayrshire and Glasgow. Single-storey and two-storey builds, planning help, and quality construction. Free quotes — RB Joinery.",
    heroH1: "House Extensions in Ayrshire & Glasgow",
    heroLead:
      "Need more space without moving? We build house extensions that fit your home and your budget — from Ayrshire towns to Glasgow suburbs.",
    splitIntro: {
      heading: "Why homeowners choose a house extension",
      body: "Families across Ayrshire and Glasgow often outgrow their kitchens or need an extra bedroom without the cost and stress of moving. A well-planned extension adds space where you already live. We talk you through options, local building rules, and details that stand up to west-coast weather — not just what looks good in a brochure.",
    },
    darkChecklistSection: {
      heading: "Signs an extension could be the right move",
      paragraphs: [
        "If you are not sure whether to extend or move, a few practical signs usually point the way. A cramped kitchen, no room for a proper desk, or a growing family often mean you need more space — and extending can cost less than buying bigger when you factor in fees and disruption.",
        "Spotting the need early helps you plan budgets, talk to your council about rules, and avoid rushed decisions. We visit across Ayrshire and Glasgow to help you see what is realistic on your plot before you spend on drawings.",
      ],
      bullets: [
        "You need more living space but want to stay in the same area or school catchment.",
        "Your kitchen, dining, or utility layout no longer works for daily family life.",
        "You would rather invest in your current home than pay stamp duty, fees, and moving stress.",
      ],
    },
    sections: [
      {
        h2: "Single Storey Extensions",
        paragraphs: [
          "A single-storey extension usually runs along the back or side of your house. It is common for bigger kitchens, utility rooms, or open-plan living. We work with your ideas and any drawings you already have.",
          "In coastal towns like Troon and Prestwick, wind and rain can affect how we detail roofs and flashing. We build for local weather, not just what looks good in a brochure.",
        ],
      },
      {
        h2: "Two Storey Extensions",
        paragraphs: [
          "A two-storey extension adds space upstairs and downstairs in one go. It can cost more than a single-storey build but saves repeating groundwork and scaffolding later.",
        ],
        subsections: [
          {
            h3: "Structural Work",
            paragraphs: [
              "We work with engineers when you need steel beams or new foundations. Your home stays supported while we open walls and add loads safely.",
            ],
          },
        ],
      },
      {
        h2: "Planning Permission and Building Rules",
        paragraphs: [
          "Some projects need planning permission; others sit under permitted development rules. Rules vary by council area in Ayrshire and Glasgow. We help you understand what applies to your plot before we cut a single timber.",
          "Building standards cover fire safety, insulation, and structure. We build so your project can pass inspection and keep your insurance valid.",
        ],
      },
      {
        h2: "Building Services",
        paragraphs: [
          "An extension ties together groundwork, brick or block work, roof, joinery, and sometimes electrics and plumbing. Our building services keep those trades lined up so you are not left with gaps between stages.",
        ],
      },
      {
        h2: "Joinery Services",
        paragraphs: [
          "Inside the new shell, joinery makes the room feel finished: skirting, doors, architrave, and fitted cupboards. We match new work to the rest of your home where you want a seamless look.",
        ],
        subsections: [
          {
            h3: "Doors and Windows",
            paragraphs: [
              "New openings need the right frames and lintels. We fit timber and composite doors and windows that suit your home.",
            ],
          },
        ],
      },
      {
        h2: "How to Get Started",
        paragraphs: [
          "Tell us what you need — rough size, what you want the room for, and your postcode. We visit when it suits you, give a free quote, and explain what happens next.",
          'If you are comparing builders, read our reviews and ask for examples of past work. See also our <a href="/services" class="text-green-600 hover:underline">full list of services</a> or <a href="/contact" class="text-green-600 hover:underline">contact us</a> for a chat.',
        ],
      },
    ],
  },
  "loft-conversions": {
    slug: "loft-conversions",
    metaTitle:
      "Loft Conversions Ayrshire & Glasgow | Dormer & Velux | RB Joinery",
    metaDescription:
      "Loft conversions in Ayrshire and Glasgow. Dormer and Velux conversions, extra bedrooms and offices. Expert joinery. Free quotes.",
    heroH1: "Loft Conversions in Ayrshire & Glasgow",
    heroLead:
      "Turn empty loft space into a real room. We convert lofts across Ayrshire and Glasgow with clear advice and solid joinery.",
    splitIntro: {
      heading: "Is a loft conversion right for your home?",
      body: "If your roof space is high enough and the structure can take the load, a loft conversion is often cheaper than a ground-floor extension. We work in Ayr, Prestwick, Glasgow, and nearby — measuring head height, advising on dormer versus Velux layouts, and keeping stairs, fire routes, and insulation right for building standards.",
    },
    darkChecklistSection: {
      heading: "Signs a loft conversion could suit your home",
      paragraphs: [
        "If your roof space is high enough and the floor can take the load, a loft conversion is often cheaper than an extension on the ground. People in Ayr, Prestwick, and Glasgow use lofts for bedrooms, bathrooms, and quiet offices.",
        "If you are not sure, ask around for who does loft conversions near you — we work locally, measure head height, and tell you straight what type of conversion fits before you spend on drawings.",
      ],
      bullets: [
        "You need an extra bedroom, bathroom, or office but do not want to lose garden space.",
        "Your loft has usable head height or could gain it with a dormer without overpowering the street.",
        "You want to add value and living space without the cost and hassle of moving house.",
      ],
    },
    sections: [
      {
        h2: "Dormer Loft Conversions",
        paragraphs: [
          "A dormer adds headroom and floor space by projecting from the roof. It suits many semi-detached and detached homes in Ayrshire and Glasgow. We handle the roof build, insulation, and joinery inside.",
        ],
        subsections: [
          {
            h3: "Structural Work",
            paragraphs: [
              "Floor joists and steel may be needed to spread weight. We plan with your engineer’s drawings so the loft is safe and sound.",
            ],
          },
        ],
      },
      {
        h2: "Velux Loft Conversions",
        paragraphs: [
          "Velux-style roof windows cost less than full dormers when you already have enough height. They are popular for light rooms and home offices where you do not need full standing space across the whole floor.",
        ],
      },
      {
        h2: "Joinery Services",
        paragraphs: [
          "Stairs, hatches, and handrails must feel safe every day. We fit joinery that meets building rules and feels solid underfoot.",
        ],
        subsections: [
          {
            h3: "Staircases",
            paragraphs: [
              "New stairs to the loft need the right pitch and headroom. We build or adapt stairs so they pass inspection and feel natural to use.",
            ],
          },
        ],
      },
      {
        h2: "Planning and Building Rules",
        paragraphs: [
          "Some loft jobs need planning; others do not. We help you check rules for your street and council. Fire escape routes and insulation matter for sign-off.",
        ],
      },
      {
        h2: "Home Improvements",
        paragraphs: [
          "Many clients refresh the landing below while the loft is open. We can line up joinery and paint so the whole upstairs feels new.",
        ],
      },
      {
        h2: "Get a Quote",
        paragraphs: [
          `Call ${CANONICAL_PHONE_DISPLAY_UK} or use our <a href=\"/contact\" class=\"text-green-600 hover:underline\">contact form</a>. We also build <a href=\"/house-extensions\" class=\"text-green-600 hover:underline\">house extensions</a> if you need ground-floor space instead.`,
        ],
      },
    ],
  },
  "garden-rooms": {
    slug: "garden-rooms",
    metaTitle:
      "Garden Rooms Ayrshire & Glasgow | Offices & Studios | RB Joinery",
    metaDescription:
      "Garden rooms built in Ayrshire and Glasgow. Home offices, gyms, studios. Insulated, bespoke outdoor rooms. Free quotes — RB Joinery.",
    heroH1: "Garden Rooms in Ayrshire & Glasgow",
    heroLead:
      "Work from home or train in peace without losing a spare bedroom. We build garden rooms that fit your plot and your budget.",
    splitIntro: {
      heading: "Garden rooms built for real life in Ayrshire and Glasgow",
      body: "A garden room gives you a separate space from the main house — ideal for noisy hobbies, video calls, or a home gym. We insulate and detail roofs and bases properly for Scottish weather, and we can plan power, data, and built-in storage so the room feels finished, not like a shed bolted on at the bottom of the garden.",
    },
    darkChecklistSection: {
      heading: "Why a garden room might be the answer",
      paragraphs: [
        "A garden room gives you a separate space from the main house — great for noisy hobbies, video calls, or a home gym. In Ayrshire and Glasgow, weather and light change with the seasons, so we insulate and detail roofs and bases properly.",
        "Planning early for power, heating, and how you will use the room saves rework later. We help you think through size, position, and finishes before we cut timber.",
      ],
      bullets: [
        "You need a dedicated office or studio without giving up a bedroom indoors.",
        "You want a gym or hobby space that keeps noise and clutter out of the main house.",
        "You have enough garden space for a modest footprint and sensible distance from boundaries.",
      ],
    },
    sections: [
      {
        h2: "Home Offices and Studios",
        paragraphs: [
          "Many clients in Irvine, Troon, and Glasgow want a quiet office with power and data. We can work with your electrician to plan where sockets and lights go before we finish the timber.",
        ],
        subsections: [
          {
            h3: "Custom Built-ins",
            paragraphs: [
              "Desks, shelving, and storage units can be built in so you use every inch of a small footprint.",
            ],
          },
        ],
      },
      {
        h2: "Garden Gyms and Family Spaces",
        paragraphs: [
          "Floors need to take weight if you use heavy equipment. We discuss use up front so the base and frame match your plans.",
        ],
      },
      {
        h2: "Building Services",
        paragraphs: [
          "From base to roof, we handle the shell and the joinery. You get one team that knows how the building fits together.",
        ],
      },
      {
        h2: "Joinery Services",
        paragraphs: [
          "Inside, we line walls and ceilings, fit doors and trims, and leave you a room that feels finished — not a garden shed.",
        ],
        subsections: [
          {
            h3: "Doors and Windows",
            paragraphs: [
              "Choose secure doors and glazing that suit how you use the space year-round.",
            ],
          },
        ],
      },
      {
        h2: "Planning and Neighbours",
        paragraphs: [
          "Height, distance to boundaries, and use can affect whether you need planning permission. We help you check local rules in Ayrshire and Glasgow before you commit.",
        ],
      },
      {
        h2: "Contact Us",
        paragraphs: [
          "Tell us the size of your garden and what you want the room for. <a href=\"/contact\" class=\"text-green-600 hover:underline\">Get a free quote</a> or browse <a href=\"/services\" class=\"text-green-600 hover:underline\">all services</a>.",
        ],
      },
    ],
  },
  "kitchen-installation": {
    slug: "kitchen-installation",
    metaTitle:
      "Kitchen Installation Ayrshire & Glasgow | Supply & Fit | RB Joinery",
    metaDescription:
      "Kitchen installation in Ayrshire and Glasgow. Design, supply, and fitting. Bespoke joinery and quality finishes. Free quotes.",
    heroH1: "Kitchen Installation in Ayrshire & Glasgow",
    heroLead:
      "New kitchens need level units, true walls, and neat finishing. We install kitchens across Ayrshire and Glasgow with care and skill.",
    splitIntro: {
      heading: "Kitchen installation you can live with every day",
      body: "A kitchen is the busiest room in the house — poor fitting shows up fast in gaps, uneven doors, and leaks. We measure carefully, fit units square to true walls, and finish trims, worktops, and boxing so the room looks intentional. Whether we help with design and supply or fit your own order, you get a kitchen that works for cooking, storage, and family life.",
    },
    darkChecklistSection: {
      heading: "Signs it is time for a new kitchen fit",
      paragraphs: [
        "A kitchen is the busiest room in the house. Bad fitting shows up fast: gaps, uneven doors, and leaks. We measure twice, fit once, and leave you with a kitchen you can use every day without worry.",
        "Whether you are replacing everything or upgrading in stages, getting the carcasses, levels, and services right first makes every later decision easier — and safer for years of daily use.",
      ],
      bullets: [
        "Units no longer sit square, doors stick, or worktops have visible gaps and movement.",
        "You are changing layout, moving a boiler, or boxing services and need proper carpentry.",
        "You have new units on order and want a fitter who respects timelines and finishes trims neatly.",
      ],
    },
    sections: [
      {
        h2: "Design and Supply",
        paragraphs: [
          "We can help you choose layouts and units that fit your space and budget. If you already have a kitchen on order, we can fit what you supply.",
        ],
        subsections: [
          {
            h3: "Fitted Furniture",
            paragraphs: [
              "Tall units, corner units, and built-in ovens need solid fixing to walls and floors. We make sure the carcasses sit square and true.",
            ],
          },
        ],
      },
      {
        h2: "Joinery Services",
        paragraphs: [
          "Worktops, upstands, trims, and end panels tie the room together. Our joinery finishes the details that show when you open a cupboard door.",
        ],
        subsections: [
          {
            h3: "Carpentry",
            paragraphs: [
              "Altering walls or boxing in pipes is part of many kitchen jobs. We handle carpentry so the room looks planned, not patched.",
            ],
          },
        ],
      },
      {
        h2: "Renovations",
        paragraphs: [
          "If you are not starting from scratch, we can refresh doors, handles, and panels while keeping costs down. Tell us what you want to change.",
        ],
      },
      {
        h2: "Home Improvements",
        paragraphs: [
          "Kitchens often sit next to utility rooms or dining areas. We can align floors and architraves so the whole space feels connected.",
        ],
      },
      {
        h2: "Local Work",
        paragraphs: [
          "We fit kitchens in Ayr, Kilmarnock, Glasgow, and surrounding towns. Damp air near the coast can affect timber — we use materials and finishes that suit the climate.",
        ],
      },
      {
        h2: "Book a Visit",
        paragraphs: [
          "Send photos or invite us round. <a href=\"/contact\" class=\"text-green-600 hover:underline\">Contact RB Joinery</a> for a free quote on kitchen installation.",
        ],
      },
    ],
  },
  "home-improvements": {
    slug: "home-improvements",
    metaTitle:
      "Home Improvements Ayrshire & Glasgow | Renovations & Repairs | RB Joinery",
    metaDescription:
      "Home improvements in Ayrshire and Glasgow. Renovations, repairs, joinery, and building work. Free quotes — RB Joinery.",
    heroH1: "Home Improvements in Ayrshire & Glasgow",
    heroLead:
      "From small repairs to full room makeovers, we improve homes across Ayrshire and Glasgow with honest advice and fair prices.",
    splitIntro: {
      heading: "Home improvements and joinery, big or small",
      body: "Not every job needs a full extension. Sometimes you need new doors, a safer staircase, or repairs after years of wear. We take on joinery-led improvements across Ayrshire and Glasgow — from maintenance that stops rot and draughts to staged renovations so you can stay living at home while work progresses.",
    },
    darkChecklistSection: {
      heading: "When to call us for home improvements",
      paragraphs: [
        "Not every job needs a full extension. Sometimes you need new doors, a safer staircase, or repairs after years of wear. We take on home improvements that make daily life easier.",
        "Sorting small problems early usually costs less than waiting until water ingress, loose stairs, or draughty windows turn into bigger building work.",
      ],
      bullets: [
        "Doors stick, floors creak, or window sills show rot and need proper joinery repair.",
        "You are refreshing a room and want architraves, skirting, and boxing done to a high standard.",
        "You need staged work so you can stay living at home while we improve one area at a time.",
      ],
    },
    sections: [
      {
        h2: "Renovations",
        paragraphs: [
          "Renovations can mean one room or a whole floor. We plan work in stages so you can still live at home where possible.",
        ],
        subsections: [
          {
            h3: "Structural Work",
            paragraphs: [
              "We work with engineers when you remove walls or open spaces. Safety comes first.",
            ],
          },
        ],
      },
      {
        h2: "Maintenance and Repairs",
        paragraphs: [
          "Rotten window sills, loose doors, and creaky floors do not fix themselves. Early repairs save money and stop damage spreading.",
        ],
      },
      {
        h2: "Joinery Services",
        paragraphs: [
          "Skirting, architrave, boxing, and trims — the small jobs that make a room feel finished.",
        ],
        subsections: [
          {
            h3: "Doors and Windows",
            paragraphs: [
              "We hang, plane, and repair timber doors and windows. Draughts and sticking often come from simple fixes.",
            ],
          },
          {
            h3: "Staircases",
            paragraphs: [
              "Loose rails and worn treads are a trip risk. We repair and replace parts to match your existing stairs.",
            ],
          },
        ],
      },
      {
        h2: "Building Services",
        paragraphs: [
          "When a job touches more than wood — plaster, blockwork, or roofline — we coordinate the work so you are not chasing several trades.",
        ],
      },
      {
        h2: "Bespoke Joinery",
        paragraphs: [
          "Alcove cupboards, shelving, and media walls built for your room. Bespoke joinery uses space that off-the-shelf products waste.",
        ],
        subsections: [
          {
            h3: "Custom Built-ins",
            paragraphs: [
              "We measure your space and build units that fit awkward corners and angles.",
            ],
          },
        ],
      },
      {
        h2: "Areas We Cover",
        paragraphs: [
          "We work in Ayrshire towns from Girvan to Largs and across Glasgow. <a href=\"/contact\" class=\"text-green-600 hover:underline\">Get in touch</a> for a free quote on your home improvements.",
        ],
      },
    ],
  },
  "door-fitting": {
    slug: "door-fitting",
    metaTitle:
      "Door Fitting Ayrshire & Glasgow | Internal & External Doors | RB Joinery",
    metaDescription:
      "Door fitting in Ayrshire and Glasgow. Internal and external door fitting, frame adjustments, locks, and finishing. Free quotes — RB Joinery.",
    heroH1: "Door Fitting in Ayrshire & Glasgow",
    heroLead:
      "Need a new door fitted properly? We fit internal and external doors across Ayrshire and Glasgow with clean, accurate joinery.",
    splitIntro: {
      heading: "Door fitting done right first time",
      body: "A good door should close cleanly, seal properly, and look square in the frame. We fit and adjust doors in older homes and newer builds across Ayrshire and Glasgow, including frame prep, ironmongery, and finishing details.",
    },
    darkChecklistSection: {
      heading: "When to book professional door fitting",
      paragraphs: [
        "If a door sticks, drops, or leaves gaps, it usually needs more than a quick plane. Proper fitting protects warmth, security, and the finish of your room.",
        "We fit everything from standard internal doors to fire-rated and external doors, making sure hinges, latches, and handles line up and work smoothly.",
      ],
      bullets: [
        "Your current doors catch, rattle, or let in draughts.",
        "You are upgrading to new internal doors and want a clean, consistent finish.",
        "You need external doors fitted securely with reliable locks and seals.",
      ],
    },
    sections: [
      {
        h2: "Internal Door Fitting",
        paragraphs: [
          "We fit internal doors to suit your existing frames and floor levels, including trimming, hinge setting, and latch alignment.",
        ],
      },
      {
        h2: "External Door Installation",
        paragraphs: [
          "External doors need accurate fitting for weather sealing and security. We install and adjust frames, thresholds, and seals for a tight finish.",
        ],
      },
      {
        h2: "Repairs and Adjustments",
        paragraphs: [
          "Dropped hinges, swollen timber, and poor alignment can often be fixed without replacing the whole setup.",
        ],
      },
      {
        h2: "Hardware and Finishing",
        paragraphs: [
          "Handles, locks, latches, and closers are fitted neatly so the door works smoothly and looks right.",
        ],
      },
      {
        h2: "Book a Free Quote",
        paragraphs: [
          'Need a quote for door fitting? <a href="/contact" class="text-green-600 hover:underline">Contact RB Joinery</a> and we will arrange a visit.',
        ],
      },
    ],
  },
  "bathroom-fitting": {
    slug: "bathroom-fitting",
    metaTitle:
      "Bathroom Fitting Ayrshire & Glasgow | Bathroom Refurbishments | RB Joinery",
    metaDescription:
      "Bathroom fitting in Ayrshire and Glasgow. Bathroom refurbishments, fixture installation, joinery finishing, and upgrades. Free quotes — RB Joinery.",
    heroH1: "Bathroom Fitting in Ayrshire & Glasgow",
    heroLead:
      "Planning a bathroom upgrade? We deliver practical, tidy bathroom fitting across Ayrshire and Glasgow with quality finishing throughout.",
    splitIntro: {
      heading: "Bathroom fitting for everyday use",
      body: "Bathrooms need smart layout, durable materials, and careful finishing in tight spaces. We help homeowners across Ayrshire and Glasgow upgrade bathrooms with coordinated fitting and joinery detail that lasts.",
    },
    darkChecklistSection: {
      heading: "Signs it is time to upgrade your bathroom",
      paragraphs: [
        "A dated or poorly laid out bathroom affects day-to-day comfort and can lead to recurring maintenance issues.",
        "We help you plan practical upgrades and carry out fitting work to improve function, storage, and finish quality.",
      ],
      bullets: [
        "Your current bathroom layout no longer works for your household.",
        "You want a full refresh with modern fittings and durable finishes.",
        "You need reliable fitting and neat joinery details around fixtures and storage.",
      ],
    },
    sections: [
      {
        h2: "Bathroom Refurbishments",
        paragraphs: [
          "From full strip-outs to targeted upgrades, we fit bathrooms that are practical to use and easy to maintain.",
        ],
      },
      {
        h2: "Fixture and Furniture Fitting",
        paragraphs: [
          "We fit baths, basins, WC units, vanity furniture, and accessories with accurate alignment and clean detailing.",
        ],
      },
      {
        h2: "Joinery and Finishing",
        paragraphs: [
          "Boxing, trims, paneling, and storage joinery make the room feel complete and hide awkward pipe runs neatly.",
        ],
      },
      {
        h2: "Planned, Tidy Installation",
        paragraphs: [
          "Bathroom projects can disrupt routines, so we plan stages clearly and keep work areas tidy throughout the job.",
        ],
      },
      {
        h2: "Get a Bathroom Fitting Quote",
        paragraphs: [
          'Thinking about a bathroom upgrade? <a href="/contact" class="text-green-600 hover:underline">Contact RB Joinery</a> for a free quote.',
        ],
      },
    ],
  },
};
