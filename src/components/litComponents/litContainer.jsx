function LiteratureContainer(title, author, excerpt, image, imageCredit, page)
{
    return(
        <>

            <div className="row literature-container">
                <div className="col-6 p-0">
                    <div>
                        <h4 className="py-1" style={{textAlign:'center', color: 'black'}}>{title}</h4>
                        <h4 className="pb-2" style={{textAlign:'center', color: 'black'}}>{author}</h4>
                    </div>
                    <div className="px-3 py-2">
                        <h5 style={{textAlign:'center', color:'black'}}>
                            {excerpt}
                        </h5>
                    </div>
                    <div className="px-3 py-4" style={{textAlign:'center'}}>
                        <a className="btn btn-outline-danger" href={page} role="button">Continue Reading</a>
                    </div>
                </div>
                <div className="col-6">
                    <figure className="image is-256x100" width="100%" height="100%">
                        <img src={image} width="100%" height="100%"/>
                        <p style={{fontSize:'x-small'}}>
                            {imageCredit}
                        </p>
                    </figure>
                </div>
                <style jsx>{`
                    .literature-container {
                        display: flex;
                        align-items: stretch;
                    }
                    .col-6:first-child {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                `}</style>
            </div>
        </>
    );
}
export default LiteratureContainer;