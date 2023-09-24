import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import Footer from "./components/footer";
import './css/globalComponents.css';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';

import {listArticleModels,syncArticleModels, syncAuthorModels} from './graphql/queries';

import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import renderArticle from "./components/renderArticle";

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

async function fetchArticles() {
  try {
    const response = await API.graphql(graphqlOperation(listArticleModels));
    const articles = response.data.listArticleModels.items;
    console.log(articles[0]);
    return articles;
  } catch (error) {
    console.error(error);
  }
}

async function syncArticles(lastSync) {
  const response = await API.graphql(
    graphqlOperation(syncArticleModels, {
      filter: {},
      limit: 1000,
      lastSync: lastSync,
    })
    
  );
  console.log("synced response ", response.data.syncArticleModels.items);
  const syncedItems = response.data.syncArticleModels.items;
  // Process synced items...
  return syncedItems;
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}

Amplify.configure(awsconfig);

// TODO: include <Route path="/art" element={<Art />} />
const App = () => {
  useEffect(() => {
    async function getData() {
      const syncedItems = await syncArticles(null);
      const articles = await fetchArticles();
      console.log(syncedItems);
      console.log(articles);
    }
    getData();
  }, []);

  return (
    <Router>
    <div id="header">DAY USC</div>
    <div style={{ padding: '80px' }}></div>

    {Navbar()}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
