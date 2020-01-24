import React from 'react';
import '../styles/Project.css';
import Navigation from '../shared/Navigation'

function ProjectOne() {
    return (
        <div className="project-container">
            <Navigation />
            <div className="project">
                <div className="screenshot">
                    <img alt="project 1" src={require('../../images/somethingenergy.gif')} />
                    <div className="info">
                        <h1>Something Energy Co.</h1>
                        <p>Sample website for energy drink company, showcasing various flavors available, product info, and sponsors.</p>
                        <a href="https://github.com/richardkangg/Something-Energy">Project GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectOne;  