import React from "react";
import graphicLogo from "../../assets/graphicLogo.png"
import litLogo from "../../assets/litLogo.png"
import projectsLogo from "../../assets/projectsLogo.png"
import financeLogo from "../../assets/financeLogo.png"
import "../../css/about.css"

function AboutTeamRoles() 
{
    return (
        <div className="container">
                <div className="row">
                        <h2 className="about-subtitle">TEAM ROLES</h2>
                </div>

                <div className="row">
                    <div className="col">
                            <h5 className="about-subtitle2">Graphic Design</h5>
                    </div>

                    <div className="col">
                            <h5 className="about-subtitle2">Literature</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                            <img className="logo" src={graphicLogo}/>
                    </div>
                    <div className="col">
                            <img className="logo" src={litLogo}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                            <p className="about-body">
                                Curates infographics and graphics to share on DAY’s social media platforms. Also, illustrates images used for promotion and events.
                            </p>
                    </div>
                    
                    <div className="col">
                            <p className="about-body">
                                Researches current events regarding APIDA issues to include in DAY USC’s social media posts. Writes short stories, prose, and poems related to the APIDA experience.
                            </p>
                    </div>
                </div>

                <div className="row">
                        <div className="col">
                            <h5 className="about-subtitle2">Projects</h5>
                        </div>

                        <div className="col">
                            <h5 className="about-subtitle2">Finance</h5>
                        </div>
                </div>

                <div className="row">
                    <div className="col">
                            <img className="logo" src={projectsLogo}/>
                    </div>
                    <div className="col">
                            <img className="logo" src={financeLogo}/>
                    </div>
                </div>

                <div className="row">
                        <div className="col">
                                <p className="about-body">
                                Brainstorms and develops activities and events promoting DAY’s mission. Collaborates with other (campus) organizations to host events.
                                </p>
                        </div>

                        <div className="col">
                                <p className="about-body">
                                Works with Treasurer to plan/run fundraising activities that go toward DAY USC activities such as potlucks, merch, and fundraising for charities/local Asian businesses.
                                </p>
                        </div>
                </div>
        </div>
    );
}

export default AboutTeamRoles;