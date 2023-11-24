import Footer from "./components/footer";

import './css/globalComponents.css';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { listArticles } from './graphql/queries';
import awsconfig from './aws-exports';

import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./pages/home"
import About from "./pages/about"
import Articles from "./pages/articles";
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

Amplify.configure(awsconfig);

const App = () => {
  let [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect starts running while rendering
  useEffect(() => {
    async function fetchArticles() {
      try {
        const deletedFilter = { _deleted: { ne: true } };
    
        let articles = await API.graphql(
          graphqlOperation(listArticles, {
            deletedFilter,
            limit: 10,
          })
        );
        console.log(articles.data.listArticles.items);

        setArticles(articles.data.listArticles.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
    <a href="/">
      <h1 id="header"> DAY USC </h1>
    </a>
    
    <div id="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/articles">Articles</a>
      <a href="/magazine">Magazine</a>
    </div>

    <div style={{'padding': '80px'}}></div>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element = {<Articles />} />
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
