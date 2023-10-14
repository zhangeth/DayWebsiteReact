import olivia2 from "../assets/ArticlePics/olivia2.png"
import titleTemplate from "../components/articleComponents/titleTemplate"
import sourcesTemplate from "../components/articleComponents/sourcesTemplate"
import linksTemplate from "../components/articleComponents/linksTemplate"
import bodyTemplate from "../components/articleComponents/bodyTemplate"
import quotesTemplate from "../components/articleComponents/quotesTemplate"
const category = "ENTERTAINMENT";
const title = "All-(Asian)-American Bitch: How Olivia Rodrigo's New Song Reclaims & Challenges Boxes Surrounding the Identity of the Asian-American Woman";
const author = "BY: YI-ANN LI";
const date = "SEPTEMBER 27, 2023";
const paragraphs1 = ["Olivia Rodrigo, age twenty, is a Filipina-American singer-songwriter who exploded onto the music scene after her role in the Disney+ series High School Musical: The Musical: The Series and her debut single “Driver’s License” launched her to fame. Written at the ripe age of seventeen, “Driver’s License” and her debut album Sour went on to win three Grammys. On September 8, 2023, Rodrigo released her sophomore album, Guts.", "The opening track of Guts is a song titled “all-american bitch”. It’s sonically a diametrically-opposed masterpiece: Rodrigo opens with light guitar strums and lightly singing the lyrics:", ];
const paragraphs2 = ["While “all-american b*tch” certainly captures the rollercoaster-like, double-standard ridden experience of being a girl in today’s society, the track does so much more than just externalize all the rage of being nineteen.", "As an Asian American herself, Rodrigo perfectly captured not just what it’s like to be a young woman today, but what it feels like to be an Asian American woman.", "At the intersection of racism and misogyny lies the stereotypes and pressures that dictate AAPI women’s behaviors and identity.", "These stereotypes sway like a pendulum between a spectrum of docility and aggression — Asian women are depicted as either docile, obedient, and exotic (think how “yellow fever” was born), or overly-controlling, dominating, unemotional, and unappealing (think “tiger moms”)."];
const paragraphs3 = ["As Asian Americans, we are held to an impossible standard of achievement, humility, grace, and silence. We achieve, only to be belittled or mocked for being uninvolved and uninterested in American society.", "We challenge this reductionist view, only to be told we are not working hard enough and ungrateful for the opportunities we’ve been given. We attempt to break our culture of silence, only to be told to sit back down or go back to where we came from.", "The model minority myth is not only harmful for the APIDA community due to the drastically diverse nature of Asian Americans in the US (both in ethnicity, religion, and socioeconomic status), but also is used as a wedge and excuse to continue to oppress other BIPOC and marginalized communities.", "As Asian American women, we are told to be docile, to be brave, to be beautiful, to be deep, to be scholars, to be mothers — but somehow we can never be all of these things without being called inappropriate or ungrateful. And at the end of the day, still not American enough.", "So yes, that scream at the bridge is a cathartic moment for us all — Olivia is screaming for all of us who are tired of being just “grateful all the time.”", "“all-american b*tch” is a legitimization of the experiences of the Asian American woman, by reclaiming the “all-American” identity for a group that has been historically been made to feel perpetually not that — and reminded us that we are empowered lay claim to it.", "The track is a reminder and validation to all of us that we know our place and this is it: we are American enough, and we are undoubtedly"];
const quotes1 = ["“I am light as a feather and stiff as a board", "pay attention to things that most people ignore”", ];
const quotes2 = ["“Forgive and I forget", "I know my age and I act like it", "Got what you can’t resist", "I’m a perfect all-American b*tch”"];
const quotes3 = ["“I don’t get angry when I’m pissed, I’m the eternal optimist", "I scream inside to deal with it, like, Ah’”", "*cue the cleanest screams I’ve ever heard here*"];
const links = ["https://www.elle.com/culture/music/a45042711/olivia-rodrigo-all-american-bitch-lyrics-meaning/", "https://people.com/olivia-rodrigo-wondered-if-guts-would-be-good-enough-after-sour-7968501", "https://nnedv.org/latest_update/stereotypes-asian-women/", "https://wp.nyu.edu/steinhardt-appsych_opus/the-tiger-mom-stereotypes-of-chinese-parenting-in-the-united-states/"];
function Aaab()
{
    return(
            <div class="container">
                <div class="row">
                    <div class="col">
                    </div>

                    <div class="col-8">
                        {titleTemplate(category, title, author, date)}

                        <div class="article-image">
                            <img src={olivia2}/>
                        </div>

                        {bodyTemplate(paragraphs1)}
                        {quotesTemplate(quotes1)}

                        <p class="article-paragraph">
                            As soon as the chorus hits, the strong guitars seem to shred right through your ears and into your brain as Rodrigo angrily almost yells:
                        </p>

                        {quotesTemplate(quotes2)}
                        
                        <p class="article-paragraph">
                            Rodrigo does this for the entire song: she juxtaposes light and airy serenades from the verses about being docile, gentle, and classy —
                        </p>

                        <h6 class="article-subtitle">
                            “I got class and integrity just like a goddamn Kennedy, I swear”
                        </h6>

                        <p class="article-paragraph">
                            — with grungy and barely-repressed, angry choruses that scathingly mock at the impossibility of being nineteen and a girl.
                        </p>

                        {quotesTemplate(quotes3)}
        
                        {bodyTemplate(paragraphs2)}

                        <h6 class="article-subtitle">
                            “I am built like a mother and a total machine”
                        </h6>

                        {bodyTemplate(paragraphs3)}

                        <h6 class="article-subtitle">
                            all-(asian)-american bitches!
                        </h6>

                        {sourcesTemplate()}
                        {linksTemplate(links)}
                    </div>

                    <div class="col">
                    </div>
                </div>
            </div>
        
    );

}
export default Aaab;