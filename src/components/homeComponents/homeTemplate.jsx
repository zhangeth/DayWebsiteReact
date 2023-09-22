import '../../css/images.css'
import '../../css/homeCard.css'

function homeTemplate(imgurl, imgcred, contenturl, title, author){
    let state = imgcred === ""? false: true;
    let linkstate = contenturl === ""? false: true;

    return(
    <div>
      <div class="imgBox">
        <a href={linkstate && contenturl}>
          <img src={imgurl}
            alt="Failed to Load"
          />
        </a>
      </div>
      <p style={{fontSize:'x-small', paddingBottom: '10px'}}>
        {state && imgcred}
      </p>
      
      
      <div class="homeCard">
        <a href={linkstate && contenturl}>
          <h5 className="card-text">{title}</h5>
        </a>
      </div>

      <div style={{textAlign: 'right'}}>
        <p class="text-muted py-2" style={{textAlign:'right'}}>
          By: {author}
        </p>
      </div>
    </div>
  );

}

export default homeTemplate;