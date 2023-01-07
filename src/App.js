import HomeHero from "./components/HomeHero/homeHero";
import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import PostLists from "./components/postlists"
import Posts from "./components/posts"

import Main from "./pages/main"

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import Art from "./pages/art"
import Home from "./pages/home"

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

const App = () => {
  return (

    <Router>
    {Navbar()}
     


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
      </Routes>
    </Router>

  );
}

export default App;
