// hooks/useFetchData.ts

import { useState, useEffect } from 'react';
import { API_URL } from '../utils/constants';
// Interface for the metadata returned by the API
interface MetaData {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Output Size': string;
  '5. Time Zone': string;
}

// Interface for the time series data returned by the API
interface TimeSeriesData {
  [date: string]: {
    '1. open': string;
    '2. high': string;
    '3. low': string;
    '4. close': string;
    '5. adjusted close': string;
    '6. volume': string;
    '7. dividend amount': string;
    '8. split coefficient': string;
  };
}

// Interface for the fetch data state
interface FetchData {
  metaData: MetaData | null;
  timeSeries: TimeSeriesData | null;
}

// Custom hook to fetch data from the API
const useFetchData = () => {
  const [data, setData] = useState<FetchData>({
    metaData: null,
    timeSeries: null,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData({
          metaData: result['Meta Data'],
          timeSeries: result['Time Series (Daily)'],
        });
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchData;
