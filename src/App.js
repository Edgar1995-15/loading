import React, { useState } from 'react';

import './App.css';
import logo from './assets/logo1.png';
import example from './assets/example-optimize.mp4';

function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="logo-container">
      <div className={`video-container ${videoLoaded ? 'show' : ''}`}>
        <video
          width="300"
          height="300"
          autoPlay
          muted
          playsInline
          loop
          onLoadedData={handleVideoLoad}
          controls={false}
          controlsList="nodownload"
        >
          <source src={example} type="video/mp4" />
        </video>
        <img src={logo} alt="Live Vegas" className={`logo-live ${videoLoaded ? 'show' : ''}`} />
      </div>
    </div>
  );
}

export default App;
