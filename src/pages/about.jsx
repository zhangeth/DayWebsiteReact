import HomeHero from "../components/homeComponents/homeHero";
import DAYHistoryHero from "../components/aboutComponents/DAYHistoryHero";
import AboutOurStory from "../components/aboutComponents/aboutOurStory";
import AboutTeamRoles from "../components/aboutComponents/aboutTeamRoles";
import eboardTemplate from "../components/aboutComponents/eboardTemplate";
import daybanner from "../assets/DAYBanner.png";
import "../css/about.css"
// Eboard images
import Heidi from "../assets/Eboard/heidi_eboard.jpeg";
import Peony from "../assets/Eboard/peony_eboard.jpeg";
import Celine from "../assets/Eboard/celine_eboard.jpeg";
import Andrew from "../assets/Eboard/andrew_eboard.jpeg";
import Jeen from "../assets/Eboard/jeen_eboard.jpeg";
import Riya from "../assets/Eboard/riya_eboard.jpeg";
import Joseph from "../assets/Eboard/joseph_eboard.jpeg";
import Eric from "../assets/Eboard/eric_eboard.jpg";
import Emma from "../assets/Eboard/emma_eboard.jpeg";
import Sean from "../assets/Eboard/sean_eboard.jpeg";
import Lindsey from "../assets/Eboard/lindsey_eboard.jpeg";

// import Audrey from "../assets/Eboard/Audrey.jpg"
// import Jeen from "../assets/Eboard/Jeen.jpg";
// import Joseph from "../assets/Eboard/Joseph.jpg";
// import Heidi from "../assets/Eboard/Heidi.jpg";
// import Peony from "../assets/Eboard/Peony.jpg";
// import Riya from "../assets/Eboard/Riya.jpg";
// import Stephanie from "../assets/Eboard/Stephanie.jpg";
// import Eric from "../assets/Eboard/Eric.jpg";
// import Andrew from "../assets/Eboard/Andrew.jpg";
const title = "ABOUT DAY";
const message = "We are a group of Asian youths striving to uplift marginalized communities through education, activism, and celebration. Reach out if you want to share your unique experiences.";

const pics = [Heidi, Peony, Celine, Andrew, Jeen, Riya, Joseph, Eric, Emma, Sean, Lindsey];
const positions = ["Co-President", "Co-President", "Programming Director", "Finance Director", "PR Director", "Lead Editor", "Lead Editor", "Web Lead", "Media Director", "Finance Intern", "Creative Director"];
const names = ["Heidi Arromdee", "Peony Duong", "Celine Chen", "Andrew Kim", "Jeen Lee", "Riya Valaulikar", "Joseph Caluya", "Eric Chen", "Emma Smith", "Sean Li", "Lindsey Piano"];

function About() { 
	return (
		<div className="py-3 mb-4 border-bottom">
            {HomeHero(title, message)}
            <div>
                <img className="about-image" src={daybanner}  alt="" width="720"/>
            </div>
            {DAYHistoryHero()}

            <a 
                href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            </a>
            
            <div className="container">
                <div className="row">
                    <div>
                        <h2 className="about-subtitle">MEET THE TEAM</h2>
                    </div>
                </div>
                {eboardTemplate(pics, positions, names)}
            </div>

            <div className="py-4"></div>

            {AboutOurStory()}

            {AboutTeamRoles()}
        </div>
	);
}
export default About;