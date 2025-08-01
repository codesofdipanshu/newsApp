import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Newsboard from "./Components/Newsboard";
import Footer from "./Components/Footer";
import { useState } from "react";
import Register from "./pages/Register"; // ✅ Import register page
import Login from "./pages/Login";  
import './index.css';     // ✅ Import login page

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <Router>
      <Navbar setCategory={setCategory} />

      <Routes>
        {/* Home page for news */}
        <Route path="/" element={<Newsboard category={category} />} />

        {/* Auth pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
