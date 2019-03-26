import React from "react";
import { Button, Card, Image ,Icon} from "semantic-ui-react";

class PetProfile extends React.Component {
  // constructor(props) {
  //   super();
  //   this.state = { posts: [] };

  //   fetch(`/pets/${props.id}/posts`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ posts: data });
  //       console.log("qwqwqw but petprofile  ", this.state.posts);
  //     });
  //   }
  render() {
    if (this.props.pet == null) {
      return "loading";
    }
    const { id, name, color,dob } = this.props.pet;

    return (
      <div>
        {/* <Image
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          avatar
        />
        {id}
        <span>{name}</span>
        <span>{color}</span> */}

        <Card fluid color="orange">
          <Card.Content>
            <Image
              floated="left"
              size="mini"
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            />
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              {id}.{color} ,{dob}
            </Card.Meta>
            <Card.Description>
              bio: this is my <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Icon inverted color="blue" name="bath" />
              <Icon color="blue" name="meh outline" />
              <Icon inverted color="teal" name="birthday cake" />
              <Icon inverted color="pink" name="box" />
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default PetProfile;
