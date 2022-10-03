import React from "react";
import Post from "./post";
import { usePosts } from "./postContext";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../helpers/path";

const PostList = () => {
  const { posts, isLoading } = usePosts();
  const navigate = useNavigate();

  const create = () => {
    return navigate(`${ROUTER_PATH.crud}/new`);
  };

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center p-5">
      <div className="w-50">
        <div className="w-100 d-flex flex-row mb-2 justify-content-end">
          <button className="btn btn-success" type="button" onClick={create}>
            Создать
          </button>
        </div>

        {isLoading
          ? "Loading....."
          : posts.map(({ id, content, created }) => (
              <Post
                key={id}
                name={"Anon"}
                id={id}
                content={content}
                created={created}
              />
            ))}
      </div>
    </div>
  );
};

export default PostList;
