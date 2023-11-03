function eventsBox(thumbnail, eventURL){
    return(
        <div class="imgBox">
            <a href={eventURL}>
                <img src={thumbnail} alt="article thumbnail"/>
            </a>
        </div>     
    );
}

export default eventsBox;