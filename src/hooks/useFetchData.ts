// hooks/useFetchData.ts

import { useState, useEffect } from 'react';
import { API_URL } from '../utils/constants';

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

const useFetchData = () => {
  const [data, setData] = useState<TimeSeriesData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result['Time Series (Daily)']);
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
