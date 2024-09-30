import "./App.css";
// import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
// import HomePage from "./pages/HomePage";
import CartItems from "./components/CartItems";
import Header from "./components/Header";
import ProductDetail from "./components/Products/ProductDetail";
import DesignPrinciples from "./pages/About/DesignPrinciples";
import OurPhilosophy from "./pages/About/OurPhilosophy";
import HomePage from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import Checkout from "./components/Checkout";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Router>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/shop/sex/:sex" element={<Products />} />
          <Route path="/shop/cat/:category" element={<Products />} />
          <Route path="/shop/coll/:collection" element={<Products />} />
          <Route path="/shop/" element={<Products />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/shop/*" element={<NotFound />} />
          <Route path="/about/our-philosophy" element={<OurPhilosophy />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/check" element={<Checkout />} />
          <Route
            path="/about/design-principles"
            element={<DesignPrinciples />}
          />
          <Route path="/about/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
