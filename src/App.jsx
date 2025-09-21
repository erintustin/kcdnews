import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import EventDetailPage from './pages/EventDetailPage';
import Ticker from 'react-ticker';


function App() {
  // const ticker = ["LIVE","LAUGH","GOON","SHRED"]
  return (
    <div className="App">
    {/* <Ticker mode='chain' speed={5} offset='run-in' className='h2'>
        {() => (
          <>
          <div>
            {ticker} </div>
          </>
        )}
      </Ticker> */}
      <Navigation />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route
                    path='events/:eventName'
                    element={<EventDetailPage />}
                />
          <Route path='/music' element={<GalleryPage/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;