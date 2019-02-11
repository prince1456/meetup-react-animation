import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./Product";
import Home from "./Home";
import Posed, { PoseGroup } from "react-pose";

const Fade = Posed.div({
  enter: { opacity: 1, delay: 100,  beforeChildren: true},
  exit: { opacity: 0 }
});

class App extends Component {
  render() {
    return (
      <Router>
        <Route
        render={({ location }) =>  console.log(location.key) || (
        <PoseGroup>
          <Fade key={location.key}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              ))}
              <Route exact path="/" component={Home} key="1" />
              <Route exact path="/products" component={Product} key="2" />
            </Switch>
          </Fade>
        </PoseGroup>
        )}/>
      </Router>
    );
  }
}

export default App;

const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/products", component: Product, exact: false }
];
