function homeTemplate(imgurl, imgcred, contenturl, title, author, category){
    let state = imgcred === ""? false: true;
    let linkstate = contenturl === ""? false: true;

    return(
    <div>
            <figure class="image is-256x128" width="100%" height="100%">
                <img src={imgurl} alt="Failed to Load" width="100%" height="100%"/>
                
                <p style={{color:'black', fontSize:'x-small'}}>
                    {state && imgcred}
                </p>
              </figure>

              <div style={{textAlign: 'left'}}>
                <p class="h6v4 py-2" style={{fontSize:'small', textAlign:'left'}}>
                  {category}
                </p>
              </div>

              <div class="card-body" style={{textAlign:'left'}}>
                <a href={linkstate && contenturl} style={{textDecoration: 'none'}}>
                    <h5 class="card-text pv2 pb-1" style={{fontWeight:'bold', textDecoration: 'underline', color: 'black'}}>
                        {title} 
                    </h5>
                </a>
              </div>

              <div style={{textAlign: 'left'}}>
                <p class="pv3 pb-4" style={{fontSize:'medium', color:'black', textAlign:'left'}}>
                  By: {author}
                </p>
              </div>
    </div>
    );

}

export default homeTemplate;