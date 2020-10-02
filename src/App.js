import React from 'react';
import adminpage from './admin-page';
import Home from './Home';
import About from './About'
import Links from './Links';
import Contact from './Contact';
import blog from './Blog'
import error from "./404";
import admin from './admin'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  console.log("Hello why are you here?")
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/links" component={Links} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Blog" component={blog} />
          <Route exact path="/admin-login" component={admin} />
          <Route exact path="/admin-page" component={admin} />
          <Route component={error} />
        </Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;
