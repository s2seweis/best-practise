import React from 'react';
import { FaCode, FaCogs, FaUser } from 'react-icons/fa'; // Import the desired icons

export const userDropdownItems = [
  { id: 1, text: 'Eslint', url: '/eslint', icon: <FaCode /> },
  { id: 2, text: 'Emmets', url: '/emmets', icon: <FaCode /> },
  { id: 3, text: 'Best Practise', url: '/best-practice', icon: <FaCode /> },
  { id: 4, text: 'Git', url: '/git', icon: <FaCode /> },
  { id: 5, text: 'Packages', url: '/packages', icon: <FaCode /> },
  { id: 6, text: 'Extensions', url: '/extensions', icon: <FaCode /> },
  { id: 7, text: 'UI Elements', url: '/ui-elements', icon: <FaCode /> },
  { id: 8, text: 'Boot & Tail', url: '/bootstrap-tailwind', icon: <FaCode /> },
  { id: 9, text: 'Jest', url: '/jest', icon: <FaCode /> },
  // Add more dropdown items as needed
];

export const adminDropdownItems = [
  { id: 1, text: 'Profile', url: '/profile', icon: <FaUser /> },
  { id: 2, text: 'Admin', url: '/admin', icon: <FaCogs /> },
  // Add more dropdown items as needed
];
