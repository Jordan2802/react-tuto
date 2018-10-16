// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import EditProjectComponent from './components/EditProjectComponent';
import IndexComponent from './components/IndexComponent';
import ProjectComponent from './components/ProjectComponent';





class App extends Component {
  render() { 
   
    return (
      <Router>
          <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a href="/"className="navbar-brand">React Express App</a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create'} className="nav-link">Create</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/index'} className="nav-link">Authors</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/project'} className="nav-link">Projects</Link>
                  </li>
                  
                  
                </ul>
              </div>
            </nav>
            <Switch>
                <Route exact path='/create' component={CreateComponent} />
                <Route path='/edit/:id' component={EditComponent} />
                <Route path='/editProject/:id' component={EditProjectComponent} />
                <Route path='/index' component={IndexComponent} />
                <Route path='/project' component={ProjectComponent} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
