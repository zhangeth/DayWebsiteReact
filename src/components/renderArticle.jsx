

function renderArticle({article})
{
    return (
        <div>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </div>
      );
}
export default renderArticle;