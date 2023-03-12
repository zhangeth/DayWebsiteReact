import ArtPage from "../../pages/art";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
	//const ani = animationConstants;
	return (
    <nav class="py-0 bg-light border-bottom">
        <div class="container d-flex justify-content-center">
            <ul class="nav">
                <li class="nav-item"><a href="/" class="nav-link link-dark px-2">Home</a></li>
                <li class="nav-item"><a href="/about" class="nav-link link-dark px-2">About</a></li>
                <li class="nav-item"><a href="/art" class="nav-link link-dark px-2">Art</a></li>
                <li class="nav-item"><a href="/literature" class="nav-link link-dark px-2">Literature</a></li>
            </ul>
        </div>
    </nav>
    );
}
export default Navbar;