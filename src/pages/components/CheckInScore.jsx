import React from 'react';
import './CheckInScore.css';

function CheckInScore({ currentPage, setCurrentPage }) {
    return (
        <div className="component-box">
            <h2>Check-in Score</h2>
            <div className="checkin-score">
                <div className="today-score">
                    <h2>Today</h2>
                    <button className="report-btn">Check-in Report</button>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '50%' }}></div>
                </div>
                <div className="score-icons">
                    <button className='icon-btn' onClick={() => setCurrentPage('mindfulness')}>
                        <div className='icon-circle'>
                            <img src="/images/mindfulness.png" alt="Mindfulness" /> {/* Mindfulness image */}
                        </div>
                        <p>45%</p>
                    </button>
                    <button className='icon-btn' onClick={() => setCurrentPage('sleep')}>
                        <div className='icon-circle'>
                            <img src="/images/sleep.png" alt="Sleep" /> {/* Sleep image */}
                        </div>
                        <p>74%</p>
                    </button>
                    <button className='icon-btn' onClick={() => setCurrentPage('food')}>
                        <div className='icon-circle'>
                            <img src="/images/food.png" alt="Food" /> {/* Food image */}
                        </div>
                        <p>70%</p>
                    </button>
                    <button className='icon-btn' onClick={() => setCurrentPage('exercise')}>
                        <div className='icon-circle'>
                            <img src="/images/exercise.png" alt="Exercise" /> {/* Exercise image */}
                        </div>
                        <p>15%</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckInScore;
