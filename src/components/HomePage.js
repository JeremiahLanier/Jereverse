import React from "react";
import Canvas from "./canvas"
import Welcome from "./welcome";
import EnterButton from "./enterButton";
import '../../src/App.css';

const HomePage = () => {
    return(
        <div>
            <Welcome />
            <Canvas width={window.innerWidth} height={window.innerHeight} />
            <EnterButton />
        </div>
    );
}
export default HomePage;
