import dating from "../../assets/ArticlePics/dating.jpg"
import titleTemplate from "../../components/articleComponents/titleTemplate"
import quotesTemplate from "../../components/articleComponents/quotesTemplate"
import stanzaTemplate from "../../components/articleComponents/stanzaTemplate";

//JOSEPH REFORMAT THIS IF YOU WANT
const category = "POETRY";
const title = "Reasons Why I Won't Date White Boys from Utah Anymore";
const author = "BY: KATIE SANYAL";
const date = "APRIL 27, 2023";

const stanza1a = ["At first I thought their constant fascination was a form of flattery", 
                    "How they always showed me off to their friends and family like a"]

const stanza1b = ["“You’ll never guess what she is”", 
                    "-- their standard introduction of me, because my mixed ethnicity was apparently the most important thing about me to white boys from Utah", 
                    "whose entire personality is smoking weed on ski lifts and"]
const stanza1c = ["defying the Mormon Church"]

const stanza2a = ["Then they realized I couldn’t be broken like one of their toys", 
                "That I was not sparkly like a new toy",
                "And that I was not made for boys to play with", 
                "That the way I drink tea religiously is not because I’m"] 

const stanza2b = ["And therefore everything about me is new and exciting", 
                "Like a renegade", 
                "But because I’m me and I’m not"]

function Utahboys(){
    return(
            <div class="container">
                <div class="row justify-content-center">

                    <div class="col-10">
                        {titleTemplate(category, title, author, date)}
                        <div class="article-image row justify-content-center">
                            <img class = "col-7" src={dating}/>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-7 text-start">
                            {stanzaTemplate(stanza1a)}
                        </div>

                        <div class="sparkly col-7 justify-content-center text-center mt-3 mb-5">
                            <p>sparkly new toy</p>
                        </div>

                        <div class="col-7 text-start">
                            {stanzaTemplate(stanza1b)}
                        </div>

                        <div class="col-7 mb-4 text-end">
                            {stanzaTemplate(stanza1c)}
                        </div>


                        <div class="col-7 text-start">
                            {stanzaTemplate(stanza2a)}
                        </div>

                        <div class="row text-center">
                            <em class="big-italic mb-4">not part of the church</em>
                        </div>

                        <div class="col-7 text-end">
                            {stanzaTemplate(stanza2b)}                            
                        </div>

                        <p class="col-7 text-center DAY-red mt-3 mb-5"> Existing for the sake of diversifying your experience</p>

                    </div>

                </div>
            </div>
        
    );

}
export default Utahboys;