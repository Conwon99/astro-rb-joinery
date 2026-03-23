type Props = {
  heroH1: string;
  heroLead: string;
};

const LocationHero = ({ heroH1, heroLead }: Props) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="font-display mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">{heroH1}</h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700">{heroLead}</p>
      </div>
    </section>
  );
};

export default LocationHero;
