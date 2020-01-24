import React from 'react';
import '../styles/Project.css';
import Navigation from '../shared/Navigation'

function ProjectFour() {
    return (
        <div className="project-container">
            <Navigation />
            <div className="project">
                <div className="screenshot">
                    <img alt="project 4" src={require('../../images/p4.png')} />
                    <div className="info">
                        <h1>Plants for Your Home</h1>
                        <p>Simulator game allowing users to grow and maintain their own plants, while also educating users on how to care for particular types of types.</p>
                        <a href="https://github.com/richardkangg/plants-for-your-home">Project GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectFour;  