// for poem stanzas
import '../../css/article.css'

function stanzaTemplate(stanza){
    const stanzaElements = [];

    for (let i = 0; i < stanza.length; i++) {
        stanzaElements.push(
            <div key={i}>
                <p className="article-stanza">{stanza[i]}</p>
            </div>
        );
    }

    return <div>{stanzaElements}</div>;
}

export default stanzaTemplate;