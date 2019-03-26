import React from "react";
import { Image } from "semantic-ui-react";
class User extends React.Component {
  render() {
    return (
      <div>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          avatar
        />
        <span>
          {" "}
          <a href={`users/{ this.props.id }`}>{this.props.name}</a>
        </span>
      </div>
    );
  }
}

export default User;
