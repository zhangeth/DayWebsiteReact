
function newsCard(category, contenturl, title, author){
    let linkstate = contenturl === ""? false: true;

    return(
    <div class='newsacard'>
      <p>
        {category}
      </p>
      
      <a href={linkstate && contenturl}>
        <div class="card-title">{title}</div>
      </a>

      <div class='card-author'>
          By {author}
      </div>
    </div>
  );

}

export default newsCard;