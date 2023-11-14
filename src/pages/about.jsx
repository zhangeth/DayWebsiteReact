import HomeHero from "../components/homeComponents/homeHero";
import DAYHistoryHero from "../components/aboutComponents/DAYHistoryHero";
import AboutOurStory from "../components/aboutComponents/aboutOurStory";
import AboutTeamRoles from "../components/aboutComponents/aboutTeamRoles";
import eboardTemplate from "../components/aboutComponents/eboardTemplate";
import daybanner from "../assets/DAYBanner.png";
import "../css/about.css"
// Eboard images
import Audrey from "../assets/Eboard/Audrey.jpg"
import Jeen from "../assets/Eboard/Jeen.jpg";
import Joseph from "../assets/Eboard/Joseph.jpg";
import Heidi from "../assets/Eboard/Heidi.jpg";
import Peony from "../assets/Eboard/Peony.jpg";
import Riya from "../assets/Eboard/Riya.jpg";
import Stephanie from "../assets/Eboard/Stephanie.jpg";
import Eric from "../assets/Eboard/Eric.jpg";
import Andrew from "../assets/Eboard/Andrew.jpg";
const title = "ABOUT DAY";
const message = "We are a group of Asian youths striving to uplift marginalized communities through education, activism, and celebration. Reach out if you want to share your unique experiences.";

const pics = [Audrey, Stephanie, Peony, Heidi, Jeen, Andrew, Riya, Eric, Joseph];
const positions = ["President", "Vice President", "Creative Director", "Programming Director", "PR Director", "Finance Director", "Lead Editor", "Co-Web Lead", "Co-Web Lead"];
const names = ["Audrey Xia", "Stephanie Tong", "Peony Duong", "Heidi Arromdee", "Jeen Lee", "Andrew Kim", "Riya Valaulikar", "Eric Chen", "Joseph Caluya"];

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