import React, { Component } from "react";
import logo from "../logo.svg";
import {Link } from 'react-router-dom'
import posed from 'react-pose';
import "./App.css";

const Container = posed.div({
    enter: { staggerChildren: 100 }
  });
  
  const P = posed.p({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
  });
class Product extends Component {
  render() {
    return (
        <Container>
            <header className="App-header-white">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <P>
                <Link to="/" >Home</Link>
            </P>
            <P style={{color: 'white'}}>
                Learn React
            </P>
            </header>
        </Container>
    );
  }
}

export default Product;
