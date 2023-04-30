import React from "react";
import CentralPageButton from "./CentralPageButton";
import '../../src/App.css';


const Resume = () => {
    const styles = {

        backgroundColor: "#F9F6F0",
        backgroundSize: "1em 1em, 4em 4em, 4em 4em, 4em 4em, 4em 4em",
        animation: "bpx 12s infinite, bpy 12s -3.75s infinite",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        border: "4px solid #2185C5",
        transition: "border 0.3s ease-in-out",

        outline: "none",
        ":focus": {
            border: "4px solid #C4AE78",
        },
        ":hover": {
            border: "4px solid #AC8E60",
        },
        ":active": {
            border: "4px solid #749EB2",
        },

};

  return(
      <div className="resume"  style={styles}>
    <>
    <header>
        <h1 className="animate-character">Jeremiah Lanier's Resume</h1>

    </header>

    <main>
        <section id="who">
            <h2>Who Am I?</h2>
            <p>Hello, Nice to meet you. My Name is <b>Jeremiah Lanier.</b><br />
                I'm a Software Developer with interests in many areas of Computer Science and Software Development.<br />
                Mainly Web & Mobile, AI & ML, Cloud, and Gaming.<br />
                I have a passion for the full stack, software design and using code for creative expression.<br />
                When I'm not writing code for my new projects.<br />
                I can be found either updating my blog, on the Jiu-Jitsu mats or working on my fantasy novel.<br />
            </p>

        </section>

        <section id="experience">
            <h2>Experience</h2>
            <ul>
                <li>
                    <h3>Software Developer</h3>
                    <h4>ECGO</h4>
                    <p>June 2020 - July 2021</p>
                    <ul>
                        <li>Built Data Models for the FireBase DataBase.</li>
                        <li>Worked on the UI</li>

                    </ul>
                </li>
                <li>
                    <h3>Software Developer</h3>
                    <h4>Freelance Work</h4>
                    <p>June 2018 - Present</p>
                    <ul>
                        <li><b>The Jereverse :</b> My Portfolio React site. Used to establish a web presence. </li>
                        <li><b>K and K Vending :</b> A landing page React site. Used to establish a web presence. Increased sales be 43% </li>
                        <li><b>BackSide Buds :</b> An ecommerce store built using Shopify.  </li>
                        <li><b>Judy's Shop :</b> A React/Express.js/Node.js site for a Hair Salon.</li>
                        <li><b>Peachy :</b> A Shopify ecommerce store.</li>
                    </ul>
                </li>
            </ul>
        </section>

        <section id="education">
            <h2>Education</h2>
            <ul>
                <li>
                    <h3>Bachelors Degree</h3>
                    <h4>Georgia State University</h4>
                    <p>Major: Computer Information Systems</p>
                    <p>Aug 2019 - Dec -22</p>
                </li>
                <li>
                    <h3>Associates Degree</h3>
                    <h4>Gwinnett Technical College</h4>
                    <p>Major: Computer Programming</p>
                    <p>Aug 2015 - May 2018</p>
                </li>
            </ul>
        </section>

        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <h3>Programming Languages</h3>
                <li>Java</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>HTML5/CSS3</li>
                <li>Python</li>
                <li>C#</li>
                <li>SQL</li>
            </ul>
            <ul>
                <h3>Frameworks and Libraries</h3>
                <li>SpringFramework</li>
                <li>React/Redux</li>
                <li>Pandas/Numpy</li>
                <li>.Net</li>
                <li>Express.js</li>
            </ul>
            <ul>
                <h3>Tools and Platforms</h3>
                <li>AWS</li>
                <li>Unity</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Microsoft Office</li>
                <li>Tableau</li>
            </ul>
        </section>

        <section id="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <h3>Delivery Madness(Still in Development)</h3>
                    <p>A cross-platform game built using C# with the Unity Game Engine. Currently, in Development Alpha Version Coming Soon.<br />
                        A 2D pixel art roguelike game.
                    </p>
                </li>
                <li>
                    <h3>Benin Statue Image Classifier</h3>
                    <p>Image classification using convolutional neural networks (CNNs) to recognize images of Benin Statues of West Africa<br />
                        Python, Keras, OpenCV, VGG16, Flask.
                    </p>
                </li>
                <li>
                    <h3>Live NBA Dashboard From API</h3>
                    <p>Used Tableau with an NBA Stats API to create a customized Dashboard with live players stats and betting lines.</p>
                </li>
                <li>
                    <h3>machinesintheclouds.com "Blog"</h3>
                    <p>A Blog I ran to talk about things I'm learning and projects I'm currently working on.<br />
                        As well as tutorials, news and thoughts on things in Tech in general.<br />
                        I cover mostly fundamentals of programming, Machine Learning concepts, Game Design and The Cloud.
                    </p>
                </li>
                <li>
                    <h3>Movie Recommendation App </h3>
                    <p>React site takes user input and makes API call to public API serving back all related movies.<br />
                        Selected movie then returns info about Movie
                    </p>
                </li>
                <li>
                    <h3>Java Sheriff App </h3>
                    <p>A college capstone project. I built a fully functional CRUD app with Java and JavaFX for the GUI.<br />
                        And MySQL on the backend to add and delete "inmates".<br />
                        As well as Add court dates and release dates.
                    </p>
                </li>
                <li>
                    <h3>Python Pygame Platformer Game </h3>
                    <p>
                    </p>
                </li>
                <li>
                    <h3> 2D Javascript Platformer Game </h3>
                    <p>
                    </p>
                </li>
                <li>
                    <h3> The Jereverse React Site </h3>
                    <p> My React portfolio website. Serves as the Central Hub for all my updates and projects.
                        Made use of all modern features in React.
                    </p>
                </li>
            </ul>
        </section>
        <CentralPageButton />
    </main>

        <footer>
            <p>&copy; 2023 Jeremiah Lanier. All rights reserved.</p>
        </footer>
      </>
      </div>
    );
}

export default Resume;
