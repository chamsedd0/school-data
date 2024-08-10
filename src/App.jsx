import React from 'react';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/landingPage';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/landing" exact>
              <LandingPage></LandingPage>
            </Route>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
