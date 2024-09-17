const Hero = () => {
  const paragraphs = [
    'Mandant zuerst - Die Interessen des Mandanten an die erste Stelle zu setzen, ist ein Markenzeichen unserer Professionalität. Als Financial Guide handelt man ehrlich und stellt keinen persönlichen Gewinn oder Vorteil vor die Interessen des Mandanten.',
    'Intengrität - Integrität erfordert Ehrlichkeit und Offenheit in allen beruflichen Angelegenheiten. Als Financial Guide wirst du von deinen Mandanten in eine Vertrauensposition gebracht, und die letzte Quelle dieses Vertrauens ist deine persönliche Integrität.',
    'Objektivität - Objektivität erfordert intellektuelle Ehrlichkeit und Unparteilichkeit. Unabhängig von den erbrachten Dienstleistungen oder der Funktion, in der du als Financial Guide tätig bist, verlangt Objektivität, dass du die Integrität deiner Arbeit sicherstellst, Konflikte handhabst und ein gesundes professionelles Urteilsvermögen ausübst.',
    'Fairness - Lege Interessenkonflikte offen und handhabe sie. Fairness bedeutet, dem Mandanten das zu geben, was ihm zusteht, was er schuldet oder was er von einer professionellen Beziehung erwarten sollte. Fairness schließt Ehrlichkeit und die Offenlegung von wesentlichen Interessenkonflikten ein.',
    'Professionalität - Professionalität erfordert, dass du dich mit Würde verhältst und gegenüber Mandanten, Berufskollegen und anderen Personen, die an geschäftlichen Aktivitäten beteiligt sind, Respekt und Höflichkeit zeigst. Halte dabei die entsprechenden Regeln, Vorschriften und beruflichen Anforderungen ein.',
    'Kompetenz - Aufrechterhaltung der Fähigkeiten, Fertigkeiten und Kenntnisse, die zur kompetenten Erbringung professioneller Dienstleistungen erforderlich sind. Kompetenz erfordert die Erlangung & Aufrechterhaltung eines angemessenen Niveaus von Fähigkeiten, Fertigkeiten und Kenntnissen bei der Erbringung professioneller Dienstleistungen.',
    'Vertraulichkeit - Die Vertraulichkeit erfordert, dass Mndanteninformationen so geschützt und aufbewahrt werden, dass nur die dazu berechtigte Personen darauf zugreifen können. Eine vertrauensvolle Beziehung zum Mandanten kann nur auf der Grundlage aufgebaut werden, dass die Informationen des Mandanten nicht unangemessen offengelegt werden.',
    'Sorgfaltspflicht - Sorgfalt erfordert die rechtzeitige und sorgfältige Erfüllung beruflicher Verpflichtungen und die Beachtung der gebotenen Sorgfalt bei der Planung, Überwachung und Erbringung beruflicher Dienstleistungen.',
  ]

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-full flex flex-col justify-start items-start flex-wrap pt-28">
        {/* Texte in 4er Gruppen aufteilen */}
        {Array(Math.ceil(paragraphs.length / 4))
          .fill()
          .map((_, groupIndex) => (
            <div
              key={groupIndex}
              className="w-full flex flex-wrap gap-10 mb-8"
            >
              {paragraphs
                .slice(groupIndex * 4, groupIndex * 4 + 4)
                .map((paragraph, index) => {
                  const parts = paragraph.split(' - ')
                  return (
                    <div
                      key={index}
                      className="flex-1 font-montserrat text-slate-gray text-lg leading-8 max-w-xs mr-4"
                    >
                      {parts.length > 1 ? (
                        <>
                          <strong>{parts[0]}</strong> - {parts[1]}
                        </>
                      ) : (
                        paragraph
                      )}
                    </div>
                  )
                })}
            </div>
          ))}
      </div>
    </section>
  )
}

export default Hero
