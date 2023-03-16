import monterey from "../../assets/ArticlePics/MontereyPic.jpg"

function homeMontereyPark(){
    return(
    <div>
              <figure class="image is-256x128" width="100%" height="100%">
                <img src={monterey} alt="Failed to Load" width="100%" height="100%"/>
                <p style={{fontSize:'small'}}>
                  Photographer: Jae C. Hong/AP
                </p>
              </figure>
              
              <div class="card-body">
                <a href="/monterey" style={{textDecoration: 'none'}}>
                  <h4 class="card-text" style={{textDecoration: 'underline', color: 'black'}}>Mass Shooting in Monterey Park on Lunar New Year's Eve</h4>
                </a>
              </div>
              
              <div style={{textAlign: 'right'}}>
                <p class="text-muted py-2" style={{textAlign:'right'}}>
                  By: Yi-Ann
                </p>
              </div>
    </div>
    );

}

export default homeMontereyPark;