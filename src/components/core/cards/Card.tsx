/* eslint-disable react/function-component-definition */
// components/Card.tsx

import React from 'react';
import useFetchData from '../../../hooks/useFetchData';
// import useFetchData from '../hooks/useFetchData';.

// Define the Card component
const Card: React.FC = () => {
  // Fetch data using the custom hook
  const { data, loading, error } = useFetchData();
  // Handle loading state
  if (loading) return <div className="text-white">Loading...</div>;
  // Handle error state
  if (error) return <div>Error: {error}</div>;

  const { metaData, timeSeries } = data;
  // Handle case when no data is available
  if (!metaData || !timeSeries) return <div>No data available</div>;
  // Get the latest 5 dates from the time series data
  const latestDates = Object.keys(timeSeries).slice(0, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6 my-12 h-fit ">
      <div className="w-full h-full bg-black  rounded-xl shadow-xl text-zinc-700 leading-8 ">
        <p className="p-12">{metaData['2. Symbol']}</p>
        <p className="px-12 pt-36 text-white text-3xl">
          {metaData['1. Information']}
        </p>
        <div className=" flex gap-12 px-12">
          <p> {metaData['3. Last Refreshed']}</p>
          <p> {metaData['4. Output Size']}</p>
          <p>{metaData['5. Time Zone']}</p>
        </div>
      </div>
      <div className=" bg-black rounded-xl shadow-lg h-fit text-zinc-700 w-full p-14">
        <h2>Last 5 Days Data</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="">
              <tr>
                <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                  Date
                </th>
                <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider  ">
                  Open
                </th>
                <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider  ">
                  High
                </th>
                <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider  ">
                  Low
                </th>
                <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                  Close
                </th>
                <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider  ">
                  Adjusted Close
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">
              {latestDates.map((date) => (
                <tr key={date} className=" ">
                  <td className="py-1 lg:px-1 border">{date}</td>
                  <td className="py-1 lg:px-1 border">
                    {timeSeries[date]['1. open']}
                  </td>
                  <td className="py-1 lg:px-1 border">
                    {timeSeries[date]['2. high']}
                  </td>
                  <td className="py-1 lg:px-1 border">
                    {timeSeries[date]['3. low']}
                  </td>
                  <td className="py-1 lg:px-1 border">
                    {timeSeries[date]['4. close']}
                  </td>
                  <td className="py-1 lg:px-1 border">
                    {timeSeries[date]['5. adjusted close']}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
