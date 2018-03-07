import React, { Component } from 'react';
//import { Router, Route, hashHistory } from 'react-router';
import logo from './logo.svg';
import './App.css';

import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="siteTop">siteTop</div>
          <h1>Hello World</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <h2 class="appTxt">my first react app</h2>
          <a href="/abc">about US Link</a>
          {/*<Router history={hashHistory}>
              <Route path="/abc" component={About}/>
          </Router>*/}
      </div>
     );
  }
}
export default App;
