function homeTemplate(imgurl, imgcred, contenturl, title, author){
    let state = imgcred === ""? false: true;
    let linkstate = contenturl === ""? false: true;

    return(
    <div>
            <figure class="image is-256x128" width="100%" height="100%">
                <img src={imgurl} alt="Failed to Load" width="100%" height="100%"/>
                
                <p style={{fontSize:'x-small'}}>
                    {state && imgcred}
                </p>
              </figure>

              <div class="card-body">
                <a href={linkstate && contenturl} style={{textDecoration: 'none'}}>
                    <h5 class="card-text" style={{textDecoration: 'underline', color: 'black'}}>
                        {title} 
                    </h5>
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