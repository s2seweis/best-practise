import React from 'react';
import { Link } from 'react-router-dom';
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

export default Card;
