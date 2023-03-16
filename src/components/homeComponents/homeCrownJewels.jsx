import queen from "../../assets/ArticlePics/queenElizabeth.jpg"

function homeCrownJewels(){
    return(
    <div>
        <figure class="image is-256x128" width="100%" height="100%">
            <img src={queen} alt="Failed to Load" width="100%" height="100%"/>
            <p style={{fontSize:'x-small'}}>
                Bettmann Archive/Getty Images
            </p>
        </figure>
  
        <div class="card-body">
            <a href="/colonialism" style={{textDecoration: 'none'}}>
            <h5 class="card-text" style={{textDecoration: 'underline', color: 'black'}}>The Crown Jewels and Colonialism</h5>
            </a>
        </div>

        <div style={{textAlign: 'right'}}>
            <p class="text-muted py-2" style={{textAlign:'right'}}>
            By: Bridget Zhang
            </p>
        </div>    
  </div>);

}

export default homeCrownJewels;