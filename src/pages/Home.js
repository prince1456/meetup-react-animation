import React, { Component } from "react";
import Posed from "react-pose";
import "./App.css";

const AnimatedContainer = Posed.div({ 
  enter: { staggerChildren: 500 },
  exit: { staggerChildren: 100, staggerDirection: -1} });
const AnimatedDiv = Posed.div({ enter: {opacity: 1, y: 0}, exit: { opacity: 0, y: -100}})
const DragableBox1 = Posed.div({
  draggable: 'x',
  dragBounds: { left: -400, right: 400 }
})
const DragableBox2 = Posed.div({
  draggable: 'x',
  dragBounds: { left: -400, right: 400 },
  init: {
    transform: 'rotate(0deg)',
    boxShadow: `6px 4px 21px -4px rgba(0,0,0,0.3)`,
    scale: 1,
    rotateY: 0,
   },
  drag: {
    boxShadow: `6px 4px 21px -4px rgba(0,0,0,0.48)`,
    scale: 1.4,
    rotateY: 180,
    rotateX: 0
  },
  dragEnd: {
    scale: 0.8,
    rotateY: 0,
    // rotateX: 0
    }
})
const HoverableBox1 = Posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  }

})
const PressableBox2 = Posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
})

class Home extends Component {
  render() {
    return (
      <AnimatedContainer style={styles.container} className="App">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <AnimatedDiv style={styles.animatedDiv}>
            <DragableBox1 style={styles.draggableBox}/>
          </AnimatedDiv>
    
          <AnimatedDiv style={styles.animatedDiv}>
            <DragableBox2 style={styles.draggableBox}/>
          </AnimatedDiv>

           <AnimatedDiv style={styles.animatedDiv}>
            <HoverableBox1 style={styles.draggableBox}/>
          </AnimatedDiv>

          <AnimatedDiv style={styles.animatedDiv}>
            <PressableBox2 style={styles.draggableBox}/>
          </AnimatedDiv>

      </AnimatedContainer>
    );
  }
}

export default Home;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10
  },
  animatedDiv: {
    width: '100%',
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#571945',
    marginTop: 20,
    // marginBottom:20,
    flex: 1,
  },
  draggableBox: {
    width: 100,
    height: 100,
    backgroundColor: '#FF5733'
  }
}