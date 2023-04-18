import DAYhistory from "../assets/DAYhistory.jpg";
function DAYHistoryHero() {
	return (
    <div class="container my-5 align-items-center rounded-3 border shadow-lg">
        <div class="row p-5 pt-5 ">
            <h1 class="display-4 fw-bold lh-1 py-5">The History of DAY</h1>
            <p class="lead py-2">
                Dear Asian Youth was founded in May of 2020 by Stephanie Hu, 
            a 16-year-old who wished to create a platform to publish her poetry.
            It evolved into a blog dedicated to the Asian narrative, then a literary magazine,
            then a full-fledged organization with over 100 members on the national team.</p>

            <p class="lead py-2">
                Functioning remotely, the organization today is the result of passionate 
            volunteers with a shared purpose.</p>


        </div>            
        <div class="col-sm-4 pb-4 align-items-center overflow-hidden mx-auto">
            <img src={DAYhistory} alt="Old DAY banner" width="400" height="auto"/>
        </div>       
    </div>
	);
}
export default DAYHistoryHero;
