import React from 'react';

const Calendar = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://outlook.office365.com/owa/calendar/RonneyBawaFinancialGuide@mitNORM.com/bookings/"
        width="100%"
        height="100%"
        scrolling="yes"
        style={{ border: 'none' }}
        title="Microsoft Bookings Calendar"
      ></iframe>
    </div>
  );
};

export default Calendar;
