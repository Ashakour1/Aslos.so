import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
// import Header from "./components/Header";
import LandingPage from "./components/under-construction";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
