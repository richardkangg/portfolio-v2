import React from 'react';
import './styles/About.css';
import Navigation from './shared/Navigation'

function About() {
    return (
        <div className="about-container">
            <Navigation />
            <div className="about">
                <div className="likes">
                <h1>About Me</h1>
                    <h3>Likes:</h3>
                    <p>Coffee, plants, reading, snacking in bed</p>
                </div>
                <div className="description">
                    <p>Since a young age, I have always loved to create. I've dabbled in various arts; graphic design, illustration, photography, film, even writing.</p>
                    <p>For the sake of stability and security, I ventured into business management and talent development as a career while I continued to practice what I considered to be only hobbies. Eventually, I realized creating on the side was not enough. I needed to create full-time.</p>
                    <p>That's when I discovered software engineering. I see software engineering as an art, one where I don't have to compromise between creativity and stability, one where you can create - virtually anything and everything - not only visually, but projects that can be interactive, fun, practical, and beneficial to people.</p>
                </div>
            </div>
        </div>
    );
}

export default About;  