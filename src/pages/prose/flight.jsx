import "../../css/article.css"
import titleTemplate from "../../components/articleComponents/titleTemplate"
import bodyTemplate from "../../components/articleComponents/bodyTemplate"
import flight from "../../assets/ProsePics/Flight.jpg"
const category = "PROSE";
const title = "The Flight";
const author = "BY: ANDREW KIM";
const date = "January 11, 2023";
const paragraph1 = ["I kept thinking about what my dad had told me several weeks before the trip. “If you can’t speak Korean, you’re going to be a stranger,” he had said, with a hint of what I thought was judgment in his voice. He had let out a quiet scoff. “How are you going to talk to your grandparents?”"];
const paragraph2 = [];
paragraph2[0] = "That comment weighed down on me more than it should have. I thought about it throughout the days leading up to my flight. It replayed in my mind as I went through airport security. And again when the plane started to leave for takeoff.";
paragraph2[1] = "“Are you excited?” my older sister asked me softly from the side. It brought me out of my stuporous state of tension, and it occurred to me that the sound of the plane’s engine was not coming from inside my head.";
paragraph2[2] = "For a second, I didn’t know how to answer. 'Oh, right,' I thought. 'I’m supposed to be more hyped up than nervous for this trip.'";
paragraph2[3] = "“Yeah, can’t wait to get there,” I replied, feeling like I was slightly lying. We talked a little more about the places we wanted to go to and the food we wanted to eat, and I remembered why I was initially excited to visit Korea for the first time. Discussing our most prioritized shopping malls helped me block out the anxious thoughts that have been accumulating inside me for a long time.";
paragraph2[4] = "A few hours later into the flight, I noticed that my mom wasn’t trying to sleep. She looked deep in thought and not at all tired.";
paragraph2[5] = "“Are you excited, Mom?” I echoed my sister. “It’s been a while since you’ve seen Haejin-samchon, right?”";
paragraph2[6] = "She smiled at me. “I think the last time was when you were a toddler,” she reminisced. “Did you know that he was a singer? He released an album many years ago.”";
paragraph2[7] = "“Really?” I was shocked to hear such a thing. I wondered if I was related to someone who was famous, and I never knew this whole time.";
paragraph2[8] = "“Yeah. He’ll be singing during his wedding, so you’ll get to hear how amazing his voice is.” There was a sense of pride in her voice as she said that.";
paragraph2[9] = "The thought of meeting my uncle made me feel nervous again, and it must’ve shown somehow in my body language, because my mom took my hand and gave me a sweet smile. “Stop worrying,” she consoled me. “Your relatives are your family. They would love to show you around.”";
paragraph2[10] = "Just like the one from my dad, my mom’s comment fought for dominance inside my mind. It’s true — I was a part of the family, even if we weren’t going to communicate well. Settling for a more peaceful state of mind, I let my mom’s reassurance run through me as I went to sleep for the rest of the flight.";
paragraph2[11] = "It worked until the flight was over, and my sister, my mom, and I were pushed into the Incheon International Airport. I was fascinated by the beauty and size of the place. It was clean and decorated with intricate designs, and the overall light blue-ish theme somehow screamed “business” at you. While I remained fixated on the new atmosphere as we walked through the terminal, we were eventually stopped by an airport attendant.";
paragraph2[12] = "“Passport, please,” he said in Korean.";
paragraph2[13] = "I blinked at him. I knew the word for passport, but it still took me a second to understand him.";
paragraph2[14] = "It was a second too long. “Your passport?” he said again, this time in English. The look on his face resembled one of confusion and what looked like a bit of judgment.";
paragraph2[15] = "“Ah, yes.” I rummaged through my bag, feeling stupid. Now he knows.";
paragraph2[16] = "After that interaction, the thoughts returned again.";
function Flight()
{
    return(
        <div class="container">
                <div class="row">
                    <div class="col">
                    </div>

                    <div class="col-8">
                        {titleTemplate(category, title, author, date)}
                        <div class="article-image">
                            <img src={flight}/>
                        </div>
                        {bodyTemplate(paragraph1)}
                        <div class="article-paragraph">
                            <i>You're going to be a stranger.</i>
                        </div>
                        {bodyTemplate(paragraph2)}
                        <div class="article-paragraph">
                            <i>You're going to be a stranger.</i>
                        </div>
                    </div>

                    <div class="col">
                    </div>
                </div>
        </div>
    );
}
export default Flight;