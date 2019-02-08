import React from "react"
import PropTypes from "prop-types"
class Pet extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="username">
          {this.props.id}
          <a href={this.props.id}>{this.props.name}</a>
        </div>
        <div>
          kkkk
          <img className="ui avatar image" src={this.props.imageUrl} />
        </div>
      </div>
    );
  }
}

export default Pet
