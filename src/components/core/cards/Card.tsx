/* eslint-disable react/function-component-definition */
// components/Card.tsx

import React from 'react';
import useFetchData from '../../../hooks/useFetchData';
// import useFetchData from '../hooks/useFetchData';

const Card: React.FC = () => {
  const { data, loading, error } = useFetchData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Assuming we want to display the latest data
  const latestDate = data ? Object.keys(data)[0] : '';
  const latestData = data ? data[latestDate] : null;

  return (
    <div className="card">
      {latestData ? (
        <div>
          <h2>Reliance BSE - {latestDate}</h2>
          <p>Open: {latestData['1. open']}</p>
          <p>High: {latestData['2. high']}</p>
          <p>Low: {latestData['3. low']}</p>
          <p>Close: {latestData['4. close']}</p>
          <p>Adjusted Close: {latestData['5. adjusted close']}</p>
          <p>Volume: {latestData['6. volume']}</p>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default Card;
