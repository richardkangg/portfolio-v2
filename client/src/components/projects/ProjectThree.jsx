import React from 'react';
import '../styles/Project.css';
import Navigation from '../shared/Navigation'

function ProjectThree() {
    return (
        <div className="project-container">
            <Navigation />
            <div className="project">
                <div className="screenshot">
                    <img alt="project 3" src={require('../../images/richord.gif')} />
                    <div className="info">
                        <h1>RICHORD</h1>
                        <p>As a team of three developers, we created an app for users to learn basic music foundations by using a virtual piano to create melodies of their choosing, allowing them to learn different notes.</p>
                        <a href="https://github.com/ipsita999/RICHORD-APP">Project GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectThree;  