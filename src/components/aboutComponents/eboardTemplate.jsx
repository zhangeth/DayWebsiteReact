import '../../css/about.css'

function eboardTemplate(pic1, pic2, pic3, pos1, pos2, pos3, name1, name2, name3){
    return (
        <div>
            <div class="row">
                <div class="col-4">
                        <img class="circular-picture" src={pic1}/>
                </div>
                <div class="col-4">
                        <img class="circular-picture" src={pic2}/>
                </div>
                <div class="col-4">
                        <img class="circular-picture" src={pic3}/>
                </div>
            </div>

            <div class="row">
                <div class="col-4">
                    <div class="row">
                        <h5 class="about-subtitle2"> {pos1} </h5>
                    </div>
                    <div class="row">
                        <h6 class="about-body"> {name1} </h6>
                    </div>
                </div>
                <div class="col-4">
                    <div class="row">
                        <h5 class="about-subtitle2"> {pos2} </h5>
                    </div>
                    <div class="row">
                        <h6 class="about-body"> {name2} </h6>
                    </div>
                </div>
                <div class="col-4">
                    <div class="row">
                        <h5 class="about-subtitle2"> {pos3} </h5>
                    </div>
                    <div class="row">
                        <h6 class="about-body"> {name3} </h6>
                    </div>
                </div>
            </div>

            <div class="py-2"></div>
        </div>
    );
}
export default eboardTemplate;