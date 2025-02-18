import "../../css/about.css"
function HomeHero(title, message) {
	return (
        <>
            <div className="about-row p-4 pb-0 pe-lg-0 border shadow-lg mt-0">
                <div className="col p-3 p-lg-5 pt-lg-3">
                    <h1 className="about-title">{title}</h1>
                    <p className="about-body">{message}
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeHero;