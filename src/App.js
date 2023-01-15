import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import Home from "./pages/home"
import About from "./pages/about"
import Art from "./pages/art"

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

const App = () => {
  return (

    <Router>
    {Title()}
    {Navbar()}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/art" element={<Art />} />
      </Routes>
    </Router>

  );
}

export default App;
