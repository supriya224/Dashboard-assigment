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
    <div className="grid grid-cols-2 gap-6  my-12 h-fit">
      <div className="w-full h-full  bg-black  rounded-xl shadow-xl text-zinc-700 leading-8 ">
        <p className="p-12">{metaData['2. Symbol']}</p>
        <p className=" px-12 pt-36 text-white text-3xl">
          {metaData['1. Information']}
        </p>
        <div className=" flex gap-12 px-12">
          <p> {metaData['3. Last Refreshed']}</p>
          <p> {metaData['4. Output Size']}</p>
          <p>{metaData['5. Time Zone']}</p>
        </div>
      </div>
      <div className="bg-black rounded-xl shadow-lg h-fit text-zinc-700 w-full p-3">
        <h2>Last 5 Days Data</h2>
        <table className=" ">
          <thead>
            <tr>
              <th className="py-1 px-4 border-b ">Date</th>
              <th className="py-1 px-4 border-b ">Open</th>
              <th className="py-1 px-4 border-b ">High</th>
              <th className="py-1 px-4 border-b ">Low</th>
              <th className="py-1 px-4 border-b ">Close</th>
              <th className="py-1 px-4 border-b ">Adjusted Close</th>
            </tr>
          </thead>
          <tbody>
            {latestDates.map((date) => (
              <tr key={date} className=" ">
                <td className="py-1 px-4 border">{date}</td>
                <td className="py-1 px-4 border">
                  {timeSeries[date]['1. open']}
                </td>
                <td className="py-1 px-4 border">
                  {timeSeries[date]['2. high']}
                </td>
                <td className="py-1 px-4 border">
                  {timeSeries[date]['3. low']}
                </td>
                <td className="py-1 px-4 border">
                  {timeSeries[date]['4. close']}
                </td>
                <td className="py-1 px-4 border">
                  {timeSeries[date]['5. adjusted close']}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
