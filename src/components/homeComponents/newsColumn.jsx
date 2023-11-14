import '../../css/newsColumn.css';
import '../../css/homeCard.css';
import boba from "../../assets/ArticlePics/boba.jpg"
import grace from "../../assets/ArticlePics/grace.jpg"
import mulan from "../../assets/ArticlePics/mulan.png"
import liliuokalani from "../../assets/ArticlePics/liliuokalani.png"
import mentalHealth from "../../assets/ArticlePics/mentalHealth.jpg"
import eeaaooscar from "../../assets/ArticlePics/eeaao.png"
function newsColumn() {
    // array of creative articles 
    const newsCards = [
      {
        id: 1,
        category: "APIDA FIGURES",
        link: "/apidawomen",
        title: "Notable APIDA Women to Spotlight During Women's History Month",
        author: "By Jeen Lee",
        image: liliuokalani
      },
      {
        id: 2,
        category: "APIDA FIGURES",
        link: "/grace",
        title: "Grace Young: From 'Stir-fry Guru' to 'Woman of the Year'",
        author: "By Celine Chen",
        image: grace
      },
      {
        id: 3,
        category: "ENTERTAINMENT/OPINION",
        link: "/comfortfilms",
        title: "Animated APIDA Comfort Films",
        author: "By Ina Ycasas",
        image: mulan
      },
      {
        id: 4,
        category: "ENTERTAINMENT/OPINION",
        link: "/reflections",
        title: "Reflections",
        author: "By Patrick Fang",
        image: boba
      },
      {
        id: 5,
        category: "SOCIETAL ISSUES",
        link: "/lolsorry",
        title: "lol sorry i'm being depressing: destigmatizing mental illness in the asian-american community",
        author: "By Ina Ycasas",
        image: mentalHealth
      },
      {
        id: 6,
        category: "ENTERTAINMENT",
        link: "/eeaao",
        title: "Why EEAAO Winning 7 Oscars is Significant",
        author: "By Jeen Lee",
        image: eeaaooscar
      },
      // Add more homeTemplate objects here as needed
    ];
  
    const newsCardList = newsCards.map((newsCard) => (
      <div className="newsCard" key={newsCard.id}>
        <div className="card-content">
          <p className='card-category'>{newsCard.category}</p>
          <a href={newsCard.link} key={newsCard.id}>
            <p className='card-title'>{newsCard.title}</p>
          </a>
          <p className='card-author'>{newsCard.author}</p>
        </div>
        <div className="card-image">
          <a href={newsCard.link} key={newsCard.id}>
            <img src={newsCard.image} alt={newsCard.title} />
          </a>
        </div>
      </div>
    ));
  
    return (  
      <div>
        <h2 className="newsColumn" style={{textAlign: 'right'}}> News & Culture</h2>
        {newsCardList}
      </div>
    )
  }
  export default newsColumn;