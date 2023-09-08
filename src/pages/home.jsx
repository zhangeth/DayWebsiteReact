
import homeTemplate from "../components/homeComponents/homeTemplate.jsx"
import {fetchArticles} from "../App.js"

// text files
//col-#, # is number of units out of 12 it will take up, if not specified, the other cols just split
//rest of space
const TITLE = 'DAY USC';
// TODO: make clicking on art link to art page
function Home() {
  return (
    <div>
      {fetchArticles()}
    </div>
  );
}

export default Home;