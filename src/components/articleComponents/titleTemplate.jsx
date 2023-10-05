import '../../css/article.css'

function titleTemplate(category, title, author, date){
    return(
        <div>
            <h6 class="article-category"> {category} </h6>

            <h2 class="article-title"> {title} </h2>

            <h6 class="article-author"> {author} </h6>

            <h6 class="article-date"> {date} </h6>

            <div style={{display:'flex', alignItems:'center'}}>
                <div style={{width:'100%', backgroundColor:'black', height:'5px'}}></div>
            </div>

            <div class="py-2">
            </div>
        </div>
  );

}

export default titleTemplate;