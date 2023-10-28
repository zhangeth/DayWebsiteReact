import parentalExpectations from "../../assets/ArticlePics/parentalExpectations.jpg"
import titleTemplate from "../../components/articleComponents/titleTemplate"
import bodyTemplate from "../../components/articleComponents/bodyTemplate"
import quotesTemplate from "../../components/articleComponents/quotesTemplate"
const category = "PROSE";
const title = "Family Expectations Growing Up";
const author = "BY: SYDNEY FIORENTINO";
const date = "APRIL 25, 2023";

const paragraphs1 = ["Growing up, these were the constant thoughts that ran through my head every time I met someone. I’d compare myself to others, whether that be academically, socially, personality, etc. Growing up, I constantly felt like I was compared to my peers, cousins, and friends"];
const paragraphs2 = ["All I did was work on homework throughout middle and high school. I did not know what a “social life” was, nor was it normal for me to spend time with friends after school. My “normal” after school routine was going straight home and doing homework until 11pm - 1 am. Even though I procrastinated and got homework done very slowly, I still managed to finish everything I needed to do: I was on top of my studies—I studied hard for quizzes and tests. I scored as well as I wanted to, I was happy, and I wasn’t aware of what else life had to offer other than academics."]
const paragraphs3 = ["Every time I went to family events with my cousins or met family friends, I was always known as “the smart one.” My aunts and uncles would always ask me, “How is school going?” My answer would just be, “Good.” But deep down I felt like all I was doing was schoolwork and that’s it. I always felt like I had to do school, had to get good grades, and have great extracurricular activities in order to be happy. I felt like I had to do all these things to be known as the “smart one” in my family. While I did all those things, I never realized what else was out there for me other than school. I just felt like there was this unspoken rule that I had to do school. I constantly felt compared, and I indirectly felt pressured to do well and try to be the “best.”"]
const paragraphs4 = ["Senior year, I had this outbreak. I realized I did not need to meet others’ expectations and instead, meet. I was not the happiest, I did not have a cool hobby, and I was not the person I envisioned in my head. During senior year, I stopped trying to be this perfect student. I started to have fun: Facetimed friends, watched television shows, watched vlogs on YouTube, walked, wrote, and made playlists I liked. Yes, school became harder for me, and I felt like I slacked off in school. I did not try as hard, I was not fully on top of my studies. But, I had fun and I enjoyed my time."]
const paragraphs5 = ["I constantly go through this big contemplation of if I should do something for my resume and to impress others, even though I don't really want to do it. Since I grew up in an environment where I was used to pleasing and meeting others’ expectations, the thoughts of  “that would look good if I did that activity,” still run through my head. However, with quarantine, I have come to realize that I do not have much energy or time for activities that do not please me. I have little time to waste for things that do not make me happy, and I’m slowly letting things I do not like go. I stopped trying to be this person that was categorized as being “smart.”"]
const paragraphs6 = ["I want to be someone that likes what she does and pursues something well. Even though I still go to family events, and all the aunts and uncles are wondering what I am up to, I do not try or want to share what I am doing. My parents still may tell people what they are up to so they can compare me to my cousins, but I stopped letting that expectation and family comparison control who I was and what I did. I stopped caring about what my cousins did, and started congratulating them, and moved on. I did not concentrate on who was the best looking, the most successful, etc. and just focused on myself at family gatherings."]
const paragraphs7 = ["I think growing up, I was born into a competitive family environment, and I let this control part of my life. What makes an Asian family different from others is the amount of emphasis on academics and the underlying high expectations parents have on their children. I do agree that non-Asian families have this culture and academic values as well, but I feel like it’s more prominent and competitive amongst my friends and families who are Asian as well. It’s the constant comparison to your cousins, your friends, etc. that make you feel like you have to meet their expectation, or else you won’t be a “good” or “ideal” child."]

const quotes1 = ["Who’s the smartest? Who’s the best looking? Who is going to be the most successful? Who’s going to make the most money?"];
const quotes2 = ["Yes, it is nice to be labelled as intelligent; however, it is not the only title I wasn’t."] 

function Expectations()
{
    return(
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-10">
                        {titleTemplate(category, title, author, date)}

                        <div class="article-image">
                            <img src={parentalExpectations}/>
                        </div>

                        {quotesTemplate(quotes1)}
                        {bodyTemplate(paragraphs1)}
                        {bodyTemplate(paragraphs2)}
                        {bodyTemplate(paragraphs3)}
                        {bodyTemplate(paragraphs4)}
                        {bodyTemplate(paragraphs5)}
                        {quotesTemplate(quotes2)}
                        {bodyTemplate(paragraphs6)}
                        {bodyTemplate(paragraphs7)}

                    </div>
                </div>
            </div>
        
    );

}
export default Expectations;