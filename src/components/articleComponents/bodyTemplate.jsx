// for regular paragraphs
import '../../css/article.css'

function bodyTemplate(paragraphs){
    const bodyElements = [];

    for (let i = 0; i < paragraphs.length; i++) {
        bodyElements.push(
            <div key={i}>
                <p className="article-paragraph">{paragraphs[i]}</p>
            </div>
        );
    }

    return <div>{bodyElements}</div>;
}

export default bodyTemplate;