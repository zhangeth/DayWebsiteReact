// components
// article images
import newYear from "../assets/2023-lunar-new-year.jpg"
import queen from "../assets/ArticlePics/queenElizabeth.jpg"
import monterey from "../assets/ArticlePics/MontereyPic.jpg"
import kimSejeong from "../assets/ArticlePics/kimSejeong.jpg"

// art
import ophelia from "../assets/Art/Ophelia_painting.jpg"
import tiger from "../assets/Art/helenaArt.jpeg"
// text files

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
                <img src={queen} width="100%" height="100%"/>
              </figure>
              
              <div class="card-body">
                <a href="/colonialism" style={{textDecoration: 'none'}}>
                  <h5 class="card-text" style={{textDecoration: 'underline', color: 'black'}}>The Crown Jewels and Colonialism</h5>
                </a>
              </div>

              <div style={{textAlign: 'right'}}>
                <p class="text-muted py-2" style={{textAlign:'right'}}>
                  By: Bridget Zhang
                </p>
              </div>

              <figure class="image is-256x128" width="100%" height="100%">
                <img src={kimSejeong} width="100%" height="100%"/>
              </figure>
              
              <div class="card-body">
                <a href="/kpop" style={{textDecoration: 'none'}}>
                  <h5 class="card-text" style={{textDecoration: 'underline', color: 'black'}}>A Re-Cap of USC’s K-Pop Festa </h5>
                </a>
              </div>

              <div style={{textAlign: 'right'}}>
                <p class="text-muted py-2" style={{textAlign:'right'}}>
                  By: Joseph Caluya
                </p>
              </div>

            </div>
          </div>

          <div class="col-6" style={{borderRight: '1px solid black'}}>
            <div>
              <div style={{textAlign:'center'}}>
                <em style={{textAlign:'center'}}> Our lives begin to end the day we become silent about things that matter. </em>
              </div>

              <figure class="image is-256x128 py-1" width="100%" height="100%">
                <img src={monterey} width="100%" height="100%"/>
              </figure>
              
              <div class="card-body">
                <a href="/monterey" style={{textDecoration: 'none'}}>
                  <h4 class="card-text" style={{textDecoration: 'underline', color: 'black'}}>Mass Shooting in Monterey Park on Lunar New Year's Eve</h4>
                </a>
              </div>
              
              <div style={{textAlign: 'right'}}>
                <p class="text-muted py-2" style={{textAlign:'right'}}>
                  By: Yi-Ann
                </p>
              </div>

              <h2 style={{textAlign:'center'}}> Asians are Cool? Find out next time on the next episode of Ethan's Life</h2>
              

            </div>
          </div>
          
          <div class="col" width="25%">
            <h2 style={{textAlign:'right'}}> Art</h2>
            <figure class="image is-256x128" width="100%" height="100%">
                <img src={ophelia} width="100%" height="100%"/>
              </figure>
              
              <div class="card-body">
                <a href="/art" style={{textDecoration: 'none'}}>
                  <em class="card-text" style={{textDecoration: 'none', color: 'black'}}>Ophelia</em>
                </a>
              </div>
              
              <div style={{textAlight: 'right'}}>
                <p class="text-muted" style={{textAlign:'right'}}>
                  By: Ethan Zhang
                </p>
              </div>

              <figure class="image is-256x128" width="100%" height="100%">
                <img src={tiger} width="100%" height="100%"/>
              </figure>
              
              <div class="card-body">
                <a href="/art" style={{textDecoration: 'none'}}>
                  <em class="card-text" style={{textDecoration: 'none', color: 'black'}}>Nian</em>
                </a>
              </div>
              
              <div style={{textAlight: 'right'}}>
                <p class="text-muted" style={{textAlign:'right'}}>
                  By: Helena Yu
                </p>
              </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Home;