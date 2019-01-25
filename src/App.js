import React, { Component } from 'react';
import TaskManager from './components/TaskManager';
import {Provider} from 'react-redux';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import './style.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' component={TaskManager} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
