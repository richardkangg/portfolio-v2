import React from 'react';
import '../styles/Project.css';
import Navigation from '../shared/Navigation'

function ProjectUXCollab() {
    return (
        <div className="project-container">
            <Navigation />
            <div className="project">
                <div className="screenshot">
                    <img alt="project uxcollab" src={require('../../images/refrigitate.gif')} />
                    <div className="info">
                        <h1>Refrigitate</h1>
                        <p>Partnering with UX designers, we created a cookbook website allowing users to search for recipes filtered by what ingredients they currently have at hand.</p>
                        <a href="http://refrigitate.surge.sh/">Live Project Link</a>
                        <a href="https://github.com/Maxizzle/Refrigitate">Project GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectUXCollab;  