import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/shared/sidebr/SideBar';
import {
  DetailsPage,
  HelpPage,
  HomePage,
  MarketPage,
  StockPage,
} from './pages';

function App() {
  return (
    <div className="w-full flex gap-12 bg-zinc-900 ">
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
