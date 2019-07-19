import React from "react";
import foto1 from "../assets/profile.png";

function PostItem() {
  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={foto1} />
        <div className="details">
          <span>Jonatas Braz de Sousa</span>
          <span>04 Jul 2019</span>
        </div>
      </div>
      <p className="post-content">
        Teremos competicao no evento da Rocketseat?
      </p>

      <div className="post-comments">
        <div className="divider" />
        <div className="comment">
          <img className="avatar" src={foto1} />
          <p>
            <span>Diego Fernandes</span>
            Sim, nao deixe sua inscricao pra depois. Clique no link para fazer a
            sua. Te esperamos la. Abraco.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
