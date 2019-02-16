import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./Product";
import Reveal from "./reveal";
import { Container, Segment, Menu } from "semantic-ui-react";

import Home from "./Home";
import Posed, { PoseGroup } from "react-pose";

const Fade = Posed.div({
  enter: { opacity: 1, delay: 100, beforeChildren: true },
  exit: { opacity: 0 }
});

class App extends Component {
  state = { activeItem: "Home" };

  handleItemClick = (name, path, history) => {
    this.setState({ activeItem: name });
    history.push(path);
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Router>
        <Route
          render={({ location, history }) => (
            <div>
              <Segment inverted>
                <Menu inverted pointing secondary>
                  <Menu.Item
                    name="Home"
                    active={activeItem === "Home"}
                    onClick={() => this.handleItemClick("Home", "/", history)}
                  />
                  <Menu.Item
                    name="Products"
                    active={activeItem === "Products"}
                    onClick={() =>
                      this.handleItemClick("Products", "/products", history)
                    }
                  />
                   <Menu.Item
                    name="Reveal"
                    active={activeItem === "Reveal"}
                    onClick={() =>
                      this.handleItemClick("Reveal", "/reveal", history)
                    }
                  />
                </Menu>
              </Segment>
              <Container>
                <PoseGroup>
                  <Fade key={Math.random()}>
                    <Switch>
                      {routes.map((route, index) => (
                        <Route
                          key={index}
                          path={route.path}
                          component={route.component}
                          exact={route.exact}
                        />
                      ))}
                     
                      <Route exact path="/reveal" component={Reveal} key="3" />
                    </Switch>
                  </Fade>
                </PoseGroup>
              </Container>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;

const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/products", component: Product, exact: false },
  { path: "/reveal", component: Reveal, exact: false }
  
];
