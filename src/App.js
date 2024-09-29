import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Food from './pages/Food';
import Other from './pages/Other';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/food" element={<Food />} />
          <Route path="/other" element={<Other />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
