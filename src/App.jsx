import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShowsPage from './pages/ShowsPage';
import GalleryPage from './pages/GalleryPage';
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
          <Route path='/shows' element={<ShowsPage />} />
          <Route path='/gallery' element={<GalleryPage/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;