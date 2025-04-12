import React from 'react';
import './CheckInScore.css';

function CheckInScore() {
    return (
        <div>
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
                    <button className='icon-btn'>
                        <div className='icon-circle'>
                            <img src="/images/mindfulness-img.png" /> {/* Mindfulness image */}
                        </div>
                        <p>45%</p>
                    </button>
                    <button className='icon-btn'>
                        <div className='icon-circle'>
                            <img src="/images/sleep-img.png" /> {/* Sleep image */}
                        </div>
                        <p>74%</p>
                    </button>
                    <button className='icon-btn'>
                        <div className='icon-circle'>
                            <img src="/images/food-img.png" /> {/* Food image */}
                        </div>
                        <p>70%</p>
                    </button>
                    <button className='icon-btn'>
                        <div className='icon-circle'>
                            <img src="/images/exercise-img.png" /> {/* Exercise image */}
                        </div>
                        <p>15%</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckInScore;
