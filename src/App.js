import React from 'react';
import './App.scss';
import Navbar from './organisms/navbar/Navbar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/who-are-you' exact component={Home} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/sign-in' exact component={SignIn} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
