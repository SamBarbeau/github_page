// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Food from './pages/Food';
import Other from './pages/Other';
import Secret from './pages/secret/Secret';
import SecretRouteHandler from './pages/secret/SecretRouteHandler';

const App = () => {
  const [secretUnlocked, setSecretUnlocked] = useState(false);

  return (
    <Router>
      <SecretRouteHandler setSecretUnlocked={setSecretUnlocked} />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/food" element={<Food />} />
          <Route path="/other" element={<Other />} />
          <Route path="/secret" element={secretUnlocked ? <Secret /> : <Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
