import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
          <button className="footer-btn">
              <img src="/images/goals.png" />
              <div>Goals</div>
          </button>
          <button className="footer-btn">
              <img src="/images/check-in.png" />
              <div>Check-in</div>
          </button>
          <button className="footer-btn">
              <img src="/images/analytics.png" />
              <div>Analytics</div>
          </button>
    </div>
  );
}

export default Footer;
