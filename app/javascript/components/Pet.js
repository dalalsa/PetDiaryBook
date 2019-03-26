import React from "react";
import PropTypes from "prop-types";
import { Label,Image } from "semantic-ui-react";

class Pet extends React.Component {
  handleUpVote = () => {
    //console.log(this.props.id)
    this.props.current(this.props.id);
  };
  render() {
    return (
      // <div>
      //   <a onClick={this.handleUpVote}> {this.props.id}</a>
      //   lolo
      //   {this.props.name}

      // </div>

      <div>
        <Label as="a" image onClick={this.handleUpVote}>
          {/* <a onClick={this.handleUpVote}> {this.props.id}</a> */}
          <Image
            size="mini"
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          />
          {/* <img src={this.props.image} /> */}
          {this.props.name}
        </Label>
      </div>
    );
  }
}

export default Pet;
