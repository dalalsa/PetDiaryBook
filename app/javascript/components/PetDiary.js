import React from "react";
import PropTypes from "prop-types";
import Pet from "./Pet";
import PetPosts from "./PetPosts";
class PetDiary extends React.Component {
  constructor() {
    super();
    this.state = { pet: null };
  }
  componentDidMount() {
    fetch("/pets/3", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ pet: data });
        console.log("f", this.state.pet);
      });
  }
  render() {
    const pet = this.state.pet;
    if (this.state.pet === null) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        mmmm
        <Pet id={pet.id} name={pet.name} imageUrl={pet.image.url} />
        <PetPosts />
      </div>
    );
  }
}

export default PetDiary;
