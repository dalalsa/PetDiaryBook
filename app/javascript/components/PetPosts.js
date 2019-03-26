import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import { Container, Divider } from 'semantic-ui-react'
class PetPosts extends React.Component {
  
  render() {
    const posts = this.props.posts;
    const postComponents = posts.map(post => (
      <Post
        key={"product-" + post.id}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    ));
    if (this.props.posts === []) {
      return <h2>Loading...</h2>;
    }

    return (
      <div>
        <Container>
          <Divider horizontal>Posts</Divider>

          {postComponents}
        </Container>
      </div>
    );
  }
}

export default PetPosts;
