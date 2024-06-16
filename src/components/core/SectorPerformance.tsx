/* eslint-disable react/function-component-definition */
// components/SectorPerformance.tsx

import React from 'react';

const sectors = [
  { name: 'Industrials', change: 1.2 },
  { name: 'Technology', change: -0.5 },
  { name: 'Healthcare', change: 0.8 },
  // Add more sectors as needed
];

const SectorPerformance: React.FC = () => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Sector Performance</h2>
      {sectors.map((sector) => (
        <div key={sector.name} className="flex justify-between mb-2">
          <span>{sector.name}</span>
          <span
            className={sector.change > 0 ? 'text-green-600' : 'text-red-600'}
          >
            {sector.change > 0 ? `+${sector.change}%` : `${sector.change}%`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SectorPerformance;
