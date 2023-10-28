function eventsBox(thumbnail, eventURL){
    //  FORMAT TO MATCH:
    return(
    <div class="event-box col-sm-10 col-lg 4">
        <div class="event-thumbnail">
            
            <a href={eventURL}><img src={thumbnail} alt="event thumbnail"></img></a>
        </div>
    </div>         
    );
}


export default eventsBox;