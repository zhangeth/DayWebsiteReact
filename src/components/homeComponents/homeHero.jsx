import daybanner from "../../assets/DAYBanner.png";
import "../../css/about.css"
function HomeHero() {
	return (
        <div>
            <div class="about-row p-4 pb-0 pe-lg-0 border shadow-lg">
                <div class="col p-3 p-lg-5 pt-lg-3">
                    <h1 class="about-title">ABOUT DAY</h1>
                    <p class="about-body">We are a group of Asian youths striving to uplift marginalized communities through education, activism, and celebration. 
                        Reach out if you want to share your unique experiences.
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    </div>
                </div>
            </div>
            <div>
                <img class="about-image" src={daybanner}  alt="" width="720"/>
            </div>
        </div>
    );
}

export default HomeHero;