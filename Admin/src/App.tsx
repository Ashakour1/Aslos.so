import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/nav/Header.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ProductFormPage from "./pages/ProductFormPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/dashboard/products/add" element={<ProductFormPage />} />
          <Route path="/dashboard/product/update/:id" element={<ProductFormPage />} />
          
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/dashboard/products" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
