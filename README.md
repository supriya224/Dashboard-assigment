# Stock Market Dashboard

This project is a Stock Market Dashboard built using React and TypeScript. It fetches and displays stock data, including metadata and time series information, and presents it in a user-friendly interface. The dashboard includes components to display a summary card, a detailed table, and a line chart showing the stock's performance over different time ranges.

## Features

- **Card Component**: Displays stock metadata such as symbol, information, last refreshed date, output size, and time zone.
- **Table Component**: Shows the stock's open, high, low, close, and adjusted close prices for the last five days.
- **Chart Component**: Visualizes the stock's close price over different time ranges (1D, 1W, 1M, 3M, 1Y, All).
- **Sidebar Navigation**: Provides links to different sections of the dashboard with active state indication and dynamic icon colors.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Dashboard-assigment.git
   cd Dashboard-assigment
Usage
After starting the development server, navigate to http://localhost:3000 in your web browser to view the dashboard.

## Project Structure
1. components: Contains the core components of the application.
2. card.tsx: Displays stock metadata and the last five days' data in a table.
3. Charts.tsx: Displays a line chart of the stock's close prices over different time ranges.
4. hooks: Contains custom hooks used in the application.
5. useFetchData.ts: Custom hook to fetch stock data from the API.
6. layouts: Contains layout components for the application.
7. pages: Contains the main pages of the application.
8. HomePage.tsx: The main page of the dashboard.
9. utils: Contains utility files.
constants.ts: Contains constant values used throughout the application.

## API
The application fetches stock data from an external API. Update the API_URL in hooks/useFetchData.ts with the appropriate endpoint.

## Customization
Sidebar Active State and Icon Colors
In the SideBar component, the active state of the menu items is indicated by a blue right border and dynamic icon colors. Modify the CSS classes to customize the appearance.

## Chart Size
To adjust the chart size, modify the style attribute in the Chart component.

