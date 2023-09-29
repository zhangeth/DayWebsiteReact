import HomeHero from "../components/homeComponents/homeHero";
import AboutHero from "../components/aboutComponents/aboutHero";
import DAYHistoryHero from "../components/aboutComponents/DAYHistoryHero";
import AboutOurStory from "../components/aboutComponents/aboutOurStory";
import AboutTeamRoles from "../components/aboutComponents/aboutTeamRoles";

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
                        <h2 class="lh-1 border-bottom">Meet the Team</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <figure class="image is-256x256" width="100%" height="100%">
                            <img src={Audrey} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Stephanie} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Peony} width="100%" height="100%"/>
                        </figure>
                    </div>
                </div>
 
                <div class="row">
                    <div class="col">
                        <h5> President </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Audrey Xia </h5>
                    </div>
                    <div class="col">
                        <h5> Vice President</h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Stephanie Tong </h5>
                    </div>
                    <div class="col">
                        <h5> Creative Director </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Peony Duong </h5>
                    </div>
                </div>

                <div class="py-2"></div>

                <div class="row">
                    <div class="col">
                        <figure class="image is-256x256" width="100%" height="100%">
                            <img src={Heidi} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Jeen} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Andrew} width="100%" height="100%"/>
                        </figure>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <h5> Programming Director </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Heidi Arromdee </h5>
                    </div>
                    <div class="col">
                        <h5> PR Director </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Jeen Lee </h5>
                    </div>
                    <div class="col">
                        <h5> Finance Director </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Andrew Kim </h5>
                    </div>
               </div>
               
               <div class="py-2"></div>

               <div class="row">
                    <div class="col">
                        <figure class="image is-256x256" width="100%" height="100%">
                            <img src={Riya} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Eric} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="256px" height="256px">
                            <img src={Joseph} width="100%" height="100%"/>
                        </figure>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <h5> Lead Editor </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Riya Valaulikar </h5>
                    </div>
                    <div class="col">
                        <h5> Co-Web Lead</h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Eric Chen </h5>
                    </div>
                    <div class="col">
                        <h5> Co-Web Lead </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Joseph Caluya </h5>
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