// components
// images
import trump from "../assets/Trump.webp";
import newYear from "../assets/2023-lunar-new-year.jpg"

// text files
import trumpStatement from "../assets/Statement-by-Trump.pdf"

//col-#, # is number of units out of 12 it will take up, if not specified, the other cols just split
//rest of space
function Home() {
  return (
    <div>
    <div class="py-3">
      <div class="container">
        <div class="row">

          <div class="col" style={{borderRight: '1px solid black'}}>
            <div>
              <h3>Featured</h3>
              <figure class="image is-256x128" width="100%" height="100%">
                <img src={trump} width="100%" height="100%"/>
              </figure>
              
              <div class="card-body">
                <a href="/colonialism" style={{textDecoration: 'none'}}>
                  <h5 class="card-text" style={{color: 'black'}}>The Crown Jewels and Colonialism</h5>
                </a>
              </div>
            

            </div>
          </div>

          <div class="col-6" style={{borderRight: '1px solid black'}}>
            <div>
              <div style={{textAlign:'center'}}>
                <em style={{textAlign:'center'}}> Our lives begin to end the day we become silent about things that matter. </em>
              </div>

              <figure class="image is-256x128 py-1" width="100%" height="100%">
                <img src={newYear} width="100%" height="100%"/>
              </figure>
              
              <div class="card-body">
                <a href={trumpStatement} style={{textDecoration: 'none'}}>
                  <h4 class="card-text" style={{textDecoration: 'underline', color: 'black'}}>Sample New Headline of Trump being a Menace</h4>
                </a>
              </div>
              
              <div style={{textAlign: 'right'}}>
                <p class="text-muted py-2" style={{textAlign:'right'}}>
                  By: Ethan Zhang
                </p>
              </div>

              
              

            </div>
          </div>
          
          <div class="col" width="25%">
            <h2 style={{textAlign:'right'}}> Art</h2>
            <figure class="image is-256x128" width="100%" height="100%">
                <img src={newYear} width="100%" height="100%"/>
              </figure>
              
              <div class="card-body">
                <a href={trumpStatement} style={{textDecoration: 'none'}}>
                  <h5 class="card-text" style={{textDecoration: 'underline', color: 'black'}}>Sample New Headline of Trump being a Menace</h5>
                </a>
              </div>
              
              <div style={{textAlight: 'right'}}>
                <p class="text-muted" style={{textAlign:'right'}}>
                  By: Ethan Zhang
                </p>
              </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
  /*
   <div>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <figure class="image is-256x128" width="100%" height="100%">
                  <img src={trump} width="100%" height="100%"/>
                </figure>
                
                <div class="card-body">
                  <p class="card-text">Sample New Headline of Trump being a Menace</p>
                  <div class="d-flex justify-content-between align-items-center">
                    
                    <div class="btn-group">
                      <div>
                        <a href={trumpStatement}>
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        </a>
                      </div>
                
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <figure class="image is-1200x600" width="100%" height="100%">
                  <img src={newYear} width="100%" height="100%"/>
                </figure>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        */
}

export default Home;