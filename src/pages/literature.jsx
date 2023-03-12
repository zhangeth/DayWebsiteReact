import queen from "../assets/ArticlePics/queenElizabeth.jpg"
import monterey from "../assets/ArticlePics/MontereyPic.jpg"
import kimSejeong from "../assets/ArticlePics/kimSejeong.jpg"
import fashionPic from "../assets/ArticlePics/fashionPic.webp"
import koreanGrandma from "../assets/ProsePics/koreanGrandma.png"

function Literature()
{
    return(
        <>
        <div class="container">
            <div class="row">
                <h2 class="py-4" style={{textAlign:'center', textDecoration: 'underline', color: 'red'}}><b>News Articles</b></h2>
            </div>

            <div class="py-2"></div>

            <div class="row">
                <div class="col-6">
                    <div>
                        <h4 class="py-1" style={{textAlign:'left', color: 'black'}}>The Crown Jewels and Colonialism</h4>
                    </div>
                    <div>
                        <h4 class="pb-2" style={{textAlign:'left', color: 'black'}}>By: Bridget Zhang</h4>
                    </div>
                    <div class="py-2">
                        <h5 style={{color:'black'}}>
                            Queen Elizabeth II died on September 8, 2022, marking the end of a 70-year reign. As a symbol of the British monarchy, her legacy cannot be separated from that of the colonial empire. This is seen most obviously through the precious stones that she wore, many of which were taken from former colonies. Since her death, there have been renewed calls for the jewels to be returned to their rightful owners.
                        </h5>
                    </div>
                    <div class="py-4">
                        <a class="btn btn-outline-danger" href="/colonialism" role="button">Continue Reading</a>
                    </div>
                </div>
                <div class="col-6">
                    <figure class="image is-256x100" width="100%" height="100%">
                        <img src={queen} width="100%" height="100%"/>
                        <p style={{fontSize:'x-small'}}>
                            Bettmann Archive/Getty Images
                        </p>
                    </figure>
                </div>
            </div>

            <div class="py-4"></div>

            <div class="row">
                <div class="col-6">
                    <div>
                        <h4 class="py-1" style={{textAlign:'left', color: 'black'}}>South Asian New York Fashion Week 2022</h4>
                    </div>
                    <div>
                        <h4 style={{textAlign:'left', color: 'black'}}>By: Jeen Lee</h4>
                    </div>
                    <div>
                        <h5 style={{color:'black'}}>
                            Ever since its launch in 1943, New York Fashion Week has evolved to keep up with the changing demands of its consumers. The latest change has been the official launch of the South Asian New York Fashion Week (SANYFW) to uplift fashion inspired by both traditional and modern South Asian cultures.
                        </h5>
                    </div>
                    <div class="py-4">
                        <a class="btn btn-outline-danger" href="/fashion" role="button">Continue Reading</a>
                    </div>
                </div>
                <div class="col-6">
                    <figure class="image is-256x128" width="100%" height="100%">
                        <img src={fashionPic} width="100%" height="100%"/>
                        <p style={{fontSize:'small'}}>
                            ARIF ALI/AFP VIA GETTY IMAGES
                        </p>
                    </figure>
                </div>
            </div>

            <div class="py-4"></div>

            <div class="row">
                <div class="col-6">
                    <div>
                        <h4 class="py-1" style={{textAlign:'left', color: 'black'}}>Mass Shooting in Monterey Park on Lunar New Year's Eve</h4>
                    </div>
                    <div>
                        <h4 class="pt-2 pb-2" style={{textAlign:'left', color: 'black'}}>By: Yi-Ann</h4>
                    </div>
                    <div>
                        <h5 class="py-2" style={{color:'black'}}>
                            On a night meant to be full of joy and ushering in luck and fortune, Lunar New Year festivities in Monterey Park faced a devastating tragedy. According to the Los Angeles Police Department, a gunman opened fire on Saturday night and killed ten people, wounding ten more.
                        </h5>
                    </div>
                    <div class="py-4">
                        <a class="btn btn-outline-danger" href="/monterey" role="button">Continue Reading</a>
                    </div>
                </div>
                <div class="col-6">
                    <figure class="image is-256x128" width="100%" height="100%">
                        <img src={monterey} width="100%" height="100%"/>
                        <p style={{fontSize:'small'}}>
                            Photographer: Jae C. Hong/AP
                        </p>
                    </figure>
                </div>
            </div>

            <div class="py-4"></div>

            <div class="row">
                <div class="col-6">
                    <div>
                        <h4 class="py-1" style={{textAlign:'left', color: 'black'}}>A Re-Cap of USC'S K-Pop Festa</h4>
                    </div>
                    <div>
                        <h4 style={{textAlign:'left', color: 'black'}}>By: Joseph Caluya</h4>
                    </div>
                    <div>
                        <h5 style={{color:'black'}}>
                            Korean culture has become more ubiquitous in the past few years as an ever-increasing number of people watch K-dramas, listen to K-Pop, eat Korean food, and add K-beauty products to their routines. This growth has been further demonstrated with the rise of K-culture events such as the K-Pop Festa at McCarthy Quad on Sep. 23, 2022, in which USC became the first campus in America to ever host a K-Pop concert.
                        </h5>
                    </div>
                    <div class="py-4">
                        <a class="btn btn-outline-danger" href="/kpop" role="button">Continue Reading</a>
                    </div>
                </div>
                <div class="col-6">
                    <figure class="image is-256x128" width="100%" height="100%">
                        <img src={kimSejeong} width="100%" height="100%"/>
                    </figure>
                </div>
            </div>

            <div class="py-4"></div>

            <hr></hr>

            <div class="py-4"></div>

            <div class="row">
                <h2 class="py-4" style={{textAlign:'center', textDecoration: 'underline', color: 'red'}}><b>Prose</b></h2>
            </div>

            <div class="row">
                <div class="col-6">
                    <div>
                        <h4 class="py-1" style={{textAlign:'left', color: 'black'}}>Halmoni and Me</h4>
                    </div>
                    <div>
                        <h4 class="pb-2" style={{textAlign:'left', color: 'black'}}>By: Jessica Tadokoro</h4>
                    </div>
                    <div class="py-4">
                        <h5 style={{color:'black'}}>Our relationship is complex.</h5>
                        <h5 style={{color:'black'}}>a towering wall stands between us</h5>
                        <h5 style={{color:'black'}}>and no matter how many times we cry out to each other,</h5>
                        <h5 style={{color:'black'}}>english slams into brick,</h5>
                        <h5 style={{color:'black'}}>korean collides with concrete</h5>
                        <h5 style={{color:'black'}}>and they never quite reach the other side.</h5>
                        <h5 style={{color:'black'}}>i face the mocking wall before me:</h5>
                        <h5 style={{color:'black'}}>korean characters flash in nonsensical patterns before my eyes,</h5>
                        <h5 style={{color:'black'}}>incoherent phrases and intonations ring in my ears,</h5>
                        <h5 style={{color:'black'}}>taunting me as i drown in guilt, isolation, shame, and anxiety.</h5>
                    </div>
                    <div>
                        <div class="py-4">
                            <a class="btn btn-outline-danger" href="/halmoni" role="button">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <figure class="image is-256x128" width="100%" height="100%">
                        <img src={koreanGrandma} width="100%" height="100%"/>
                        <p style={{fontSize:'x-small'}}>
                            AI Art generated by MidJourney
                        </p>
                    </figure>
                </div>
            </div>
        </div>
        </>
    );
}
export default Literature;