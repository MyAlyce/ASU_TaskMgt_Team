import React, { useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import { fetchXLSXFile, downloadXLSXFile } from '../utils/driveUtils';
import { parseHeartRateFromBlob } from '../utils/xlsxParser';

function ExerciseAnalytics({ heartRates, setHeartRates, setCurrentPage, selectedDate, accessToken }) {

  useEffect(() => {
    const loadData = async () => {
      try {
        const fileName = `zepp 2025-04-${selectedDate === '22 April' ? '22' : '25'}.xlsx`;
        const file = await fetchXLSXFile(accessToken, fileName);
        const blob = await downloadXLSXFile(file.id, accessToken);
        const heartRates = await parseHeartRateFromBlob(blob);
        setHeartRates(heartRates);
      } catch (error) {
        console.error('Error loading heart rate data:', error);
      }
    };

    loadData();
  }, [selectedDate, accessToken]);

  const chartData = heartRates.map((rate, index) => ({
    time: index,
    heartRate: rate,
  }));

  return (
    <div style={{ width: '90%', margin: 'auto', marginTop: '20px', marginBottom: '60px' }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" label={{ value: "Time (Index)", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Heart Rate", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line type="monotone" dataKey="heartRate" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExerciseAnalytics;

