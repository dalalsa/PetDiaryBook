import React from "react";
import PropTypes from "prop-types";
import Pet from "./Pet";
import User from "./User";
import UserPets from "./UserPets";
import PetPosts from "./PetPosts";
class PetDiary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pet: null, user: null };
    const id = `/users/${props.name}`;
    console.log("user is : ...", id);
    fetch(id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data });

        console.log("my fetched user data : ...", this.state.user);
      });
  }
  // componentDidMount(){
  //   const id = `/pets/${this.state.id}`;
  //   console.log("bbbb...", this.state.id);
  //   fetch(id, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ pet: data });

  //       console.log("fpet...", this.state.pet);
  //     });
  // }

  render() {
    const u = this.state.user;
    if (this.state.user === null) {
      return <h2>Loading user...</h2>;
    }

    return (
      /* <h2>pet Diary for user :{this.state.user.id}</h2> */
      /* <Pet
          id={this.state.pet.id}
          key={this.state.pet.id}
          name={this.state.pet.name}
          imageUrl={this.state.pet.imageUrl}
        />
        .........
        <PetPosts id={this.state.pet.id} /> */
      <div>
        <User id={this.state.user.id} name={this.state.user.name} />
        <UserPets id={this.state.user.id} />
      </div>
    );
  }
}

export default PetDiary;
