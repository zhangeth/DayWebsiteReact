import '../../css/article.css'

function linksTemplate(links){
    const linkElements = [];

    for (let i = 0; i < links.length; i++) {
        linkElements.push(
            <div key={i}>
                <a href={links[i]}>
                    <p className="article-link">
                        {links[i]}
                    </p>
                </a>
            </div>
        );
    }

    return <div>{linkElements}</div>;
}

export default linksTemplate;