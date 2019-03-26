import React from "react";
import PropTypes from "prop-types";
import { Card, Icon } from "semantic-ui-react";

class Post extends React.Component {
  render() {
    // const description = { this.props.body }.join(" ");

    return (
      <div>
        {/* ..............
        <div>
          {" "}
          id :{this.props.id}
          <br />
          <a href={this.props.id}>{this.props.title}</a>
        </div>
        <div>the body is :</div>
        .............. */}
        <Card fluid>
          <Card.Content header={this.props.title} />
          <Card.Content description={this.props.body} />
          <Card.Content extra>
            <Icon name="heart" />4
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Post;
