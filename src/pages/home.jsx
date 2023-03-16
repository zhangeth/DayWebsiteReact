//article components
import homeCrownJewels from "../components/homeComponents/homeCrownJewels.jsx"
import homeKimSejeong from "../components/homeComponents/homeKimSejeong.jsx"
import homeMontereyPark from "../components/homeComponents/homeMontereyPark.jsx"
import homeFashion from "../components/homeComponents/homeFashion.jsx"

//prose components
import homeHalmoni from "../components/homeComponents/homeHalmoni.jsx"

//art components
import homeOphelia from "../components/homeComponents/homeOphelia.jsx"
import homeNian from "../components/homeComponents/homeNian.jsx"

// text files
//col-#, # is number of units out of 12 it will take up, if not specified, the other cols just split
//rest of space
const TITLE = 'DAY USC';
// TODO: make clicking on art link to art page
function Home() {
  return (
    <div>

          <title>{ TITLE }</title>

    <div class="py-3">
      <div class="container">
        <div class="row">

          <div class="col" style={{borderRight: '1px solid black'}}>
            <div>
              <h3>Featured</h3>
              {homeCrownJewels()}
              {homeKimSejeong()}

              <h3>Prose</h3>
              {homeHalmoni()}

            </div>
          </div>

          <div class="col-6" style={{borderRight: '1px solid black'}}>
            <div>
              <div style={{textAlign:'center'}}>
                <em style={{textAlign:'center'}}> Our lives begin to end the day we become silent about things that matter. </em>
              </div>
              <div style={{textAlign:'center'}}>
                <p> - Martin Luther King Jr. </p>
              </div>

              {homeMontereyPark()}

              <div class="py-1">
              </div>

              {homeFashion()}
            </div>
          </div>

          <div class="col" width="25%">
            <h2 style={{textAlign:'right'}}> Art</h2>
              {homeOphelia()}
              {homeNian()}
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Home;