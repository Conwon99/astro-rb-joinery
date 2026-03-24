type Props = {
  heroH1: string;
  heroLead: string;
};

function splitLocationHeading(heroH1: string): { line1: string; location: string | null } {
  const m = heroH1.match(/^(.+?)\s+in\s+(.+)$/i);
  if (!m) return { line1: heroH1, location: null };
  return { line1: m[1].trim(), location: m[2].trim() };
}

const LocationHero = ({ heroH1, heroLead }: Props) => {
  const { line1, location } = splitLocationHeading(heroH1);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="font-display mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
          <span>{line1}</span>
          {location ? (
            <>
              {" "}
              <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
                {location}
              </span>
            </>
          ) : null}
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700">{heroLead}</p>
      </div>
    </section>
  );
};

export default LocationHero;
