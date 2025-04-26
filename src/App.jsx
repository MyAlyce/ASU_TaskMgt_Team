import { useState } from 'react';
import './App.css';

import React from 'react';
import Header from './pages/components/Header';
import MainPage from './pages/MainPage';
import Mindfulness from './pages/Mindfulness';
import Food from './pages/Food';
import Sleep from './pages/Sleep';
import Exercise from './pages/Exercise';
import ExerciseAnalytics from './pages/ExerciseAnalytics';
import SleepAnalytics from './pages/SleepAnalytics'; 
import Footer from './pages/components/Footer';
import LoginPage from './pages/login';
import AnalyticsBar from './pages/components/AnalyticsBar';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [heartRates, setHeartRates] = useState([]); // for exercise
  const [sleepData, setSleepData] = useState({});   // for sleep
  const [selectedDate, setSelectedDate] = useState('22 April');

  const handleLogin = (token) => {
    setIsLoggedIn(true);
    setAccessToken(token);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'mindfulness':
        return <Mindfulness currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'food':
        return <Food currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'sleep':
        return <Sleep currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'sleepAnalytics':
        return (
          <>
            <AnalyticsBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <SleepAnalytics
              sleepData={sleepData}
              setSleepData={setSleepData}
              setCurrentPage={setCurrentPage}
              selectedDate={selectedDate}
              accessToken={accessToken}
            />
          </>
        );
      case 'exercise':
        return <Exercise currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'exerciseAnalytics':
        return (
          <>
            <AnalyticsBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <ExerciseAnalytics
              heartRates={heartRates}
              setHeartRates={setHeartRates}
              setCurrentPage={setCurrentPage}
              selectedDate={selectedDate}
              accessToken={accessToken}
            />
          </>
        );
      case 'main':
      default:
        return <MainPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div className="container">
          <Header />
          <div className="page-view">
            {renderPage()}
          </div>
          <Footer
            currentPage={currentPage}
            accessToken={accessToken}
            setHeartRates={setHeartRates}
            setSleepData={setSleepData}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;