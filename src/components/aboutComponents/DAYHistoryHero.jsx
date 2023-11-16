import DAYlogo from "../../assets/DAYLogo.jpg";
import "../../css/about.css"
function DAYHistoryHero() {
	return (
    <div className="container my-5 align-items-center rounded-3 border shadow-lg" style={{backgroundColor:'white'}}>
        <div className="row p-5 pt-5">
            <div className="col-4">
                <img className="day-logo" src={DAYlogo} alt="Old DAY banner" width="auto" height="auto"/>  
            </div>

            <div className="col-8">
                <h1 className="about-subtitle3">The History of DAY</h1>
                <p className="about-body">
                    Dear Asian Youth was founded in May of 2020 by Stephanie Hu, 
                    a 16-year-old who wished to create a platform to publish her poetry.
                    It evolved into a blog dedicated to the Asian narrative, then a literary magazine,
                    then a full-fledged organization with over 100 members on the national team. 
                    Functioning remotely, the organization today is the result of passionate 
                    volunteers with a shared purpose.
                </p>
            </div>
            


        </div>            
           
    </div>
	);
}
export default DAYHistoryHero;