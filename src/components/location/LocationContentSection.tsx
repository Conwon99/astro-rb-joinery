type Section = {
  h2: string;
  paragraphs: string[];
};

type Props = {
  sections: Section[];
};

const LocationContentSection = ({ sections }: Props) => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        {sections.map((section) => (
          <div key={section.h2} className="mb-12 last:mb-0">
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900 md:text-3xl">{section.h2}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 text-lg leading-relaxed text-gray-700">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationContentSection;
