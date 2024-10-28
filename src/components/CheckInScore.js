import React from 'react';
import './CheckInScore.css';

function CheckInScore() {
  return (
    <div className="checkin-score">
      <h2>Check-in Score</h2>
      <div className="today-score">
        <span>Today</span>
        <button className="report-btn">Check-in Report</button>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '50%' }}></div>
      </div>
      <div className="score-icons">
        <div>
          <span role="img" aria-label="Mental">🧠</span>
          <p>45%</p>
        </div>
        <div>
          <span role="img" aria-label="Sleep">😴</span>
          <p>74%</p>
        </div>
        <div>
          <span role="img" aria-label="Nutrition">🍴</span>
          <p>70%</p>
        </div>
        <div>
          <span role="img" aria-label="Exercise">🏋️</span>
          <p>15%</p>
        </div>
      </div>
    </div>
  );
}

export default CheckInScore;
