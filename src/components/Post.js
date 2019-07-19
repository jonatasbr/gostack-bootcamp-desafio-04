import React from "react";
import foto1 from "../assets/profile.png";

function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={foto1} />
        <div className="details">
          <span> {author} </span>
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
          <img className="avatar" src={foto1} />
          <p>
            <span>{comment.author}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Post;
