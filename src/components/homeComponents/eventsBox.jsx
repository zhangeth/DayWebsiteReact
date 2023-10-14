import CultureWars from "../../assets/Events/CultureWarsGraphic.jpg"

const eventTitles = [];
const thumbnails = [];
const eventDescs = [];

eventTitles[0] = "CULTURE WARS: THE EXHIBITION";
eventTitles[1] = "";
eventTitles[2] = "";

thumbnails[0] = CultureWars;
thumbnails[1] = null;
thumbnails[2] = null;

eventDescs[0] = "DAY UCLAxUSC event at UCLA Kerckhoff Gallery | Saturday, October 21, 2023 | Formal Attire";
eventDescs[1] = "";
eventDescs[2] = "";

const eventsBox = () => {
    //  FORMAT TO MATCH:
    //
    //     <div class="event-box col-sm-12 col-md-6 col-lg 4">
    //     <div class="event-thumbnail col-12">
    //       <img src="" alt="sample-event-thumbnail"></img>
    //       <a href="https://dayusc.org"></a>
    //       <p class="event-desc"></p>
    //     </div>
    //   </div>

    let eventsArray = document.querySelectorAll(".event-box")

    for(let i = 0; i < eventsArray.length; i++){
        console.log(eventsArray[i])
        eventsArray[i].querySelector("img").src = thumbnails[i]
        eventsArray[i].querySelector("a").innerHTML = eventTitles[i]
        eventsArray[i].querySelector(".event-desc").innerHTML = eventDescs[i]

    }

    return false
}

export default eventsBox();