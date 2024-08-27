import "./App.css";
// import Header from "./components/Header";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import LandingPage from "./components/under-construction";
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
          <Route path="/shope/:sex" element={<Products />} />
          <Route path="/shope/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
