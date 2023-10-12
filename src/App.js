import Footer from "./components/footer";

import './css/globalComponents.css';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from './aws-exports';

import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import Home from "./pages/home"
import About from "./pages/about"
import Upload from "./pages/upload"
 
// article pages for now
import Colonialism from "./pages/colonialism";
import Monterey from "./pages/monterey";
import Kpop from "./pages/kpop";
import Fashion from "./pages/fashion";
import Halmoni from "./pages/prose/halmoni";

let previousScrollPosition = 0;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let goingDown = false;
  let scrollPosition = window.scrollY;

  if (scrollPosition > previousScrollPosition) {
    goingDown = true;
  }

  previousScrollPosition = scrollPosition;

  if (goingDown) {
    document.getElementById("header").style.fontSize = "30px";
    document.getElementById("navbar").style.top = "-50px";

  } else {
    document.getElementById("header").style.fontSize = "90px";
    document.getElementById("navbar").style.top = "108px";
  }

}

Amplify.configure({
  ...awsconfig,
  ssr: true
});

const App = () => {
  return (
    <Router>
    <a href="/">
      <h1 id="header"> DAY USC </h1>
    </a>
    
    <div id="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/upload">Upload</a>
    </div>

    <div style={{'padding': '80px'}}></div>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/upload" element={<Upload />} />
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
