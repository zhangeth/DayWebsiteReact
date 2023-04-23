function LiteratureContainer(title, author, excerpt, image, imageCredit, page)
{
    return(
        <>

            <div class="row literature-container">
                <div class="col-6 px-4">
                    <div>
                        <h4 class="py-1" style={{textAlign:'center', color: 'black'}}>{title}</h4>
                        <h4 class="pb-2" style={{textAlign:'center', color: 'black'}}>{author}</h4>
                    </div>
                    <div class="px-3 py-2">
                        <h5 style={{textAlign:'center', color:'black'}}>
                            {excerpt}
                        </h5>
                    </div>
                    <div class="px-3 py-4" style={{textAlign:'center'}}>
                        <a class="btn btn-outline-danger" href={page} role="button">Continue Reading</a>
                    </div>
                </div>
                <div class="col-6" style={{textAlign:'center'}}>
                    <figure class="image is-256x100" width="70%" height="70%">
                        <img src={image} width="70%" height="70%"/>
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