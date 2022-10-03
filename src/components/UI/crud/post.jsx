import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTER_PATH } from "../../../helpers/path";

const Post = ({ id, name, created, content }) => {
  return (
    <div className="d-flex flex-column p-1 border border-1 mb-2">
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row my-2">
          <span className="badge bg-primary mx-2">{name}</span>
          <span>{created}</span>
        </div>
        <NavLink
          className={"btn btn-secondary"}
          to={`${ROUTER_PATH.crud}/${id}`}
        >
          Просмотреть
        </NavLink>
      </div>

      <h2 className="p-2">{content}</h2>
    </div>
  );
};

export default Post;
