import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-item">
        <img src="/images/goals.png" alt="Goals" className="footer-icon" />
        <p>Goals</p>
      </div>
      <div className="footer-item">
        <img src="/images/checkin.png" alt="Check-in" className="footer-icon" />
        <p>Check-in</p>
      </div>
      <div className="footer-item">
        <img src="/images/analytics.png" alt="Analytics" className="footer-icon" />
        <p>Analytics</p>
      </div>
    </div>
  );
}

export default Footer;
