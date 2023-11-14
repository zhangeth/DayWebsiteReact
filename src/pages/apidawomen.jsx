import liliuokalani from "../assets/ArticlePics/liliuokalani.png"
import naidu from "../assets/ArticlePics/naidu.png"
import boggs from "../assets/ArticlePics/boggs.png"
import tabei from "../assets/ArticlePics/tabei.png"
import escoda from "../assets/ArticlePics/escoda.png"
import osaka from "../assets/ArticlePics/osaka.png"
import lin from "../assets/ArticlePics/lin.png"
import chawla from "../assets/ArticlePics/chawla.png"
import mink from "../assets/ArticlePics/mink.png"
import "../css/article.css"
import titleTemplate from "../components/articleComponents/titleTemplate"
import subtitleTemplate from "../components/articleComponents/subtitleTemplate"
import sourcesTemplate from "../components/articleComponents/sourcesTemplate"
import linksTemplate from "../components/articleComponents/linksTemplate"
const category = "APIDA FIGURES";
const title = "Notable APIDA Women to Spotlight During Women's History Month";
const author = "BY: JEEN LEE";
const date = "March 17, 2023";
const women = ["QUEEN LILIUOKALANI", "SAROJINI NAIDU", "GRACE LEE BOGGS", "JUNKO TABEI", "JOSEFA LLANES ESCODA", "NAOMI OSAKA", "MAYA LIN", "KALPANA CHAWLA", "PATSY TAKEMOTO MINK"];
const images = [liliuokalani, naidu, boggs, tabei, escoda, osaka, lin, chawla, mink];
const paragraphs = [];
paragraphs[0] = "Queen Liliuokalani was the first female monarch of Hawaii and last ruler of the Kamehameha dynasty. She temporarily gave up her throne to the US with hopes that it would eventually be restored and to prevent backlash against the Hawaiian people. But independence was never regained and Liliuokalani also endured house arrest following accusations of a counter-revolt. In addition to her role as queen, Liliuokalani was a celebrated musician and composer. Her most well-known piece being “Aloha Oe.”";
paragraphs[1] = "Sarojini Naidu was the first Indian woman president of the India National Congress and the first female governor of the Indian state of Uttar Pradesh. Nicknamed the “Nightingale of India” due to her music and poetry, Naidu entered college at age 12 and graduated by age 19, going on to marry in an inter-caste marriage at a time when it was considered a crime. She played a role in the Indian Independence Movement and lectured on issues regarding emancipation, female empowerment, and social welfare.";
paragraphs[2] = "Considered the eldest human rights activist of our time, Boggs was a philosopher who fought for women’s rights, environmental justice, Black power alongside Angela Davis and Malcolm X, and labor rights. She wrote a series of books and was involved in many community efforts including advocating against poor living conditions in Chicago to creating youth programs in Detroit.";
paragraphs[3]= "Japanese mountaineer Junko Tabei was the first woman to reach the top of Mount Everest in 1975 and the first woman to climb the Seven Summits in 1992. After graduating college with a degree in English literature, she formed an all-women climbing club and went up to write books, start environmental initiatives for sustainable climbing, and preside over preservation organizations.";
paragraphs[4] = "Josefa Llanes Escoda is best known for her civil work and defending women’s suffrage. She represented the Philippines at the Women’s International League for Peace and the International House. When the Japanese occupation of the Philippines began in 1941, she taught members of the National Federation of Women’s Clubs how to set up emergency aid and prepare food as well as using the network to connect prisoners of war with their families.";
paragraphs[5] = "Born to a Japanese mother and Haitian father, Naomi Osaka first grabbed the headlines in 2016. Aged 19, she secured the coveted Women’s Tennis Association (WTA) Newcomer of the Year award. And after consolidating her gains in 2017, Osaka’s standout 2018 began by defeating the then-world No.1 Simona Halep on her way to a first WTA title at the prestigious Indian Wells tournament in March. Seven months later she took it to a whole new level by defeating her all-time idol Serena Williams in the final of the US Open. Osaka has notably spoken out against police-brutality and anti-asian hate crimes.";
paragraphs[6] = "Maya Lin is a designer and architect who, at the age of 21, designed the Vietnam Veterans Memorial in Washington, D.C. NBD. Her design was surrounded by much controversy at the time, however, as congressmen blasted it as a 'political statement of shame and dishonor.' Lin also designed the Civil Rights Memorial in Alabama and the Museum of Chinese in America in New York. Adding to her numerous accolades, Lin received a Presidential Medal of Freedom from Barack Obama in 2016.";
paragraphs[7] = "Kalpana Chawla was the first Indian-born woman in space. She holds a Bachelor of Science degree in aeronautical engineering from Punjab Engineering College, India, and a Master of Science degree in aerospace engineering from the University of Texas, and a Ph.D. in aerospace engineering from the University of Colorado. Chawla served as the mission specialist for the Columbia shuttle. Sadly, on February 3, 2003, a piece of insulation broke and damaged the craft’s wing, causing the shuttle to break apart while reentering the atmosphere.";
paragraphs[8] = "Patsy Takemoto Mink made history with a number of “firsts.” First Japanese American to practice law in Hawaii. First woman of color—and the first Asian American woman—elected to the United States House of Representatives. And in 1972, Mink became the first Asian American to run for the Democratic nomination for president. A tireless advocate for women’s rights, Mink made it her mission in Congress to craft and champion legislation that opened doors for more women to earn an education and join the workforce. Mink was posthumously honored with the Presidential Medal of Freedom in 2014.";
const links = ["https://hello.giggles.com/asian-pacific-islander-women/", "https://olympics.com/en/athletes/naomi-osaka", "https://www.ywcampls.org/all-our-voices-blog/20-asian-american-and-pacific-islander-women-to-know"];
function Apidawomen()
{
    return(
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>

                    <div className="col-8">
                        {titleTemplate(category, title, author, date)}
                        {subtitleTemplate(women, images, paragraphs)}
                        {sourcesTemplate()}
                        {linksTemplate(links)}
                    </div>

                    <div className="col">
                    </div>
                </div>
            </div>
        
    );

}
export default Apidawomen;