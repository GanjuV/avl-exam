import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './component/home/Home';
import Welcome from './component/welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/home' component={Home} />
            {/* <Route exact path='/login' component={Login} />
            <Route exact path='/result' component={Result} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
