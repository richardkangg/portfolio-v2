import React from 'react';
import './styles/Projects.css';
import Navigation from './shared/Navigation'

function Projects() {
    return (
        <div className="projects-container">
            <Navigation />
            <div className="projects">
                <div className="projects-filter">
                    <h2>TECHNICAL SKILLS</h2>
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
                        <img className="pic" alt="plants" src={require('../images/plantsscreenshot.png')} />
                        <div className="title"><p>Plants For Your Home.</p></div></a>
                    </div>
                    <div className="project"><a href="/projects/p3">
                        <img className="pic" alt="richord" src={require('../images/richordscreenshot.png')} />
                        <div className="title"><p>RICHORD.</p></div></a>
                    </div>
                    <div className="project"><a href="/projects/uxcollab">
                        <img className="pic" alt="refigitate" src={require('../images/refrigitatescreenshot.png')} />
                        <div className="title"><p>Refrigitate.</p></div></a>
                    </div>
                    <div className="project"><a href="/projects/p2">
                        <img className="pic" alt="recipes" src={require('../images/recipesscreenshot.png')} />
                        <div className="title"><p>Something Recipes.</p></div></a>
                    </div>
                    <div className="project"><a href="/projects/p1">
                        <img className="pic" alt="energy" src={require('../images/screenshot.png')} />
                        <div className="title"><p>Something Energy.</p></div></a>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default Projects;   