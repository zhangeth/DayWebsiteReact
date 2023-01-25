import daylogo from "../../assets/DAYLogo.jpg";

function Title() {
	//const ani = animationConstants;
	return (
		<header class="py-3 mb-4 border-bottom">
            <div class="container d-flex flex-wrap justify-content-center">
            <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            <figure class="image is-128x128">
                <img src={daylogo} width="108" height="108"/>
            </figure>
                <h6 class="display-1 fw-normal lh-1">
                    DAY USC
                </h6>
            </a>
            </div>
        </header>
	);
}

export default Title; 