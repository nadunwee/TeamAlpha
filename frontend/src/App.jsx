import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import Partners from "./components/Partners/Partners";
import DrivingForce from "./components/DrivingForce/DrivingForce";
import BoardOfOfficials from "./components/DrivingForce/BoardOfOfficials";
import ContactUs from "./components/ContactUs/ContactUs";
import FAQ from "./components/FAQ/FAQ";
import ScavengerHunt from "./components/ScavengerHunt/ScavengerHunt";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/driving-force" element={<DrivingForce />} />
        <Route path="/board-of-officials" element={<BoardOfOfficials />} />
        <Route path="/scavenger-hunt" element={<ScavengerHunt />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
