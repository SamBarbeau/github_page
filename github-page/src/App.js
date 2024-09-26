import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import FoodPhotos from './components/FoodPhotos';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/food" component={FoodPhotos} />
      </Switch>
    </Router>
  );
};

export default App;
