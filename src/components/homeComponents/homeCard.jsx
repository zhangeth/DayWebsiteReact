import '../../css/images.css'
import '../../css/homeCard.css'

function homeTemplate(imgurl, imgcred, contenturl, title, author){
    let state = imgcred === ""? false: true;
    let linkstate = contenturl === ""? false: true;

    return(
    <div className='homeCard'>
      <div className="imgBox">
        <a href={linkstate && contenturl}>
          <img src={imgurl} alt="Failed to Load"/>
        </a>
      </div>
      
      <p className='imgCred'>
        {state && imgcred}
      </p>
      
      <a href={linkstate && contenturl}>
        <div className="card-title">{title}</div>
      </a>

      <div className='card-author'>
          By {author}
      </div>
    </div>
  );

}

export default homeTemplate;