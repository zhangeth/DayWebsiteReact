import '../../css/images.css'

function homeTemplate(imgurl, imgcred, contenturl, title, author){
    let state = imgcred === ""? false: true;
    let linkstate = contenturl === ""? false: true;

    return(
    <div>
      <figure class="imgBox">
        <a href={linkstate && contenturl}>
          <img src={imgurl}
            alt="Failed to Load"
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