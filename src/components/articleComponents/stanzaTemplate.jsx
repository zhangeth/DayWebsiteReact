// for poem stanzas
import '../../css/article.css'

function stanzaTemplate(stanzas){
    const stanzaElements = [];

    for (let i = 0; i < stanzas.length; i++) {
        stanzaElements.push(
            <div key={i}>
                <p className="article-stanza">{stanzas[i]}</p>
            </div>
        );
    }

    return <div class="mb-4">{stanzaElements}</div>;
}

export default stanzaTemplate;