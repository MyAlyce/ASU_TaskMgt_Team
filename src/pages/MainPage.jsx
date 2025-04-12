//import './App.css'

import React from 'react';
import MissionsList from './components/MissionsList';
import CheckInScore from './components/CheckInScore';
import Appointments from './components/Appointments';

function MainPage({ currentPage, setCurrentPage }) {
    return (
        <div className="MainPage">
            <MissionsList currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <CheckInScore currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Appointments currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default MainPage;