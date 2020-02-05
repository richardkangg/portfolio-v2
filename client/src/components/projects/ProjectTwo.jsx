import React from 'react';
import '../styles/Project.css';
import Navigation from '../shared/Navigation'

function ProjectTwo() {
    return (
        <div className="project-container">
            <Navigation />
            <div className="project">
                <div className="screenshot">
                    <img alt="project 2" src={require('../../images/somethingrecipes.gif')} />
                    <div className="info">
                        <h1>Something Recipes</h1>
                        <p>Personal cookbook allowing user to create, edit, delete their own recipes into a mockAPI, allowing them to store their favorite meal how-to's digitally.</p>
                        <a href="http://something-recipes.surge.sh/">Live Website Link</a>
                        <a href="https://github.com/richardkangg/Something-Recipes">Project GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectTwo;  