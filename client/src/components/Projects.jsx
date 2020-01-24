import React from 'react';
import './styles/Projects.css';
import Navigation from './shared/Navigation'

function Projects() {
    return (
        <div className="projects-container">
            <Navigation />
            <div className="projects">
                <div className="projects-filter">
                    <h2>Technical Skills</h2>
                    <div className="skills">
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>HTML</p>
                        <p>Ruby</p>
                        <p>Ruby on Rails</p>
                        <p>React</p>
                        <p>React Native</p>
                        <p>Node.js</p>
                        <p>PostgreSQL</p>
                        <p>Sequelize.js</p>
                        <p>Express.js</p>
                    </div>
                    <p>Additional Skills: Adobe Photoshop, Adobe Premiere Pro, photography, film</p>
                </div>
                <div className="examples">
                    <div className="project"><a href="/projects/p4">
                        <img alt="plants" src={require('../images/screenshot.png')} />
                        <p className="title">Plants For Your Home</p></a>
                    </div>
                    <div className="project"><a href="/projects/p3">
                        <img alt="richord" src={require('../images/screenshot.png')} />
                        <p className="title">RICHORD</p></a>
                    </div>
                    <div className="project"><a href="/projects/p2">
                        <img alt="refigitate" src={require('../images/screenshot.png')} />
                        <p className="title">Refigitate</p></a>
                    </div>
                    <div className="project"><a href="/projects/p1">
                        <img alt="recipes" src={require('../images/screenshot.png')} />
                        <p className="title">Something Recipes</p></a>
                    </div>
                    <div className="project"><a href="/projects/uxcollab">
                        <img alt="energy" src={require('../images/screenshot.png')} />
                        <p className="title">Something Energy</p></a>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default Projects;   