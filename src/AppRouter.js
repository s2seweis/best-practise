import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './layout/Layout';
import UserRoutes from './components/ProtectedRoutes/UserRoutes';

const AppRouter = () => {
  const user = null;

  return (
    <Router>
      <Layout>

        <Routes>

          {/* User Routes */}
          <Route element={<UserRoutes user={user} />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* Public Routes */}

          <Route />
          <Route path="/" element={<Home />} />

        </Routes>

      </Layout>
    </Router>
  );
};

export default AppRouter;
