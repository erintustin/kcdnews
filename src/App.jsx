import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import MusicPage from './pages/MusicPage';
import EventDetailPage from './pages/EventDetailPage';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/music' element={<MusicPage />} />
          <Route
                    path='events/:eventName'
                    element={<EventDetailPage />}
                />
          
      </Routes>
      <Footer />
    </div>
  );
};

export default App;