import { useState } from 'react'
import './App.css'

import React from 'react';
import Header from './pages/components/Header';
import MainPage from './pages/MainPage';
import Mindfulness from './pages/components/Mindfulness'
import Footer from './pages/components/Footer';

function App() {
    const [currentPage, setCurrentPage] = useState('main'); // 'main' or 'exercise'

    const renderPage = () => {
        switch (currentPage) {
            case 'mindfulness':
                return <Mindfulness />;
            case 'main':
            default:
                return <MainPage />;
        }
    };

    return (
        <div className="App">
            <div className="container">
                <Header />
                {/* Page switcher for demo */}
                <div style={{ marginBottom: '1rem' }}>
                    <button onClick={() => setCurrentPage('main')}>Main Page</button>
                    <button onClick={() => setCurrentPage('mindfulness')}>Mindfulness Page</button>
                </div>
                <div className="page-view">
                    {renderPage()}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;

