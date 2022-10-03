import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTER_PATH } from "./helpers/path";
import MainLayout from "./layouts/main";
import {
  HomePage,
  DriftPage,
  TimeAttackPage,
  ForzaPage,
  Layout as MenuLayout,
} from "./components/UI/menu";
import { PostList } from "./components/UI/crud/postApp";
import PostsProvider from "./components/UI/crud/postContext";
import CreatePost from "./components/UI/crud/createPost";
import PostCard from "./components/UI/crud/postCard";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route
          path={ROUTER_PATH.base}
          element={<Navigate replace to={ROUTER_PATH.menu} />}
        />
        <Route path={ROUTER_PATH.menu} element={<MenuLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="drift" element={<DriftPage />} />
          <Route path="timeattack" element={<TimeAttackPage />} />
          <Route path="forza" element={<ForzaPage />} />
        </Route>

        <Route path={ROUTER_PATH.crud}>
          <Route
            path=""
            element={
              <PostsProvider>
                <PostList />
              </PostsProvider>
            }
          />
          <Route
            path="new"
            element={
              <PostsProvider>
                <CreatePost />
              </PostsProvider>
            }
          />
          <Route
            path=":id"
            element={
              <PostsProvider>
                <PostCard />
              </PostsProvider>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
