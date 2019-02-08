import React from "react";
import PropTypes from "prop-types";
class Pet extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.id}
          <a href={this.props.id}>{this.props.name}</a>
        </div>
        <div>
          kkkk
          <img src={this.props.imageUrl} />
        </div>
      </div>
    );
  }
}

export default Pet;
