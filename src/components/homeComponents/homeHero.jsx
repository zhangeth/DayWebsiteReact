import daybanner from "../../assets/DAYBanner.png";

function HomeHero() {
	return (
        <div class="container my-5" style={{backgroundColor:'white'}}>
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-4 fw-bold lh-1 py-5">The Mission</h1>
                <p class="lead"> </p>
                <p class="lead">We are a group of Asian youths striving to uplift marginalized communities through education, activism, and celebration. </p>
                <p class="lead">Reach out if you want to share your unique experiences.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img class="rounded-lg-3" src={daybanner}  alt="" width="720"/>
            </div>
            </div>
        </div>
    );
}

export default HomeHero;
