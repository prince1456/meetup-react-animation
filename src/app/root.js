import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import { Menu } from "semantic-ui-react";
import Product from "./containers/Product";
import posed, { PoseGroup } from "react-pose";

const AnimatedRoute = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});
class Root extends Component {
  state = {
    activeMenu: "Home"
  };
  handleItemClick = (activeMenu, history, path) => {
    this.setState({ activeMenu });
    history.push(path);
  };
  render() {
    const { activeMenu } = this.state;
    return (
      <Router>
        <Route
          render={({ location, history }) => {
            return (
              <div>
                <Menu inverted>
                  <Menu.Item
                    name="Home"
                    active={activeMenu === "Home"}
                    onClick={() => this.handleItemClick("Home", history, "/")}
                  />
                  <Menu.Item
                    name="Product"
                    active={activeMenu === "Product"}
                    onClick={() =>
                      this.handleItemClick("Product", history, "/product")
                    }
                  />
                </Menu>
                <PoseGroup>
                  <AnimatedRoute key={location.key}>
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/product" component={Product} />
                    </Switch>
                  </AnimatedRoute>
                </PoseGroup>
              </div>
            );
          }}
        />
      </Router>
    );
  }
}

export default Root;
