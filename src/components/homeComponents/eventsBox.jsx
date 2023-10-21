import CultureWars from "../../assets/Events/CultureWarsGraphic.jpg"

const eventTitles = [];
const thumbnails = [];

eventTitles[0] = "CULTURE WARS: THE EXHIBITION";
eventTitles[1] = "";
eventTitles[2] = "";

thumbnails[0] = CultureWars;
thumbnails[1] = null;
thumbnails[2] = null;

const crack = []


const eventsBox = () => {
    //  FORMAT TO MATCH:
    //
    //     <div class="event-box col-sm-12 col-md-6 col-lg 4">
    //     <div class="event-thumbnail col-12">
    //       <img src="" alt="sample-event-thumbnail"></img>
    //       <a href="https://dayusc.org"></a>
    //     </div>
    //   </div>

    let eventsArray = document.querySelectorAll(".event-box")

    for(let i = 0; i < eventsArray.length; i++){
        console.log(eventsArray[i])
        const image = eventsArray[i].querySelector("img")
        const title = eventsArray[i].querySelector("a")

        image.src = thumbnails[i]
        title.innerHTML = eventTitles[i]

    }

    return false
}


export default eventsBox;