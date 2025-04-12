//import './App.css'

import React from 'react';
import MissionsList from './components/MissionsList';
import CheckInScore from './components/CheckInScore';
import Appointments from './components/Appointments';

function MainPage() {
    return (
        <div className="MainPage">
            <MissionsList />
            <CheckInScore />
            <Appointments />
        </div>
    );
}

export default MainPage;