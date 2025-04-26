import React from 'react';
import './Footer.css';
import { fetchXLSXFile, downloadXLSXFile } from '../../utils/driveUtils';
import { parseHeartRateFromBlob } from '../../utils/xlsxParser';
import { parseSleepDataFromBlob } from '../../utils/sleepParser';

function Footer({ currentPage, accessToken, setHeartRates, setSleepData, setCurrentPage }) {

  const displayPage = currentPage === 'main' ? 'checkin' : currentPage;

  const handleAnalyticsClick = async () => {
    if (displayPage === 'exercise') {
      try {
        const file = await fetchXLSXFile(accessToken, "zepp 2025-04-22.xlsx");
        const blob = await downloadXLSXFile(file.id, accessToken);
        const heartRates = await parseHeartRateFromBlob(blob);
        setHeartRates(heartRates);
        setCurrentPage('exerciseAnalytics');
      } catch (error) {
        console.error('Error loading exercise analytics:', error);
      }
    } else if (displayPage === 'sleep') {
      try {
        const file = await fetchXLSXFile(accessToken, "zepp 2025-04-22.xlsx");
        const blob = await downloadXLSXFile(file.id, accessToken);
        const sleepData = await parseSleepDataFromBlob(blob);
        setSleepData(sleepData);
        setCurrentPage('sleepAnalytics');
      } catch (error) {
        console.error('Error loading sleep analytics:', error);
      }
    } else {
      
    }
  };

  const handleCheckinClick = () => {
    setCurrentPage('main');
  };

  return (
    <div className="footer">
      <div 
        className={`footer-item ${displayPage === 'goals' ? 'footer-active' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        <img 
          src="/images/goals.png" 
          alt="Goals" 
          className={`footer-icon ${displayPage === 'goals' ? 'active' : 'faded'}`}
        />
        <p>Goals</p>
      </div>

      <div 
        className={`footer-item ${displayPage === 'checkin' ? 'footer-active' : ''}`}
        onClick={handleCheckinClick}
        style={{ cursor: 'pointer' }}
      >
        <img 
          src="/images/checkin.png" 
          alt="Check-in" 
          className={`footer-icon ${displayPage === 'checkin' ? 'active' : 'faded'}`}
        />
        <p>Check-in</p>
      </div>

      <div 
        className={`footer-item ${(displayPage === 'exerciseAnalytics' || displayPage === 'sleepAnalytics') ? 'footer-active' : ''}`}
        onClick={handleAnalyticsClick}
        style={{ cursor: "pointer" }}
      >
        <img 
          src="/images/analytics.png" 
          alt="Analytics" 
          className={`footer-icon ${(displayPage === 'exerciseAnalytics' || displayPage === 'sleepAnalytics') ? 'active' : 'faded'}`}
        />
        <p>Analytics</p>
      </div>
    </div>
  );
}

export default Footer;
