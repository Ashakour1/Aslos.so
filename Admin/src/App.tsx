import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/nav/Header.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ProductFormPage from "./pages/ProductFormPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";

import { PropsWithChildren } from "react";
import Dashboard from "./pages/Dashboard.tsx";
import OrdersPage from "./pages/OrdersPage.tsx";

const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Toaster />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard/products/add"
            element={
              <MainLayout>
                <ProductFormPage />
              </MainLayout>
            }
          />
          <Route
            path="/dashboard/product/update/:id"
            element={
              <MainLayout>
                <ProductFormPage />
              </MainLayout>
            }
          />

          <Route
            path="/dashboard/products"
            element={
              <MainLayout>
                <ProductPage />
              </MainLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
          />
          <Route path="*" element={<div>404</div>} />
          <Route
            path="/dashboard/orders"
            element={
              <MainLayout>
                <OrdersPage />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
