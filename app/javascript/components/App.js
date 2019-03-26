import React from "react";
import PropTypes from "prop-types";
import PetDiary from "./PetDiary";
import User from "./User";
import Pet from "./Pet";
import PetPosts from "./PetPosts";
import UserPets from "./UserPets";
import { Container } from "semantic-ui-react";

class App extends React.Component {
  render() {
    console.log("here my pr: ", this.props.props.id);
    return (
      <div>
        <PetDiary name={this.props.props.id} />
      </div>
    );
  }
}

export default App;
