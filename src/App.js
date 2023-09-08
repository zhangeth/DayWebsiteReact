import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import Footer from "./components/footer";

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';

import { BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import Home from "./pages/home"
import About from "./pages/about"

Amplify.configure(awsconfig);

const App = () => {
  return (
    <Router>
    {Title()}
    {Navbar()} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {Footer()}
    </Router>

  );
}

export default App;
