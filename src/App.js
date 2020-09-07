import React from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/show'>Show</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
