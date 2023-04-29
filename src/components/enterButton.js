import React from 'react';
import { Link } from 'react-router-dom';

const EnterButton = () => {
    return (
        <div className="EnterButton">
            <Link to="/central">
                <svg viewBox="0 0 960 300">
                    <symbol id="d-text">
                        <text textAnchor="start" x="0%" y="60%">Enter </text>
                    </symbol>
                    <g className="g-ants">
                        <use xlinkHref="#d-text" className="text-copy"></use>
                        <use xlinkHref="#d-text" className="text-copy"></use>
                        <use xlinkHref="#d-text" className="text-copy"></use>
                        <use xlinkHref="#d-text" className="text-copy"></use>
                        <use xlinkHref="#d-text" className="text-copy"></use>
                    </g>
                </svg>
            </Link>
        </div>
    );
};

export default EnterButton;
