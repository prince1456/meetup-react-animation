import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import Rotate from 'react-reveal/Rotate';
import "./App.css";

class Reveal extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <div style={styles.animatedDiv}>
          <Zoom>
            <div style={styles.draggableBox}>This Text will appear with zoom effect</div>
          </Zoom>
        </div>
        <div style={styles.animatedDiv}>
          <Flip>
            <div style={styles.draggableBox}>Flip</div>
          </Flip>
        </div>
        <div style={styles.animatedDiv}>
          <Rotate>
            <div style={styles.draggableBox}>Rotate</div>
          </Rotate>
        </div>
      </Container>
    );
  }
}

export default Reveal;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 10
  },
  animatedDiv: {
    width: "100%",
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#571945",
    marginTop: 20,
    // marginBottom:20,
    flex: 1
  },
  draggableBox: {
    width: 100,
    height: 100,
    backgroundColor: "#FF5733"
  }
};
