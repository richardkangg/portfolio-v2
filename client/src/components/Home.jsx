import React from 'react';
import './styles/Home.css';
import Navigation from './shared/Navigation'

function Home() {
    return (
        <div className="home-container">
            <Navigation />
            <div className="header">
            {/* <div className="name"> */}
                {/* <div className="top"><h1>r</h1><h1>i</h1><h1>c</h1><h1>h</h1></div>
                <div className="middle"><h1>a</h1><h1>r</h1><h1>d</h1><h1>k</h1></div>
                <div className="bottom"><h1>a</h1><h1>n</h1><h1>g</h1><h1>.</h1></div> */}
                <img className="logo" alt="logo" src={require('../images/name.png')}/>
            {/* </div> */}
            <h1 className="title">software engineer</h1>
            {/* <div className="brand">
                <p>Software engineer trained in full stack web development, studying various fields of visual arts, with 6+ years in employee development. Creativity being my driving passion allows me to both consistently produce unique works for clients while also thinking outside the box for general problem solving. Along with my love to create, encouraging growth and positivity in the workplace continue to be significant points in my journey, leading me to have organized numerous events for youth career growth programs, fundraisers, and job fairs.</p>
            </div> */}
            </div>
            {/* <img alt="skyline" src={require('../images/city.jpeg')} /> */}
            {/* <div className="scroll">
                <h3>SCROLL DOWN TO LEARN MORE</h3>
                <p className="symbol">v</p>
            </div> */}
        </div>
    );
}

export default Home;   