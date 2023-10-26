function eventsBox(thumbnail, eventURL){
    //  FORMAT TO MATCH:
    return(
    <div class="event-box col-sm-12 col-lg 4">
        <div class="event-thumbnail">
            <img src={thumbnail} alt="event thumbnail failed to load"></img>
            <a href={eventURL}></a>
        </div>
    </div>         
    );
}


export default eventsBox;