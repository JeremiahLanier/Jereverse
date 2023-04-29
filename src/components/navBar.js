import React from 'react';


const NavBar = () => {
    return (

        <section class="et-hero-tabs">
            <h1>THE JEREVERSE</h1>
            <h3>WELCOME TO MY CENTRAL HUB IN THE DIGITAL WORLD </h3>
            <h5>AI. WEB. MOBILE. GAMING. CLOUD </h5>
            <div className="et-hero-tabs-container">
                <a className="et-hero-tab" href="/">Home</a>
                <a className="et-hero-tab" href="/Central">Central Hub</a>
                <a className="et-hero-tab" href="https://www.machinesintheclouds.com" target="_blank" rel="noopener noreferrer">Blog</a>
                <a className="et-hero-tab" href="/Portfolio">Portfolio</a>
                <a className="et-hero-tab" href="/Resume">Resume</a>
                <span class="et-hero-tab-slider"></span>
            </div>
        </section>
    );

}
export default NavBar;
