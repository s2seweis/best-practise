import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';
import * as CgIcons from 'react-icons/cg';
import * as FcIcons from 'react-icons/fc';

// ### JSON Object
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Content',
    // path: '/',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Eslint',
        path: '/eslint',
        icon: <FcIcons.FcSurvey />,
        cName: 'sub-nav',
      },
      {
        title: 'Emmets',
        path: '/emmets',
        icon: <FcIcons.FcSurvey />,
      },
      {
        title: 'Best Practise',
        path: '/best-practice',
        icon: <FcIcons.FcSurvey />,
      },
      {
        title: 'Git',
        path: '/git',
        icon: <FcIcons.FcSurvey />,
      },
      {
        title: 'Packages',
        path: '/packages',
        icon: <FcIcons.FcSurvey />,
      },
      {
        title: 'Extensions VS',
        path: '/extensions',
        icon: <FcIcons.FcSurvey />,
      },
      {
        title: 'UI Elements',
        path: '/ui-elements',
        icon: <FcIcons.FcSurvey />,
      },
      {
        title: 'Jest',
        path: '/jest',
        icon: <FcIcons.FcSurvey />,
      },
      {
        title: 'Boot & Tail',
        path: '/bootstrap-tailwind',
        icon: <FcIcons.FcSurvey />,
      },
    ],
  },
 
];
export const SidebarDataAdmin = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <CgIcons.CgProfile />,
  },
  {
    title: 'Admin',
    path: '/admin',
    icon: <GrIcons.GrContact />,
  },
  {
    title: 'Take a Survey',
    // path: '/',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Available Surveys',
        path: '/available-surveys',
        icon: <FcIcons.FcSurvey />,
        cName: 'sub-nav',
      },
      {
        title: 'Taken Results',
        path: '/taken-surveys',
        icon: <FcIcons.FcSurvey />,

      },
    ],
  },
 
];
