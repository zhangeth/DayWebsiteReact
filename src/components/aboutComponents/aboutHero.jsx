import daybanner from "../../assets/DAYBanner.png";

function AboutHero()
{
    return(
        <div className="container col-xxl-8 px-4 py-3">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
        
                <img src={daybanner} className="d-block mx-lg-auto img-fluid" alt="" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6">
                <h2 className="display-5 fw-bold lh-1 mb-3">The Mission</h2>
                <p className="lead">We are a team dedicated to sharing the narratives and art of Asian American youth at USC. Explore our literature, art, and upcoming events! </p>
                <p className="lead">Reach out if you want to share your unique experiences.</p>               
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                </div>
            </div>
            </div>
        </div>
    );
}

export default AboutHero;