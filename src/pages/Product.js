import React, { Component } from "react";
import { Link } from "react-router-dom";
import posed from "react-pose";
import { Card, Icon, Grid } from "semantic-ui-react";
import myImage from "../assets/elliot.jpg";
import "./App.css";

const Container = posed.div({
  enter: { staggerChildren: 100 }
});
const AnimtatedUl = posed.div({
  open: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 50
  },
  exit: { x: "-100%", delay: 300 }
});
const AnimatedCard = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});
const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});
const extra = (
  <div>
    <Icon name="user" />
    16 Friends
  </div>
);
class Product extends Component {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }
  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const { isOpen } = this.state;
    return (
      <Container>
        <AnimtatedUl pose={isOpen ? "open" : "closed"}>
          {Array(4)
            .fill(2)
            .map((x, i) => (
              <AnimatedCard key={i}>
                <Card
                  image={myImage}
                  header="Elliot Baker"
                  meta="Friend"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
                  extra={extra}
                />
              </AnimatedCard>
            ))}
        </AnimtatedUl>

        <P>
          <Link to="/">Home</Link>
        </P>
        <P style={{ color: "white" }}>Learn React</P>
      </Container>
    );
  }
}

export default Product;
