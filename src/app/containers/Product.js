import React, { Component } from "react";
import { Link } from "react-router-dom";
import posed from "react-pose";
import { Card, Icon, Grid } from "semantic-ui-react";
import myImage from "../../assets/elliot.jpg";

const Container = posed.div({
  enter: { staggerChildren: 100 }
});
const AnimtatedUl = posed.div({
  visible: {
    // cordinate of each element after appear in the page
    opacity: 1,
    x: 0,
    y: "0%",
    transition: {
      x: {
      type: 'spring', 
      // make animation slower
      duration: 400,
      // number of time to flip animation
      // flip: 1,
      // number of time to reverse animation
      // yoyo: 1,
    },
      opacity: { ease: "easeOut", duration: 300 },
      default: { ease: "linear", duration: 500 }
    },
    // scale: 1,
    // add direction to animate from first last element to first elmenet
    // staggerDirection: "-1",
    // delay to show first child
    delayChildren: 1000,
    // adding delat time for stage each child
    staggerChildren: 300
  },
  hidden: {
    opacity: 0,
    // cordinate of each element after appear in the page
    y: "-100%",
    x: "-200%",
    // scale: 0,
    // delat to start animation
    delay: 1000
  }
});

const AnimatedCard = posed.div({
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      x: {
        type: 'spring',
        // speed of drop
        stiffness: 100,
        // force of drop
        damping: 5,
        // the amount of moving element
        mass: 0.4
      },
      opacity: { ease: "easeOut", duration: 300 },
      default: { ease: "linear", duration: 500 }
    }
  },
  hidden: { x: -100, scale: 0, opacity: 0 }
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
        <AnimtatedUl
          style={styles.cardContainer}
          pose={isOpen ? "visible" : "hidden"}
        >
          {Array(4)
            .fill(2)
            .map((x, i) => (
              <AnimatedCard style={styles.card} key={i}>
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
      </Container>
    );
  }
}

export default Product;
const styles = {
  cardContainer: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "red"
  },
  card: {
    margin: 10
  }
};
