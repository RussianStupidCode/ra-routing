import moment from "moment";

let posts = [];
let nextId = 0;

const getPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, Math.random() * 500);
  });
};

const createPost = (content) => {
  posts.push({
    id: String(nextId++),
    content,
    created: moment().startOf("hour").fromNow(),
  });
  return new Promise(() => {});
};

const updatePost = (id, content) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = posts.find((post) => id === post.id);
      if (!post) {
        return;
      }

      post.content = content;
      resolve();
    }, Math.random() * 200);
  });
};

const deletePost = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts = posts.filter((post) => post.id !== id);
      resolve();
    }, Math.random() * 200);
  });
};

const API = {
  createPost,
  deletePost,
  getPosts,
  updatePost,
};

export default API;
