function HalmoniContainer(title, author, image, imageCredit, page)
{
    return (
        <div className="row literature-container">
                <div className="col-6">
                    <div>
                        <h4 className="px-3 py-1" style={{textAlign:'center', color: 'black'}}>{title}</h4>
                        <h4 className="px-3 pb-2" style={{textAlign:'center', color: 'black'}}>{author}</h4>
                    </div>
                    <div className="px-3 py-4" style={{textAlign:'center'}}>
                        <h5 style={{color:'black'}}>Our relationship is complex.</h5>
                        <h5 style={{color:'black'}}>a towering wall stands between us</h5>
                        <h5 style={{color:'black'}}>and no matter how many times we cry out to each other,</h5>
                        <h5 style={{color:'black'}}>english slams into brick,</h5>
                        <h5 style={{color:'black'}}>korean collides with concrete</h5>
                        <h5 style={{color:'black'}}>and they never quite reach the other side.</h5>
                        <h5 style={{color:'black'}}>i face the mocking wall before me:</h5>
                        <h5 style={{color:'black'}}>korean characters flash in nonsensical patterns before my eyes,</h5>
                        <h5 style={{color:'black'}}>incoherent phrases and intonations ring in my ears,</h5>
                        <h5 style={{color:'black'}}>taunting me as i drown in guilt, isolation, shame, and anxiety.</h5>
                    </div>
                    <div>
                        <div className="px-3 py-4" style={{textAlign:'center'}}>
                            <a className="btn btn-outline-danger" href={page} role="button">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <figure className="image is-256x128" width="100%" height="100%">
                        <img src={image} width="100%" height="100%"/>
                        <p style={{fontSize:'x-small'}}>
                            {imageCredit}
                        </p>
                    </figure>
                </div>
        </div>
    );
}
export default HalmoniContainer;