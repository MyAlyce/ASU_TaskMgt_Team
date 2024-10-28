import React from 'react';
import './MissionsList.css';

function MissionsList() {
  return (
    <div className="missions-list">
      <h2>Upcoming Missions</h2>
      <div className="mission-item">
        <div className="mission-details">
          <h3>5 Miles Run</h3>
          <p>Burn 200 calories</p>
          <p>20% of the daily goal</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '20%' }}></div> {/* 20% progress */}
          </div>
        </div>
        <img src="/images/tick.png" alt="Completed" className="tick-icon" /> {/* Tick image */}
      </div>
      <div className="mission-item">
        <div className="mission-details">
          <h3>Eat Salad</h3>
          <p>Fill up your fibres</p>
          <p>100% of the daily goal</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '100%' }}></div> {/* 100% progress */}
          </div>
        </div>
        <img src="/images/tick.png" alt="Completed" className="tick-icon" /> {/* Tick image */}
      </div>
    </div>
  );
}

export default MissionsList;