import React, { Component } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import posed from "react-pose";
import mImage from "../../assets/elliot.jpg";

const Container = posed.div({
  enter: { staggerChildren: 100 }
});
const AmimatedDiv = posed.div({
  visible: { x: '0%',
  staggerChildren: 50, 
  delayChildren: 300 
},
  hidden: { x: '-100%' }
});


class Product extends Component {
  state = {
    isVisible: false,
  };
  componentDidMount(){
      setTimeout(() => {
        this.setState({isVisible: !this.state.isVisible})
      }, 200)
  }
  render() {
    const { isVisible } = this.state;
    return (
      <Container>
        <AmimatedDiv
          style={styles.listContainer}
          posed={isVisible ? "visible" : "hidden"}
        >
          {Array(4)
            .fill(1)
            .map((item, index) => {
              return (
                <Card>
                  <Image src={mImage} />
                  <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Matthew is a musician living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>
              );
            })}
        </AmimatedDiv>
      </Container>
    );
  }
}

export default Product;

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "red",
    width: '80%',
  }
};
