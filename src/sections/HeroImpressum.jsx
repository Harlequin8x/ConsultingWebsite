const HeroImpressum = () => {
  return (
    <section
      id="impressum" // Die ID, auf die der Link verweist
      className="w-full flex flex-col justify-start items-start min-h-screen p-10 bg-gray-100"
    >
      <h1 className="text-4xl font-bold mb-6">Impressum</h1>

      <p className="mb-6">
        Ronney Bawa<br />
        Dienstleister<br />
        Birkenweg 51 <br />        
        30827 Garbsen
      </p>

      <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
      <p className="mb-6">
        Telefon: +49 (0) 173 2768952<br />
        E-Mail: <a href="mailto:R.Bawa@mitNorm.com" className="text-blue-500 hover:underline">R.Bawa@mitNorm.com</a>
      </p>

      <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
      <p className="mb-6">
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        Folgt
      </p>

      <h2 className="text-2xl font-semibold mb-4">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
      <p className="mb-6">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>
        Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://www.e-recht24.de</a>
      </p>
    </section>
  );
};

export default HeroImpressum;
