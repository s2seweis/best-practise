import React from 'react';
import { FaCode, FaRocket, FaPuzzlePiece, FaLightbulb, FaGitAlt, FaBox } from 'react-icons/fa';
import { RxComponent1 } from 'react-icons/rx';
import Card from '../../components/Card/Card';

const Home = () => {
  return (
    <div>
      <h1>Content Overview</h1>
      <div className="card-container">
        <Card title="Eslint" icon={<FaCode />} linkTo="/eslint" />
        <Card title="Emmets" icon={<FaRocket />} linkTo="/emmets" />
        <Card title="Extensions VS" icon={<FaPuzzlePiece />} linkTo="/extensions" />
        <Card title="Best Practise" icon={<FaLightbulb />} linkTo="/best-practise" />
        <Card title="Git" icon={<FaGitAlt />} linkTo="/git" />
        <Card title="Packages" icon={<FaBox />} linkTo="/packages" />
        <Card title="Ui Elements" icon={<RxComponent1 />} linkTo="/ui-elements" />
        {/* Add your custom UI element icon here */}
      </div>
    </div>
  );
};

export default Home;