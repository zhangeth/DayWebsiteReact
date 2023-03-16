import ophelia from "../../assets/Art/EthanZhang/Ophelia_painting.jpg"
import girlSketch from "../../assets/Art/EthanZhang/girl_long_hair_sketch.jpg"

function homeOphelia(){
    return(
    <div>
        <figure class="image is-256x128" width="100%" height="100%">
            <img src={ophelia} alt="Failed to Load" width="100%" height="100%"/>
                <em class="card-text" style={{textDecoration: 'none', color: 'black'}}>Ophelia</em>
        </figure>

        <figure class="image is-256x128" width="100%" height="100%">
            <img src={girlSketch} alt="Failed to Load" width="100%" height="100%"/>
                
            <em class="card-text" style={{textDecoration: 'none', color: 'black'}}>Sketch</em>
                
        </figure>
              
        <div style={{textAlight: 'right'}}>
            <p class="text-muted" style={{textAlign:'right'}}>
                By: Ethan Zhang
            </p>
        </div>
  </div>);

}

export default homeOphelia;