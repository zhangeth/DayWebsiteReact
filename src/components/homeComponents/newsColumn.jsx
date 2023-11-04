import '../../css/newsColumn.css';
import '../../css/homeCard.css';
import boba from "../../assets/ArticlePics/boba.jpg"
import grace from "../../assets/ArticlePics/grace.jpg"
import mulan from "../../assets/ArticlePics/mulan.png"
import liliuokalani from "../../assets/ArticlePics/liliuokalani.png"
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
      }
      // Add more homeTemplate objects here as needed
    ];
  
    const newsCardList = newsCards.map((newsCard) => (
      <div class="newsCard" key={newsCard.id}>
        <div class="card-content">
          <p class='card-category'>{newsCard.category}</p>
          <a href={newsCard.link} key={newsCard.id}>
            <p class='card-title'>{newsCard.title}</p>
          </a>
          <p class='card-author'>{newsCard.author}</p>
        </div>
        <div class="card-image">
          <a href={newsCard.link} key={newsCard.id}>
            <img src={newsCard.image} alt={newsCard.title} />
          </a>
        </div>
      </div>
    ));
  
    return (  
      <div>
        <h2 class="newsColumn" style={{textAlign: 'right'}}> News & Culture</h2>
        {newsCardList}
      </div>
    )
  }
  export default newsColumn;