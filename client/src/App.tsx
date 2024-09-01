import "./App.css";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Header from "./components/Header";
import NotFound from "./components/NotFound";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/shop/sex/:sex" element={<Products />} />
          <Route path="/shop/cat/:category" element={<Products />} />
          <Route path="/shop/coll/:collection" element={<Products />} />
          <Route path="/shop/" element={<Products />} />
          {/* <Route path="/shope/*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
