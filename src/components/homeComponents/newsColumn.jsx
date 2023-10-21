import '../../css/newsColumn.css';
import grace from "../../assets/ArticlePics/grace.jpg"
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
      }
      // Add more homeTemplate objects here as needed
    ];
  
    const newsCardList = newsCards.map((newsCard) => (
      <div class="newsCard" key={newsCard.id}>
            <p class='card-category'>{newsCard.category}</p>
            <a href={newsCard.link} key={newsCard.id}>
                <p class='card-title'>{newsCard.title}</p>
            </a>
            <p class='card-author'>{newsCard.author}</p>
            <img src={newsCard.image}/>
      </div>
    ));
  
    return (  
      <div>
        <h2 class="newsColumn"> News & Culture</h2>
        {newsCardList}
      </div>
    )
  }
  export default newsColumn;