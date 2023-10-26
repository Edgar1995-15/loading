import React, { useState, useEffect } from 'react';

import './App.css';
import logo from './assets/logo1.png';
import example from './assets/example-optimize.mp4';

function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById('exampleVideo');

    videoElement.addEventListener('loadeddata', () => {
      setVideoLoaded(true);
    });
  }, []);

  return (
    <div className="logo-container">
      <div>
        <video
          id="exampleVideo"
          width="300"
          height="300"
          autoPlay
          muted
          playsInline
          loop
          controls={false}
          controlsList="nodownload"
        >
          <source src={example} type="video/mp4" />
        </video>
        {videoLoaded && (
          <img src={logo} alt="Live Vegas" className="logo-live" />
        )}
      </div>
    </div>
  );
}

export default App;
