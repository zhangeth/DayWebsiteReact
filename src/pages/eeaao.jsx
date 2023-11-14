import yeoh from "../assets/ArticlePics/yeoh.png"
import quan from "../assets/ArticlePics/quan.png"
import kwan from "../assets/ArticlePics/kwan.png"
import eeaao2 from "../assets/ArticlePics/eeaao2.png"
import titleTemplate from "../components/articleComponents/titleTemplate"
import subtitleTemplate from "../components/articleComponents/subtitleTemplate"
import sourcesTemplate from "../components/articleComponents/sourcesTemplate"
import linksTemplate from "../components/articleComponents/linksTemplate"
const category = "ENTERTAINMENT";
const title = "Why Everything Everywhere All At Once Winning 7 Oscars is Significant"
const author = "BY: JEEN LEE";
const date = "March 14, 2023";
const headlines = ["MICHELLE YEOH IS THE FIRST ASIAN 'BEST ACTRESS' WINNER", "KE HUY QUAN IS THE FIRST ACTOR BORN IN VIETNAM TO WIN AN OSCAR", "DANIEL KWAN IS THE FIRST WRITER OF CHINESE DESCENT TO WIN 'BEST ORIGINAL SCREENPLAY'", "EEAAO BECAME THE THIRD FILM-AND THE FIRST IN NEARLY 50 YEARS-TO WIN 3 ACTING OSCARS"];
const images = [yeoh, quan, kwan, eeaao2];
const paragraphs = [];
paragraphs[0] = "'For all the little boys and girls who look like me watching tonight, this is a beacon of hope and possibilities. This is proof that dreams...do come true. And ladies, don't let anybody tell you are ever past your prime.' -Yeoh";
paragraphs[1] = "'My journey started on a boat. I spent a year in a refugee camp, and somehow, I ended up here on Hollywood’s biggest stage...' - Quan";
paragraphs[2] = "'We are all products of our context. We are all descendants of something and someone. And I want to acknowledge my context...My immigrant parents, my father who fell in love with movies because he needed to escape the world and thus passed that love of movies onto me. My mother, who was a creative soul, who wanted to be a dancer, an actor and singer, but could not afford the luxury of that life path, and then gave it to me. My incredible brothers and sisters, who helped me survive the chaos of childhood.' - Kwan";
paragraphs[3] = "With a total of 7 wins out of 11 nominations, it marks history as the most wins or nominations for a film co-directed by an Asian man and featuring a cast that was almost entirely Asian.";
const links = ["https://www.hollywoodreporter.com/movies/movie-news/everything-everywhere-all-at-once-wins-7-oscars-2023-1235349378/", "https://www.washingtonpost.com/arts-entertainment/2023/03/13/oscars-recap-winners-red-carpet/", "https://www.billboard.com/music/awards/brendan-fraser-more-record-setters-at-2023-oscars-1235284791/", "https://www.motionpictures.org/2023/03/michelle-yeoh-makes-history-everything-everywhere-all-at-once-wins-big/"];
function Eeaao()
{
    return(
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>

                    <div className="col-8">
                        {titleTemplate(category, title, author, date)}
                        {subtitleTemplate(headlines, images, paragraphs)}
                        {sourcesTemplate()}
                        {linksTemplate(links)}
                    </div>

                    <div className="col">
                    </div>
                </div>
            </div>
        
    );

}
export default Eeaao;