import HomeHero from "../components/homeComponents/homeHero";
import DAYHistoryHero from "../components/aboutComponents/DAYHistoryHero";
import AboutOurStory from "../components/aboutComponents/aboutOurStory";
import AboutTeamRoles from "../components/aboutComponents/aboutTeamRoles";
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

function About() {
	return (
		<div class="py-3 mb-4 border-bottom">
            {HomeHero()}
            {DAYHistoryHero()}

            <a 
                href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            </a>
            
            <div class="container">
                <div class="row">
                    <div>
                        <h2 class="about-subtitle">MEET THE TEAM</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                            <img class="circular-picture" src={Audrey}/>
                    </div>
                    <div class="col-4">
                            <img class="circular-picture" src={Stephanie}/>
                    </div>
                    <div class="col-4">
                            <img class="circular-picture" src={Peony}/>
                    </div>
                </div>
 
                <div class="row">
                    <div class="col-4">
                        <div class="row">
                            <h5 class="about-subtitle2"> President </h5>
                        </div>
                        <div class="row">
                            <h6 class="about-body"> Audrey Xia </h6>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <h5 class="about-subtitle2"> Vice President </h5>
                        </div>
                        <div class="row">
                            <h6 class="about-body"> Stephanie Tong </h6>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <h5 class="about-subtitle2"> Creative Director </h5>
                        </div>
                        <div class="row">
                            <h6 class="about-body"> Peony Duong </h6>
                        </div>
                    </div>
                </div>

                <div class="py-2"></div>

                <div class="row">
                    <div class="col">
                            <img class="circular-picture" src={Heidi}/>
                    </div>
                    <div class="col">
                            <img class="circular-picture" src={Jeen}/>
                    </div>
                    <div class="col">
                            <img class="circular-picture" src={Andrew}/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        <div class="row">
                            <h5 class="about-subtitle2"> Programming Director </h5>
                        </div>
                        <div class="row">
                            <h6 class="about-body"> Heidi Arromdee </h6>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <h5 class="about-subtitle2"> PR Director </h5>
                        </div>
                        <div class="row">
                            <h6 class="about-body"> Jeen Lee </h6>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <h5 class="about-subtitle2"> Finance Director </h5>
                        </div>
                        <div class="row">
                            <h6 class="about-body"> Andrew Kim </h6>
                        </div>
                    </div>
               </div>
               
               <div class="py-2"></div>

               <div class="row">
                    <div class="col">
                            <img class="circular-picture" src={Riya}/>
                    </div>
                    <div class="col">
                            <img class="circular-picture" src={Eric}/>
                    </div>
                    <div class="col">
                            <img class="circular-picture" src={Joseph}/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        <div class="row">
                            <h5 class="about-subtitle2"> Lead Editor </h5>
                        </div>
                        <div class="row">
                            <h6 class="about-body"> Riya Valaulikar </h6>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <h5 class="about-subtitle2"> Co-Web Lead </h5>
                        </div>
                        <div class="row">
                            <h6 class="about-body"> Eric Chen </h6>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <h5 class="about-subtitle2"> Co-Web Lead </h5>
                        </div>
                        <div class="row">
                            <h6 class="about-body"> Joseph Caluya </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-4"></div>

            {AboutOurStory()}

            {AboutTeamRoles()}
        </div>
	);
}
export default About;