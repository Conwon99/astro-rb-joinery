type Props = {
  text: string;
};

const LocationServiceIntro = ({ text }: Props) => {
  return (
    <section className="border-b border-gray-100 bg-white px-4 py-10">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-lg leading-relaxed text-gray-700">{text}</p>
      </div>
    </section>
  );
};

export default LocationServiceIntro;
