import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/shared/sidebr/SideBar';
import {
  DetailsPage,
  HelpPage,
  HomePage,
  MarketPage,
  StockPage,
} from './pages';
// bg-red-900 sm:bg-teal-500 md:bg-blue-400 lg:bg-pink-500 xl:bg-green-400

function App() {
  return (
    <div className="w-full bg-zinc-900 flex gap-5">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
