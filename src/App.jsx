import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage"; // your home page component
import AboutUs from "./components/AboutUs/AboutUs"; // your about us page component
import Partners from "./components/Partners/Partners";
import DrivingForce from "./components/DrivingForce/DrivingForce";
import BoardOfOfficials from "./components/DrivingForce/BoardOfOfficials";
import ContactUs from "./components/ContactUs/ContactUs";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/driving-force" element={<DrivingForce />} />
        <Route path="/board-of-officials" element={<BoardOfOfficials />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
