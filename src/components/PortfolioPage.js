import React from "react";
import '../../src/App.css';
import CentralPageButton from "./CentralPageButton";
import ComingSoon from "./ComingSoon";

const Portfolio = () => {

    const styles = {

        backgroundColor: "#F9F6F0",
        backgroundSize: "1em 1em, 4em 4em, 4em 4em, 4em 4em, 4em 4em",
        animation: "bpx 12s infinite, bpy 12s -3.75s infinite",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        border: "4px solid #2185C5 ",
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
    }

        return(
            <div className="portfolio"  style={styles}>
        <>

            <header>
                <span className="line-portfolio"></span>
                <h1 className="portfolio-animate-character">The Portfolio </h1>
                <span className="line-portfolio"></span>

             </header>



            <main>
                <ComingSoon />
                <CentralPageButton />

            </main>

            <footer>
                <p>&copy; 2023 Jeremiah Lanier. All rights reserved.</p>
            </footer>

        </>
            </div>
    );
}
export default Portfolio;
