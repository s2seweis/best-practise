import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import './UiElements.css';
import Basic from './Hero-Elements/Basic/Basic';
import ImageBackground from './Hero-Elements/ImageBackground/ImageBackground';
import VideoBackground from './Hero-Elements/VideoBackground/VideoBackground';
import GradientOverlay from './Hero-Elements/GradientOverlay/GradientOverlay';
import ParallaxEffect from './Hero-Elements/ParallaxEffect/ParallaxEffect';
import image2 from './assets/bunny1.png';
import image3 from './assets/bunny2.png';
import image4 from './assets/bunny3.png';

const UiElements = () => {

  const backgroundUrls1 = [
    image2,
    image3,
    image4,
  ];

  return (
    <div>
      {/* <h1>Some UI Hero Elements</h1>
      <p>More coming soon.</p> */}
      <Basic />
      <ImageBackground />
      <VideoBackground />
      <GradientOverlay />
      {/* <ParallaxEffect backgroundImage="path/to/your/image.jpg" /> */}
      <div>
        {backgroundUrls1.map((url, index) => (
          <ParallaxEffect key={index} backgroundImage={url}>
            <h1>Parallax Hero Effect  {index + 1}</h1>
            <button className='cta-button'>Get Started</button>
          </ParallaxEffect>
        ))}
        {/* Other components and content */}
      </div>

      <ScrollToTop style={{ width: 'min-content' }} />

    </div>
  );
};

export default UiElements;
