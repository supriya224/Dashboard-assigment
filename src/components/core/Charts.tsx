/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
// components/Chart.tsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import useFetchData from '../../hooks/useFetchData';
// import useFetchData from '../hooks/useFetchData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const Chart: React.FC = () => {
  const { data, loading, error } = useFetchData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const { metaData, timeSeries } = data;

  if (!metaData || !timeSeries) return <div>No data available</div>;

  const dates = Object.keys(timeSeries).slice(0, 30).reverse(); // Last 30 days
  const closingPrices = dates.map((date) =>
    parseFloat(timeSeries[date]['4. close']),
  );

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: `Closing Prices for ${metaData['2. Symbol']}`,
        data: closingPrices,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Stock Prices',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Chart;
