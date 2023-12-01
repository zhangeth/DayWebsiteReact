import HomeHero from "../components/homeComponents/homeHero";
import homeTemplate from "../components/homeComponents/homeCard";

import uncle from "../assets/ArticlePics/uncle.jpg"
import soccer from "../assets/ArticlePics/soccer.jpg"
import yor from "../assets/ArticlePics/yor.png"

import '../css/magazine.css'
import '../css/teaser.css'

function Teaser()
{
    return(
        <div>
            <div>
                {HomeHero("FALL 2023 ZINE TEASER", "Through the Looking Glass")}
            </div>

            <div class="row justify-content-center">
                <div class="quote">
                    <em>"Who in the world am I? Ah, that's the great puzzle"</em>
                </div>
                <div class="quote-source">
                    -Lewis Carrol, <em>Through the Looking Glass</em>
                </div>

                <div class="description-text col-10 text-center">
                    Each semester, DAY composes a literary and art magazine featuring pieces
                    made by USC students who are a part of the APIDA community. For Fall 2023,
                    the "Through the Looking Glass" magazine will be finalized <b>November 17th</b>!
                </div>

                <div class="description-text col-10 text-center">
                    In this world, we are limited by what our five senses experience. Our perceptions of our identity
                    are not only based on what we see in the mirror but also based on what others see. Through this
                    year's Zine theme, our artists explored their vision of stepping through the looking glass,
                    navigating a space free from the restrictions of ordinary perceptions and societal norms. Below 
                    we've showcased a collection of short stories from our club president. Stay tuned for our official 
                    Zine launch!
                </div>                
            </div>

            <div class="gallery-container row justify-content-center">
                <div class="side-gallery justify-content-center text-center">
                {homeTemplate(uncle, "", "/housewithoutyou", "The House Without You", "PROSE", "", "Audrey Xia")}
                </div>
                <div class="center-gallery justify-content-center text-center">
                {homeTemplate(soccer, "", "/myoldfriend", "My Old Friend", "PROSE", "", "Audrey Xia")}
                </div>
                <div class="side-gallery justify-content-center text-center">
                {homeTemplate(yor, "", "/tomydaughter", "To My Daughter", "PROSE", "", "Audrey Xia")}
                </div>
            </div>

        </div>
    );
}
export default Teaser;