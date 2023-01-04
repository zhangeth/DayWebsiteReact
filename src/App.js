import HomeHero from "./components/HomeHero/homeHero";
import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import Main from "./pages/main"

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Art from "./pages/art"
import Home from "./pages/home"

const App = () => {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/art" style={{ padding: 5 }}>
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
      </Routes>
    </Router>
  );
}

export default App;
