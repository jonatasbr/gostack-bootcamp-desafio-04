import React from "react";
import foto1 from "../assets/profile.png";

function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={author.avatar} />
        <div className="details">
          <span> {author.name} </span>
          <span> {date} </span>
        </div>
      </div>
      <p className="post-content">{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Post;
