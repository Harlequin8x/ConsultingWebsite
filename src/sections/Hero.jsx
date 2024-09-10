const Hero = () => {
  const paragraphs = [
    "Wie regelst du deine Finanzen?",
    "Bist du sicher das du den besten Tarif für dich hast?",
    "Hast du eine transparente, marktübergreifende Analyse gemacht?",
    "Möchtest du im Jahr 300€ bis 2000 € mehr für dich haben?",
  ];

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-2 sm:max-w-sm"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Hero;