function homeTemplate(imgurl, imgcred, contenturl, title, author){
    let state = imgcred === ""? false: true;
    let linkstate = contenturl === ""? false: true;

    return(
    <div>
      <figure class="image is-256x128" width="100%" height="100%">
        <a href={linkstate && contenturl}>
          <img src={imgurl} alt="Failed to Load" width="100%" height="100%" style={{opacity:'1', transition:'opacity 0.5s'}}
            onMouseOver={(pic) => pic.currentTarget.style.opacity = '0.65'}
            onMouseOut={(pic) => pic.currentTarget.style.opacity = '1'}
          />
        </a>
        <p style={{fontSize:'x-small'}}>
          {state && imgcred}
        </p>
      </figure>

              <div class="card-body">
                <a href={linkstate && contenturl} style={{textDecoration: 'none'}}>
                    <h5 class="card-text" style={{textDecoration: 'none', color: 'black', transition:'textDecoration 0.5s', transitionTimingFunction: 'ease-out'}}
                      onMouseOver={(link) => link.currentTarget.style.textDecoration = 'underline'}
                      onMouseOut={(link) => link.currentTarget.style.textDecoration = 'none'}
                    >
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