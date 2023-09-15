import * as articles from '../../api/articles';

export function renderArticle(article) {
    return (
        <div>
          <h1>Article List</h1>
            <li key={article.id}>
            <h2>{article.name}</h2>
            <p>{article.content}</p>
            <p>Date: {article.date}</p>
            <p>Author ID: {article.authorId}</p>
            </li>
        </div>
    );
}

