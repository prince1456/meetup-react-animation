import React, { Component } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import Posed from "react-pose";
import "./App.css";

const AnimatedContainer = Posed.div({ enter: {staggerChildren: 500 }, exit: {staggerChildren: 100, staggerDirection: -1} });
const AnimatedDiv = Posed.div({ enter: {opacity: 1, y: 0}, exit: { opacity: 0, y: -100}})
class Home extends Component {
  render() {
    return (
      <Container>
      <AnimatedContainer className="App">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <AnimatedDiv>
            <Link to="/products">Products</Link>
          </AnimatedDiv>
    
          <AnimatedDiv>
            Learn React
          </AnimatedDiv>
      </AnimatedContainer>
      </Container>
    );
  }
}

export default Home;
