import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes from the prop-types library
import './Card.css'; // Import your CSS file for card styling

const Card = ({ title, icon, linkTo }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        {icon && <div className="icon">{icon}</div>}
        <h2>{title}</h2>
        <Link to={linkTo}>Read More</Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired, // Title is required and must be a string
  icon: PropTypes.element, // Icon is optional and can be any valid React element
  linkTo: PropTypes.string.isRequired, // linkTo is required and must be a string
};

export default Card;
