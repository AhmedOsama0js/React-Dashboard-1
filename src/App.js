import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarICon from "./components/SidebarICon/SidebarICon.jsx";
import TopCard from "./components/TopCard/TopCard";
import BarChart from "./components/BarChart";
import RecentOrders from "./components/RecentOrders/RecentOrders.jsx";
import ClintPage from "./pages/Clint/ClintPage";
import ProductPage from "./pages/Product/ProductPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App h-100 bg-success w-100">
        <div className="sidebar bg-body">
          <SidebarICon />
        </div>
        <div className="dashboard bg-light">
          <Routes>
            <Route
              path="React-Dashboard-1"
              element={
                <>
                  <TopCard />
                  <div className="ChartAndOrders p-3 justify-content-between">
                    <BarChart />
                    <RecentOrders />
                  </div>
                </>
              }
            />
            <Route path="clint" element={<ClintPage />} />
            <Route path="product" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
