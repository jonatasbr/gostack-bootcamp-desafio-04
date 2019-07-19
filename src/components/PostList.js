import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Jonatas Braz",
            avatar: "https://i.pravatar.cc/150?img=8"
          },
          date: "04 Jul 2019",
          content:
            "Pode explicar melhor porque o multer nao trabalha com async await do JS? Aguardarei sua resposta, obrigado",
          comments: [
            {
              id: 2,
              author: {
                name: "Diego Fernandes",
                avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
              },
              date: "04 Jul 2019",
              content:
                "Explicarei na proxima Live, te espero la. Grande abraco."
            },
            {
              id: 3,
              author: {
                name: "Carlos Levyr",
                avatar: "https://i.pravatar.cc/150?img=11"
              },
              date: "05 Jul 2019",
              content: "Duvida anotada, te espero la. Grande abraco."
            }
          ]
        },
        {
          id: 4,
          author: {
            name: "Felipe Magrelo",
            avatar: "https://i.pravatar.cc/150?img=8"
          },
          date: "05 Jul 2019",
          content: "Quando sera o proximo Bootcamp?",
          comments: [
            {
              id: 5,
              author: {
                name: "Diego Fernandes",
                avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
              },
              date: "04 Jul 2019",
              content:
                "Nao temos data definida, mas e certeza que teremos no proximo trimestre. Acompanhe a OmniStack, nesse periodo ficara por dentro dessas informacoes. Abraco."
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
