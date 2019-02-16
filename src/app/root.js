import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/Home';
import Product from './containers/Product';

class Root extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({location, history}) => {
            return (
              <div>
                <Route path='/' exact component={Home}/>
                <Route path='/product' component={Product}/>
              </div>
            );
          }}
        />
      </Router>
    );
  }
}

export default Root;