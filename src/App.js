import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Detail from './Detail';
class App extends Component {
  render() {
    return (

      <Router>
       
          <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
              <li><a>home</a></li>
              <li><a>contact</a></li>
              <li><a>detail</a></li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
         <Route path="/contact" component={Contact} />
         <Route path="/detail" component={Detail} />
      
      </Router>
    );
  }
}

export default App;
