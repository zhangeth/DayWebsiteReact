import plushy from "../../assets/ArticlePics/plushy.png"
import titleTemplate from "../../components/articleComponents/titleTemplate"
import quotesTemplate from "../../components/articleComponents/quotesTemplate"
import stanzaTemplate from "../../components/articleComponents/stanzaTemplate"

//JOSEPH REFORMAT THIS IF YOU WANT
const category = "POETRY";
const title = "Ode to Plushy";
const author = "BY: JOSEPH CALUYA";
const date = "MAY 2, 2023";
const stanza1 = ["meander through the velvety tufts of fur,", "the welcoming smile (like you didn’t know what pain was),", "the open arms waiting to reel me in", "for a hug I’ve been needing for who knows how long."]
const stanza2 = ["They call you worthless,", "Call me childish,", "Call us both worthless and childish.", "Words incise like piercing daggers from their eyes,", "But we both know", "You and I", "Have a bond tighter than the snout", "Sewed onto you.", "You are a brown, chubby, gentle cushion of love,", "I am a brown, chubby, gentle cushion of love–", "And lonely.", "We pair well like that."]
const stanza3 = ["When I couldn’t see anything except my nebulous fog of failure,", "Couldn’t feel anything except numbness and the nothingness of my existence,", "Couldn’t taste anything except the bitter punch of defeat,", "You enveloped me with a new sense of tangibility;", "I felt present, felt grounded, felt human.", "Like I was specifically made for the earth,", "Like my eyes were made to be blissful oceans people basked in,", "Like my smile was made to make people forget the feeling of agony,", "Like my arms were made to grasp that one person clinging on the edge of a cliff atop death."]
const stanza4 = ["So I stitched together all the bits and pieces,", "Wove tightly all the memories of light and laughter", "And loathing and living and leaving", "And lament and grieving", "And made a smile of my own.", "And it was soft, delicate, mellow."]

const quotes1 = ["My eyes fixate on yours–––(dark endless voids with shimmering glints of bliss),", ""]
const quotes2 = ["", "And slightly broken."]
const quotes3 = ["", "", "", "", "", "Like yours.", "", ""]

function Plushy()
{
    return(
            <div class="container">
                <div class="row justify-content-center">

                    <div class="col-10">
                        {titleTemplate(category, title, author, date)}

                        <div class="article-image row justify-content-center">
                            <img class="col-3" src={plushy}/>
                            <p class={"imgcred, col-12"}>Generated by DALLE</p>
                        </div>
                    </div>
                    <div class="col-8">
                        {quotesTemplate(quotes1)}
                    </div>
                    <div class="col-6">
                        {stanzaTemplate(stanza1)}
                        {stanzaTemplate(stanza2)}
                        {stanzaTemplate(stanza3)}
                        {stanzaTemplate(stanza4)}
                        {quotesTemplate(quotes2)}
                        {quotesTemplate(quotes3)}

                    </div>

                </div>
            </div>
        
    );

}
export default Plushy;