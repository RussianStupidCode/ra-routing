import React, { useState, useContext, useEffect } from "react";
import API from "../../../api";

const PostContext = React.createContext();

export const usePosts = () => {
  return useContext(PostContext);
};

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = () => {
    setIsLoading(true);
    API.getPosts()
      .then((res) => setPosts(res))
      .finally(setIsLoading(false));
  };

  useEffect(getPosts, []);

  const update = (id, content) => {
    return API.updatePost(id, content);
  };

  const remove = (id) => {
    return API.deletePost(id).then(() => getPosts());
  };

  const create = (content) => {
    return API.createPost(content).then(() => getPosts());
  };

  const getPost = (id) => {
    return posts.find((post) => post.id === id);
  };

  const contextValue = {
    posts,
    isLoading,
    getPost,
    update,
    remove,
    create,
  };

  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
};

export default PostsProvider;
