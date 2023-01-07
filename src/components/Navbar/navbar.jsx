import ArtPage from "../../pages/art";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
	//const ani = animationConstants;
	return (
    <nav class="py-2 bg-light border-bottom">
        <div class="container d-flex flex-wrap">
        <ul class="nav me-auto"> </ul>
        <ul class="nav">
            <li class="nav-item"><a href="/" class="nav-link link-dark px-2">Home</a></li>
            <li class="nav-item"><a href="/art" class="nav-link link-dark px-2">About</a></li>
            <li class="nav-item"><a href="/art" class="nav-link link-dark px-2">Art</a></li>
        </ul>
        </div>
    </nav>
    );
}
export default Navbar;