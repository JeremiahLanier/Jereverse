import React from "react";
import '../../src/App.css';
import CentralPageButton from "./CentralPageButton";

const Project = () => {
  return(
      <div className= "projects">

        //Programing Sections
        <section>


        </section>

        //Games Design and Development
        <section class="game-section">
          <h2 className="projects-line-title">My Games Projects</h2>
          <div className="owl-carousel custom-carousel owl-theme">

          </div>

        </section>

        //3D Art
        <section>
          <div className="3DArt-container">

            <div className="b-game-card">
              <div className="b-game-card__cover"
                   style="background-image:"></div>
            </div>

            <div className="b-game-card">
              <div className="b-game-card__cover"
                   style="background-image:"></div>
            </div>

            <div className="b-game-card">
              <div className="b-game-card__cover"
                   style="background-image:"></div>
            </div>

            <div className="b-game-card">
              <div className="b-game-card__cover"
                   style="background-image:"></div>
            </div>


          </div>
        </section>


      </div>
  );
}
export default Project;
