import React from 'react';
import './styles/Resume.css';
import Navigation from './shared/Navigation'

function Resume() {
    return (
        <div className="resume-container">
            <Navigation />
            <div className="resume">
                <div className="form">
                <img src={require('../images/resume.png')} />
                </div>
            </div>

        </div>
    );
}

export default Resume;   