import React from 'react';

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import App from '/src/App';
import './Pillars.css';

{/*
    White: white
    App Background: #ededed
    Light Blue: #86CCFF
    Dark Blue: #4a90e2
*/}

const image = {
    sleep: "/images/sleep.png",
    food: "/images/food.png",
    mindfulness: "/images/mindfulness.png",
    exercise: "/images/exercise.png"
};

function ProgressBar({ currentPage, setCurrentPage, percentage }) {
    const imageSrc = image[currentPage]

    return (
        <div className='progressbar'>
            <CircularProgressbarWithChildren value={percentage}
                styles={buildStyles({
                    textColor: "#86CCFF",
                    pathColor: "#4a90e2",
                    trailColor: "#86CCFF"
                })}>

                <img src={imageSrc} alt={currentPage} />
                <h2>{percentage}%</h2>
            </CircularProgressbarWithChildren> 
        </div>
    )
}

export default ProgressBar;