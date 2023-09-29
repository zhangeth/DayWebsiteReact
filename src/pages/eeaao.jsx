import yeoh from "../assets/ArticlePics/yeoh.png"
import quan from "../assets/ArticlePics/quan.png"
import kwan from "../assets/ArticlePics/kwan.png"
import eeaao2 from "../assets/ArticlePics/eeaao2.png"

function Eeaao()
{
    return(
            <div class="container">
                <div class="row">
                    <div class="col">
                    </div>

                    <div class="col-8">
                        <h6 class="h6v2 pt-4 pb-2" style={{textAlign:'center'}}> ENTERTAINMENT </h6>

                        <h2 class="h2v2 py-4" style={{textAlign:'center'}}> Why Everything Everywhere All At Once Winning 7 Oscars is Significant </h2>

                        <h6 class="h6v4 pb-2" style={{textAlign:'center'}}>
                            BY: JEEN LEE
                        </h6>

                        <h6 class="h6v3 pb-4" style={{textAlign:'center'}}>
                            March 14, 2023
                        </h6>

                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{width:'100%', backgroundColor:'black', height:'5px'}}></div>
                        </div>

                        <div class="py-2">
                        </div>

                        <h6 class="h6v4 py-2" style={{textAlign:'center'}}>
                            MICHELLE YEOH IS THE FIRST ASIAN 'BEST ACTRESS' WINNER
                        </h6>
                        <div class="pb-2" style={{textAlign:'center'}}>
                            <img src={yeoh}/>
                        </div>
                        <p class="pv2 py-2">
                            “For all the little boys and girls who look like me watching tonight, this is a beacon of hope and possibilities. This is proof that dreams...do come true. And ladies, don't let anybody tell you are ever past your prime." -Yeoh
                        </p>
                        <h6 class="h6v4 py-4" style={{textAlign:'center'}}>
                            KE HUY QUAN IS THE FIRST ACTOR BORN IN VIETNAM TO WIN AN OSCAR
                        </h6>
                        <div class="pb-2" style={{textAlign:'center'}}>
                            <img src={quan}/>
                        </div>
                        <p class="pv2 py-2">
                            “My journey started on a boat. I spent a year in a refugee camp, and somehow, I ended up here on Hollywood’s biggest stage...” - Quan
                        </p>
                        <h6 class="h6v4 py-4" style={{textAlign:'center'}}>
                            DANIEL KWAN IS THE FIRST WRITER OF CHINESE DESCENT TO WIN 'BEST ORIGINAL SCREENPLAY'
                        </h6>
                        <div class="pb-2" style={{textAlign:'center'}}>
                            <img src={kwan}/>
                        </div>
                        <p class="pv2 py-2">
                            “We are all products of our context. We are all descendants of something and someone. And I want to acknowledge my context..."
                        </p>
                        <p class="pv2 py-2">
                            "My immigrant parents, my father who fell in love with movies because he needed to escape the world and thus passed that love of movies onto me. My mother, who was a creative soul, who wanted to be a dancer, an actor and singer, but could not afford the luxury of that life path, and then gave it to me. My incredible brothers and sisters, who helped me survive the chaos of childhood.” - Kwan
                        </p>
                        <h6 class="h6v4 py-4" style={{textAlign:'center'}}>
                            EEAAO BECAME THE THIRD FILM-AND THE FIRST IN NEARLY 50 YEARS-TO WIN 3 ACTING OSCARS
                        </h6>
                        <div class="pb-2" style={{textAlign:'center'}}>
                            <img src={eeaao2}/>
                        </div>
                        <p class="pv2 py-2">
                            With a total of 7 wins out of 11 nominations, it marks history as the most wins or nominations for a film co-directed by an Asian man and featuring a cast that was almost entirely Asian.
                        </p>

                        <div class="py-5">
                        </div>
                        
                        <h4 class="h4v2 py-2" style={{textAlign:'center'}}>
                            SOURCES
                        </h4>

                        <a href="https://www.hollywoodreporter.com/movies/movie-news/everything-everywhere-all-at-once-wins-7-oscars-2023-1235349378/">
                            <p class="pv2" style={{textAlign:'center'}}>
                                https://www.hollywoodreporter.com/movies/movie-news/everything-everywhere-all-at-once-wins-7-oscars-2023-1235349378/
                            </p>
                        </a>
                        <a href="https://www.washingtonpost.com/arts-entertainment/2023/03/13/oscars-recap-winners-red-carpet/">
                            <p class="pv2" style={{textAlign:'center'}}>
                                https://www.washingtonpost.com/arts-entertainment/2023/03/13/oscars-recap-winners-red-carpet/
                            </p>
                        </a>
                        <a href="https://www.billboard.com/music/awards/brendan-fraser-more-record-setters-at-2023-oscars-1235284791/">
                            <p class="pv2" style={{textAlign:'center'}}>
                                https://www.billboard.com/music/awards/brendan-fraser-more-record-setters-at-2023-oscars-1235284791/
                            </p>
                        </a>
                        <a href="https://www.motionpictures.org/2023/03/michelle-yeoh-makes-history-everything-everywhere-all-at-once-wins-big/">
                            <p class="pv2" style={{textAlign:'center'}}>
                                https://www.motionpictures.org/2023/03/michelle-yeoh-makes-history-everything-everywhere-all-at-once-wins-big/
                            </p>
                        </a>
                    </div>

                    <div class="col">
                    </div>
                </div>
            </div>
        
    );

}
export default Eeaao;