import ArtPage from "../../pages/art";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
	//const ani = animationConstants;
	return (
    <nav class="py-2 bg-light border-bottom">
        <div class="container d-flex flex-wrap">
        <ul class="nav me-auto">
            <li class="nav-item"><Link to="/art">Features</Link></li>
        </ul>
        <ul class="nav">
            <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Login</a></li>
            <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Sign up</a></li>
        </ul>
        </div>
    </nav>);
}
export default Navbar;