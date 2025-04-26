import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import './Pillars.css';

function AnalyticsBar({ currentPage, setCurrentPage, selectedDate, setSelectedDate }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // If we're on analytics pages, show dates — else show Daily/Weekly/Monthly/Yearly
  const isAnalyticsPage = currentPage === 'exerciseAnalytics' || currentPage === 'sleepAnalytics';
  const datesOrIntervals = isAnalyticsPage
    ? ['22 April', '25 April']
    : ['Daily', 'Weekly', 'Monthly', 'Yearly'];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      marginTop: '10px',
      position: 'relative',
      zIndex: 20
    }}>
      {/* Back Button */}
      <button
        onClick={() => {
          if (currentPage === 'exerciseAnalytics') {
            setCurrentPage('exercise');
          } else if (currentPage === 'sleepAnalytics') {
            setCurrentPage('sleep');
          } else {
            setCurrentPage('main');
          }
        }}
        style={{
          backgroundColor: '#f5f5f5',
          border: 'none',
          borderRadius: '12px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <ChevronLeft size={24} strokeWidth={2.5} />
      </button>

      {/* Title */}
      <h2 style={{ margin: 0, fontWeight: 600, color: '#1f2d3d' }}>Analytics</h2>

      {/* Custom Dropdown */}
      <div ref={dropdownRef} style={{ position: 'relative' }}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#f5f5f5',
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '8px 16px',
            fontWeight: 500,
            color: '#1f2d3d',
            cursor: 'pointer'
          }}
        >
          {selectedDate} <ChevronDown size={16} />
        </button>

        {showDropdown && (
          <div style={{
            position: 'absolute',
            top: '110%',
            right: 0,
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '12px',
            padding: '8px 0',
            zIndex: 99,
            minWidth: '120px'
          }}>
            {datesOrIntervals.map((item) => (
              <div
                key={item}
                onClick={() => {
                  if (isAnalyticsPage) {
                    setSelectedDate(item);
                  }
                  setShowDropdown(false);
                }}
                style={{
                  padding: '10px 16px',
                  cursor: 'pointer',
                  fontWeight: selectedDate === item ? 'bold' : 'normal',
                  backgroundColor: selectedDate === item ? '#e6f0ff' : 'white',
                  color: '#1f2d3d'
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AnalyticsBar;