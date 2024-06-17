/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartJS from 'chart.js/auto';
import useFetchData from '../hooks/useFetchData';
import SectorPerformance from '../components/core/SectorPerformance';
import MarketPage from './Market.page';
// import useFetchData from '../../hooks/useFetchData';

const timeRanges = ['1D', '1W', '1M', '3M', '1Y', 'All'];

const StockPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<string>('1D');
  const { data, loading, error } = useFetchData();

  useEffect(() => {
    ChartJS.register();
  }, []);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const { timeSeries } = data;

  if (!timeSeries) return <div>No data available</div>;

  // Process bar chart data (example data)
  const sectorPerformanceData = {
    labels: ['Technology', 'Healthcare', 'Finance', 'Energy', 'Consumer Goods'],
    datasets: [
      {
        label: 'Sector Performance',
        data: [20, 15, -10, 5, 8], // Example data (replace with actual data)
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 shadow-lg  bg-zinc-900 w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Market Chart</h2>
      </div>

      <div className="flex gap-2">
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
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Sector Performance</h2>
        <div style={{ height: '300px' }}>
          <Bar data={sectorPerformanceData} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <SectorPerformance />
        <MarketPage />
      </div>
    </div>
  );
};

export default StockPage;

// import React from 'react';

// function StockPage() {
//   return <div>Stock.page</div>;
// }

// export default StockPage;
