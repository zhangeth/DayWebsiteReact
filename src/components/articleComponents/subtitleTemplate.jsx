// for subtitle + image + paragraph formats
import '../../css/article.css'

function subtitleTemplate(subtitle, images, paragraphs){
    const subtitleElements = [];

    for (let i = 0; i < subtitle.length; i++) {
        subtitleElements.push(
            <div key={i}>
                <h6 className="article-subtitle">{subtitle[i]}</h6>

                <div className="article-image">
                    <img src={images[i]}/>
                </div>

                <p className="article-paragraph">{paragraphs[i]}</p>
            </div>
        );
    }

    return <div>{subtitleElements}</div>;
}

export default subtitleTemplate;