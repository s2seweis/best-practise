import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import UserRoutes from './components/ProtectedRoutes/UserRoutes';

// ### Pages
import Home from './pages/Home/Home';
import Eslint from './pages/Eslint/Eslint';
import Emmets from './pages/Emmets/Emmets';
import Extensions from './pages/Extensions/Extensions';
import BestPractise from './pages/BestPractise/BestPractise';
import Git from './pages/Git/Git';
import Packages from './pages/Packages/Packages';
import UiElements from './pages/UiElements/UiElements';

const AppRouter = () => {
  const user = null;

  return (
    <Router>
      <Layout>

        <Routes>

          {/* User Routes */}
          <Route element={<UserRoutes user={user} />}>
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/eslint" element={<Eslint />} />
          <Route path="/emmets" element={<Emmets />} />
          <Route path="/extensions" element={<Extensions />} />
          <Route path="/best-practise" element={<BestPractise />} />
          <Route path="/git" element={<Git />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/ui-elements" element={<UiElements />} />

        </Routes>

      </Layout>
    </Router>
  );
};

export default AppRouter;
