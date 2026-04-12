import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import MusicPage from './pages/MusicPage';
import SMSPolicy from './pages/SMSPolicy';
import EventDetailPage from './pages/EventDetailPage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // 1. Set up the Omnisend global variables
    window.omnisend = window.omnisend || [];
    window.omnisend.push(["brandID", "69dbbcdc039c1dc913029dd3"]);
    window.omnisend.push(["track", "$pageViewed"]);

    // 2. Create the script element to load the launcher
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://omnisnippet1.com/inshop/launcher-v2.js";

    // 3. Inject the script into the page
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }, []); // Empty array ensures this only runs once

  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/music' element={<MusicPage />} />
          <Route path='/smsprivacy' element={<SMSPolicy />} />
          <Route
                    path='events/:eventUri'
                    element={<EventDetailPage />}
                /> 
      </Routes>
      <Footer />
    </div>
  );
};

export default App;