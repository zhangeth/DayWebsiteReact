import HomeHero from "../components/HomeHero/homeHero";
import AboutHero from "../components/aboutComponents/aboutHero";

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
            <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">


            </a>
            <div class="container">
                <div class="row">
                    <div>
                        <h2 class="lh-1">Meet the Team</h2>
                    </div>
                </div>

                <div class="row py-0">
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
                            <img src={Mindy} width="100%" height="100%"/>
                        </figure>
                    </div>
                </div>

                <div class="row py-0">
                    <div class="col">
                        <h5> Chapter President </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <p> Yi-Ann Li </p>
                    </div>
                    <div class="col">
                        <h5> Co-President</h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <p> Audrey Xia </p>
                    </div>
                    <div class="col">
                        <h5> Chapter President </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <p> Mindy </p>
                    </div>
                </div>
                    
                <div class="row py-0">
                    <div class="col">
                        <figure class="image is-256x256" width="100%" height="100%">
                            <img src={Chris} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Stephanie} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Riya} width="100%" height="100%"/>
                        </figure>
                    </div>
                </div>

                <div class="row py-0">
                    <div class="col">
                        <h5> Chapter President </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <p> Yi-Ann Li </p>
                    </div>
                    <div class="col">
                        <h5> Co-President</h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <p> Audrey Xia </p>
                    </div>
                    <div class="col">
                        <h5> Chapter President </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <p> Mindy </p>
                    </div>
               </div>

               <div class="row py-0">
                    <div class="col">
                        <figure class="image is-256x256" width="100%" height="100%">
                            <img src={Peony} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Bryan} width="100%" height="100%"/>
                        </figure>
                    </div>
                    <div class="col">
                        <figure width="100%" height="100%">
                            <img src={Ethan} width="100%" height="100%"/>
                        </figure>
                    </div>
                </div>

                <div class="row py-0">
                    <div class="col">
                        <h5> Chapter President </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <p> Yi-Ann Li </p>
                    </div>
                    <div class="col">
                        <h5> Co-President</h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <p> Audrey Xia </p>
                    </div>
                    <div class="col">
                        <h5> Chapter President </h5>
                    </div>
                    <div class="col" style={{'textAlign':'right'}}>
                        <p> Mindy </p>
                    </div>
                </div>
            </div>
            </div>
	);
}
export default About;