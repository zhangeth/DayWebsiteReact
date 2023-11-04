import stanzaTemplate from "../../components/articleComponents/stanzaTemplate"
import titleTemplate from "../../components/articleComponents/titleTemplate"
const category = "POETRY";
const title = "Halmoni and Me";
const author = "BY: JESSICA TADOKORO";
const date = "November 2020";
const stanza1 = [];
stanza1[0] = "Our relationship is complex.";
stanza1[1] = "a towering wall stands between us";
stanza1[2] = "and no matter how many times we cry out to each other,"
stanza1[3] = "english slams into brick,"; 
stanza1[4] = "korean collides with concrete"; 
stanza1[5] = "and they never quite reach the other side."; 
stanza1[6] = "i face the mocking wall before me:"; 
stanza1[7] = "korean characters flash in nonsensical patterns before my eyes,";
stanza1[8] = "incoherent phrases and intonations ring in my ears,"; 
stanza1[9] = "taunting me as i drown in guilt, isolation, shame, and anxiety.";
const stanza2 = [];
stanza2[0] = "Our relationship is complex.";
stanza2[1] = "but maybe not as complex as i thought!";
stanza2[2] = "ten-year-old me was";
stanza2[3] = "so transfixed on that daunting language barrier,";
stanza2[4] = "so blind to the cracks hiding in that seemingly impenetrable wall,";
stanza2[5] = "so deaf to the Love that squeezed through those crevices."; 
stanza2[6] = "but now, if i shut my eyes, open my heart and focus,"; 
stanza2[7] = "i can hear my halmoni’s determined, never-ending affection"; 
stanza2[8] = "reaching me in whispers, wrapping me in Love"; 
stanza2[9] = "even though i’m standing on the other side of the wall.";
const stanza3 = [];
stanza3[0] = "i don’t have to speak korean to know her Love."; 
stanza3[1] = "i feel it in every embrace:";
stanza3[2] = "her strong hands firmly patting my back, her small frame enveloping";
stanza3[3] = "my own in such strength.";
stanza3[4] = "i see it in every encouraging smile:";
stanza3[5] = "the proud, adoring glow lighting up her eyes as she gazes at her granddaughter.";
stanza3[6] = "i taste it in every mouth-watering meal she cooks:";
stanza3[7] = "her mandu stuffed with meat, vegetables and care, her tteokguk bursting";
stanza3[8] = "with flavor and warmth.";
stanza3[9] = "i hear it in every phone call:"; 
stanza3[10] = "audible kindness fills the gaps in her broken english and joy radiates";
stanza3[11] = "from her gentle laugh."; 
stanza3[12] = "all along, this is how she was saying"; 
stanza3[13] = "“jessica, I Love You.”";
const stanza4 = [];
stanza4[0] = "Our relationship is complex."; 
stanza4[1] = "yes, that battered wall still stands today";  
stanza4[2] = "but it’s crumbling, crumbling, crumbling:"; 
stanza4[3] = "soft clay disintegrates in my outstretched fingers, fragmented rubble";
stanza4[4] = "piles at my feet.";
stanza4[5] = "18 years later, the barrier is finally tumbling down.";
stanza4[6] = "18 years later, i realized our relationship is characterized by Love:"; 
stanza4[7] = "the one language we do share"; 
stanza4[8] = "and the most powerful one of all.";
stanza4[9] = "it extends across generations and shatters mountains of stone";
stanza4[10] = "and it’s the one that will never fail my halmoni and me.";

function Halmoni()
{
    return(
        <div class="container">
            <div class="row">
                <div class="col">
                </div>
                <div class="col-8">
                    {titleTemplate(category, title, author, date)}
                    <div class="py-2">
                        {stanzaTemplate(stanza1)}
                    </div>
                    <div class="py-2">
                        {stanzaTemplate(stanza2)}
                    </div>
                    <div class="py-2">
                        {stanzaTemplate(stanza3)}
                    </div>
                    <div class="py-2">
                        {stanzaTemplate(stanza4)}
                    </div>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
        
        
    );

}
export default Halmoni;