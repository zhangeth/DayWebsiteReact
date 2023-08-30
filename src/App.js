import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import Footer from "./components/footer";

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';

import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import ArticleList from "./scripts/articles";

import Home from "./pages/home"
import About from "./pages/about"

Amplify.configure(awsconfig);

// TODO: include <Route path="/art" element={<Art />} />
const App = () => {
  return (
    <Router>
    {Title()}
    {Navbar()}
    {ArticleList()}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {Footer()}
    </Router>

  );
}

export default App;
