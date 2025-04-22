import React from 'react';
import './Appointments.css';

function Appointments() {
  return (
    <div className="appointments">
      <h2>Appointments</h2>
      <div className="appointment-item">
        <div className="appointment-left">
          <p className="appointment-date">Tomorrow</p>
          <p className="appointment-doctor">Dr. ABC, XYZ Hospital</p>
        </div>
        <div className="appointment-center">
          <img src="/images/clock.png" alt="Clock" className="clock-icon" />
          <span className="appointment-hour">1:00 PM</span>
        </div>
        <div className="appointment-right">
          <img src="/images/tick2.png" alt="Check" className="check-icon" />
        </div>
      </div>
    </div>
  );
}

export default Appointments;
