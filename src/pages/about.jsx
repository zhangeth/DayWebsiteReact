import HomeHero from "../components/homePageComponents/homeHero";
import DAYHistoryHero from "../components/aboutPageComponents/DAYHistoryHero";
import AboutOurStory from "../components/aboutPageComponents/aboutOurStory";
import AboutTeamRoles from "../components/aboutPageComponents/aboutTeamRoles";

// Eboard images
import YiAnn from "../assets/Eboard/Yi-Ann.jpg"
import Audrey from "../assets/Eboard/Audrey.jpg"
import Bryan from "../assets/Eboard/Bryan.png";
import Chris from "../assets/Eboard/Chris.jpg";
import Mindy from "../assets/Eboard/Mindy.jpg";
import Peony from "../assets/Eboard/Peony.jpg";
import Riya from "../assets/Eboard/Riya.jpg";
import Stephanie from "../assets/Eboard/Stephanie.jpg";
import Ethan from "../assets/Eboard/Ethan.jpg";


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
                            <img src={YiAnn} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Audrey} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Chris} width="100%" height="100%"/>
                        </figure>
                    </div>
                </div>
 
                <div class="row">
                    <div class="col">
                        <h5> Founder and Co-President </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Yi-Ann Li </h5>
                    </div>
                    <div class="col">
                        <h5> Co-President</h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Audrey Xia </h5>
                    </div>
                    <div class="col">
                        <h5> VP Internal Relations </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Chris Kwon </h5>
                    </div>
                </div>

                <div class="py-2"></div>

                <div class="row">
                    <div class="col">
                        <figure class="image is-256x256" width="100%" height="100%">
                            <img src={Stephanie} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Peony} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Mindy} width="100%" height="100%"/>
                        </figure>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <h5> VP External Relations </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Stephanie Tong </h5>
                    </div>
                    <div class="col">
                        <h5> Creative Director</h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Peony Duong </h5>
                    </div>
                    <div class="col">
                        <h5> Programming Director </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Mindy Dang </h5>
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
                            <img src={Bryan} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="256px" height="256px">
                            <img src={Ethan} width="100%" height="100%"/>
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
                        <h5> Finance Director</h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Bryan Choi </h5>
                    </div>
                    <div class="col">
                        <h5> Web Lead </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <h5 style={{'color':'black'}}> Ethan Zhang </h5>
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