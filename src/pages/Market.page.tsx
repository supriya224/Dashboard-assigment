/* eslint-disable react/function-component-definition */

import React from 'react';

const markets = [
  { name: 'S&P 500', value: 4200, change: 20, percentageChange: 0.5 },
  { name: 'Nasdaq', value: 13500, change: -100, percentageChange: -0.74 },
  { name: 'Dow Jones', value: 33000, change: 150, percentageChange: 0.45 },
  { name: 'Crude Oil', value: 70, change: 1, percentageChange: 1.45 },
  { name: 'Gold', value: 1800, change: -10, percentageChange: -0.55 },
  { name: 'Silver', value: 25, change: 0.2, percentageChange: 0.8 },
  { name: 'Bitcoin', value: 45000, change: -2000, percentageChange: -4.25 },
];

const MarketPage: React.FC = () => {
  return (
    <div className=" text-zinc-800 px-12 py-12 shadow-lg w-full rounded-lg">
      <h2 className="text-2xl font-bold mb-2">Markets Overview</h2>
      {markets.map((market) => (
        <div key={market.name} className="flex justify-between ">
          <span>{market.name}</span>
          <div className="flex gap-4">
            <span>{market.value}</span>
            <span
              className={market.change > 0 ? 'text-green-600' : 'text-red-600'}
            >
              {market.change > 0 ? `+${market.change}` : `${market.change}`} (
              {market.percentageChange}%)
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketPage;
