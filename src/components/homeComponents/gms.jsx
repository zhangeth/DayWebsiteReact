function gms(type, gmArray, gmName, gmLink){
    const allGMs = [];

    for(let i = 0; i < 3; i++){
        allGMs.push(
            <div className="col-sm-12 col-md-4">
                <div className="imgBox">
                <a href={gmLink[i]}>
                    <img src={gmArray[i]} alt={gmName[i]}/>
                </a>
        </div>  
            </div>
        )
    }

    return(
        <div className={type}>
            <h2 className="row text-center">{type}</h2>
            <p className="row text-center"> Tuesdays, from 7 - 8 pm at TCC232. Follow us on instagram @dearasianyouth.usc for more information </p>
            <div className="row justify-content-center">
                {allGMs}
            </div>
        </div>        
    )
}

export default gms;