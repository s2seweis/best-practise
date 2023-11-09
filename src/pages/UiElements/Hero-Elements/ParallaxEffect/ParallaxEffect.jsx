import React from 'react';
import PropTypes from 'prop-types';
import './ParallaxEffect.css';

const ParallaxEffect = ({ backgroundImage, children }) => {

  return (
    <div className="parallax-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="parallax-content">{children}</div>
    </div>
  );
};

ParallaxEffect.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ParallaxEffect;
