import fashionPic from "../../assets/ArticlePics/fashionPic.jpg"

function homeFashion(){
    return(
    <div>
        <figure class="image is-256x128" width="100%" height="100%">
            <img src={fashionPic} alt="Woman Model" width="100%" height="100%"/>
            <p style={{fontSize:'small'}}>
                ARIF ALI/AFP VIA GETTY IMAGES
            </p>
        </figure>


        <a href="/fashion" style={{color: 'black'}}>
            <h4 style={{textAlign:'center'}}> South Asian New York Fashion Week 2022 </h4>
        </a>

        <div style={{textAlign: 'right'}}>
            <p class="text-muted py-2" style={{textAlign:'right'}}>
                By: Jeen Lee
            </p>
        </div>
  </div>);

}

export default homeFashion;