import React from 'react';
import { Link } from 'react-router-dom';

const CentralPageButton = () => {
    return (
        <div className="CentralPageButton">
            <Link to="/central">
                <svg viewBox="0 0 960 300">
                    <symbol id="f-text">
                        <text textAnchor="start" x="0%" y="60%">Central Hub</text>
                    </symbol>
                    <g className="g-ants">
                        <use xlinkHref="#f-text" className="cen-text-copy"></use>
                        <use xlinkHref="#f-text" className="cen-text-copy"></use>
                        <use xlinkHref="#f-text" className="cen-text-copy"></use>
                        <use xlinkHref="#f-text" className="cen-text-copy"></use>
                        <use xlinkHref="#f-text" className="cen-text-copy"></use>
                    </g>
                </svg>
            </Link>
        </div>
    );
};

export default CentralPageButton;
