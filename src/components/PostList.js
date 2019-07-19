import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          author: "Jonatas Braz",
          date: "04 Jul 2019",
          content:
            "Pode explicar melhor porque o multer nao trabalha com async await do JS? Aguardarei sua resposta, obrigado",
          comments: [
            {
              id: 1,
              author: "Diego Fernandes",
              date: "04 Jul 2019",
              content:
                "Explicarei na proxima Live, te espero la. Grande abraco."
            },
            {
              id: 2,
              author: "Carlos Levyr",
              date: "05 Jul 2019",
              content: "Duvida anotada, te espero la. Grande abraco."
            }
          ]
        }
      ]
    };
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
