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

            <div>
                <h2 class="py-2" style={{textAlign:'center'}}> Our Story </h2>
            </div>

            <div>
                <h5 class="py-2" style={{textAlign:'center'}}>
                    <i>We are a campus chapter at the University of Southern California of the nonprofit organization Dear Asian Youth, dedicated to uplifting and empowering the narratives of Asian youth across the globe.</i>
                </h5>
            </div>

            <div>
                <p class="py-2">
                This is a space for anyone who identifies as Asian Pacific Islander Desi American (APIDA) to share their stories and voice–to talk about your triumphs, your struggles, what makes you you, what makes up your world. Even if you don’t identify as APIDA, you are always welcome here; we are an inclusive space striving to uplift marginalized communities through creativity, education, and meaningful discussion.
                </p>
            </div>

            <div>
                <p class="py-2">
                At the beginning of the pandemic, I suddenly found myself surrounded not by the busy bustle of what I expected in my senior year, but the silence and boredom of my bedroom. Eager to exercise my creative juices, I came across Dear Asian Youth (back then, just a blog started by my former classmate, Stephanie Hu, for Asian youth to share their writing). I submitted one prose piece detailing my struggles growing up Asian American, and pretty soon, found myself as a writer on a full-fledged literature staff.
                </p>
            </div>

            <div>
                <p class="py-2">
                I was inspired by the family of passionate individuals working with me who, no matter which background, were dedicated to sharing their stories, celebrating each other, and educating the world on important matters surrounding social justice and civic engagement. When Dear Asian Youth finally became a registered nonprofit and started opening community and school chapters around the globe I knew I wanted to bring a similar space to USC…   
                </p>
            </div>

            <div>
                <p class="py-2">
                …which brings us to now. I’m so happy you’re here. I hope you’ll stay around, and whether you decide to join our rapidly growing family or simply want to look around, I hope you’ll take with you the same amount of joy and growth from the pieces by our talented writers and illustrators as I do.
                </p>
            </div>

            <div>
                <h5 class="py-4" style={{textAlign:'right'}}> Yi-Ann (Chapter President) </h5>
            </div>

            <div>
                <h2 class="py-4" style={{textAlign:'center'}}> Team Roles </h2>
            </div>

            <div>
                <h5 class="py-2">
                    <i>Illustrators</i>
                </h5>
            </div>

            <div>
                <p class="py-2">
                Curates infographics and graphics to share on DAY’s social media platforms. Also, illustrates images used for promotion and events.
                </p>
            </div>

            <div>
                <h5 class="py-2">
                    <i>Writers</i>
                </h5>
            </div>

            <div>
                <p class="py-2">
                Research current events regarding APIDA issues to include in DAY USC’s social media posts. Writes short stories, prose, poems, and general creative writing related to the APIDA experience.
                </p>
            </div>

            <div>
                <h5 class="py-2">
                    <i>Editors</i>
                </h5>
            </div>

            <div>
                <p class="py-2">
                Works alongside writers, assisting them with grammar and fact-checking, the credibility of sources, and producing literature pieces as well as IG captions.
                </p>
            </div>

            <div>
                <h5 class="py-2">
                    <i>Projects</i>
                </h5>
            </div>

            <div>
                <p class="py-2">
                Brainstorms and develops activities and events promoting DAY’s mission. Collaborates with other (campus) organizations to host events.
                </p>
            </div>

            <div>
                <h5 class="py-2">
                    <i>Finance</i>
                </h5>
            </div>

            <div>
                <p class="py-2">
                Works with Treasurer to plan/run fundraising activities that go toward DAY USC activities such as potlucks, merch, and fundraising for charities/local Asian businesses.
                </p>
            </div>

            </div>
	);
}
export default About;