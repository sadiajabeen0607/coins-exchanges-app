import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../redux/postsSlice";
import usersReducer from "../redux/usersSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

export default store;
