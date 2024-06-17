/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import ChartJS from 'chart.js/auto'; // Import chart.js/auto to use Chart.js
import SectorPerformance from '../components/core/SectorPerformance';
import MarketPage from './Market.page';

const PieChart: React.FC = () => {
  useEffect(() => {
    ChartJS.register();
  }, []);

  // Example data for sector performance (replace with actual data)
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
    <div className=" shadow-lg rounded-lg h-full sm:h-screen w-full ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white text-center">
          Sector Performance with pie chart
        </h2>
      </div>
      <div className="flex justify-center w-72">
        <Pie data={sectorPerformanceData} />
      </div>
      <div className="grid grid-cols-1 w-full gap-12  md:grid-cols-2 ">
        <SectorPerformance />
        <MarketPage />
      </div>
    </div>
  );
};

export default PieChart;
