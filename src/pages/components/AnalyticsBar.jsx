import React from 'react';
import { Dropdown, Stack } from 'react-bootstrap';
import { ChevronLeft, ChevronDown } from "lucide-react";

import App from '/src/App';
import './Pillars.css';

function AnalyticsBar({ currentPage, setCurrentPage }) {

    return (
        <div className="horizontal-box">
            <button onClick={() => setCurrentPage('main')}>
                <ChevronLeft size={32} />
            </button>

            <h2>Analytics</h2>
            <Dropdown>
                <Dropdown.Toggle variant="success" id={currentPage}>
                    Daily
                    <ChevronDown size={16} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Daily</Dropdown.Item>
                    <Dropdown.Item>Weekly</Dropdown.Item>
                    <Dropdown.Item>Monthly</Dropdown.Item>
                    <Dropdown.Item>Yearly</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default AnalyticsBar;