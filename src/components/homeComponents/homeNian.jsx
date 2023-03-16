import tiger from "../../assets/Art/HelenaYu/helenaArt.jpg"

function homeNian(){
    return(
    <div>
        <figure class="image is-256x128" width="100%" height="100%">
            <img src={tiger} alt="Failed to Load" width="100%" height="100%"/>
                
            <em class="card-text" style={{textDecoration: 'none', color: 'black'}}>Nian</em>
                
        </figure>
              
        <div style={{textAlight: 'right'}}>
            <p class="text-muted" style={{textAlign:'right'}}>
                By: Helena Yu
            </p>
        </div>
  </div>);

}

export default homeNian;
