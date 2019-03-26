import React from "react";
import PropTypes from "prop-types";
import PetDiary from "./PetDiary";
import Pet from "./Pet";
import Book from "./Book";
import { Placeholder } from "semantic-ui-react";

import { Link, BrowserRouter } from "react-router-dom";

class UserPets extends React.Component {
  constructor(props) {
    super();
    this.state = { pets: [], currentPet: 1 };
  }
  componentDidMount() {
    fetch(`/users/${this.props.id}/pets`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ pets: data });
        console.log("users pets for ,,, : ", this.props.id);
      });
  }

  handleUpVote = id => {
    this.setState({
      currentPet: id
    });
    console.log("clicked id :", id);
    console.log("clicked updated : ", this.state.currentPet);
  };
  render() {
    const pets = this.state.pets;
    const petComponents = pets.map(p => {
      return (
        <Pet
          key={"pet-" + p.id}
          current={this.handleUpVote}
          id={p.id}
          name={p.name}
          image={p.image.url}
        />
      );
    });
    if (this.state.pets === []) {
      return (
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
      );
    }
    console.log({ petComponents });
    return (
      <div>
        <ul>{petComponents}</ul>
        
        <Book id={this.state.currentPet} />
      </div>
    );
  }
}

export default UserPets;
