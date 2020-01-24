import React from 'react';
import '../styles/Navigation.css';

function Navigation() {
    return (
            <div className="navigation">
                <a href="/">HOME</a>
                <a href="/about">ABOUT</a>
                <a href="/projects">PROJECTS</a>
                <a href="/resume">RESUME</a>
                <a href="/contact">CONTACT</a>
            </div>
            );
}

export default Navigation;