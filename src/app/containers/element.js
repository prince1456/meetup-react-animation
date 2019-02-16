import React, {Component } from 'react'
import posed from 'react-pose'
import Fade from 'react-reveal/Fade'

const Container = posed.div({
    enter: { staggerChildren: 100 }
  });
const AnimatedDiv = posed.div({
    // daragble: true,
    enter: { opacity: 1 }
})
const DragableBox3 = posed.div({
    draggable: 'x',
    dragBounds: { left: -400, right: 400 },
    init: {
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
const DragableBox = posed.div({
    draggable: true
})
const DragableBox2 = posed.div({
    draggable: 'x',
    dragBounds: { left: -400, right: 400 },
})
const HoverableBox =  posed.div({
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
const Presable = posed.div({
    pressable: true,
    init: { scale: 1, backgroundColor: 'red'},
    press: { scale: 2}

})
export default class Element extends Component {
    render(){
        return (
            <Container>
                <AnimatedDiv style={styles.animatedDiv}>
                    <DragableBox style={styles.box}/>
                </AnimatedDiv>
                <AnimatedDiv style={styles.animatedDiv}>
                    <DragableBox3 style={styles.box}/>
                </AnimatedDiv>
                <AnimatedDiv style={styles.animatedDiv}>
                    <DragableBox2 style={styles.box}/>
                </AnimatedDiv>
                <AnimatedDiv style={styles.animatedDiv}>
                    <HoverableBox style={styles.box}/>
                </AnimatedDiv>
                <AnimatedDiv style={styles.animatedDiv}>
                    <Presable style={styles.box}/>
                </AnimatedDiv>
            </Container>
        )
    }
}

const styles = {
    animatedDiv: {
        width: '100%',
        height: 120,
        backgroundColor: '#571844',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow'
    }
}