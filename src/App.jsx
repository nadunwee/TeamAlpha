import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage"; // your home page component
import AboutUs from "./components/AboutUs/AboutUs"; // your about us page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
