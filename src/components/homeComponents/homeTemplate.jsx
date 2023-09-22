import '../../css/images.css'
import '../../css/homeCard.css'

function homeTemplate(imgurl, imgcred, contenturl, title, author){
    let state = imgcred === ""? false: true;
    let linkstate = contenturl === ""? false: true;

    return(
    <div class='homeCard'>
      <div class="imgBox">
        <a href={linkstate && contenturl}>
          <img src={imgurl} alt="Failed to Load"/>
        </a>
      </div>
      
      <p class='imgCred'>
        {state && imgcred}
      </p>
      
      <a href={linkstate && contenturl}>
        <h5 class="card-title">{title}</h5>
      </a>

      <p class='card-author'>
          By: {author}
      </p>
    </div>
  );

}

export default homeTemplate;