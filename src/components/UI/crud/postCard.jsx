import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "./postContext";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../helpers/path";
import { useSearchParams } from "react-router-dom";

const PostCard = () => {
  const { getPost, update, remove } = usePosts();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const post = getPost(id);
  const [input, setInput] = useState(post.content);

  const removePost = () => {
    remove(id);
    navigate(ROUTER_PATH.crud);
  };

  const updatePost = () => {
    const value = input.trim();

    if (value === "") {
      return;
    }

    update(id, value);
    navigate(`${ROUTER_PATH.crud}/${id}`);
  };

  if (!searchParams.has("edit")) {
    return (
      <div className="w-100 d-flex flex-column justify-content-center align-items-center p-5">
        <div className="w-50">
          <div className="d-flex flex-column p-1 border border-1 mb-2">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row my-2">
                <span className="badge bg-primary mx-2">Anon</span>
                <span>{post.created}</span>
              </div>
            </div>

            <h2 className="p-2">{post.content}</h2>

            <div className="d-flex flex-row justify-content-between">
              <NavLink
                className={"btn btn-warning"}
                to={`${ROUTER_PATH.crud}/${id}?edit`}
              >
                Редактировать
              </NavLink>
              <NavLink className={"btn btn-primary"} to={ROUTER_PATH.crud}>
                Главная
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center p-5">
      <div className="w-50">
        <div className="d-flex flex-column p-1 border border-1 mb-2">
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-row my-2">
              <span className="badge bg-primary mx-2">Anon</span>
              <span>{post.created}</span>
            </div>
          </div>

          <input
            type="text"
            className="form-control mb-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="d-flex flex-row justify-content-between">
            <button className={"btn btn-warning"} onClick={updatePost}>
              Обновить
            </button>
            <button className={"btn btn-danger"} onClick={removePost}>
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
