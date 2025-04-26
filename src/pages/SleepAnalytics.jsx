import React, { useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

import { fetchXLSXFile, downloadXLSXFile } from '../utils/driveUtils';
import { parseSleepDataFromBlob } from '../utils/sleepParser';

function SleepAnalytics({ sleepData, setSleepData, setCurrentPage, selectedDate, accessToken }) {
  useEffect(() => {
    const loadSleepData = async () => {
      try {
        const filename = selectedDate === '22 April'
          ? 'zepp 2025-04-22.xlsx'
          : 'zepp 2025-04-25.xlsx';

        const file = await fetchXLSXFile(accessToken, filename);
        const blob = await downloadXLSXFile(file.id, accessToken);
        const parsedData = await parseSleepDataFromBlob(blob);

        setSleepData(parsedData);
      } catch (err) {
        console.error('Error loading sleep data:', err);
      }
    };

    loadSleepData();
  }, [selectedDate, accessToken, setSleepData]);

  const chartData = [
    { stage: 'Wake', minutes: sleepData.wakeMinutes || 0 },
    { stage: 'REM', minutes: sleepData.remMinutes || 0 },
    { stage: 'Light', minutes: sleepData.lightMinutes || 0 },
    { stage: 'Deep', minutes: sleepData.deepMinutes || 0 },
  ];

  return (
    <div style={{ width: '90%', height: 400, margin: 'auto', marginTop: '30px', marginBottom: '60px' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Sleep Stage Duration</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="stage" />
          <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="minutes" fill="#40A8F4" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SleepAnalytics;
