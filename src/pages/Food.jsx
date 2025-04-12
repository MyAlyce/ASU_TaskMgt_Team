import React from 'react';

import App from '/src/App';
import AnalyticsBar from './components/AnalyticsBar';
import PageSelection from './components/PageSelection';
import ProgressBar from './components/ProgressBar';
import './components/Pillars.css';

function Food({ currentPage, setCurrentPage }) {
    return (
        <div className="component-box">
            <div>
                <AnalyticsBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>

            <div>
                <PageSelection currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>

            <div>
                <ProgressBar currentPage={currentPage} setCurrentPage={setCurrentPage} percentage={70} />
            </div>
        </div>

    )
}


export default Food;