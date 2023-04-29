import React from 'react';

const Welcome = () => {
    return(
    <div className="welcome">
            <svg viewBox="0 0 960 300">
                <symbol id="s-text">
                    <text textAnchor="start" x="0%" y="60%">Welcome to the Jereverse </text>

                </symbol>
                <g className="g-ants">
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                </g>
            </svg>
        </div>
    );
};

export default Welcome;
