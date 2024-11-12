import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage"; // your home page component
import AboutUs from "./components/AboutUs/AboutUs"; // your about us page component
import Partners from "./components/Partners/Partners";
import DrivingForce from "./components/DrivingForce/DrivingForce";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/driving-force" element={<DrivingForce />} />
      </Routes>
    </Router>
  );
}

export default App;
