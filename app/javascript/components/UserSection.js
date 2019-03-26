import React from "react";
import PropTypes from "prop-types";
import User from "./User";
import UserPets from "./UserPets";
class UserSection extends React.Component {
  constructor() {
    super();
    this.state = { petId: 1 };
    // this.handleUserInput = this.handleUserInput.bind(this);
    this.hanleNext = this.hanleNext.bind(this);
  }

  hanleNext(productId) {
    console.log("happend", productId);
    this.setState({
      petId: productId
    });
  }
  render() {
    const userid = 1;

    return (
      <div>
        <hr />
        <User id={userid} />
        <UserPets id={userid} next={this.hanleNext}  />
      </div>
    );
  }
}

export default UserSection;
