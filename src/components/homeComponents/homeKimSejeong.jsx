import kimSejeong from "../../assets/ArticlePics/kimSejeong.jpg"

function homeKimSejeong(){
    return(
        <div>
            <figure class="image is-256x128" width="100%" height="100%">
                <img src={kimSejeong} alt="Failed to Load" width="100%" height="100%"/>
            </figure>
              
            <div class="card-body">
                <a href="/kpop" style={{textDecoration: 'none'}}>
                  <h5 class="card-text" style={{textDecoration: 'underline', color: 'black'}}>A Re-Cap of USC’s K-Pop Festa </h5>
                </a>
            </div>

            <div style={{textAlign: 'right'}}>
                <p class="text-muted py-2" style={{textAlign:'right'}}>
                  By: Joseph Caluya
                </p>
            </div>
        </div>
  );

}

export default homeKimSejeong;