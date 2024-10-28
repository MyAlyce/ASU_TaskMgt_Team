import React from 'react';
import './Appointments.css';

function Appointments() {
  return (
    <div className="appointments">
      <h2>Appointments</h2>
      <div className="appointment-item">
        <div className="appointment-details">
          <p>Tomorrow</p>
          <p>Dr. ABC, XYZ Hospital</p>
        </div>
        <div className="appointment-time">
          <span role="img" aria-label="Clock">🕒</span> 1:00 PM
          <button className="check-btn">✔️</button>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
