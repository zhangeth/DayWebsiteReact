import HomeHero from "../components/homeComponents/homeHero";
import dayZine from "../assets/day_zine.pdf"
import '../css/magazine.css'


function Magazine()
{
    return(
        <div>
            <div>
                {HomeHero("DAY MAGAZINE", "")}
            </div>
            <div className="magazine-body">
                Each semester, DAY composes a literary and art magazine featuring pieces
                made by USC students who are a part of the APIDA community. The most recent
                magazine was released in April 2023, with the theme titled "Roots." As the
                title suggests, students reflected on their upbringings and how being a part
                of the APIDA community has shaped their lives.
            </div>
            <div className="magazine-class">
                <object className="magazine-container" data={dayZine} type="application/pdf"></object>
            </div>
        </div>
    );
}
export default Magazine;