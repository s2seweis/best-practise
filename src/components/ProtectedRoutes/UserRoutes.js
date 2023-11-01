import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import PropTypes from 'prop-types';

const UserRoutes = ({user}) => {
  // Check if user is logged in
  const isLoggedIn = user !== null || undefined; // Modify this condition based on your authentication logic

  // Alternatively, you can check user roles here if you have role-based authorization logic
  // const isAuthorized = user && (user.role === 'user' || user.role === 'admin');

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

UserRoutes.propTypes = {
  user: PropTypes.object, // Assuming user object structure, you can adjust this based on your actual user object structure
};

export default UserRoutes;
