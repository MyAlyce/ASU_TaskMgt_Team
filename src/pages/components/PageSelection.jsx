import React from 'react';
import './Pillars.css';

import App from '/src/App';

function PageSelection({ currentPage, setCurrentPage }) {

    return (
        <div className="page-selection">
            <button className={currentPage === "sleep" ? "ps-btn-active" : "ps-btn"} onClick={() => setCurrentPage('sleep')}>
                <h2>Sleep</h2>
            </button>
            <button className={currentPage === "exercise" ? "ps-btn-active" : "ps-btn"} onClick={() => setCurrentPage('exercise')}>
                <h2>Exercise</h2>
            </button>
            <button className={currentPage === "food" ? "ps-btn-active" : "ps-btn"} onClick={() => setCurrentPage('food')}>
                <h2>Food</h2>
            </button>
            <button className={currentPage === "mindfulness" ? "ps-btn-active" : "ps-btn"} onClick={() => setCurrentPage('mindfulness')}>
                <h2>Mindfulness</h2>
            </button>
        </div>
   )
}

export default PageSelection;