import React from 'react';
import './CheckInScore.css';

function CheckInScore({ currentPage, setCurrentPage }) {
  return (
    <div className="checkin-score">
      <div className="checkin-header">
        <h2>Check-in Score</h2>
        <button className="report-btn">Check-in Report</button>
      </div>

      <div className="checkin-progress">
        <span>Today</span>
        <div className="checkin-progress-bar">
          <div
            className="checkin-progress-fill"
            style={{ width: '50%' }}
          ></div>
        </div>
      </div>

      <div className="checkin-icons">
        <button className="icon" onClick={() => setCurrentPage('mindfulness')}>
          <div className="icon-circle">
            <img src="/images/brain.png" alt="Mental Health" />
          </div>
          <p>45%</p>
        </button>

        <button className="icon" onClick={() => setCurrentPage('sleep')}>
          <div className="icon-circle">
            <img src="/images/sleep.png" alt="Sleep" />
          </div>
          <p>74%</p>
        </button>

        <button className="icon" onClick={() => setCurrentPage('food')}>
          <div className="icon-circle">
            <img src="/images/food.png" alt="Nutrition" />
          </div>
          <p>70%</p>
        </button>

        <button className="icon" onClick={() => setCurrentPage('exercise')}>
          <div className="icon-circle">
            <img src="/images/exercise.png" alt="Exercise" />
          </div>
          <p>15%</p>
        </button>
      </div>
    </div>
  );
}

export default CheckInScore;
