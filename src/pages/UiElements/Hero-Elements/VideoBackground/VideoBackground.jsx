import React from 'react';
import './VideoBackground.css';
import video from '../../assets/bunny.mp4';

const VideoBackground = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Video Hero Element</h1>
      <p>Discover Amazing Features and Services</p>
      <button className="cta-button">Get Started</button>
    </div>
  );
};

export default VideoBackground;
