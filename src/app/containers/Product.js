import React, { Component } from "react";
import { Card, Image, Icon, Container } from "semantic-ui-react";
import mImage from "../../assets/elliot.jpg";
class Product extends Component {
  render() {
    return (
      <Container>
        <div style={styles.listContainer}>
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
        </div>
      </Container>
    );
  }
}

export default Product;

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
};
