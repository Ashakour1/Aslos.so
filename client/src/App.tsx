import "./App.css";
// import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import LandingPage from "./components/under-construction";
// import HomePage from "./pages/HomePage";
import CartItems from "./components/CartItems";
import ProductDetail from "./components/Products/ProductDetail";
import DesignPrinciples from "./pages/About/DesignPrinciples";
import OurPhilosophy from "./pages/About/OurPhilosophy";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/shop/sex/:sex" element={<Products />} />
          <Route path="/shop/cat/:category" element={<Products />} />
          <Route path="/shop/coll/:collection" element={<Products />} />
          <Route path="/shop/" element={<Products />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/shop/*" element={<NotFound />} />
          <Route path="/about/our-philosophy" element={<OurPhilosophy />} />
          <Route path="/cart" element={<CartItems />} />
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
