import React from 'react';
import './styles/Contact.css';
import Navigation from './shared/Navigation'

function Contact() {
    return (
        <div className="contact-container">
            <Navigation />
            <div className="contact">
                <div className="form">
                <h1>Contact</h1>
                <p>EMAIL: richardkangg@gmail.com</p>
                <a href='http://github.com/richardkangg'>GitHub</a>
                <a href='http://linkedin/in/richardkangg'>LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;   