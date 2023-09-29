import '../../css/newsColumn.css';

function newsColumn() {
    // array of creative articles 
    const newsCards = [
      {
        id: 1,
        category: "NEWS",
        link: "/colonialism",
        title: "The Crown Jewels and Colonialism",
        author: "Bridget Zhang"
      },
      {
        id: 2,
        category: "NEWS",
        link: "/colonialism",
        title: "The Crown Jewels and Colonialism",
        author: "Bridget Zhang"
      },
      {
        id: 3,
        category: "NEWS",
        link: "/colonialism",
        title: "The Crown Jewels and Colonialism",
        author: "Bridget Zhang"
      }
      // Add more homeTemplate objects here as needed
    ];
  
    const newsCardList = newsCards.map((newsCard) => (
      <div class="newsCard" key={newsCard.id}>
        <p class='card-category'>{newsCard.category}</p>
        <p class='card-title'>{newsCard.title}</p>
        <p class='card-author'>{newsCard.author}</p>
      </div>
    ));
  
    return (  
      <div>
        <h2 style={{textAlign:'right', fontStyle:'italic', border:'bold'}}> News and Culture</h2>
        {newsCardList}
      </div>
    )
  }
  export default newsColumn;