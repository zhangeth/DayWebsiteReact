import DAYhistory from "../../assets/DAYhistory.jpg";
function DAYHistoryHero() {
	return (
    <div class="container my-5 align-items-center rounded-3 border shadow-lg" style={{backgroundColor:'white'}}>
        <div class="row p-5 pt-5 ">
            <div class="col d-justify-content-center">
                <img src={DAYhistory} alt="Old DAY banner" width="auto" height="auto"/>  

            </div>

            <div class="col p-2 px-3">
                <h1 class="display-4 fw-bold lh-1 ">The History of DAY</h1>
                <p class="lead py-3">
                    Dear Asian Youth was founded in May of 2020 by Stephanie Hu, 
                a 16-year-old who wished to create a platform to publish her poetry.
                It evolved into a blog dedicated to the Asian narrative, then a literary magazine,
                then a full-fledged organization with over 100 members on the national team.</p>

                <p class="lead">
                    <br></br>Functioning remotely, the organization today is the result of passionate 
                volunteers with a shared purpose.</p>
            </div>
            


        </div>            
           
    </div>
	);
}
export default DAYHistoryHero;
