import React from 'react'
import ronney1 from '../assets/images/ronney1.jpg'

const Calendar = () => {
  return (
    <div
      style={{
        display: 'flex', // Flexbox für horizontale Anordnung
        width: '100%',
        height: '100vh', // 100% der Bildschirmhöhe
        overflow: 'hidden',
      }}
    >
      {/* Kalender-Bereich */}
      <div
        style={{
          flex: '2', // Nimmt 2 Teile des Platzes ein (doppelt so viel wie das Bild)
          height: '100%', // Nimmt die gesamte Höhe ein
        }}
      >
        <iframe
          src="https://outlook.office365.com/owa/calendar/RonneyBawaFinancialGuide@mitNORM.com/bookings/" // Dein Kalender-Link
          width="100%"
          height="100%" // Passt die Höhe an den verfügbaren Bereich an
          style={{
            border: 'none',
          }}
          title="Microsoft Bookings Calendar"
        ></iframe>
      </div>

      {/* Bild-Bereich */}
      <div
        style={{
          flex: '1', // Nimmt 1 Teil des Platzes ein
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f4f4f4', // Optional: Hintergrundfarbe
          padding: '20px', // Abstand innerhalb des Bildbereichs
          height: '100%', // Nimmt die gesamte Höhe ein
        }}
      >
        <img
          src={ronney1}
          alt="Ronney"
          style={{
            maxWidth: '90%', // Beschränkt die Breite des Bildes auf 90% des Containers
            maxHeight: '90%', // Beschränkt die Höhe des Bildes auf 90% des Containers
            borderRadius: '10px', // Abgerundete Ecken
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Schatteneffekt
          }}
        />
      </div>
    </div>
  )
}

export default Calendar

// src="https://outlook.office365.com/owa/calendar/RonneyBawaFinancialGuide@mitNORM.com/bookings/"
