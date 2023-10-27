import '../../css/images.css'
import '../../css/homeCard.css'

function homeTemplate(imgurl, imgcred, contenturl, title, category, description, author){
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
      
      <div class='card-category'>{category}</div>

      <a href={linkstate && contenturl}>
        <div class="card-title">{title}</div>
      </a>

      <div class='card-description'>{description}</div>

      <div class='card-author'>
          By {author}
      </div>
    </div>
  );

}

export default homeTemplate;