import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  render() {
    return (
      <div className="postlist">
        <PostItem />
      </div>
    );
  }
}

export default PostList;
