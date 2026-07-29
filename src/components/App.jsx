import React from 'react';
import '../assets/style.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';


const App = () => {
  return (
    
    <BrowserRouter>
      <div className="body" style={{ justifyContent: 'center', paddingTop: '40px', minHeight: '100vh' }}>
        <div className="content-container" style={{ maxWidth: '1200px', width: '100%', padding: '0 20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<HomePage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
