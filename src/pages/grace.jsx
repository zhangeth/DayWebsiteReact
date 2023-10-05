import grace from "../assets/ArticlePics/grace.jpg"
import titleTemplate from "../components/articleComponents/titleTemplate"
import sourcesTemplate from "../components/articleComponents/sourcesTemplate"
import linksTemplate from "../components/articleComponents/linksTemplate"
import bodyTemplate from "../components/articleComponents/bodyTemplate"
const category = "APIDA FIGURES";
const title = "Grace Young: From ‘Stir-Fry Guru’ To ‘Woman of the Year’";
const author = "BY: CELINE CHEN";
const date = "APRIL 5, 2023";
const paragraphs = [];
paragraphs[0] = "Most people know of Grace Young as the stir-fry guru. And for good reason. After all, she is one of the most prominent wok advocates in the English-speaking world. Her first cookbook, The Wisdom of the Chinese Kitchen, introduced the fundamental technique known as wok hei, the distinct flavor created with proper wok technique. Her subsequent book The Breath of a Wok explored the technique even further. Young has won major awards for these books but now, at 67, she’s being recognized for her activism on behalf of America’s Chinatowns.";
paragraphs[1] = "When the pandemic shut down cities across the US, markets and stores and restaurants in Chinatown neighborhoods alike struggled and Young decided to do something about it. She started small, posting on her social media channels, but her advocacy quickly and immensely grew. “In 2020, I reached out to the James Beard Foundation and asked them if we could partner in a social media campaign called Save Chinese Restaurants.” she said. Young also supported activist Don Lee’s Stir-Fry Meals on Wheels, a program that delivered food to Chinese seniors’ homes in NYC after senior living centers were forced to close due to the pandemic.";
paragraphs[2] = "As a result, Young received several awards, including the IACP 2021 Lifetime Achievement Award, the Julia Child Foundation’s Julia Child Award, the James Beard Humanitarian of the Year Award, and just recently, the USA Today’s Women of the Year award.";
paragraphs[3] = "For Young, saving Chinatowns across the country is important because they “tell the story of America.” “You know, in Manhattan’s Chinatown, the Irish, the Italians, Germans, Jews were there even before the Chinese arrived,” she said, “this is a sacred part of America’s story.” But they also “represent the American dream” and “show us the immigrant story.” In New York’s Chinatown, 98% of the businesses are mom-and-pop. Likewise, in San Francisco, thousands are family-owned. “And so it behooves us to support the American dream by supporting these businesses,” she added. “When you go to Chinatown, it’s a reminder of what it means to have human connections, and that enriches our lives immeasurably.”";
const links = ["https://nextshark.com/grace-young-women-of-the-year-national-honoree", "https://www.npr.org/2023/03/29/1166885514/cookbook-author-grace-young-is-on-a-mission-to-save-americas-chinatowns", "https://www.seriouseats.com/grace-young-interview-5218099"];
function Grace()
{
    return(
        <div class="container">
            <div class="row">
                <div class="col">
                </div>

                <div class="col-8">
                    {titleTemplate(category, title, author, date)}
                    <div class="article-image">
                            <img src={grace}/>
                        </div>
                    {bodyTemplate(paragraphs)}
                    {sourcesTemplate()}
                    {linksTemplate(links)}
                </div>

                <div class="col">
                </div>
            </div>
        </div>
    
    );
}
export default Grace;