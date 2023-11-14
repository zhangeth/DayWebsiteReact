import boba from "../assets/ArticlePics/boba.jpg"
import titleTemplate from "../components/articleComponents/titleTemplate"
import bodyTemplate from "../components/articleComponents/bodyTemplate"
import quotesTemplate from "../components/articleComponents/quotesTemplate"
import sourcesTemplate from "../components/articleComponents/sourcesTemplate"
import linksTemplate from "../components/articleComponents/linksTemplate"

const category = "ENTERTAINMENT";
const title = "reflections"
const author = "BY: PATRICK FANG";
const date = "May 5, 2023";

const paragraphs = [];
paragraphs[0] = "..."
paragraphs[1] = "which otherwise is a very harmless recounting about the development of boba culture among Asian American youth. The article references Twitter user @diaspora_is_red and their particularly scathing critique of boba liberalism, which they defined partly as “wanting to reconnect with your roots by [...] drinking bubble tea, getting added to subtle asian traits, and organizing fundraisers for your asian student association, but never studying your history and feeling solidarity with your homeland against imperialism.” Or more succinctly: “All sugar, no substance.”";
paragraphs[2] = "I have to say that my first reaction on reading those lines was defensiveness—unbidden protests sprang to mind that these “Asian” things I’d been doing couldn’t possibly be so cheap. My sense of  my Asian culture itself—borne out in comfortable, middle class, Asian-saturated Silicon Valley—couldn’t possibly be so cheap. But how else to account for the comical lack of effort I invested into my Chinese classes (and how much that’s eaten away at me since); my oblivious drive to “be” the Model Minority, and even the way I approached food—so gleeful was I kurato label some foods “trash” or proclaim some cuisines superior to others.";
paragraphs[3] = "My transgressions extended beyond Asianness alone: two of my biggest offenses that come to mind are the hip-hop music I consumed and tossed aside without any deference or understanding, and my (thankfully) brief stint of eating up Ben Shapiro and Steven Crowder, from where I was fed the sickly sweet delusion of a “no longer racist America” and the profund achievability of the American Dream for “all those who worked hard enough”?";
paragraphs[4] = "For most of my life, what effort had I really applied myself to understanding the meaning—the cost—to what being an Asian American means? To what being a POC means?";
paragraphs[5] = "I understand more of it now, thankfully. To those of you who are further along this journey, I hope you’ll be patient with me. And to those of you at a similar point, or who are just starting out, I wish you nothing but the best for your own reflections.";
paragraphs[6] = "I only hope to keep educating myself on colonialism: how the hegemonies of yesterday created global systems of extraction and subjugation that produced economic prosperity for Western powers at the expense of the lives, opportunity, and dignity of the Global South everywhere. How that legacy endures unto today. I only hope to keep educating myself on the immigrant experience: what the histories do and don’t tell about yesterday’s wars; the traumas they pushed unto generations to come (my family included); and of course, the victories that emerged nonetheless. I only hope to keep educating myself on antiracism, feminism, LGBTQ+ inclusivity and more: and how to reconcile my own identity, as privileged as it is in so many respects, with the prejudices I’ve held and certainly still do hold, and how I can ultimately become a meaningful agent of change.";

const quotes = []
quotes[0] = "To be a better Asian American. To be a better American."
quotes[1] = "To be a better, fucking, person."

const links = ["https://www.eater.com/2019/11/5/20942192/bubble-tea-boba-asian-american-diaspora"];
function Reflections()
{
    return(
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-7">

                        {titleTemplate(category, title, author, date)}
                        <div className="article-image row justify-content-center">
                            <img className="col-10" src={boba}/>
                            <p className={"imgcred, col-12"}>src: Janet Sung</p>
                        </div>
                        <div className="row text-center">
                            <a className="DAY-red" href="https://www.eater.com/2019/11/5/20942192/bubble-tea-boba-asian-american-diaspora">I’ve been very preoccupied these past few weeks by a few provocative lines from this Eater article,</a>
                        </div>
                        {bodyTemplate(paragraphs)}
                        {quotesTemplate(quotes)}
                        {sourcesTemplate()}
                        {linksTemplate(links)}
                    </div>

                </div>
            </div>
    );

}
export default Reflections;