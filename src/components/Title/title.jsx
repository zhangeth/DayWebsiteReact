//import headshot from "./headshot3.jpg";
//import { motion } from "framer-motion";
//import animationConstants from "../../constants";
import daylogo from "./DayLogo.jpg";

function Title() {
	//const ani = animationConstants;
	return (
		<header class="py-3 mb-4 border-bottom">
            <div class="container d-flex flex-wrap justify-content-center">
            <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            <figure class="image is-128x128">
                <img src={daylogo} width="128" height="128"/>
            </figure>
                <span class="fs-4">BUTTHOLE</span>
            </a>
            </div>
        </header>
	);
}

export default Title;