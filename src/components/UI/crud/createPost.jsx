import React, { useState } from "react";
import { usePosts } from "./postContext";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../helpers/path";

const CreatePost = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const { create } = usePosts();

  const submit = () => {
    const value = input.trim();
    if (value.length === 0) {
      return;
    }

    create(value);
    return navigate(`${ROUTER_PATH.crud}`);
  };

  const back = () => {
    return navigate(`${ROUTER_PATH.crud}`);
  };
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center p-5">
      <div className="w-50 d-flex">
        <button type="button" className="btn btn-warning" onClick={back}>
          Вернуться
        </button>
      </div>

      <div className="w-50 border m-2 p-2 border-4">
        <h1>Новый пост</h1>
        <div className="w-100 d-flex flex-row mb-2">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="button" className="btn btn-success" onClick={submit}>
            Создать
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
