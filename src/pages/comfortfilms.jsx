import mulan from "../assets/ArticlePics/mulan.png"
import lilo from "../assets/ArticlePics/lilo.png"
import ponyo from "../assets/ArticlePics/ponyo.png"
import bighero6 from "../assets/ArticlePics/bighero6.png"
import woth from "../assets/ArticlePics/woth.png"
import otm from "../assets/ArticlePics/otm.png"
import turningred from "../assets/ArticlePics/turningred.png"
import titleTemplate from "../components/articleComponents/titleTemplate"
import subtitleTemplate from "../components/articleComponents/subtitleTemplate"
import sourcesTemplate from "../components/articleComponents/sourcesTemplate"
import linksTemplate from "../components/articleComponents/linksTemplate"
const category = "ENTERTAINMENT/OPINION";
const title = "Animated APIDA Comfort Films"
const author = "BY: INA YCASAS";
const date = "February 22, 2023";
const movies = ["MULAN", "LILO & STITCH", "PONYO", "BIG HERO 6", "WHISPER OF THE HEART", "OVER THE MOON", "TURNING RED"];
const images = [mulan, lilo, ponyo, bighero6, woth, otm, turningred];
const paragraphs = [];
paragraphs[0] = "Starting with a nostalgic favorite, Mulan was said to be the one that started it all. I remember the excitement and anticipation that came with Mulan becoming Disney’s first Asian “princess”, mostly because she wasn’t a princess at all - but a courageous warrior and a loving daughter who saved her family, and all of China in the process. With its memorable songs (who doesn’t remember at least some of the lyrics to I’ll Make a Man (Out of You)?) and its memorable ensemble cast, Mulan is a timeless classic. Though it deviates quite a bit from its source material, the epic poem the Ballad of Hua Mulan, this movie is always a good one to rewatch for nostalgia and to appreciate just how far we’ve come in terms of representation today.";
paragraphs[1] = "Another nostalgic Disney favorite is Lilo & Stitch, with its still truly strange and bizarre premise that still manages to make me a little bit emotional every time. Though the story centers around a little blue alien trying to fit in on Earth with the help of his newfound friend Lilo, the heart of the story is deeply rooted in family, and finding your people even if they don’t come from the same blood. Set in Hawaii and predominantly featuring characters of Pacific Islander heritage, the film also touches on themes of accepting and adjusting to change, both in terms of family and the Hawaiian island as a whole. Top-tier humor aside, Lilo & Stitch is the movie to watch if you’re looking for a heartwarming film about finding your place in the world, and building a home somewhere new.";
paragraphs[2] = "From Studio Ghibli, the same Japanese animation studio responsible for Spirited Away and Howl’s Moving Castle, comes the story of Ponyo, a little fish who dreams of becoming a human girl with the help of her friend Sosuke. Somewhat inspired by Hans Christian Anderson’s The Little Mermaid, director Hayao Miyazaki crafts a tale of resilience, dedication, and the meaning of true friendship. Ponyo is a refreshing and fun take on the rather depressing source material, and focuses around the pure love that comes from friendship, as opposed to just romance, and is evidence that films can come from drastically different source material while also making the story a worthwhile and magical adventure.";
paragraphs[3] = "Disney’s Big Hero 6 is a guaranteed comfort film. Set in the fictional city of San Fransokyo (which looks aesthetically like a mix between San Francisco and Tokyo), inventor Hiro Hamada tries to uncover a conspiracy and becomes a superhero in the process, with the help of a balloon-like personal help companion robot named Baymax. With stunning visuals and a diverse ensemble cast, Big Hero 6 tells an extraordinary adventure story, but also has a deeply human message at its center - learning how to deal with and carry your grief.";
paragraphs[4] = "Whisper of the Heart is one of Studio Ghibli’s lesser known works. From a studio known for creating films about magical, otherworldly characters and adventures, Whisper of the Heart is uncharacteristically and unapologetically a slice of real life. This romantic coming of age story follows Shizuku, and her relationship with her friend and crush Seiji. It deals with themes of growing up, and finding your purpose in life - feeling like a love letter to your younger and current self and reminding them that everything will turn out okay.";
paragraphs[5] = "Over the Moon is a more recent addition to the realm of APIDA animated films, but it does a fantastic job of showcasing Chinese culture and folklore in an exciting and visually vibrant way. Tied closely to the myth of the moon goddess Chang’e, the story follows young Fei Fei as she travels to the moon, meets characters from Chinese mythology, and learns to deal with the death of her mother. Boasting an all-Asian voice cast, Over the Moon is both a fun and silly film with a deeply emotional heart at its core.";
paragraphs[6] = "Pixar’s Turning Red feels like a homage to my own adolescent years, and that’s what makes it so special. The film was directed by Domee Shi, Pixar’s first and only Asian woman with sole director credits on a feature film, and many of the events and setting of the movie are drawn from Shi’s own childhood. Mei and her friends are equal parts cringy and lovable, and for my friends and I watching the film felt like looking in a mirror. The story’s beating heart centers on the relationship between Mei and her mother, and it is a relationship that feels authentic and real without feeling stereotypical and contrived. Shi manages to capture the nuances of Asian family dynamics, culture, and youth in the early 2000s in a refreshing and wonderful way.";
const links = ["https://www.commonsensemedia.org/lists/movies-with-asian-asian-american-desi-native-hawaiian-and-pacific-islander-characters", "https://www.republicworld.com/entertainment-news/hollywood-news/over-the-moon-ending-explained-here-is-chinese-myth-the-film-is-based-on.html", "https://www.romper.com/entertainment/family-movies-celebrate-asian-pacific-islander-heritage", "https://www.hercampus.com/school/uga/12-animated-childrens-films-that-celebrate-asian-american-and-pacific-islander-culture/", "https://headstuff.org/entertainment/film/cinematic-comparison-the-little-mermaid-and-ponyo/", "https://variety.com/2022/film/features/domee-shi-turning-red-pixar-1235389199/", "https://www.imdb.com/list/ls063193339/"];
function Comfortfilms()
{
    return(
            <div class="container">
                <div class="row">
                    <div class="col">
                    </div>

                    <div class="col-8">
                        {titleTemplate(category, title, author, date)}
                        <p class="article-paragraph">
                            Some of my favorite memories from my childhood were being bundled up in a blanket and watching animated films with my family. This article aims to spotlight just some of the animated films out there that feature APIDA main characters, some of them older and more nostalgic and some of them newer and more relevant to the younger generation. Regardless of what your plans are this winter break, we’re hoping that putting on just one of these films in the colder season will bring you a little bit of comfort.
                        </p>
                        {subtitleTemplate(movies, images, paragraphs)}
                        {sourcesTemplate()}
                        {linksTemplate(links)}
                    </div>

                    <div class="col">
                    </div>
                </div>
            </div>
        
    );

}
export default Comfortfilms;