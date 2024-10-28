import React from 'react';
import Header from './components/Header';
import MissionsList from './components/MissionsList';
import CheckInScore from './components/CheckInScore';
import Appointments from './components/Appointments';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MissionsList />
        <CheckInScore />
        <Appointments />
        <Footer />
      </div>
    </div>
  );
}

export default App;
