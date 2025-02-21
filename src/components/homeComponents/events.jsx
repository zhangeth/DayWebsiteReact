function events(type, eventArray, eventName, eventLink){
    const allEvents = [];

    for(let i = 0; i < 3; i++){
        allEvents.push(
            <div className="col-sm-12 col-md-4">
                <div className="imgBox">
                <a href={eventLink[i]}>
                    <img src={eventArray[i]} alt={eventName[i]}/>
                </a>
        </div>  
            </div>
        )
    }

    return(
        <div className={type}>
            <h2 className="row text-center">{type}</h2>
            <div className="row justify-content-center">
                {allEvents}
            </div>
        </div>        
    )
}

export default events;