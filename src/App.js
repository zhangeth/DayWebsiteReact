import Footer from "./components/footer";

import './css/globalComponents.css';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';

import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import Home from "./pages/home"
import About from "./pages/about"
import Magazine from "./pages/magazine";
 
// article pages for now
import Halmoni from "./pages/poetry/halmoni";
import Comfortfilms from "./pages/comfortfilms";
import Apidawomen from "./pages/apidawomen";
import Eeaao from "./pages/eeaao";
import Aaab from "./pages/aaab";
import Flight from "./pages/prose/flight";
import Grace from "./pages/grace";
import Lolsorry from "./pages/lolsorrydepressing";
import Plushy from "./pages/poetry/odetoplushy"
import Expectations from "./pages/prose/familyexpectations";
import Utahboys from "./pages/poetry/utahboys";
import Reflections from "./pages/reflections";


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
function splashIn(){
  document.querySelector("#splash-header").style.top = "0vh";
}

function splashOut(){
  document.querySelector("#splash-header").style.top = "-100vh";
  document.querySelector("#splash-backdrop").style.top = "-100vh";
  document.querySelector("#splash-backdrop").style.visibility = "hidden";

}

// splashIn();
setTimeout(function() {
  splashIn();
}, 500);

setTimeout(function() {
  splashOut();
}, 2000);

Amplify.configure(awsconfig);

const App = () => {
  return (
    <Router>

    <div id="splash-backdrop">
    </div>

    <div id="splash-header">
      <div id="splash-text"><b>Dear Asian Youth</b></div>
    </div>

    <a href="/">
      <h1 id="header"> DAY USC </h1>
    </a>
    
    <div id="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/magazine">Magazine</a>
    </div>

    <div style={{'padding': '80px'}}></div>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/comfortfilms" element={<Comfortfilms />} />
      <Route path="/halmoni" element={<Halmoni />} />
      <Route path="/apidawomen" element={<Apidawomen />} />
      <Route path="/eeaao" element={<Eeaao />} />
      <Route path="/aaab" element={<Aaab />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/grace" element={<Grace />} />
      <Route path="/magazine" element={<Magazine />} />
      <Route path="/lolsorry" element={<Lolsorry/>} />
      <Route path="/plushy" element={<Plushy />} />
      <Route path="/expectations" element={<Expectations/>} />
      <Route path="/utahboys" element={<Utahboys/>} />
      <Route path="/reflections" element={<Reflections/>} />

    </Routes>

    {Footer()}
    </Router>
  );
}



export default App;
