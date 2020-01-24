import React from 'react';
import './styles/Home.css';
import Navigation from './shared/Navigation'

function Home() {
    return (
        <div className="home-container">
            <Navigation />
            <div className="header">
            <div className="name">
                <h1 className="first">richard</h1><h1 className="last">kang</h1>
            </div>
            <div className="brand">
                <p>Software engineer trained in full stack web development, studying various fields of visual arts, with 6+ years in employee development. Creativity being my driving passion allows me to both consistently produce unique works for clients while also thinking outside the box for general problem solving. Along with my love to create, encouraging growth and positivity in the workplace continue to be significant points in my journey, leading me to have organized numerous events for youth career growth programs, fundraisers, and job fairs.</p>
            </div>
            </div>
            {/* <img alt="skyline" src={require('../images/city.jpeg')} /> */}
            <div className="scroll">
                <h3>SCROLL DOWN TO LEARN MORE</h3>
                <p className="symbol">v</p>
            </div>
        </div>
    );
}

export default Home;   