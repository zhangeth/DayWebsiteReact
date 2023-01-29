import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import Footer from "./components/footer";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import Home from "./pages/home"
import About from "./pages/about"
import Art from "./pages/art"
 
// article pages for now
import Colonialism from "./pages/colonialism";
import Monterey from "./pages/monterey";
import Kpop from "./pages/kpop";
import Fashion from "./pages/fashion";
import Halmoni from "./pages/prose/halmoni";

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
        <Route path="/colonialism" element={<Colonialism />} />
        <Route path="/monterey" element={<Monterey />} />
        <Route path="/kpop" element={<Kpop />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/halmoni" element={<Halmoni />} />
      </Routes>
      {Footer()}
    </Router>

  );
}

export default App;
