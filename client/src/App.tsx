import "./App.css";
// import Header from "./components/Header";
// import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import LandingPage from "./components/under-construction";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
