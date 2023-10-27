import '../../css/about.css'

function eboardTemplate(pics, positions, names) {
    const rows = [];
  
    for (let i = 0; i < pics.length; i += 3) {
      const row = (
        <div key={i} className="row">
          {pics.slice(i, i + 3).map((pic, index) => (
            <div key={index} className="col-4">
              <div className="image-row">
                <img className="circular-picture" src={pic}/>
                <div className="row">
                  <h5 className="about-subtitle2">{positions[i + index]}</h5>
                </div>
                <div className="row">
                  <h6 className="about-body">{names[i + index]}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
  
      rows.push(row);
    }
    return <div>{rows}</div>;
  }
  
  export default eboardTemplate;