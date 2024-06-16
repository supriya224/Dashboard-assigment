// interfaces/StockData.ts

export interface TimeSeries {
  [key: string]: {
    '1. open': string;
    '2. high': string;
    '3. low': string;
    '4. close': string;
    '5. volume': string;
  };
}

export interface StockData {
  'Meta Data'?: {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Interval': string;
    '5. Output Size': string;
    '6. Time Zone': string;
  };
  'Time Series (5min)'?: TimeSeries;
  Note?: string; // To handle API rate limit messages
  'Error Message'?: string; // To handle invalid API calls
}
