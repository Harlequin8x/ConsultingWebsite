import { ronney1, ronney2 } from '../assets/images';
const rb_video = '/videos/rb_video.mp4';
import arrow from '../assets/images/arrow.png';

const Hero = () => {
  const title1 = [
    'Das Beste an Teamarbeit ist, ',
    'dass dir Ronney immer zur Seite steht!',
  ];
  
  const title2 = [
    <a
      key="myvi-link"
      href="https://myvi.de/dermyvieffekt"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Nutze den MYVI-Effekt auch für dich!
    </a>,
  ];
  const title = ['Vision von Ronney Bawa'];

  const paragraphs = [
    'Mandant zuerst - Die Interessen des Mandanten an die erste Stelle zu setzen, ist ein Markenzeichen unserer Professionalität. Als Financial Guide handelt man ehrlich und stellt keinen persönlichen Gewinn oder Vorteil vor die Interessen des Mandanten.',
    'Integrität - Integrität erfordert Ehrlichkeit und Offenheit in allen beruflichen Angelegenheiten. Als Financial Guide wirst du von deinen Mandanten in eine Vertrauensposition gebracht, und die letzte Quelle dieses Vertrauens ist deine persönliche Integrität.',
    'Objektivität - Objektivität erfordert intellektuelle Ehrlichkeit und Unparteilichkeit. Unabhängig von den erbrachten Dienstleistungen oder der Funktion, in der du als Financial Guide tätig bist, verlangt Objektivität, dass du die Integrität deiner Arbeit sicherstellst, Konflikte handhabst und ein gesundes professionelles Urteilsvermögen ausübst.',
    'Fairness - Lege Interessenkonflikte offen und handhandele sie. Fairness bedeutet, dem Mandanten das zu geben, was ihm zusteht, was er schuldet oder was er von einer professionellen Beziehung erwarten sollte. Fairness schließt Ehrlichkeit und die Offenlegung von wesentlichen Interessenkonflikten ein.',
    'Professionalität - Professionalität erfordert, dass du dich mit Würde verhältst und gegenüber Mandanten, Berufskollegen und anderen Personen, die an geschäftlichen Aktivitäten beteiligt sind, Respekt und Höflichkeit zeigst. Halte dabei die entsprechenden Regeln, Vorschriften und beruflichen Anforderungen ein.',
    'Kompetenz - Aufrechterhaltung der Fähigkeiten, Fertigkeiten und Kenntnisse, die zur kompetenten Erbringung professioneller Dienstleistungen erforderlich sind. Kompetenz erfordert die Erlangung & Aufrechterhaltung eines angemessenen Niveaus von Fähigkeiten, Fertigkeiten und Kenntnissen bei der Erbringung professioneller Dienstleistungen.',
    'Vertraulichkeit - Die Vertraulichkeit erfordert, dass Mandanteninformationen so geschützt und aufbewahrt werden, dass nur die dazu berechtigte Personen darauf zugreifen können. Eine vertrauensvolle Beziehung zum Mandanten kann nur auf der Grundlage aufgebaut werden, dass die Informationen des Mandanten nicht unangemessen offengelegt werden.',
    'Sorgfaltspflicht - Sorgfalt erfordert die rechtzeitige und sorgfältige Erfüllung beruflicher Verpflichtungen und die Beachtung der gebotenen Sorgfalt bei der Planung, Überwachung und Erbringung beruflicher Dienstleistungen.',
  ];

  const handleVideoClick = () => {
    const videoElement = document.getElementById('video');

    if (videoElement.paused) {
      videoElement.play(); // Video abspielen
      videoElement.muted = false; // Optional: Ton aktivieren
    } else {
      videoElement.pause(); // Video pausieren
    }
  };

  const handlePlayButtonClick = () => {
    const videoElement = document.getElementById('video');
    videoElement.play(); // Video abspielen
    videoElement.muted = false; // Optional: Ton aktivieren

    // Versteckt den Play-Button
    const playButton = document.getElementById('play-button');
    if (playButton) playButton.style.display = 'none';
  };

  return (
    <section
      id="home"
      className="w-full flex flex-col justify-start items-center min-h-screen gap-10 max-container"
    >
      {/* Titel oben in der Mitte */}
      <div className="w-full text-center font-bold text-6xl mt-10">
        <div>{title1[0]}</div> {/* Erster Teil des Textes */}
        <div className="mt-2">{title1[1]}</div> {/* Zweiter Teil des Textes, mit Abstand nach unten und Versetzung */}
      </div>        

      {/* Video Container mit Play-Button */}
      <div className="relative w-full mt-6">
        {/* Video */}
        <video
          id="video"
          src={rb_video}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          muted // Video ist zunächst stumm
          playsInline
          onClick={handleVideoClick} // Funktion, um Video zu pausieren/abzuspielen
        />

        {/* Play Button */}
        <button
          id="play-button"
          onClick={handlePlayButtonClick}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl rounded-lg"
        >
          ▶
        </button>
      </div>

      {/* Titel und Links */}
      <div className="w-full text-center font-bold text-4xl mt-10">{title2}</div>

      <div className="w-full text-center font-bold text-4xl mt-16">{title}</div>

      {/* Texte darunter */}
      <div className="relative w-full flex flex-col justify-start items-start flex-wrap pt-2">
        {Array(Math.ceil(paragraphs.length / 4))
          .fill()
          .map((_, groupIndex) => (
            <div
              key={groupIndex}
              className="w-full flex flex-wrap gap-10 mb-8 justify-center"
            >
              {paragraphs
                .slice(groupIndex * 4, groupIndex * 4 + 4)
                .map((paragraph, index) => {
                  const parts = paragraph.split(' - ');
                  return (
                    <div
                      key={index}
                      className="flex-1 font-montserrat text-slate-gray text-lg leading-8 max-w-xs p-6 bg-gray-200 rounded-lg shadow-md"
                    >
                      {parts.length > 1 ? (
                        <>
                          <div className="text-xl font-bold mb-2">{parts[0]}</div>
                          <div>{parts[1]}</div>
                        </>
                      ) : (
                        paragraph
                      )}
                    </div>
                  );
                })}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Hero;
