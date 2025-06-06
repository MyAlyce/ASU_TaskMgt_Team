import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { ChevronLeft, ChevronDown } from "lucide-react";
import './Mindfulness.css';

function Mindfulness() {
    return (
        <div>
            <div className="backbar">
                <ChevronLeft size={32} />
                <h2>Analytics</h2>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-mindfulness">
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
            <div className="page-selection">

            </div>

            <div className="prog-bar">
                <img src="/images/mindfulness-img.png" /> {/* Mindfulness image */}
            </div>
        </div>
        
    )
}


export default Mindfulness;