import '../../css/article.css'

function quotesTemplate(quotes){
    const quotesElements = [];

    for (let i = 0; i < quotes.length; i++) {
        quotesElements.push(
            <div key={i}>
                <h6 className="article-subtitle">{quotes[i]}</h6>
            </div>
        );
    }

    return <div>{quotesElements}</div>;
}

export default quotesTemplate;