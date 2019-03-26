import React from "react";
import PropTypes from "prop-types";
import PetProfile from "./PetProfile";
import PetPosts from "./PetPosts";
import { Container } from "semantic-ui-react";

class Book extends React.Component {
  constructor(props) {
    super();
    this.state = { posts: [], pet: null };
    console.log("ccccxx", props.id);
  }
  componentDidMount() {
    fetch(`/pets/${this.props.id}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
        console.log("cccc but petprofile  ", this.state.posts);
      });
    fetch(`/pets/${this.props.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ pet: data });
        console.log(" petprofile ok then : ", this.state.pet);
      });
  }

  componentDidUpdate(p) {
    if (p.id !== this.props.id) {
      fetch(`/pets/${this.props.id}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({ posts: data });
          console.log("cccc but petprofile  ", this.state.posts);
        });

      //
      fetch(`/pets/${this.props.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({ pet: data });
          console.log(" petprofile ok then : ", this.state.pet);
        });
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.id !== prevState.id) {
  //     return { petId: nextProps.id };
  //   }
  //   else return null;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.id !== this.props.id) {
  //     //Perform some operation here
  //     this.setState({ petId: id });
  //     this.classMethod();
  //   }
  // }

  render() {
    console.log("feeeed", this.state.posts);

    return (
      <Container>
        {/* //fetch pots  */}
        {/* {this.props.id} */}
        <PetProfile pet={this.state.pet} />
        <PetPosts posts={this.state.posts} />
        </Container>
    );
  }
}

export default Book;
