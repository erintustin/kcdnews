import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Resume from './pages/Resume';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route
                    path='projects/:projectName'
                    element={<ProjectDetailPage />}
                />
          <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;