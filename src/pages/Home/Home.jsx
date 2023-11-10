import React from 'react';
import { FaCode, FaRocket, FaPuzzlePiece, FaLightbulb, FaGitAlt, FaBox, FaFlask, FaBootstrap} from 'react-icons/fa';
import { RxComponent1 } from 'react-icons/rx';
import { BiLogoTailwindCss } from 'react-icons/bi';
import Card from '../../components/Card/Card';

const Home = () => {
  return (
    <div>
      <h1>Content Overview</h1>
      <div className="card-container">
        <Card title="Eslint" icon={<FaCode />} linkTo="/eslint" />
        <Card title="Emmets" icon={<FaRocket />} linkTo="/emmets" />
        <Card title="Extensions VS" icon={<FaPuzzlePiece />} linkTo="/extensions" />
        <Card title="Best Practice" icon={<FaLightbulb />} linkTo="/best-practice" />
        <Card title="Git" icon={<FaGitAlt />} linkTo="/git" />
        <Card title="Packages" icon={<FaBox />} linkTo="/packages" />
        <Card title="Ui Elements" icon={<RxComponent1 />} linkTo="/ui-elements" />
        <Card title="Bootstrap/Tailwind" icon={ <div><FaBootstrap/> <BiLogoTailwindCss/> </div>} linkTo="/bootstrap-tailwind" />
        <Card title="Jest" icon={<FaFlask />} linkTo="/jest" />
        {/* Add your custom UI element icon here */}
      </div>
    </div>
  );
};

export default Home;
