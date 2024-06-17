/* eslint-disable react/function-component-definition */

import React, { useState } from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const timeRanges = ['1D', '1W', '1M', '3M', '1Y', 'All'];

const processData = (timeSeries: any) => {
  const dates = Object.keys(timeSeries).reverse();
  return {
    labels: dates,
    datasets: [
      {
        label: 'Close Price',
        data: dates.map((date) => parseFloat(timeSeries[date]['4. close'])),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  };
};

const Chart: React.FC = () => {
  const [timeRange, setTimeRange] = useState<string>('1D');
  const { data, loading, error } = useFetchData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const { timeSeries } = data;

  if (!timeSeries) return <div>No data available</div>;

  const chartData = processData(timeSeries);

  return (
    <div className=" p-4 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold">Market Chart</h2>
      </div>
      <div
        className="chart-container"
        style={{ width: '600px', height: '300px' }}
      >
        <Line data={chartData} />
      </div>
      <div className="flex gap-2 mt-2">
        {timeRanges.map((range) => (
          <button
            type="button"
            key={range}
            className={`px-2 py-1 rounded ${
              timeRange === range ? 'bg-zinc-600 text-white' : 'bg-zinc-400'
            }`}
            onClick={() => setTimeRange(range)}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chart;
