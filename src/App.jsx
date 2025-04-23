import { useState } from 'react'
import './App.css'

import React from 'react';
import Header from './pages/components/Header';
import MainPage from './pages/MainPage';
import Mindfulness from './pages/Mindfulness';
import Food from './pages/Food';
import Sleep from './pages/Sleep';
import Exercise from './pages/Exercise';
import Footer from './pages/components/Footer';
import LoginPage from './pages/login';

function App() {
    const [currentPage, setCurrentPage] = useState('main');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        // You can add more logic here later (API call, loading spinner, etc.)
        setIsLoggedIn(true);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'mindfulness':
                return <Mindfulness currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            case 'food':
                return <Food currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            case 'sleep':
                return <Sleep currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            case 'exercise':
                return <Exercise currentPage={currentPage} setCurrentPage={setCurrentPage} />;
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
                    <Footer />

                </div>
            ) :
                (
                    <LoginPage onLogin={handleLogin} />
                )
            }
        </div>
    );
}

export default App;

