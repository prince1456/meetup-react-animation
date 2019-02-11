import React, { Component } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import Posed from "react-pose";
import "./App.css";

const Container = Posed.div({ enter: {staggerChildren: 500 }, exit: {staggerChildren: 100, staggerDirection: -1} });
const AnimatedDiv = Posed.div({ enter: {opacity: 1, y: 0}, exit: { opacity: 0, y: -100}})
class Home extends Component {
  render() {
    return (
      <Container className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <AnimatedDiv>
            <Link to="/products">Products</Link>
          </AnimatedDiv>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <AnimatedDiv>
            Learn React
          </AnimatedDiv>
          </a>
        </header>
      </Container>
    );
  }
}

export default Home;
