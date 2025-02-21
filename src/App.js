import Footer from "./components/footer";

import './css/globalComponents.css';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { list, getProperties } from 'aws-amplify/storage';
import { StorageImage } from '@aws-amplify/ui-react-storage';

import awsconfig from './aws-exports';

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import Home from "./pages/home"
import About from "./pages/about"
import Articles from "./pages/articles"
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
import Housewithoutyou from "./pages/prose/housewithoutyou";
import Tomydaughter from "./pages/prose/tomydaughter";
import Myoldfriend from "./pages/prose/myoldfriend";
import Teaser from "./pages/fall23zineteaser";
import ErrorBoundary from "./pages/errorboundary"

Amplify.configure(awsconfig);

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
    document.getElementById("navbar").style.top = "-50px";

  } else {
    document.getElementById("navbar").style.top = "96px";
  }

}

function ImagesComponent()
{
  const [data, setData] = useState(null);

  useEffect(() => {
    const listImages = async () => {
      try 
      {
        const response = await list({
          prefix:''
        });

        setData(response.items);
      }
      catch (error)
      {
        console.log(`Error: ${error}`);
      }
    };

    listImages();
  }, []);

  return (
    <div>
      {data ? (
        // Render the data once it's available
        <div>
          {data.map((item) => (
            <StorageImage alt='balls' imgKey={item.key} accessLevel="guest"/>
          ))}
        </div>
      ) : (
        // Render a loading indicator while data is being fetched
        <div>Loading...</div>
      )}
    </div>
  );
}

const App = () => {
  return (
    <Router>
    <a href="/">
      <h1 id="header"> DAY USC </h1>
    </a>
    
    <div id="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/magazine">Magazine</a>      
    </div>

    <div style={{'padding': '40px'}}></div>
    
    <Routes>
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />}/>
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<Articles />} />
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
      <Route path="/reflections" element={<Reflections/>} />
      <Route path="/utahboys" element={<Utahboys />} errorElement={<ErrorBoundary />}/>
      <Route path="/housewithoutyou" element={<Housewithoutyou/>} />
      <Route path="/tomydaughter" element={<Tomydaughter/>} />
      <Route path="/myoldfriend" element={<Myoldfriend/>} />
      <Route path="/fall23zine" element={<Teaser/>} />
      <Route path="*" element={<ErrorBoundary />} errorElement={<ErrorBoundary />}/>
    </Routes>

    <div id="footing" className="row">{Footer()}</div>
    </Router>
  );
}

export default App;
