import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import CentralPage from './components/centralPage';
import  Resume  from "./components/Resume";
import Portfolio from "./components/PortfolioPage";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/central" element={<CentralPage />} />
                    <Route path="/Resume" element={<Resume />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

