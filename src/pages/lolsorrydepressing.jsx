import mentalHealth from "../assets/ArticlePics/mentalHealth.jpg"
import titleTemplate from "../components/articleComponents/titleTemplate"
import quotesTemplate from "../components/articleComponents/quotesTemplate"
import bodyTemplate from "../components/articleComponents/bodyTemplate"

const category = "SOCIETAL ISSUES";
const title = "lol sorry i’m being depressing: destigmatizing mental illness in the asian-american community";
const author = "BY: INA YCASAS";
const date = "MAY 3, 2023";
const paragraphs1 = ["It’s a text I’ve received and sent out much too often during my academic career. I’ve received it from friends and strangers alike, from classmates and group project members. It’s something that even I hesitate to send out as well. Back then, I didn’t like the way it made me feel: pitiful and helpless against my own mental health."];
const paragraphs2 = ["I didn’t realize until recently just how much weight this simple text carries."];
const paragraphs3 = ["But first, some background. The first important thing to note is that I attended the same school district all the way from kindergarten until high school, which means the peers and classmates that I met way back when naptime was our biggest problem of the day, were still my classmates when our new shared issue became what we wanted to do with the rest of our lives. This meant that I had watched most of these people grow and transform over a course of approximately 18 years, saw them go through the different stages of life as I did, and observed firsthand how they reacted to them."]
const paragraphs4 = ["The second thing to remember is that my school district was situated in a city that was predominately made up of an Asian-American population. Almost all my classmates’ parents, as mine are as well, were immigrants who moved to America around relatively the same time, hoping to make a life for their family and their children here. That said, there were certain expectations to fill in order to make the most of our education that our parents worked so hard for all of us to have. Excelling in school was considered our half of the bargain for our parents’ efforts. It was the least we could do."]
const paragraphs5 = ["Or so our parents liked to say. The truth of the matter was that excelling in school, at least to match our parents’ standards, was no small effort. I remember how much it took out of all of us, straining ourselves to be the best in every className when we were all well-aware of our own limits. And we pushed at them, all while knowing the risk of pushing past the edge."]
const paragraphs6 = ["It was easy to see just how much of a toll the hyper-competitive academic environment took on my friends’ and my own mental health. And yet because it was so normalized within our community we took the experience for granted, believing that several mental breakdowns a year was a sufficient and temporary price to pay for that A on that AP or honors className exam."]
const paragraphs7 = ["It became a sort of tradition, (one might even call it a routine), for texts to show up on those 3am nights when we were pulling all-nighters to study for an exam or overthink a paper. Those nights where we had gone well past our breaking point. I’ve received and sent out so many texts in so many forms; sometimes they’re multi-message rants, sometimes they’re a cry for help hidden within a darkly funny meme. Oftentimes they’re casual, off-handed remarks like this:"]
const paragraphs8 = ["It’s quite a statement to unpack. As minor and flippant as it looks, once you break it down, it offers a look into a much bigger, more deeply rooted issue. First there’s guilt (“sorry”). Then there’s avoidance of the real issue, almost akin to denial (“i’m being depressing”). Lastly, there’s an “lol” attached to the beginning, as to not drag the tone of the conversation down. As if to say, this isn’t as important as you think it is; even I don’t take myself seriously so there’s no reason you should too."]
const paragraphs9 = ["It’s interesting to see the way the text is written in such a way that it skirts around the real problem at hand. That we were suffering from developing mental distress and we did not want to call attention to it. We didn’t want to call it what it was, because then that would make it real. And if it was real, then we’d be disappointing ourselves before we disappointed our parents. The text says “lol sorry i’m being depressing”. Not “I’m experiencing depressive feelings and I need help”. We had grown accustomed to apologizing for thinking the things we think, feeling the things we feel, because we were taught any mental duress was a sign of weakness, an inability to adapt, a refusal to rise to new challenges, when it wasn’t that at all. What it was was a collective, continuously growing mental health crisis, which we perpetuated and participated in partially due to our upbringing and partly due to our own twisted conception of self-worth."]
const paragraphs10 = ["Mental health and wellness has become such a stigmatized topic among the Asian-American community for this reason. It is a combination of culture and lack of spaces for open conversation that allow this stigma to continue. But here’s the thing. If we wish to stop the issue from trickling down into the younger generations, we ourselves must accept and acknowledge the problem at hand first. Until now, I still have trouble accepting, acknowledging, and coming to terms with my own mental health, but I will still continue to advocate for safe spaces for APIDA youth to communicate their mental health needs, opening up conversations and dialogue that I felt was not as readily available to myself and my peers growing up. I can’t change what happened in the past, but I am in charge of my present and my future, and I will take care to destigmatize mental illness not only for myself, but for my friends and fellow APIDA youth."]

const quotes1 = ["lol sorry i’m being depressing."]


function Lolsorry()
{
    return(
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-10">
                        {titleTemplate(category, title, author, date)}

                        <div className="article-image">
                            <img src={mentalHealth}/>
                            <p className={"imgcred"}>Illustrated by Laura Whelan</p>
                        </div>

                        {quotesTemplate(quotes1)}
                        {bodyTemplate(paragraphs1)}
                        {bodyTemplate(paragraphs2)}
                        {bodyTemplate(paragraphs3)}
                        {bodyTemplate(paragraphs4)}
                        {bodyTemplate(paragraphs5)}
                        {bodyTemplate(paragraphs6)}
                        {bodyTemplate(paragraphs7)}
                        <div className="row text-center">
                            <em><strong>lol sorry i’m being depressing.</strong></em>
                        </div>
                        {bodyTemplate(paragraphs8)}
                        {bodyTemplate(paragraphs9)}
                        {bodyTemplate(paragraphs10)}

                    </div>

                </div>
            </div>
        
    );

}
export default Lolsorry;