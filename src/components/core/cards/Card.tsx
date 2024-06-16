/* eslint-disable react/function-component-definition */
// components/Card.tsx

import React from 'react';
import useFetchData from '../../../hooks/useFetchData';
// import useFetchData from '../hooks/useFetchData';.

const Card: React.FC = () => {
  const { data, loading, error } = useFetchData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const { metaData, timeSeries } = data;

  if (!metaData || !timeSeries) return <div>No data available</div>;

  const latestDates = Object.keys(timeSeries).slice(0, 5);

  return (
    <div className="card">
      <div>
        <h2>Meta Data</h2>
        <p>Information: {metaData['1. Information']}</p>
        <p>Symbol: {metaData['2. Symbol']}</p>
        <p>Last Refreshed: {metaData['3. Last Refreshed']}</p>
        <p>Output Size: {metaData['4. Output Size']}</p>
        <p>Time Zone: {metaData['5. Time Zone']}</p>
      </div>
      <div>
        <h2>Last 5 Days Data</h2>
        {latestDates.map((date) => (
          <div key={date}>
            <h3>Date: {date}</h3>
            <p>Open: {timeSeries[date]['1. open']}</p>
            <p>High: {timeSeries[date]['2. high']}</p>
            <p>Low: {timeSeries[date]['3. low']}</p>
            <p>Close: {timeSeries[date]['4. close']}</p>
            <p>Adjusted Close: {timeSeries[date]['5. adjusted close']}</p>
            <p>Volume: {timeSeries[date]['6. volume']}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
